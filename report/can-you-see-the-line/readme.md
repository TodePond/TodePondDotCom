# SEET: CAN YOU SEE THE LINE?

Whenever I start a new project, I never know if it'll last a long time[^cells-in-cells-in-cells], or be over very quickly[^alphabet]. Today, it's the latter, but not necessarily for a bad reason.

<br>

## Contents

- Part one: SEE
- Part two: THE LINE
- Part three: YOU
- Part four: CAN

<br>

# Part one: SEE

It has been pointed out to me ...

... that I have a habit of repeatedly saying the phrase "can you see it" in the demos that I give (eg: [^spatial-programming-pipedream-foc], [^spatial-programming-without-escape]). Perhaps it's a nervous tick, or a way to fill the silence, or an attempt to catch the audience's attention. Whatever it is, I say it so much that people make fun of me, and I've started to lean into it as a running joke[^normalise-sharing-scrappy-fiddles].

Anyway, this observation made me realise something about the kinds of projects that I like to work on.

In my projects, I want you to be able to **see** whatever you're creating, whether you're creating a computer program[^rabbits], or an artwork[^spellular-automata], or a music[arrows-in-arrows-in-arrows], or a whatever[^screens-in-screens-in-screens]. Either way, I want you to **see it**. I want you to **seet**.

And not just on the surface-level. I want you to see _inside it_. I want you to see how it works, and what's going on, without needing to switch modes, switch tools. You can just[^just] see it.

## Spatial programming

"Being able to see it" is a strength of spatial programming[^-some-paper].

It's _really easy_ to make everything _visible_ (to make everything _see-able_) in spatial programming because the data of your program is typically arranged in 2D space[^?]. I argue that it's much easier to visually present and parse, compared to the one-dimensional memory we typically work with in traditional programming (more on that later).

In spatial programming, you can zoom in and _see_ what data is stored at a location (eg: in CellPond [^spatial-programming-without-escape]). Or you can hover over any individual cell to _see_ what data it has inside (eg: in Sandspiel Studio [^sandspiel-studio-60-seconds]).

In spatial programming, you can debug a specific part of your program by triggering an execution in a specific place, and by _seeing_ what happens (eg: Moveable Feast Machine Simulator[^mfms]). Combined with time travel debugging tools, this turns the program into a playground where you can prod and poke, experiment and explore. You aren't confined to the narrow scope of the traditional step debugger's branching paths (eg: Moveable Feast Machine Simulator[^mfms]) (again). (EDITOR: combine duplicated citations)

And on top of that, spatial programs can be coded in terms of the program's memory itself — it's often done with rewrite rules (eg: MarkovJunior[^markovjunior]) — with before and after diagrams (eg: SpaceTode[^spacetode]) — with "when" and "then" (eg: Color Code[^color-code]) — with programming by demonstration (eg: AgentSheets[^agentsheets]). You can look at one of these rewrite rules and _see_ exactly what will happen, even if the represented operation is complex. You don't need to imagine anything, because you can **see it**.

## Summary of part one

1. memory in spatial programming is visible-by-default.
2. you can debug by manipulating the program and seeing what happens.
3. spatial code looks the same as its memory. you can _see_ what it does.

but maybe polish up a bit.)

## Sentential programming

We could ask ourselves: Could we learn from spatial programming, and bring these strength into other paradigms? For instance, could we create the same effect within sentential programming[^]? Could we allow the coder to _see_ sentential programs in the same way we can _see_ spatial programs)?

Is that possible? Or are these strengths too closely linked to the nature of spatial programming itself? Are there any hurdles or blockers in the way of bringing them to sentential programming? If so, what are those hurdles?

Regardless of whether it's possible or not, what would a decent attempt look like? Has it been properly tried before? If so, how did it go? Why did they succeed or fail? Did different attempts all converge on the same patterns? Or is there a diversity of approaches out there?

(EDITOR: what is sentential programming anyway??)

(WRITER: "sentential programming" is what I called "normal programming" in my [cellpond LIVE presentation]. after I gave the talk, [dave ackley], creator of [SPLAT] and the [moveable feast machine], told me that I'm referring to "sentential programming", because it involves the 'writing of sentences' as opposed to the 'construction of spatial diagrams'.)

<br>

# Part two: THE LINE

Sentential programming involves working with _lines_.

## Code lines

In sentential programming, the _code_ that you write is made up of lines, by definition. You write sentences of code. Sentences are lines. Done and done.

## Memory lines

In sentential programming, the _computer memory_ you work with is also a line. I call it `the line`.

> _I will now proceed to argue my point._

At its lowest level, sentential programming involves manipulating data in a stack, or heap, or register. These are lines of memory.

At higher levels, sentential programming can involve managing arrays of data. Arrays are also lines.

At even higher levels, the data structures you work with can become more abstracted. You might work with a tree, or dictionary, or object, or struct, or key-value store. You might use some of these words interchangeably, or you might not. Either way I argue that these data structures are also **lines**. It's just that — in these cases, the **lines** are abstracted away. They're chopped up and arranged around in different places.

For example, you might be working with an array-of-structs or a struct-of-arrays. I argue that both of these abstractions are ways of structuring the same underlying **line**.

Perhaps you're only working with a single object, with keys and values. I still argue that this is a line. Its entries can be listed out iteratively, in various orders. We just happened to give portions of this line some names (some keys), to make our code more understandable. And also, one of the values of your object could be an array itself. You can have lines inside of lines.

Even when we're building something with multiple dimensions, we often work represent it in a one-dimensional way. Pixels of fragment shaders are laid in a single line - in an array buffer[^?]. Even the DOM tags of our web page are arranged and presented as a vertical list - as a vertical **line**[^?].

And even spatial programming can be viewed in terms of lines. It's typically a grid, laid out in memory as an array of arrays. Lines of lines.

Noteably, [cellpond] isn't a grid — it's more similar to a network. Regardless, its data is modelled as sets of cells underneath — as lines.

Regardless, I see spatial programming as a subset of sentential programming. It's a particular category of programming that tends to be easier to visualise.

## Lines all the way down

I argue that **all** programming is the mere \*fiddling of memory in lines**, and so — if we want to make our programs more visible, we should figure out how to visibly represent **lines\*\* in increasingly better ways.

I argue that spatial programming is easy to represent visually because it involves a particular subset of "line arrangements" — and that subset is particularly easier to visualise, for whatever reason. It's hard to _not_ make it visual.

Even if you don't accept that "all programming is about fiddling lines", then I would still argue that "fiddling lines" still makes up a large proportion of programming, as highlighted by the examples that I've already covered. Therefore, I still see it as a valuable target to target our work towards.

At the very least, `the line` is a concise metaphor that descrives a large

[^arrows]: [Arrows in Arrows in Arrows](https://youtu.be/DNBKdU6XrLY)
