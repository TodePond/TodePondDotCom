{
	window.MotherTode = (source) => {
		const result = MotherTode.parse(source)
		if (!result.success) {
			throw new Error(`[MotherTode] MotherTode failed to parse :(\n\nThis is a placeholder error message until I fix proper error messages again.\n`)
			return result
		}
		const translation = result.output
		let term
		try {
			const func = new Function("Term = MotherTode.Term", translation)
			term = func(MotherTode.Term)
		}
		catch(e) {
			console.error(`[MotherTode] Badly formed JavaScript:\n\n` + translation + "\n\n")
			throw e
		}
		
		//if (window.LOLOL === true) console.log("")
		//window.LOLOL = true
		//console.log(source)
		//console.log(lint(translation))
		
		term.success = result.success
		term.output = result.output
		term.source = result.source
		term.tail = result.tail
		term.input = result.input
		term.args = result.args
		term.error = result.error
		term.log = (...args) => {
			result.log(...args)
			return term
		}
		term.smartLog = result.smartLog

		return term
	}
	
	// TODO: make an actual linter (this one is a fake)
	const lint = (input) => {
		const state = {
			position: 0,
			indent: "",
			output: "",
		}
		while (state.position < input.length) {
			if (checkString(input, state, `[`)) {
				state.indent += "	"
				state.output += `[\n${state.indent}`
				continue
			}
			if (checkString(input, state, `]`)) {
				state.indent = state.indent.slice(0, -1)
				state.output += `\n${state.indent}]`
				continue
			}
			if (checkString(input, state, `\n`)) {
				state.output += `\n${state.indent}`
				continue
			}
			state.output += input[state.position]
			state.position++
		}
		return state.output
	}
	
	MotherTode.lint = lint
	
	const checkString = (input, state, string) => {
		const {position} = state
		const end = position + string.length
		const snippet = input.slice(position, end)
		if (snippet === string) {
			state.position = end
			return true
		}
		return false
	}

	MotherTode.translate = (source) => {
		const result = MotherTode.parse(source)
		return result.output
	}

	MotherTode.parse = (source) => {
		const result = MotherTode.Term.term("MotherTode", MotherTode.scope)(source)
		return result
	}
}

