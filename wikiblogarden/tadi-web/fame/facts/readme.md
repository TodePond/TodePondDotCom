# World's first full-stack tadi website

I made a thing called the [Pond of Fame](/fame). It's the world's first full-stack [tadi](/wikiblogarden/tadi-web/) website.

In this post, I won't go into the history of the Pond of Fame, or the story behind it. I'll just go through the cold, hard facts of how it works.

## Heroes

There's a blob of data out there in the [cloud](/wikiblogarden/better-computing/synchronising-data/). It's a list of all the cute characters that appear in the Pond of Fame. I call them HEROES.

Anyone can see the blob! There's nothing sensitive in it. Here's how you get it:

```js
const response = await fetch("https://api.val.town/v1/run/todepond.getHeroes");
const heroes = await response.json();
```

Each hero object contains some information. Here's an example:

```json
{
  "name": "Berd",
  "tier": "flappy",
  "flavour": "fire",
  "supporter": 123
}
```

The `name`, `tier`, and `flavour` properties determine how the hero should look in the Pond of Fame. The `supporter` property tells us which supporter added the hero. We'll get to that later.

## Entities

The Pond of Fame itself is a mini canvas engine. It has a big list of ENTITIES. Every frame, it draws every entity to the screen.

When the Pond of Fame loads, it fetches the list of heroes. Then it creates an entity for each one. Here's a snippet from that code:

```js
createEntity(`Colours/Flappy/${COLOUR_MAP[hero.flavour]}.png`, {
  x: 5675 - i * 24,
  y: 240 - i * 656,
  scale: 0.75,
  text: hero.name,
});
```

We use the hero's `flavour` to determine which colour image we load. We add the hero's `name` as a text label. And we position each patron dynamically, based on the order they appear in the list.

## Admin

How does the blob of data get updated? There are a few ways. One of those is my ADMIN dashboard.
