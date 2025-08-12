# thread to blog

paste a link to the final toot of a mastodon thread to turn it into markdown

<input id="putit" type="text" />

<button id="getem">Get it</button>

> i made this fckn website on my phone

<script>
const butt = document.querySelector("#getem")
const putt = document.querySelector("#putit")

butt.addEventListener("click", handleButt)

async function handleButt() {
const url = putt.value || "https://mas.to/@TodePond/115014625438544515"

const parts = url.split("/")
const conts = []

let id = parts.at(-1)

while(id) {
document.body.append(`toot: ${id}`)
document.body.append(document.createElement("br"))
const reqUrl = `https://mas.to/api/v1/statuses/${id}`

const res = await fetch(reqUrl)
const json = await res.json()

const content = json.content
conts.unshift(content)
const replyTo = json.in_reply_to_id
id = replyTo
}

const texts = []
document.body.append(document.createElement("br"))
for(const c of conts){
const div = document.createElement("div")
document.body.append(div)
div.innerHTML = c
texts.push(div.textContent)
}

const text = texts.join("\n\n")
navigator.clipboard.writeText(text)
}
</script> 