{
	const scope = {}
	MotherTode.scope = scope
	MotherTode.install = () => {
		const Term = MotherTode.Term
	
		scope.MotherTode = Term.args(
			Term.emit(
				Term.list([
					Term.term("GroupInner", scope),
					Term.eof,
				]),
				([{output}]) => {
					const lines = []
					lines.push(`const scope = {isScope: true}`)
					lines.push(`const term = ${output}`)
					lines.push(`scope.term = term`)
					lines.push("return term")
					return lines.join("\n")
				},
			),
			() => ({exceptions: [], indentSize: 0, scopePath: ""}),
		)
		
		scope.Term = Term.or([
			Term.term("Except", scope),
			Term.term("Or", scope),
			Term.term("Maybe", scope),
			Term.term("Many", scope),
			Term.term("Any", scope),
			
			Term.term("HorizontalDefinition", scope),
			Term.term("HorizontalList", scope),
			
			Term.term("EOFReference", scope),
			Term.term("Reference", scope),
			Term.term("GapReference", scope),
			
			Term.term("Group", scope),
			Term.term("MaybeGroup", scope),
			Term.term("AnyGroup", scope),
			Term.term("OrGroup", scope),
			Term.term("String", scope),
			Term.term("RegExp", scope),
			//Term.term("NoExceptions", scope),
		])
		
		scope.GapReference = Term.emit(
			Term.string("_"),
			"Term.logString(Term.many(Term.regExp(/ |	/)), () => '_')",
		)
		
		scope.EOFReference = Term.emit(
			Term.string("EOF"),
			"Term.eof",
		)
		
		scope.Reference = Term.emit(
			Term.list([
				Term.term("Name", scope),
				Term.maybe(
					Term.many(
						Term.list([
							Term.string("."),
							Term.term("Name", scope),
						])
					)
				),
			]),
			(name) => {
				const str = `Term.term('${name.args.scopePath}${name}', scope)`
				//console.log(str)
				return str
			}
		)
		
		const makeDefinition = (options = {}, indentSize) => {
			const {
				match = `Term.string('')`,
				emit,
				check,
				error,
				chain,
				args,
				subTerm,
				exp,
			} = options
			
			let definition = match
			if (check !== undefined) {
				definition = `Term.check(${definition}, ${check})`
			}
			if (error !== undefined) {
				definition = `Term.error(${definition}, ${error})`
			}
			if (args !== undefined) {
				definition = `Term.args(${definition}, ${args})`
			}
			if (chain !== undefined) {
				definition = `Term.chain(${chain}, ${definition})`
			}
			if (emit !== undefined) {
				definition = `Term.emit(${definition}, ${emit})`
			}
			if (subTerm !== undefined) {
				const subTermsCode = subTerm.map(([name, value]) => `['${name}', ${value}]`).join(`, `)
				definition = `Term.subTerms(${definition}, [${subTermsCode}])`
			}
			if (exp !== undefined) {
				definition = `Term.export(${definition}, window, "${exp[0]}")`
			}
			return definition
		}
		
		const PROPERTY_NAMES = [
			"match",
			"emit",
			"check",
			"error",
			"chain",
			"args",
			"subTerm",
			"exp",
		]
		
		scope.HorizontalDefinition = Term.emit(
			Term.list([
				Term.term("DefinitionProperty", scope),
				Term.maybe(
					Term.many(
						Term.list([
							Term.term("Gap", scope),
							Term.term("DefinitionProperty", scope),
						])
					)
				),
			]),
			(result) => {
				const entries = new Function(`return [${result}]`)()
				const options = {}
				for (const property of entries) {
					for (const propertyName of PROPERTY_NAMES) {
						const propertyValue = property[propertyName]
						if (propertyValue !== undefined) {
							if (propertyName == "subTerm") {
								if (options.subTerm === undefined) options.subTerm = []
								options.subTerm.push(propertyValue)
								continue
							}
							if (options[propertyName] !== undefined) {
								result.success = false
								return
							}
							options[propertyName] = propertyValue
						}
					}
				}
				
				const definition = makeDefinition(options, result.args.indentSize)
				return definition
				
			}
		)
		
		scope.DefinitionEntry = Term.or([
			Term.term("Export", scope),
			Term.term("DefinitionProperty", scope),
			Term.term("Declaration", scope),
		])
		
		scope.Name = Term.many(Term.regExp(/[a-zA-Z_$]/))
		
		scope.Declaration = Term.emit(
			Term.args(
				Term.list([
					Term.term("Name", scope),
					Term.maybe(Term.term("Gap", scope)),
					Term.term("Term", scope),
				]),
				(args, input) => {
					const nameResult = scope.Name(input)
					if (!nameResult.success) return args
					const name = nameResult.output
					args.scopePath += name + "."
					//args.d
					return args
				}
			),
			([name, gap, term]) => {
				return `{subTerm: [\`${name}\`, \`${sanitise(term.output)}\`]},`
			}
		)
		
		scope.Export = Term.emit(
			Term.list([
				Term.string("export"),
				Term.maybe(Term.term("Gap", scope)),
				Term.string("as"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("Reference", scope),
			]),
			([exp, gap1, as, gap2, term]) => {
				const name = term.output.split("'")[1]
				return `{exp: ["${name}", "${term}"]},`
			}
		)
		
		scope.VerticalDefinition = Term.emit(
			Term.list([
				Term.term("DefinitionEntry", scope),
				Term.maybe(
					Term.many(
						Term.list([
							Term.term("NewLine", scope),
							Term.term("DefinitionEntry", scope),
						])
					)
				),
			]),
			(result) => {
				const entries = new Function(`return [${result}]`)()
				const options = {}
				for (const property of entries) {
					for (const propertyName of PROPERTY_NAMES) {
						const propertyValue = property[propertyName]
						if (propertyValue !== undefined) {
							if (propertyName == "subTerm") {
								if (options.subTerm === undefined) options.subTerm = []
								options.subTerm.push(propertyValue)
								continue
							}
							if (options[propertyName] !== undefined) {
								result.success = false
								return
							}
							options[propertyName] = propertyValue
						}
					}
				}
				
				const definition = makeDefinition(options, result.args.indentSize)
				return definition
			},
		)
		
		scope.DefinitionProperty = Term.or([
			Term.term("MatchProperty", scope),
			Term.term("EmitProperty", scope),
			Term.term("CheckProperty", scope),
			Term.term("ErrorProperty", scope),
			Term.term("ArgsProperty", scope),
			Term.term("ChainProperty", scope),
		])
		
		const sanitise = (string) => string.split("`").join("\\`")
		
		scope.MatchProperty = Term.emit(
			Term.list([
				Term.string("::"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("Term", scope),
			]),
			([operator, gap, term = {}]) => `{match: \`${sanitise(term.output)}\`}, `,
		)
		
		scope.ChainProperty = Term.emit(
			Term.list([
				Term.string("++"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("Term", scope),
			]),
			([operator, gap, term = {}]) => `{chain: \`${sanitise(term.output)}\`}, `,
		)
		
		scope.EmitProperty = Term.emit(
			Term.list([
				Term.string(">>"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("JavaScript", scope),
			]),
			([operator, gap, term = {}]) => `{emit: \`${sanitise(term.output)}\`},`,
		)
		
		scope.CheckProperty = Term.emit(
			Term.list([
				Term.string("??"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("JavaScript", scope),
			]),
			([operator, gap, term = {}]) => `{check: \`${sanitise(term.output)}\`},`,
		)
		
		scope.ErrorProperty = Term.emit(
			Term.list([
				Term.string("!!"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("JavaScript", scope),
			]),
			([operator, gap, term = {}]) => `{error: \`${sanitise(term.output)}\`},`,
		)
		
		scope.ArgsProperty = Term.emit(
			Term.list([
				Term.string("@@"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("JavaScript", scope),
			]),
			([operator, gap, term = {}]) => `{args: \`${sanitise(term.output)}\`},`,
		)
		
		scope.JavaScript = Term.emit(
			Term.or([
				Term.term("JavaScriptMultiple", scope),
				Term.term("JavaScriptSingle", scope),
			]),
			({output}) => {
				const state = {
					escape: false,
					output: "",
				}
				for (let i = 0; i < output.length; i++) {
					const c = output[i]
					if (state.escape) {
						state.output += c
						state.escape = false
					}
					else if (c === "\\" && output[i+1] === "n") state.output += "\\\\\\\\"
					else if (c === "\\") state.escape = true
					//else if (c === "'") state.output += "`"
					//else if (c === "#") state.output += "\\$"
					else state.output += c
				}
				return state.output
			}
		)
		
		scope.JavaScriptSingle = Term.term("Line", scope)
		scope.JavaScriptMultiple = Term.list([
			Term.term("Line", scope),
			Term.args(
				Term.term("JavaScriptMultipleInner", scope),
				(args) => {
					args.indentSize++
					return args
				}
			),
			Term.term("Line", scope),
		])
		
		scope.JavaScriptMultipleInner = Term.list([
			Term.term("NewLine", scope),
			Term.term("JavaScriptLines", scope),
			Term.term("Unindent", scope),
		])
		
		scope.JavaScriptLines = Term.list([
			Term.term("Line", scope),
			Term.maybe(
				Term.many(
					Term.list([
						Term.term("NewLine", scope),
						Term.term("Line", scope),
					])
				)
			)
		])
		
		scope.Line = Term.list([
			Term.many(Term.regExp(/[^\n]/)),
		])
		
		scope.Many = Term.emit(
			Term.list([
				Term.except(Term.term("Term", scope), [Term.term("Many", scope)]),
				Term.maybe(Term.term("Gap", scope)),
				Term.check(
					Term.string("+"),
					(result) => result.tail[0] !== "+",
				),
			]),
			([term]) => `Term.many(${term})`,
		)
		
		scope.Except = Term.emit(
			Term.list([
				Term.except(Term.term("Term", scope), [Term.term("Except", scope)]),
				Term.maybe(Term.term("Gap", scope)),
				Term.string("~"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("Term", scope),
			]),
			([left, gap1, operator, gap2, right]) => `Term.except(${left}, [${right}])`,
		)
		
		scope.NoExceptions = Term.emit(
			Term.list([
				Term.string("any"),
				Term.maybe(Term.term("Gap", scope)),
				Term.term("Term", scope),
			]),
			([keyword, gap, term]) => `Term.any(${term})`,
		)
		
		scope.Or = Term.emit(
			Term.list([
				Term.except(Term.term("Term", scope), [Term.term("Or", scope)]),
				Term.term("OrTails", scope),
			]),
			([head, tail = []]) => `Term.or([${head},\n${tail}])`,
		)
		
		scope.OrTail = Term.emit(
			Term.list([
				Term.maybe(Term.term("Gap", scope)),
				Term.string("|"),
				Term.maybe(Term.term("Gap", scope)),
				Term.except(Term.term("Term", scope), [Term.term("Or", scope)]),
			]),
			([gap1, operator, gap2, term]) => `${term}`,
		)
		
		scope.OrTails = Term.emit(
			Term.many(Term.term("OrTail", scope)),
			(tails) => tails.filter(t => t.success).map(t => t.output).join(`,\n`),
		)
		
		scope.Maybe = Term.emit(
			Term.list([
				Term.except(Term.term("Term", scope), [Term.term("Maybe", scope)]),
				Term.maybe(Term.term("Gap", scope)),
				Term.check(
					Term.string("?"),
					(result) => result.tail[0] !== "?" //
				),
			]),
			([term]) => `Term.maybe(${term})`,
		)
		
		scope.Any = Term.emit(
			Term.list([
				Term.except(Term.term("Term", scope), [Term.term("Any", scope)]),
				Term.maybe(Term.term("Gap", scope)),
				Term.string("*"),
			]),
			([term]) => `Term.maybe(Term.many(${term}))`,
		)
		
		scope.MaybeGroup = Term.emit(
			Term.list([
				Term.string("["),
				Term.term("GroupInner", scope),
				Term.string("]"),
			]),
			([left, inner]) => `Term.maybe(${inner})`,
		)
		
		scope.AnyGroup = Term.emit(
			Term.list([
				Term.string("{"),
				Term.term("GroupInner", scope),
				Term.string("}"),
			]),
			([left, inner]) => `Term.maybe(Term.many(${inner}))`,
		)
		
		scope.OrGroup = Term.emit(
			Term.list([
				Term.string("<"),
				Term.term("ArrayInner", scope),
				Term.string(">"),
			]),
			([left, inner]) => `Term.or([${inner}])`,
		)
		
		scope.Group = Term.emit(
			Term.list([
				Term.string("("),
				Term.term("GroupInner", scope),
				Term.string(")"),
			]),
			([left, inner]) => `${inner}`,
		)
		
		scope.ArrayInner = Term.or([
			Term.term("HorizontalArrayInner", scope),
			Term.emit(
				Term.args(
					Term.term("VerticalArrayInner", scope),
					(args) => {
						args.indentSize++
						return args
					}
				),
				(array) => `${array}`
			)
		])
		
		scope.GroupInner = Term.or([
			Term.term("HorizontalGroupInner", scope),
			Term.args(
				Term.term("VerticalGroupInner", scope),
				(args) => {
					args.indentSize++
					return args
				}
			)
		])
		
		scope.HorizontalArrayInner = Term.emit(
			Term.list([
				Term.maybe(Term.term("Gap", scope)),
				Term.or([
					Term.except(Term.term("HorizontalArray", scope), [Term.term("HorizontalList", scope)]),
					Term.except(Term.term("Term", scope), []),
				]),
				Term.maybe(Term.term("Gap", scope)),
			]),
			([left, inner]) => `${inner}`,
		)
		
		scope.VerticalArrayInner = Term.emit(
			Term.list([
				Term.term("NewLine", scope),
				Term.or([
					Term.term("VerticalArray", scope),
					Term.term("Term", scope),
				]),
				Term.term("Unindent", scope),
			]),
			([left, inner]) => `${inner}`,
		)
		
		scope.HorizontalGroupInner = Term.emit(
			Term.list([
				Term.maybe(Term.term("Gap", scope)),
				Term.or([
					Term.term("HorizontalDefinition", scope),
					Term.term("Term", scope),
				]),
				Term.maybe(Term.term("Gap", scope)),
			]),
			([left, inner]) => `${inner}`,
		)
		
		scope.VerticalGroupInner = Term.emit(
			Term.list([
				Term.term("NewLine", scope),
				Term.or([
					Term.term("VerticalDefinition", scope),
					Term.term("VerticalList", scope),
					Term.term("Term", scope),
				]),
				Term.term("Unindent", scope),
			]),
			([left, inner]) => `${inner}`,
		)
		
		const getMargin = (size) => Array(size).fill(`	`).join("")
		scope.Margin = Term.check(
			Term.maybe(Term.term("Gap", scope)),
			(gap) => {
				const indentSize = gap.args.indentSize === undefined? 0 : gap.args.indentSize
				return `${gap}`.length === indentSize
			},
		)
		
		scope.NewLine = Term.list([
			Term.many(
				Term.list([
					Term.maybe(Term.term("Gap", scope)),
					Term.string("\n"),
				])
			),
			Term.term("Margin", scope),
		])
		
		scope.Unindent = Term.list([
			Term.many(
				Term.list([
					Term.maybe(Term.term("Gap", scope)),
					Term.string("\n"),
				])
			),
			Term.args(
				Term.term("Margin", scope),
				(args) => {
					args.indentSize--
					return args
				}
			)
		])
		
		scope.String = Term.emit(
			Term.list([
				Term.string(`"`),
				Term.maybe(
					Term.many(
						Term.regExp(/[^"]/) //"
					)
				),
				Term.string(`"`),
			]),
			([left, inner]) => `Term.string(\`${inner}\`)`
		)
		
		scope.RegExp = Term.emit(
			Term.list([
				Term.string(`/`),
				Term.maybe(
					Term.many(
						Term.regExp(/[^/]/)
					)
				),
				Term.string(`/`),
			]),
			([left, inner]) => {
				const source = inner.output.split("").map(c => {
					/*if (c === "\\") return "\\\\\\"*/
					return c
				}).join("")
				return `Term.regExp(\`${inner}\`)`
			},
		)
		
		scope.VerticalList = Term.emit(
			Term.term("VerticalArray", scope),
			(array) => `Term.list([${array}])`,
		)
		
		scope.VerticalArray = Term.emit(
			Term.list([
				Term.term("Term", scope),
				Term.many(
					Term.list([
						Term.maybe(Term.term("NewLine", scope)),
						Term.term("Term", scope),
					])
				),
			]),
			([head, tail = []]) => {
				const tails = tail.filter(t => t.success).map(t => t[1])
				return `${head},\n${tails.join(",\n")}`
			},
		)
		
		scope.HorizontalList = Term.emit(
			Term.except(
				Term.term("HorizontalArray", scope),
				[Term.term("HorizontalList", scope), Term.term("HorizontalDefinition", scope)]
			),
			(array) => `Term.list([${array}])`,
		)
		
		scope.HorizontalArray = Term.emit(
			Term.list([
				Term.term("Term", scope),
				Term.many(
					Term.list([
						Term.maybe(Term.term("Gap", scope)),
						Term.term("Term", scope),
					])
				),
			]),
			([head, tail = []]) => {
				const tails = tail.filter(t => t.success).map(t => t[1])
				return `${head},\n${tails.join(",\n")}`
			},
		)
		
		scope.Gap = Term.many(Term.regExp(/[ 	]/))
	}
	
}

//======//
// Term //
//======//
{
	
	Term = {}
	MotherTode.Term = Term
	
	const STYLE_SUCCESS = `font-weight: bold; color: rgb(0, 128, 255)`
	const STYLE_FAILURE = `font-weight: bold; color: rgb(255, 70, 70)`
	const STYLE_DEPTH = `font-weight: bold;`
	
	Term.result = ({type, success, source, output = source, tail, term, error = "", children = []} = {}) => {
		const self = (input = "", args = {exceptions: []}) => {			
			const result = [...children]
			result.success = success
			result.output = output
			result.source = source
			result.tail = tail === undefined? input : tail
			result.term = term
			result.error = error
			
			result.input = input
			result.args = cloneArgs(args)
			result.toString = function() { return this.output }
			return result
		}
		return self
	}
	
	Term.succeed = (properties = {}) => Term.result({...properties, success: true})
	Term.fail    = (properties = {}) => Term.result({...properties, success: false})
	
	Term.string = (string) => {
		const term = (input = "", args = {exceptions: []}) => {
			const snippet = input.slice(0, term.string.length)
			const success = snippet === term.string
			if (!success) return Term.fail({
				term,
			})(input, args)
			return Term.succeed({
				source: term.string,
				tail: input.slice(term.string.length),
				term,
				children: [],
			})(input, args)
		}
		term.resolve = () => term.string
		term.string = string
		term.type = Term.string
		return term
	}
	
	Term.regExp = (regExp) => {
		if (typeof regExp === "string") {
			regExp = RegExp(regExp)
		}
		const term = (input = "", args = {exceptions: []}) => {
			const finiteRegExp = new RegExp("^" + term.regExp.source + "$")
			let i = 0
			while (i <= input.length) {
				const snippet = input.slice(0, i)
				const success = finiteRegExp.test(snippet)
				if (success) return Term.succeed({
					source: snippet,
					tail: input.slice(snippet.length),
					term,
					children: [],
				})(input, args)
				i++
			}
			return Term.fail({
				term,
			})(input, args)
		}
		term.resolve = () => term.regExp.source
		term.regExp = regExp
		term.type = Term.regExp
		return term
	}
	
	const cloneArgs = (args = {exceptions: []}) => {
		const clone = {...args}
		if (args.exceptions !== undefined) clone.exceptions = [...args.exceptions]
		return clone
	}
	
	Term.list = (terms) => {
		const self = (input = "", args = {exceptions: []}) => {
			
			const state = {
				input,
				i: 0,
			}
			
			const results = []
			
			while (state.i < self.terms.length) {
				const clonedArgs = cloneArgs(args)
				const term = self.terms[state.i]
				if (typeof term !== "function") console.log(term)
				const result = term(state.input, clonedArgs)
				results.push(result)
				if (!result.success) break
				else {
					state.input = result.tail
				}
				state.i++
			}
			
			const success = state.i >= self.terms.length
			if (!success) {
				return Term.fail({
					self,
					children: results,
					term: self,
				})(input, args)
			}
			
			const source = results.map(result => result.source).join("")
			
			//let error = `Found ${self.toLogString()} with '${source}'`
			return Term.succeed({
				output: results.map(result => result.output).join(""),
				source,
				tail: state.input,
				term: self,
				children: results,
			})(input, args)
			
		}

		self.terms = terms
		self.type = Term.list
		return self
	}
	
	Term.or = (terms) => {
		const self = (input = "", args = {exceptions: []}) => {
			
			const state = {
				i: 0,
				exceptions: args.exceptions === undefined? [] : [...args.exceptions]
			}
			const results = []
			
			const terms = self.terms
			
			while (state.i < terms.length) {
				const term = terms[state.i]
				const newArgs = {...args}
				newArgs.exceptions = [...state.exceptions]
				if (term.resolve !== undefined) {
					if (state.exceptions.some(e => e.resolve && e.resolve() === term.resolve())) {
						state.i++
						//console.log(state.exceptions)
						state.exceptions = state.exceptions.filter(e => e.resolve && e.resolve() !== term.resolve())
						continue
					}
				}
				const result = term(input, newArgs)
				results.push(result)
				if (result.success) {
					const finalResult = Term.succeed({
						output: result.output,
						source: result.source,
						tail: result.tail,
						term: self,
						children: [...result/*, rejects*/]
					})(input, args)
					finalResult.winner = term
					return finalResult
				}
				state.i++
			}
			
			return Term.fail({
				term: self,
				children: results,
			})(input, args)
		}
		
		self.type = Term.or
		self.terms = terms
		return self
	}
	
	Term.maybe = (term) => {
		const self = (input = "", args = {exceptions: []}) => {
			const result = self.term(input, args)
			if (!result.success) {
				result.success = true
				result.trueSuccess = false
				result.source = result.source === undefined? "": result.source
				result.output = result.output === undefined? "": result.output
			}
			else result.trueSuccess = true
			result.error = result.error
			result.term = self
			return result
		}
		self.type = Term.maybe
		self.term = term
		return self
	}
	
	Term.many = (term) => {
		const self = (input = "", args = {exceptions: []}) => {
			
			const state = {
				input,
				i: 0,
			}
			
			const results = []
			
			while (true) {
				const clonedArgs = cloneArgs(args)
				const result = self.term(state.input, clonedArgs)
				results.push(result)
				if (!result.success) break
				state.input = result.tail
				state.i++
			}
			
			const success = results.length > 1
			if (!success) {
				return Term.fail({
					term: self,
					children: results,
				})(input, args)
			}
			const source = results.map(result => result.source).join("")
			return Term.succeed({
				output: results.map(result => result.output).join(""),
				source,
				tail: state.input,
				term: self,
				children: results.slice(0, -1),
			})(input, args)
		}
		self.term = term
		self.type = Term.many
		return self
	}
	
	Term.args = (term, func) => {
		const self = (input = "", args = {exceptions: []}) => {
			const newArgs = self.func(cloneArgs(args), input)
			const result = self.term(input, newArgs)
			result.term = self
			return result
		}
		self.type = Term.args
		self.term = term
		self.func = func
		return self
	}
	
	Term.emit = (term, func) => {
		if (typeof func !== "function") {
			const value = func
			func = () => value
		}
		const self = (input = "", args = {exceptions: []}) => {
			const result = self.term(input, args)
			result.term = self
			if (result.success) result.output = self.func(result)
			return result
		}
		self.type = Term.emit
		self.term = term
		self.func = func
		return self
	}
	
	Term.check = (term, func) => {
		if (typeof func !== "function") {
			const value = func
			func = () => value
		}
		const self = (input = "", args = {exceptions: []}) => {
			const result = self.term(input, args)
			if (!result.success) {
				return result
			}
			const checkResult = self.func(result)
			if (checkResult) {
				return result
			}
			return Term.fail({
				term: self,
				children: [...result],
			})(input, args)
		}
		self.type = Term.check
		self.term = term
		self.func = func
		return self
	}
	
	Term.eof = (input = "", args = {exceptions: []}) => {
		if (input.length === 0) return Term.succeed({
			source: "",
			tail: "",
			term: Term.eof,
			error: `Found end of file`,
		})(input, args)
		return Term.fail({
			term: Term.eof,
			error: `Expected end of file but got '${input}'`,
		})(input, args)
	}
	Term.eof.type = Term.eof
	
	Term.except = (term, exceptions) => {
		const self = (input = "", args = {exceptions: []}) => {
			const exceptions = args.exceptions === undefined? [] : args.exceptions
			const result = self.term(input, {...args, exceptions: [...exceptions, ...self.exceptions]})
			result.term = self
			return result
		}
		self.type = Term.except
		self.term = term
		self.exceptions = exceptions
		return self
	}
	
	Term.any = (term) => {
		const self = (input = "", args = {exceptions: []}) => {
			const result = self.term(input, {...args, exceptions: []})
			result.term = self
			return result
		}
		self.type = Term.any
		self.term = term
		return self
	}
	
	const getResultKey = (name, input = "", args = {exceptions: []}) => {
		const lines = []
		lines.push(name)
		lines.push(input)
		for (const key in args) {
			if (key === "exceptions") {
				lines.push("exceptions:" + args.exceptions.map(exception => exception.id.toString()))
				continue
			}
			const value = args[key]
			if (typeof value === "number") {
				lines.push(key + ":" + value)
				continue
			}
			
			if (typeof value === "string") {
				lines.push(key + `:"` + value + `"`)
				continue
			}
			
			if (typeof value === "boolean") {
				lines.push(key + `:` + value)
				continue
			}

			if (typeof value === "object" && value instanceof Array) {
				
				const keys = []
				for (const v of value) {
					const type = typeof v
					if (type === "number") keys.push(value.toString())
					else if (type === "string") keys.push('"' + value + '"')
					else if (type === "boolean") keys.push(value.toString())
					else break
				}
				if (keys.length === value.length) {
					lines.push(keys.join(","))
					//console.log(lines)
					continue
				}
			}
			
			throw new Error("[MotherTode] Unimplemented: I don't know how to cache these arguments correctly...")
		}
		return lines.join("|")
	}
	
	Term.export = (term, global, name) => {
		global[name] = term
		return term
	}
	Term.export.type = Term.export
	
	const resultCachess = []
	Term.resetCache = () => {
		for (const caches of resultCachess) {
			caches.clear()
		}
	}
	
	const getValue = (object, key) => {
		if (object === undefined) return
		const [head, ...tail] = key.split(".")
		if (tail.length === 0) return object[head]
		const result = getValue(object[head], tail.join("."))
		if (result !== undefined) return result
		return getValue(object, tail.join("."))
	}
	
	const setValue = (object, key, value) => {
		const [head, tail] = key.split(".")
		if (tail === undefined) {
			object[head] = value
			return
		}
		return setValue(object[head], tail, value)
	}
	
	const termCaches = new Map()
	let termCount = 0
	Term.terms = []
	
	Term.term = (key, object) => {
		
		// Get term from cache
		let termCache = termCaches.get(object)
		if (termCache === undefined) {
			termCache = {}
			termCaches.set(object, termCache)
		}
		
		if (termCache[key] !== undefined) {
			return termCache[key]
		}
		
		// Create term
		const resultCaches = new Map()
		resultCachess.push(resultCaches)
		const id = termCount++
		
		const self = (input = "", args = {exceptions: []}) => {
			
			const term = self.resolve()
			
			const resultKey = getResultKey(key, input, args)
			const resultCache = resultCaches.get(resultKey)
			if (resultCache !== undefined) {
				//print("Use cache for:", resultKey)
				return resultCache
			}
			
			const result = term(input, args)
			if (result.success) {
				//result.error = `Found ${self.toLogString()}: ${result.error}`
				result.error = /*`Found ${self.toLogString()}: ` + */`${result.error}`
			}
			else {
				result.error = /*`Expected ${self.toLogString()}:` + */ `${result.error}`
			}
			
			const cachedResult = Term.result({
				success: result.success,
				source: result.source,
				output: result.output,
				tail: result.tail,
				term: result.term,
				children: [...result],
			})(input, args)
			
			resultCaches.set(resultKey, cachedResult)
			return result
		}
		
		self.resolve = () => {
		
			// Allow for scope override
			if (object.isScope) {
				object = object.term
			}
			
			const term = getValue(object, key)
			
			if (term === undefined) {
				throw new Error(`[MotherTode] Unrecognised term: '${key}'`)
			}
			return term
		}
		
		// DON'T do this yet. Do it the first time we access the term
		self.id = id
		Term.terms[id] = key
		
		termCache[key] = self
		
		return self
	}
	
	Term.chain = (first, second) => {
		const self = (input = "", args = {exceptions: []}) => {
			const firstResult = self.first(input, args)
			if (!firstResult.success) {
				firstResult.error = /*`(Chained) ` + */firstResult.error
				return firstResult
			}
			
			const secondResult = self.second(firstResult.output, args)
			//secondResult.error = `Found translation: ` + firstResult.error + "\n\n" + secondResult.error
			return secondResult
			
		}
		self.type = Term.chain
		self.first = first
		self.second = second
		return self
	}
	
	Term.subTerms = (term, subTerms) => {
		for (const [name, value] of subTerms) {
			if (term[name] !== undefined) throw new Error(`[MotherTode] Sub-term '${name}' is already declared`)
			term[name] = value
		}
		return term
	}
	Term.subTerms.type = Term.subTerms
	
	Term.select = (term, ids) => {
		const self = (input = "", args = {exceptions: []}) => {
			const result = self.term(input, args)
			const children = ids.map(id => result[id])
			return Term.result({
				success: result.success,
				output: result.output,
				source: result.source,
				tail: result.tail,
				term: result.term,
				error: result.error,
				children,
			})(input, args)
		}
		self.type = Term.select
		self.term = term
		self.ids = ids
		return self
	}
	
	Term.reterm = (result, term) => {
		const children = result.map(c => c)
		return Term.result({
			success: result.success,
			output: result.output,
			source: result.source,
			tail: result.tail,
			term,
			children,
		})(result.input, result.args)
	}
	
}


MotherTode.install()