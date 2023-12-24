# World's first full-stack tadi website

I made a thing called the [Pond of Fame](/fame). It's the world's first full-stack [tadi](/wikiblogarden/tadi-web/) website.

In this post, I won't go into the history of the Pond of Fame, or the story behind it. I'll just go through the cold, hard facts of how it works.

# Pond of Fame

The Pond of Fame is basically a still image of a bunch of cute characters with nametags.

## Heroes

There's a blob of data out there in the [cloud](/wikiblogarden/better-computing/synchronising-data/). It's a list of all the cute characters that appear in the Pond of Fame. I call them HEROES.

Anyone can see the blob! There's nothing sensitive in it. Here's how you get it:

```js
const response = await fetch("https://api.val.town/v1/run/todepond.getHeroes");
const heroes = await response.json();
```

I have a little helper function that simplifies this. It lets me call any [val.town](https://val.town) function.

```js
const heroes = await val("todepond.getHeroes")
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
createEntity(`Colours/${hero.tier}/${COLOUR_MAP[hero.flavour]}.png`, {
  x: 5675 - i * 24,
  y: 240 - i * 656,
  text: hero.name,
});
```

We use the hero's `tier` and `flavour` to determine which image we load. We add the hero's `name` as a text label. And we position it dynamically, based on  where it appears in the list.

# Admin dashboard 

I have an admin dashboard that lets me edit and manage the blob.

## Password

It's password-protected. There's a password input at the top of the page.

```html
<input
  type="password"
  id="password"
  oninput="handlePasswordInput()"
/>
```

The password gets stored to local storage, so I don't need to type it in each time.

```js
const passwordInput = document.querySelector("#password")
window.handlePasswordInput = () => {
  localStorage.setItem("fame-admin-password", passwordInput.value);
};

passwordInput.value = localStorage.getItem("fame-admin-password") ?? ""
```

## Heroes

The list of heroes gets loaded into a big textbox.

```html
<textarea id="heroes"></textearea>
<script>
  const heroesInput = document.querySelector("#heroes")
  let heroes = []

  const pullHeroes = async () => {
    heroes = await val("todepond.getHeroes")
    heroesInput.value = JSON.stringify(heroes, null, 2)
  }

  pullHeroes()
</script>
```

I can edit the heroes, and then push a button to upload those changes.

```html
<button onclick="handlePushHeroes()">Push heroes</button>
<script>
  window.handlePushHeroes = async () => {
    const newHeroes = JSON.parse(heroesInput.value)
    const oldHeroes = heroes
    const password = passwordInput.value
    const result = await val("todepond.setHeroes", newHeroes, oldHeroes, password)
    if (result.success) {
      heroes = newHeroes
    }
  }
</script>
```

This time, we have to send a `password` along too. We also send along a copy of what **we think** the current heroes are. It lets the server check if you're up-to-date. If you're out-of-date, it rejects you because you might be overriding newer data.

## Supporters

Surprise! There's another blob of data. This one's private: It's a list of paying SUPPORTERS.

A supporter looks like this:

```json
{
  "id": 123,
  "email": "todepond@gmail.com",
  "secret": "abcde-fghijklmn-etc"
}
```

The `id` property lets us identify the supporter without referring to any personal information. The `email` lets us contact them. The `secret` is their way of editing their hero. We'll get to that later!

Getting and setting the supporters blob works similarly to the heroes blob. The only difference is that it needs the password in both cases now.

```js
const supporters = await val("todepond.getSupporters", password)
await val("todepond.setSupporters", newSupporters, oldSupporters, password)
```

There are also some differences with how it's stored in the cloud, for additional security. We'll get to that later.

# Supporter dashboard

## Secret
