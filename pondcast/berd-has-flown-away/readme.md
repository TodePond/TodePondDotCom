> This update is for [paying supporters](https://patreon.com/TodePond) of my work.<br>
> It's provided here, DRM-free :)<br>
> Please only read or listen if you've paid!

<input id="paid-checkbox" type="checkbox"><label for="paid-checkbox">Tick this box if you've paid!</label>

<script>
  const key = 'pondcast/paid'
  const paid = localStorage.getItem(key)
  const checkbox = document.getElementById('paid-checkbox')
  if (paid) {
    checkbox.checked = true
  }
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      localStorage.setItem(key, 'true')
    } else {
      localStorage.removeItem(key)
    }
  })
</script>

<hr>

# TODEPOND PONDCAST: Berd has flown away

Welcome back to another weekly episode of the ...

🐸 TODEPOND PONDCAST 🐸

What's new this week?

## Arrows in arrows in arrows

The new video is FINALLY OUT!!!!

Go watch it [here](https://www.youtube.com/watch?v=DNBKdU6XrLY) before reading on. As this pondcast will include some major spoilers!!!!!

I feel such a sense of relief from getting it out. That video has been brewing for SO LONG. And I'm so pleased with the response so far. Thank you - yes you - for supporting its development all this time. It really was my most ambitious project (so far), and I learned a lot of lessons along the way.

As promised, I wrote up all the reasons why it took so long, in this [retrospective]().

<audio controls>
  <source src="1.m4a" type="audio/x-m4a">
</audio>

_Days since tode fell asleep: _<br>
_Days since bot went missing: _<br>
_Days since berd flew away: _
