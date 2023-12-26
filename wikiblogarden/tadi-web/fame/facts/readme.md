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

When you register, I get sent an email notification. I check if you're on the list of members. If you are, I click the magic link in the email.

The magic link has your email address as a search parameter.

```
todepond.com/fame/dashboard/admin?addSupporter=todepond@gmail.com
```

The link takes me to the admin dashboard, where there's a form for adding new supporters.

```html
<form action="#" onsubmit="handleAddSupporter()">
  <input type="email" id="email" />
  <select id="tier">
    <option value="froggy">Froggy</option>
    <option value="flappy">Flappy</option>
    <option value="beepy">Beepy</option>
  </select>
  <button>Add supporter</button>
</form>
```

The email input gets filled in automatically by the search parameter.

```js
const emailInput = document. querySelector("#email")
const params = new URLSearchParams(window.location.search)
const email = params.get("addSupporter")
if (email) {
  emailInput.value = email
}
```

I click the button, and it adds you to the Pond!

```js
const handleAddSupporter = () => {
    val(
      "todepond.addSupporter",
      emailInput.value,
      tierInput.value,
      passwordInput.value
    )
}
```

## Login

Then, you get an email with your secret code. Again, the email comes with a magic link that lets you login instantly.

```
todepond.com/fame/dashboard?secret=abcde-fghijk-etc
```

## Forgot code

If you forget or lose your code, you can click on the "I don't have a code" button. It'll send you a new one.

# Server

All those API calls get handled by [val.town](https://val.town).

## Get heroes

Easy, just get the blob.

```js
import { blob } from "https://esm.town/v/std/blob";

export async function getHeroes() {
  return await blob.getJSON("heroes");
}
```

## Set heroes

Similar, but check the password first.

```js
if (password !== process.env.FAME_ADMIN_PASSWORD) {
  return { success: false, error: "Wrong password" };
}
```

And make sure you aren't out-of-sync.

```js
const actualHeroes = await blob.getJSON("heroes");
if (JSON.stringify(actualHeroes) !== JSON.stringify(heroes)) {
  return { success: false, error: "Conflict" };
}
```

Then set the blob!

```js
await blob.setJSON("heroes", heroes);
return { success: true };
```

## Get supporters

Similar, but decode the data first.

```js
const supporters = await decrypt(
  encryptedSupporters,
  process.env.FAME_SUPPORTER_ENCRYPTION_KEY
);
```

## Set supporters

Encrypt the data before saving it. This means your email won't be exposed if there's a data breach, or if I mess up somehow.

```js
const encryptedSupporters = await encrypt(
  JSON.stringify(supporters),
  process.env.FAME_SUPPORTER_ENCRYPTION_KEY
);
```

## Encryption

To do the encryption, I copy-pasted some code from stack overflow.

## Login

Check if your secret code is valid, and give back your id 

```js
const supporters = await getSupporters(process.env.FAME_ADMIN_PASSWORD);
const supporter = supporters.find((s) => s.secret === secret);
if (!supporter) {
  return null;
}
return supporter.id;
```

## Emailing

Val town makes emailing really easy.

```js
import { email } from "https://esm.town/v/std/email";

await email({
  to: "todepond@gmail.com",
  from: "todepond.com@valtown.email",
  subject: "Secret code request",
  html: `Secret code request from ${address}`
});
```

## Secret code

Generate a unique, secure, secret code.

```js
let secret = crypto.randomUUID();
while (isCollision(secret, supporters)) {
  secret = crypto.randomUUID();
}
```

Don't really need to check for duplicate codes, but why not eh.

```js
function isCollision(secret, supporters) {
  return supporters.some((s) => s.secret === secret);
}
```

## Backup

I get daily backups via email by running over of my vals on a very long interval.

```js
email({
  text: JSON.stringify(heroes) + "\n" + JSON.stringify(encryptedSupporters),
  to: "todepond@gmail.com",
  from: "todepond.com@valtown.email",
  subject: "Pond of fame backup",
});
```

# The end

That's everything! That's all you need.

Listed out, it seems like quite a lot. But that's because I went through it in such close detail. I hope that nothing was left out as 'assumed knowledge'.

And the number of concepts was actually very low. Everything was written with fairly boring html and javascript. There was no build step, no environment setup, no extra tooling. JUST HTML FILES AND JAVASCRIPT FUNCTIONS. BEAUTIFUL BORING SIMPLICITY.

## Slippy as hell

Of course, all of my code behind this is highly portable. You're not locked into any stack or ecosystem, like vercel, deno, supabase, react, next, github, node, blah blah.

It's just html files. And javascript functions. I think I said that already.

## What about val town though?

Val town uses deno and cloudflare workers behind-the-scenes. But it provides a wrapper around them that is highly portable. It's a way of using these closed-off ecosystems in a way that doesn't lock you in. Because of this, I'm more than happy to pay for val town for higher rate limits, and more customisation.

Their [recent changes](https://blog.val.town/blog/introducing-val-town-v3/) made val town even more portable, which I'm pleased about.

## But what if they go bad?

I trust the people behind val town. I've met [André Terron](https://www.andreterron.com/) in person, and I admire [Steve Krouse](https://stevekrouse.com/)'s work.

But if they DO go bad, or sell out... I know I could pull out all my code and it'll work somewhere else (with a little bit of tweaking).

And it's all simple enough that I could probably rebuild it from scratch! I didn't have to spend weeks learning a whole new messy pile of systems (like most other providers). I built the whole thing in 3 days. If I started again now, I could probably do it in 1.

So... for me, it's a no-brainer to pay for val town. It lets me stay slippier than ever.

## Are val town paying you to say this?

No but I do like the people behind it, so maybe I'm biased. Take with a grain of salt.

<br>

# Links

The pond of fame is all [open-source](https://github.com/TodePond/TodePondDotCom/tree/main/fame/dashboard)! And my vals are all either public or unlisted on [my val town](https://www.val.town/u/TodePond).

If you want to be part of the pond of fame, sign up on my [patreon](https://patreon.com/TodePond).

Tell me what you think! If anything seems unclear, or this helped you, or you have any thoughts at all, please let me know! My email is on [todepond dot com](https://todepond.com).
