# How to compile

How do you [compile](/wikiblogarden/better-computing/compiling) from one language to another?

## It depends

It depends on what you're compiling to and from.

If you're compiling to C, your compiler will look very different to one that targets javascript, or LLVM, or HTML, or webassembly.

And what are you compiling from? a scripting language? a systems language? a visual language? a declarative language? a functional language? Your compiler will work drastically differently as a result.

> This might seem obvious.

Different compilers require completely different approaches. There's no 'one way' of building a compiler.

## How to approach it

Map it out. Where are you starting from? Where are you heading?

How far away are your two languages? How different are they? What's different about them? Do they have any shared understanding? Or are they on another planet?

## If they're close together

If they're close together, it's easy! Just [parse and emit](/wikiblogarden/better-computing/compiling/parsing/emitting) what you need, in a single step.

> If your mental model of both languages is similar enough, you can translate them one-for-one.

A good example for this is turning typescript into javascript. They're similar enough that you can just run through the code, stripping out all the types as you go.

<img width="405" alt="shapes at 24-01-29 18 30 28" src="https://github.com/TodePond/TodePondDotCom/assets/15892272/417feea3-7bf8-4918-b726-506a6ef3a535">

Or consider this made-up lispy language:

```lisp
(print (add 3 2))
```

Its concepts map cleanly to javascript:

```js
console.log(3 + 2)
```

<img width="405" alt="shapes at 24-01-29 18 30 42" src="https://github.com/TodePond/TodePondDotCom/assets/15892272/1b19752c-dc5c-4350-923a-e4b14f1b6942">


## If they're far apart

Your two languages might not have a shared understanding.

Imagine having a spatial programming language with this syntax:

```
🟨➡️⬛
⬛➡️🟨
```

This language is called colourtode, and it's used in [cellpond](https://github.com/TodePond/CellPond). It means "if a yellow cell is above a black cell, they swap positions".

I find it really hard to map colourtode's concepts to javascript.

<img width="543" alt="shapes at 24-01-29 18 31 49" src="https://github.com/TodePond/TodePondDotCom/assets/15892272/470c67c1-b55c-429d-8e19-3f48e31e5de2">


> Oh no! We can't reach!

I needed an *intermediate representation* of colourtode that's much closer to javascript. So I invented one called dragon.

```js
{
  left: [
    { type: "check", colour: 371, position: [0, 0] },
    { type: "check", colour: 0, position: [0, 1] },
  ],
  right: [
    { type: "recolour", colour: 0, position: [0, 0] },
    { type: "recolour", colour: 371, position: [0, 1] },
  ]
}
```

<img width="543" alt="shapes at 24-01-29 18 31 25" src="https://github.com/TodePond/TodePondDotCom/assets/15892272/9244c12c-ae23-477a-a04d-25a4ef7da7e5">


We're now a lot closer to our destination. Let's finish it off by [parsing and emitting](/wikiblogarden/better-computing/compiling/parsing/emitting) dragon into javascript.



The generated javascript looks something like this:

```js
function behave() {
  if (!check(371, [0, 0])) return
  if (!check(0, [0, 1])) return
  recolour(0, [0, 0])
  recolour(371, [0, 1])
}
```

## We did it

We carved out a path from start to finish. We compiled colourtode into javascript.

<img width="567" alt="shapes at 24-01-29 18 30 54" src="https://github.com/TodePond/TodePondDotCom/assets/15892272/97b2cce0-bf74-4d65-8661-282525179cf6">


## Everyone's different

Some people might rather jump straight from colourtode to javascript. Some people might prefer to have more steps along the way.

Either way is fine! It's a trade-off. I did what made the most sense to me. I tried to balance out clarity, simplicity, maintainability, and time. It's gone pretty well so far! But you might prefer something different. That's fine. Do what's best for you!

And remember to have fun.

<br>

Back to the [wikiblogarden](/wikiblogarden).
