# Cellpond is not robust

I made a thing called [cellpond](/wikiblogarden/cellpond). It takes lots of inspiration from [robust-first computing](/wikiblogarden/better-computing). However...

## Cellpond is not robust

When you split a cell in cellpond, it allocates extra memory onto the grid. But where does that memory come from?

We don't have infinite supplies of memory. It will eventually run out, and your program will crash.

And that memory is stored in all sorts of places on the stack. Depending on the order of your 'splits', the memory locations will be in any sort of entangled order.

## The moveable feast machine is robust

In the [moveable feast machine](https://movablefeastmachine.org/), each cell can only contain a limited amount of information. There's no adding or removing memory within a cell.

If you need more memory, your program needs to *grow* to fill up more space. It's *spatial* programming at its most *spatial*.

## Cellpond is more robust than some

That being said, cellpond does still use randomness and non-determinism to encourage robust programs. Whatever you make needs to deal with that. Whatever you make needs to cope with any sort of unpredictable situation.

## Cellpond could be more robust

How could we make cellpond more robust? Possible ideas include:

- Reduce the memory allowed in smaller cells. The memory available in a cell could be directly linked to its area.

- Disallow splitting when there's no more memory. The act of splitting could involve requesting memory. You'd have to handle things gracefully if your request gets rejected.

- Steal the space from elsewhere on the grid. When you split, you're effectively making more cells. When you do that, we could remove cells from somewhere else at random. This could add to the inherent 'corrosiveness' of the environment, encouraging more robustness on the whole.

- Remove splitting and merging.

- Something else. Probably something simpler.

Help me! Contact details are on [todepon
d dot com](/).


