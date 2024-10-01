# ICLC 2025 - Proposal for Workshops

Workshop sessions will be in the short form (<2h) or long form (>2h).

## 1. General Information

- **Workshop Title:** Making living patterns with Cellpond

- **Main Contact:** Lu Wilson

- **Additional Instructor(s):** ~

- **Workshop Duration:** short (2h)

- **Target Audience:** beginners — it's a new kind of tool so everyone is a beginner!

- **Workshop Language:** english

## 2. Abstract

<!-- Please support your submission with a clear description of your workshop, its goals, and its context. Peer review and acceptance will be based on this abstract, and it will also be published in the proceedings of the conference.

Max. 700 words. -->

The goal of this workshop is to introduce participants to a different kind of live coding — one where the program itself can be seen as "live" in the sense that it's a living system. It's a kind of coding where you're not entirely in charge. You have to surrender some of your control to the system itself, and let it _do its thing_.

By the end of the session, participants should be able to create a living pattern within the tool Cellpond[^cellpond]. And they should have an improved sense of what it feels like to code such a living system.

As a tool, Cellpond builds on top of the works of Dave Ackley[^dave] and the Living Computation Foundation[^lcf] such as the Moveable Feast Machine[^mfm]. Cellpond also shares some similarities to popular cellular automata like the Game of Life[^gol] but it differs in the sense that it's entirely random and non-deterministic. It's closer to the lesser-explored _asynchronous_ cellular automata[^async], which are more commonly seen within "falling sand games"[^sandspiel].

The workshop will cover this history only very briefly, prioritising getting its participants' hands dirty with the tool itself.

The workshop will be go through the following stages: (on the next page)

1. The basics of the tool, drawing pictures, clearing the screen, and changing the colour of the brush.
   - Making dynamic brushes that don't just paint a single colour, but instead _modify_ colours in some way, eg: increasing green, or copying the blue channel into the red channel.
2. Creating simple rules that change one colour into another.
3. Creating rules that involve more than one cell, eg: How to make a rule that moves a cell downwards.
   - Using symmetry to save time when making multiple rules.
4. Creating dynamic rules that don't just replace one colour with another, but instead modify the colour in some way.
   - Using this to create more versatile and advanced behaviours, eg: a plant that grows until it runs out of energy.
5. This is when it starts to get a bit mind-bending. Creating rules that change the shape of the world itself, by splitting and merging cells on the grid.
   - Creating recursive rules to make fractals.
6. Finale! Creating a Huegene[^huegene], a plant-like pattern that mutates colour as it grows.
   - Adding a herbivore that eats the plant, to create a balanced ecosystem.

The final stage is most clearly a living system. It's a model of a plant that grows and evolves over time. The herbivore does the same, adapting to the plant's mutations so that its colour matches the plant as best as it can.

At each stage, there is flexibility for participants to explore their own ideas and make their own patterns. Each stage can be explored in more or less depth, depending on the interest and speed of the participants.

Throughout the workshop, participants will be asked to save any patterns that they like, and share them with the group. We'll be able to see some of them on the big screen, and participants might learn from each other's creations.

