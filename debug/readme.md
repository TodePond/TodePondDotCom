# debugging environment

this is a debugging environment for making websites on your phone

<textarea id="put" rows="5">
</textarea>

<section id="see" style="white-space: pre-wrap">
</section>

<script>
const put = document.querySelector("#put")
const see = document.querySelector("#see")

put.addEventListener("input", ()=>{
see.innerHTML = put.value
enableScripts()
})

function enableScripts() {
const oss = see.querySelectorAll("script")
  oss.forEach(os => {
const ns = document.createElement("script")
ns.text = os.text
os.parentNode.replaceChild(ns, os)
})
}

</script>

back to the wikiblogardenite
