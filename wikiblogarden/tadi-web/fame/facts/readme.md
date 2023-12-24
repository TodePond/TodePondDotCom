# The world's first full-stack tadi website: How I made the Pond of Fame

I made a thing called the [Pond of Fame](/fame).

In this post, I won't go into the history of the Pond of Fame, or the story behind it. I'll just go through the cold, hard facts of how it works.

## Heroes

There's a blob of data out there in the cloud. It's a big list of the characters that appear in the Pond of Fame. I call them HEROES.

Anyone can see the blob! There's nothing sensitive in it. Here's how you get them:

```js
const response = await fetch(`https://api.val.town/v1/run/todepond.getHeroes`);
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

The `name`, `tier`, and `flavour` properties determine how the hero should look in the Pond of Fame. The `supporter` property is the ID of the person who added the hero to the Pond of Fame. We'll get to that later.

## The Pond of Fame
