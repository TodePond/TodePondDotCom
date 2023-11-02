# The weirdest thing about cellpond

Cellpond's splitting+merging is its most flashy+visual 'weird thing' so it's what I show off most. But it's not the weirdest thing about cellpond.

## Conservation & stamping

Cellpond's weirdest feature is this concept of 'conservation' and 'stamping'. It's the series of steps that cellpond takes to decide what to 'write' as part of the 'rewrite'.

Every 'cell write' needs to have a 'source'. A source means "where is this colour coming from?" or "how do we decide what colour to paint?"

For 'static' colours (eg: red), it's easy! Just paint red. But what about 'dynamic' colours? (eg: red or blue) (eg: a range of reds) (eg: fill up the red channel only)

Here are some ways of deciding what to paint in these cases:

### Roll the dice

Just pick a random colour from all possibilities! This is the simplest method.

In some cases, this is what the user wants. But in some cases, it's not.

And if we're modifying a colour (eg: filling up red), just use what's already there on the grid.

### Pattern match

If there's a "red or blue" on both sides of the diagram, they're probably supposed to be the same thing. Let's just copy whatever colour is already there on the grid.

If there are multiple "red or blues" to pick from on the left-hand-side (LHS), just pick a random one.

If there are multiple "red or blues" on the right-hand-side (RHS), then they take turns randomly picking from what's available on the LHS.
 
> It's like picking players for your team in the school playground. (I was always picked last)

If you run out of players to pick from, the choices get 'refilled' again. The picking process repeats.

> Note: The pattern matching applies statically to the **rule** - not what's actually there on the **grid** . It is decided ahead of time. It doesn't change based on what's there in practice.

### User choice

Alternatively, the user could decide what we use at a source. They can stamp two cells (one on each side of the diagram) to show that one should be used as the source for the other.

They can also stamp just *one* cell to show that it *isn't* the same as anything else.

Or stamp multiple dynamic cells on the RHS to show that they should all be 'sourced' the same way.

Or stamp multiple dynamic cells on the LHS to show that they should all provide the same source. If they don't, then the rule won't fire. (Note: This part of the spec isn't implemented yet. Please help!)

**By stamping cells, you are telling cellpond, "These cells have the same source".**

*It doesn't always mean that they're the same colour*. It just means that they have the same *source*. For example, you could have a cell on the RHS that increases red by 1. By default, it just writes over what's already there underneath it. But you could stamp to set its source to a different position.

## Priority

Cellpond finds a source in this order:

1. Try to find a stamp source.
2. Try to find a pattern match source.
3. Give up, and just paint.

## Experts

I've spoken *a lot* with various people that I consider experts in this space, like [Murilo Polese](http://www.murilopolese.com/) and [Max Bittker](https://maxbittker.com).

I chatted with them loads about the issues that cellpond was trying to fix. The issues themselves are not hard to explain. If you've ever tried to make something like cellpond, you've probably come across them in some form.

> So, thank you to Murilo, Max, and many others, for contributing to cellpond's design and development!

Max had already tried to use the idea of 'conservation' with spatial programming - in his project [Alchemy Online](https://maxbittker.itch.io/alchemy-online). It didn't work out very well and he turned it off. But that's what got me thinking about conservation.

I remember a video call I had with Murilo Polese after I came up with this stamping idea. I was telling him "I've finally got it! I've figured it out! It's *stamping*."

I explained it all to him. And he basically said (but with more politeness), "I have no idea what you're talking about."

It was at *that point* that I knew I had to make cellpond, if only to carry on talking about it with Murilo.

After the video came out, he said "Oh yeah I get it now" (but I think he was just being polite).

<br>

Back to the [wikiblogarden](/wikiblogarden).
