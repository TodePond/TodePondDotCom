this page is a record of my 'lab notes' while research-in-residencing at ink & switch

## INTRODUCTION

hello everyone i'm planning to use this channel as a place to explore two kinds of things:

- figuring out how to **PRESENT & COMMUNICATE** projects that I've already made<br>
  (eg: arroost, cellpond)
- figuring out how to **DESIGN & IMPLEMENT** things i haven't made yet<br>
  (eg: fractal bucket, see-through computer, advanced arroost, edgepond)

feel free to join or chuck in any questions / thoughts / feelings / whatever at any point

## ARROOST DEMO

thanks for taking part in my demo today everyone! and for all your insights. i will digest them and maybe write them up

I invite you to explore:

- the [examples](https://www.todepond.com/wikiblogarden/arroost/examples/)
- this [blog post](https://edibotopic.com/blog/doing/leisure-sick/) by an arroost user. they talk about how it helped them "become unlocked".
- perhaps the [weirdest talk](https://youtu.be/cF2OF75ivZM) I've ever given, introducing arroost.
- [arroost itself](https://arroost.com)! it's a bit of a puzzle box, but you might be able to work your way in.

## PLAY

during the demo, the topic of **play** was discussed.

It made me realise the different kinds of play out there:

- play as in exploration.
- play as in performing something.
- play as in playing a game, competitive or otherwise.

The type of play I have in mind is EXPLORATIVE PLAY.<br>
I hadn't considered the other types. Probably because I come from a teaching background.<br>
This is something I will try to get across in any future talk or demo!

## ARROWS IN ARROWS IN ARROWS

I finally finished and published the [video](https://youtu.be/DNBKdU6XrLY) for arroost.

it turned out a lot more abstract than I originally planned for, but I'm ok with that.<br>
the video is very surface level - it just shares the 'vibe' of the tool.<br>
there's lots more to the engine, that I haven't explored or demonstrated yet. I can get to all that in future talks & videos.<br>

on the engineering side, I made SO MANY mistakes with this one. will unwind those here in this channel over the coming days

gradually turning my attention to future projects

## THE LINE

I've being dreaming up a new experiment for a while (~8 months). I call it "See It" in my notes, but I'm thinking of calling it "Seet" or "Lyne" or something.

Before I introduce it, here's some terminology:

> Most programming involves fiddling around with some memory. That memory is usually in the form of a "Line", whether that's a stack, a heap, a register, or whatever.
>
> I don't know if there's an encompassing technical term for this Line? So I've just been referring to it as The Line.

The SEE IT project is an experiment that plays with The Line.

## SEE IT

I started dreaming up the See It project while working on cellpond.

In cellpond talks and demos, I often point out that you can SEE all the data of the program (on the grid). I say that this is one of the benefits of spatial programming.

But... There's nothing stopping you from SHOWING the low-level data of a normal program.

_Or is there?<br>
Has anyone tried it? (probably)<br>
Are there any hurdles and challenges? (probably)_

The basic premise is this:

> Just show a visual of the Line

(ie: the stack / heap / register)

That's the starting point. But in the usual style, it will take us to some unusual places (will write out more notes soon)

## SEE IT: BURGER KING

The bare minimum / obvious / first thing to do...<br>
Is to just show the line at the top of the program.

The blue line represents where the **interpreter** is.<br>
The array above represents **The Line** of memory.

This is a "burger king" idea. I guess I should explain what that means (in the next note).

## BURGER KING

A "burger king" idea is something I learned from a colleague.

If nobody can decide where to go for lunch, it helps if somebody suggests "burger king".<br>
Because nobody actually wants to go to burger king! But it starts the conversation.

> No no no I don't want to go to burger king! Let's go get ramen instead.

I always like to start designs with a burger king idea because it starts you on that 'iterative feedback loop'. Rather than trying to hit the right thing first thing.

## INTERPOLATING WEIRDNESS

I've been devising a way of introducing the SEE IT project in a way that captures some excitement / imagination, while also keeping its scope refined down.

- `The Line` feels like quite a dry topic. But i think it's an important puzzle piece for understanding why people get excited about things like spatial programming.
- my job feels like mapping out the pathway between something boring like THE LINE and something exciting like SPATIAL PROGRAMMING.
- how do we merge them together?

> reflection: this is the first time I'm trying to adapt one of my weird experiments to a more practical setting.
