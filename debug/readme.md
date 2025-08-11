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
})

</script>

back to the wikiblogardenite
