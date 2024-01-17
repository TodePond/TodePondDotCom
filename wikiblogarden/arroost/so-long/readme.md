# Why the arrows video took so long

I finally finished and released the [Arrows video](https://www.youtube.com/watch?v=DNBKdU6XrLY). 

It was supposed to take 3 months, but it took many many more. Why?

# Engineering mistakes

The vast majority of my time was spent on coding the damn thing.

## Layers

Early on, I built a [layer system](https://www.patreon.com/posts/todepond-times-79112476) that lets me layer different visuals on top of each other. I can place down a canvas, or a shader, or some web stuff, or anything.

The system itself is good. It lets me pick the technology that's best for each scenario, and combine them together. I can layer up all sorts of different things.

Except I didn't actually do that. Instead, I just built everything out of normal web elements because it felt new and shiny. And I suffered greatly for it.

I even built *another* layer system *on top of that layer*, instead of using the in-built one! Waste of time.

## Signals

I spent a lot of time building a [signals system](https://www.patreon.com/posts/todepond-times-79561549). It let me make my code 'reactive' so that it responds to changes in the right way.

For some reason, I really wanted it to handle everything automatically. I thought it would be neater, or something.

I found it really hard to make automatic signals work well, so I eventually added a way of doing it manually instead. I should have done that from the beginning.

## Performance

Because of these new systems I was using, I had to spend a lot of time [making arroost faster](https://www.patreon.com/posts/todepond-times-81809281).

It was new unfamiliar territory for me, so it took ages. I should have stuck with what I knew.

## Components

I also built a new [entity-component-system](https://www.patreon.com/posts/todepond-times-87903200). It's like a more advanced version of the approach I used in [cellpond](https://www.youtube.com/watch?v=sQYUQNozljo).

I made it way too complicated, and I eventually stripped out almost everything. 

## Virtual machine

When I started, I thought I could make everything within one system. I incorrectly thought that my new systems would be powerful enough to support everything I needed. I thought wrong.

I had to split arroost into [two separate projects](https://www.patreon.com/posts/todepond-times-82518899). Arroost became just the user interface. And I made Nogan the underlying machine.

This means that I had to abandon work that I'd already done, and rebuild it in a new way.

And I had to spend extra time getting them to work together.

## Projectional

Essentially, Arroost is just a 'projectional editor' for Nogan. In theory, it should have a 1:1 mapping to it. It's just another way of representing the same information.

But it doesn't work like that under-the-hood. The two engines have to do a lot of back-and-forth communication to try to stay in sync. And they often got out of sync.

The biggest remaining bugs are caused by this.

When I continue work on Arroost, I will probably try to make them more tightly coupled.

## Audio

I wasted time trying to [handle audio myself](https://www.patreon.com/posts/todepond-times-82518899).

Things sped up when I [switched](https://www.patreon.com/posts/todepond-perfect-92601623) to the [tone.js](https://tonejs.github.io/) library.

## Types

At first, I built nogan without types. It was all very fiddly, and I knew I would make mistakes, so I added [validation](https://www.patreon.com/posts/todepond-times-82867204). If anything was incorrect, it yelled at me.

Eventually, I added types, and it did a much better job at pointing out my mistakes.

The validation was still useful, but I didn't need it for everything, and it often got in the way.

I turned it off for certain things.

## Curvy stem

I spent too much time figuring out how to get a satisfyingly [curvy arrow](https://www.patreon.com/posts/todepond-times-83546279) for wires.

In the rewrite, I didn't bother re-implementing it.

# Video mistakes

There's more!

## Grid

Initial plans for Arroost looked very different. The video was originally going to focus on a [grid-based system](https://www.patreon.com/posts/todepond-times-85882581), like a classic cellular automata.

Early on, I realised that I needed a node-wire system in place to be able to support that. This massively grew the scope of the project.

I was emotionally attached to the grid plans, so I didn't drop them. This meant that I couldn't take certain shortcuts when engineering features.

I dropped those initial plans far too late in the video's development.

## Davinci resolve

I [switched](https://www.patreon.com/posts/todepond-times-82867204) from [adobe](https://www.adobe.com/) software to [davinci](https://www.blackmagicdesign.com/products/davinciresolve) software. It took a long time to learn everything again.

## Wrong order

I re-recorded my [voiceover](https://www.patreon.com/posts/todepond-times-i-83915850) two times due to script changes. I was too certain about certain things.

I should have figured out more of the engineering and design before committing to a video plan.

Normally it helps to have a voice take done early, because it helps me to arrange the music and structure the video. But there wasn't any music to arrange this time, so it was pointless.

## No music

I had to make all the [music](https://www.patreon.com/posts/todepond-times-84971016) myself, which took longer. Luckily, everything else took even longer, so I had plenty of time to figure it out.

Still, it took a lot more work than usual.

# Other mistakes

There's more!

## Dreamberd

My [joke language](https://github.com/TodePond/DreamBerd/) went viral. I received a lot of attention from it. I allowed myself to become distracted by it - doing [talks](https://youtu.be/52vmjZnxJb8), [interviews](https://www.youtube.com/watch?v=tDexugp8EmM), and [so on](https://www.youtube.com/watch?v=-tCi-SX8vw8).

## Patrons

I got a lot more patrons. 

I used to message every new patron individually, and I manually added them to the credits screen. I did this for way too long.

Eventually, I setup an [automated system](https://www.todepond.com/pondcast/choose-your-hero/), which took some time as well.

## Pondcast

I started doing my weekly update as a [podcast](https://www.patreon.com/posts/todepond-times-87903200). Although I am really pleased to be doing it, it did take up a lot of my time.

## Cellpond

I agreed to do a [talk about cellpond](https://www.youtube.com/watch?v=cBYudbaqHAk&t=6704s).

This involved a lot of preparation and planning, as well as some [coding work](https://www.patreon.com/posts/todepond-no-91470019) on cellpond itself.

## tldraw

All this time, I've been working at tldraw four days a week.

# What saved me

I made a lot of mistakes.

But something got me through in the end...

## Slippy mindset

I picked up a new mindset along the way. I've been trying out a relentless embrace of simplicity and minimalism in my work. I call it the "slippy mindset" or the "tadi web".

And it helped me get the video across the line.

Thank you tadi web!

And thank YOU for your patience.<br>
Hopefully the next video won't take so long.

<br>

Back to the [wikib](/wikiblogarden).
