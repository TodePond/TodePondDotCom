
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
const texts = []

let id = parts.at(-1)

while(id) {
document.body.append(`toot: ${id}`)
document.body.append(document.createElement("br"))
const reqUrl = `https://mas.to/api/v1/statuses/${id}`

const res = await fetch(reqUrl)
const json = await res.json()

const content = json.content
texts.unshift(content)
const replyTo = json.in_reply_to_id
id = replyTo
}

document.body.append(document.createElement("br"))
const text = texts.join("\n\n")
for(const v of texts){
document.body.append(text)
document.body.append(document.createElement("br"))
}
navigator.clipboard.writeText(text)
document.body.append("copied")
}
</script> 
