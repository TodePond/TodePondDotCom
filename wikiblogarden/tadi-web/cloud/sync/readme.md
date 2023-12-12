# How to synchronise data

Here's how to [synchronise data](/wikiblogarden/better-computing/synchronising-data).

## Pick a format 

First decide what you want to store your data as. The answer is always JSON.

I'm making a shopping list, so I think I'll use JSON.

```js
let shoppingList = [
  { value: "pasta", bought: false },
  { value: "pizza", bought: true }
]
```

## Store it locally

Make sure you store it on your computer whenever you make a change. Local storage is fine. 

```js
localStorage.setItem("shopping-list", shoppingList)
```

## Store it remotely

We need to send it off to the cloud as well. For this example, I'll use my [imaginary remote storage helpers](/wikiblogarden/tadi-web/cloud).

Let's store our login details. Replace with your own address.

```html
<imput type="password" onInput="handleInput()" />
<script>
const input = document.querySelector("input")
const login = {
  address: "https://todepond.com/cloud",
  password: "",
}

const handleInput = () => {
  login.password = input.value
}
</script>
```

Whenever you update the shopping list, send it to the cloud.

```js
remoteStorage.setItem("shopping-list", shoppingList, login)
```

## Load it

Load it back up when you start the program.

```js
const localShoppingList = localStorage.getItem("shopping-list")

const remoteShoppingList = remoteStorage.getItem("shopping-list", login)
```

## Compare them

If both shopping lists are the same, then all is good! You're done!

```js
if (localShoppingList === remoteShoppingList) {
  shoppingList = JSON.parse(localShoppingList)
}
```

If they're different, then... uh oh! You're out of sync.

```js
if (localShoppingList !== remoteShoppingList) {
  // PANIC!!!!
}
```

## Merge them

If the lists are out of sync, you need to merge them together somehow.

To do this, show the user both versions, and ask them which one to keep. Let them copy stuff from one to the other as well.

<br>

Back to the [wikiblogarden](/wikiblogarden)

