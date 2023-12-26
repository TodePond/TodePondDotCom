# World's first full-stack tadi website

I made a thing called the [Pond of Fame](/fame). It's the world's first full-stack [tadi](/wikiblogarden/tadi-web/) website.

Here's how it works.

# Pond of Fame

The Pond of Fame is basically a still image of a bunch of cute creatures.

## Heroes

There's a blob of data out there in the [cloud](/wikiblogarden/better-computing/synchronising-data/). It's a list of all the creatures that appear in the Pond of Fame. I call them HEROES.

Anyone can see the blob! There's nothing private in it. Here's how you get it:

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

The `name`, `tier`, and `flavour` properties determine how the hero should look in the Pond of Fame. The `supporter` property tells me which supporter added the hero. I'll get to that later.

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

I use the hero's `tier` and `flavour` to determine which image to load. The images were originally drawn by [Flora Caulton](https://floracaulton.com). I tweaked their size and colour in photoshop.

I also add the hero's `name` as a text label. And I position the hero dynamically, based on where it appears in the list.

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

The password gets stored to local storage.

```js
const passwordInput = document.querySelector("#password")

const handlePasswordInput = () => {
  localStorage.setItem("password", passwordInput.value)
};
```

I automatically load the saved password so that I don't need to type it in each time.

```js
passwordInput.value = localStorage.getItem("password") ?? ""
```

## Heroes

The list of heroes gets loaded into a big textbox.

```html
<textarea id="heroes"></textearea>
<script>
  const heroesInput = document.querySelector("#heroes")
  let heroes = null

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
  const handlePushHeroes = async () => {
    const result = await val(
      "todepond.setHeroes",
      JSON.parse(heroesInput.value),
      heroes,
      passwordInput.value,
    )
  }
</script>
```

This time, I have to send a `password` along too.

I also send along a copy of what **I think** the current heroes are. It lets the server check if I'm up-to-date. If I'm out-of-date, it rejects me because I might be overriding newer data.

## Supporters

Surprise! There's another blob of data. This one's private: It's a list of paying SUPPORTERS (that's you).

A supporter looks like this:

```json
{
  "id": 123,
  "email": "todepond@gmail.com",
  "secret": "abcde-fghijklmn-etc"
}
```

The `id` property lets me identify you without referring to any personal information. The `email` lets me contact you. The `secret` is something you can use to edit your hero. I'll get to that later!

Getting and setting the supporters blob works similarly to the heroes blob. The only difference is that I need to send the password even when I'm just fetching it.

```js
const supporters = await val("todepond.getSupporters", password)
```

There are also some differences with how it's stored in the cloud, for additional security. I'll get to that later too!

# Supporter dashboard

You can edit your hero in the supporter dashboard.

## Secret

You're only allowed to edit your own hero, of course. So there's a password input at the top of the screen, similar to the admin dashboard.

```html
<form action="#" onsubmit="handleLogin()">
  <input
    type="password"
    id="secret"
    oninput="saveSecret()"
  />
  <button>Login</button>
</form>
```

## Id

You paste in your SECRET, and the dashboard fetches your ID.

```js
const secretInput = document.querySelector("#secret")

const handleLogin = async () => {
  const id = await val("todepond.loginSupporter", secretInput.value)
}
```

## Hero

The dashboard uses your ID to get your HERO.

```js
const heroes = await val("todepond.getHeroes")
const hero = heroes.find(v => v.supporter === id)
```

## Hero designer

There are some inputs for setting your hero's name and flavour.

```html
<input type="text" id="name" />
<select id="flavour">
  <option value="fire">Fire</option>
  <option value="water">Water</option>
  <option value="air">Air</option>
  <option value="sand">Sand</option>
  <option value="wood">Wood</option>
  <option value="flower">Flower</option>
  <option value="pink sand">Pink sand</option>
  <option value="metal">Metal</option>
  <option value="poison">Poison</option>
  <option value="leaf">Leaf</option>
  <option value="cloud">Cloud</option>
</select>
```

To begin with, your hero's data gets loaded in.

```js
const nameInput = document.querySelector("#name")
const flavourInput = document.querySelector("#flavour")

nameInput.value = hero.name
flavourInput.value = hero.flavour
```

Make your changes and then hit the "Save hero" button! Your secret gets sent along to grant you permission.

```html
<button onclick="handleSave()">Save hero</button>

<script>
  const handleSave = async () => {
    await val(
      "todepond.setHero",
      secretInput.value,
      nameInput.value,
      colourInput.value
    );
  }
</script>
```

## Hero preview 

I also show you a preview of what your hero will look like on a canvas.

```html
<canvas width="800" height="800"></canvas>
```

Every time you edit something, I redraw the preview.

```js
const canvas = document.querySelector("canvas")
const context = canvas getContext("2d")

const drawPreview = () => {
    const image = IMAGE_MAP[hero.tier][flavourInput.value]
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(image, 0, 0)
    context.fillStyle = "white"
    context.font = "bold 60px sans-serif"
    context.textAlign = "center"
    context.fillText(name, canvas.width / 2, canvas.height - 120)
}
```

# Email

Your account is managed via email.

## Register

There's a button for getting your secret code.

```html
<button onclick="handleNoCode()">I don't have a code</button>
```

There's also a *hidden* email input.

```html
<form
  id="email-form"
  style="display:none"
  action="#"
  onsubmit="handleEmail()"
>
  <input type="email" id="email" />
  <button>Send code</button>
</form>
```

When you click on the button, it reveals the hidden form.

```js
const emailForm = document.querySelector("email-form")

const handleNoCode = () => {
  emailForm.style.display = "flex"
}
```

## Approve

When you register, I get sent an email notification. I check if you're email is on the list of members. If it is, I click the magic link in the email.

The magic link has the supporter's email address as a search parameter.

```
https://todepond.com/fame/dashboard/admin?addSupporter=todepond@gmail.com
```

The link takes me to the admin dashboard, where there's a form for adding new supporters.

```html
<input type="email" id="email" />
<select id="add-supporter-tier">
  <option value="froggy">Froggy</option>
  <option value="flappy">Flappy</option>
  <option value="beepy">Beepy</option>
</select>
<button>Add supporter</button>
```

The email input gets filled in automatically by the search parameter.

```js
const emailInput = document. querySelector("")
const params = new URLSearchParams(window.location.search)
const email = params.get("addSupporter")
if (email) {
  emailInput.value = email
}
```
