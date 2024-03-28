# Zoom out style

Hello again<span id="again"></span>. Zoom out style doesn't need to work on everyone. It's not a mass-market writing style.

But every now and then, it might resonate with one person, maybe one in a thousand, and capture something that can't be shared in any other way.

<br>

Back to the [wikiblogarden](/wikiblogarden/academia/style/zoom-out/for/ever) (for real this time).

<script>
  const count= localStorage.get("zoom-count") ?? 0
  const again = document. querySelector("#again")
  for (let i = 0; i < count; i++) {
    again. textContent += " (again)"
  }
  localStorage.set("zoom-count", count + 1)
</script>
