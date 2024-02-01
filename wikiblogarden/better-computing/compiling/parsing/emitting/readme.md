# Parsing and emitting

If you're [making a compiler](/wikiblogarden/better-computing/compiling/how-to/), you probably need to do some parsing and emitting.

## Parsing

'Parsing' is a fancy way of saying 'reading code'.

## Emitting

'Emitting' is a fancy way of saying 'writing code'.

## Parsing and emitting

When you parse, you often want to emit something as well. Maybe you want to emit your target language. Or an intermediate representation (eg: an abstract syntax tree). Or maybe you just want to emit whether the code is valid or not.

## What do you want to know?

When you parse something, what information do you want back?

Maybe you just want to know if the code parses successfully or not. Maybe you want to know *how far* it can parse successfully before failing. Maybe you want a helpful error message when it fails. Maybe you want to see how the parser broke down your code into smaller pieces.

For this reason, I like to return ALL the information I possibly can.

## All the information

Given to you in a result object.

### Success

Was the parse successful or not? A simple yes/no question.

### Source

A copy of the source code that you tried to parse. For your reference purposes only.

### Snippet

The snippet of code that you successfully parsed. It could be a small part of it, or your entire source, or nothing.

If the parse failed, it's the *longest possible snippet of code that is valid*, which is highly subjective.

### Tail

The remainding code, after you take off the snippet.

### Error

An object with some helpful information. It always includes a message. It might include some more information on a case-by-case basis.

### Fatal

Whether a failure should interrupt the parse or not. Yes or no.

### Tree

Nested arrays containing results for everything that was parsed as part of this parse.

### Target

Your emitted code. What your snippet got transformed into.

### Meta

Optionally, the result can contain some extra information. Anything you want.

## The twist

Here's the twist. Maybe.

The code you parse... doesn't have to be text. It could be an array, a tree, or anything you want. And you can emit anything you want too.

No matter what, these are the concepts I reach for whenever I want to parse something. Whether that's some [text](/wikiblogarden/better-computing/compiling/parsing/emitting/text), a list of [tokens](/wikiblogarden/better-computing/compiling/parsing/emitting/tokens), or a [tree](/wikiblogarden/better-computing/compiling/parsing/emitting/tree).

<br>

Back to the [wikiblogarden](/wikiblogarden).