[^cellpond]: Cellpond, [https://www.todepond.com/explore/cellpond/](https://www.todepond.com/explore/cellpond/)
[^dave]: Dave Ackley, [https://www.cs.unm.edu/~ackley/](https://www.cs.unm.edu/~ackley/)
[^lcf]: Living Computation Foundation, [https://www.livingcomputation.org/](https://www.livingcomputation.org/)
[^mfm]: Moveable Feast Machine, [https://movablefeastmachine.org/](https://movablefeastmachine.org/)
[^gol]: Game of Life, [https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
[^async]: Asynchronous cellular automata, [https://en.wikipedia.org/wiki/Asynchronous_cellular_automaton](https://en.wikipedia.org/wiki/Asynchronous_cellular_automaton)
[^sandspiel]: Making Sandspiel, [https://maxbittker.com/making-sandspiel](https://maxbittker.com/making-sandspiel)
[^huegene]: Huegene, [https://softologyblog.wordpress.com/2020/02/27/huegene/](https://softologyblog.wordpress.com/2020/02/27/huegene/)

## 3. Workshop Material

<!-- - If you already have links to video or audio material related to this workshop, please provide links here. Please respect a maximum of 15 minutes of video for review.

- If there are any links to other bibliography or workshop related material you'd like to share, please provide them here. -->

I gave a talk about Cellpond at the 2023 LIVE conference for live programming. I presented it under a different lens to what I'm proposing with this workshop, but it still gives a good overview of what Cellpond is and how it works. You can watch it here: [https://www.youtube.com/watch?v=eQgxFuw8f1U](https://www.youtube.com/watch?v=eQgxFuw8f1U)

The video is longer than the maximum length of 15 minutes, so I recommend just watching the first 15 minutes.

## 4. Program Note

<!-- Please provide a short (max. 150 words) program note. This will be shared in the online Conference program and used for any printed program materials. -->

Explore living patterns with Cellpond!

Cellpond is a tool that lets you make visual patterns by building _rules_ that change the grid-based world over time. We'll learn how to live code it — by dragging and dropping the different shapes on the screen. We'll start simple, building our own custom colours and brushes for drawing pictures. Then we'll build up to more advanced creations, like particles and fractals. And we'll end up with a pattern that's also an ecosystem — a pattern that's "live" in the sense that it's a living system. In other words, we'll make a pattern that's _alive_.

## 5. Short Biography

<!-- Please provide a short (max. 150 words) biography for each instructor leading this workshop. These will be published in the proceedings of the conference. -->

Lu Wilson is a creative technologist from London with a background in teaching. They make slightly surreal videos about their projects, often with heavy use of recursion. Their other creations include the satirical language Dreamberd, the experimental online gallery Torn Leaf, and a time-travel simulator for frogs. In their spare time, they co-host the Future of Coding podcast with friends.

<!-- **PLEASE DON'T FORGET TO FILL OUT THE TECHNICAL QUESTIONNAIRE BELOW!** -->

\newpage

# ICLC 2025 -- Technical Requirements

Workshops

## 1. General Information

### 1.1 How many people is the workshop intended for, and at what level of expertise?

<!-- Please think about whether it works with a larger or smaller group, and any prerequisites to participation. -->

Up to 30 people max would be good. It's what I'm used to from my teaching days! Smaller numbers are also fine.

The workshop is intended for anyone who might be interested in exploring emergent visual patterns that are "alive" in some sense. No prior experience is needed. It's all done by clicking and dragging blocks around a screen, so it doesn't help to have any experience with programming or art-making or cellular automata or anything like that.

It's suitable for complete beginners, and also experienced coders, as it's hopefully something completely different to what they're used to.

### 1.2 Do the participants need to bring anything?

<!-- Other than their laptop? -->

Their laptop! Any laptop that can connect to the internet on wifi, and has a web browser.

## 2. Materials Needed

### 2.1 What type of sound system do you need?

<!-- I.e. do you need a full PA system, or would a single active speaker be enough? -->

No sound needed! We're making visual things.

### 2.2 How many video projectors does your workshop need?

<!-- Please also state what connector type you need (HDMI, VGA, ...), and the ideal or minimum resolution. -->

One projector, please.

HDMI or USB-C is fine!

### 2.3 How much table space will each participant need?

<!-- Please also take into account the space needed if additional hardware or soldering is involved. -->

Not much! Just enough for a laptop. Don't even need tables, even. Just a place to sit with laptops, eg: the floor.

### 2.4 Anything else you need?

<!-- Cables, adapters, anything else you can't bring yourself? Are there any specific tools (soldering irons, etc), that the participants of the workshop would need? -->

No! Just internet connection.
