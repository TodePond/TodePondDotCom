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

Go watch it [here](https://www.youtube.com/watch?v=DNBKdU6XrLY) before reading on. As this pondcast includes some major spoilers, as you may have noticed!!!!!

I feel such a sense of relief from getting it out. That video has been brewing for SO LONG. And I'm so pleased with the response so far. Thank you - yes you - for supporting its development all this time. It really was my most ambitious project (so far), and I learned a lot of hard lessons along the way.

As promised, I wrote up all the reasons why it took so long, in this [retrospective](https://www.todepond.com/wikiblogarden/arroost/so-long/).

And now I can finally talk about some of those spoilers.

## Berd has flown away

As you may have noticed, berd has left. Where have they gone? Will we ever see them again? All will be revealed in future videos.

It's such a joy - to try to craft out these stories that span over such a long period of time. They may take years to resolve. Or longer. But that feels special to me.

I never expected to be doing this sort of thing. When I started making these videos, I thought they were just little programming tutorials, or something like that. I never could have imagined such a large response from telling stories like... [tode going missing](https://www.patreon.com/posts/tode-is-missing-63932887).

I'll continue to mess around with the odd combination of 'tech youtube' and... whatever this is... that I'm doing...

## Flora Caulton

Did you see those insanely good animations of berd? There were the dances. And there was also the style-escaping dream sequence. Berd... grew a body? or something?

I'm so thrilled with how it came out. The style is perfect for the video - I love it. Its scrappy edges, and motion, and colouring. It's the perfect puzzle piece to kick off the Sandpond Saga's move to a more chaotic place.

The pond's characters - berd and tode - have their subtle personalities because of Flora's animations over the years. It wouldn't be half as good without them.

## Light mode

One of the last things I coded for the video was LIGHT MODE. The background turned white. And all the colours were flipped.

I did this because... when I was editing the video... that final sequence wasn't having enough of an impact. I wanted it to feel bigger, but I didn't want to make it more chaotic. I wanted there to be a sense of mild clarity through some of the madness, so I tried putting the berd-body animation on a white background.

I really liked it, and I wanted to commit to it. So I did the same for Arroost.

I haven't pushed any of that code yet. It's still sitting on my computer, along with some of the other final changes. I'll put them up eventually! But for now, I've been enjoying a hard-earned break from Arroost. After 11 months.

**Thank you for supporting me and my odd projects. I'm pleased you've been able to join me over the course of 2023, as I've built this thing. And I hope you've been able to enjoy its arrival last Friday. For all the new joiners this week - welcome! And I hope you enjoy the gradual buildup to the next video: Top 99 Ways To Make Sand. Next week, there will be a vote for the video _after_ that one. See you then! And have a great week - wherever you are in the world.**

<audio controls>
  <source src="1.m4a" type="audio/x-m4a">
</audio>

_Days since tode fell asleep: 380_<br>
_Days since bot went missing: 345_<br>
_Days since berd flew away: 8_
