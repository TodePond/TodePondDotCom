# Hello world, tadi style

Here's how to code all the classic 'hello world' examples using a slippy mindset.

## Hello world

Easy, just an html file with the following words.

```html
Hello world!
```

<hr>

Hello world!

## Button counter

Another classic. A button that counts upwards.

```html
<button onclick="handleClick()">
  Count: <span id="count">0</span>
</button>

<script>
const span = document.querySelector("#count")
const handleClick = () => {
  span.textContent = parseInt(span.textContent) + 1
}
</script>
```

<hr>

<button onclick="handleClick()">
  Count: <span id="count">0</span>
</button>

<script>
const span = document.querySelector("#count")
const handleClick = () => {
  span.textContent = parseInt(span.textContent) + 1
}
</script>

## To-do list

We can use templates for this one.

```html
<main>
</main>
<button onclick="addItem()">
  Add item
</button>

<template>
  <p>
    <input type="checkbox" />
    <input type="text" />
    <button>Delete</button>
  </p>
</template>

<script>
const main = document.querySelector("main")
const template = document.querySelector("template")

const addItem = () => {
  const item = template.content.cloneNode(true)
  const delete = item.querySelector("button")
  delete.addEventListener("click", () => item.remove())
  main.append(item)
}
</script>
```

<hr>

<main>
</main>
<button onclick="addItem()">
  Add item
</button>

<template>
  <p>
    <input type="checkbox" />
    <input type="text" />
    <button>Delete</button>
  </p>
</template>

<script>
const main = document.querySelector("main")
const template = document.querySelector("template")

const addItem = () => {
  const item = template.content.cloneNode(true)
  const delete = item.querySelector("button")
  delete.addEventListener("click", () => item.remove())
  main.append(item)
}
</script>

## Any others?

Do you know any other classic examples I could make? Let me know. My details are on [todepond dot com](/).

<br>

Back to the [wikiblogarden](/wikiblogarden).
