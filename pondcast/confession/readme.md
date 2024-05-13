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

# TODEPOND PONDCAST: Confession

<audio controls>
  <source src="1.m4a" type="audio/x-m4a">
</audio>

Welcome back again. Again it's time... for another weekly episode... of the...

🐸 TODEPOND PONDCAST 🐸

What's new this week?

## Confession

I recorded some more voice over for the next video, Top 99 Ways To Make Sand. Who knows if it'll be used as "concept art" or end up in the real thing. I recorded a few takes and then placed them on top of each other, so that I can listen to _all three_ at the same time (same time).

I always do that approach, and then I end up liking it, and keeping in some of the overlap. Not all of the overlap, but some of it.

That section I recorded was important to get down, because it completely breaks up the tempo of the video (about halfway through).

## What it's about

What's the Top 99 video about? Surely it can't really just be about 99 Sands?

Well, no. It's not _just_ about sand. It carries on the theme of the first two videos in the [trilogy](https://www.youtube.com/playlist?list=PL9uRa69RF-7wCDlX55WjK7-gEb9nb3UPm) where tode's asleep. I won't tell you what it's _all_ about at this stage, but I will say that it's related to getting _stuck_. The trilogy is about getting stuck in different ways.

So this finale of the trilogy is about how to get unstuck. And the simple answer to that question — is to make 99 Sands in different ways.

The other thing is — tode, the character, is asleep. So the first video, [Define Define](https://www.youtube.com/watch?v=ZMklf0vUl18), was done by bot, the character, instead. The second video, [Arrows in Arrows](https://www.youtube.com/watch?v=DNBKdU6XrLY), was done by berd, the character, instead. This third video, Top 99 Ways To Make Sand, will be done by the narrator, the character, instead.

## Mentions

I was mentioned in a few places this week. Firstly, [Dave Ackley](https://www.cs.unm.edu/~ackley/) spoke a little bit about our collaboration work, in his monthly [update video](https://www.youtube.com/watch?v=mSM7Js644DI). Nice to see him smiling about it still!

Secondly, my work was briefly summarised and mentioned in [Ink & Switch](https://www.inkandswitch.com/)'s semi-regular [dispatch update](https://www.inkandswitch.com/newsletter/dispatch-004/).

And yesterday, my stupid [DreamBerd project](https://github.com/TodePond/DreamBerd) was [covered by a big streamer](https://www.youtube.com/live/NBF39o6XZZ8?si=ZNVas2gvMkcIYHvB&t=13674) that I've never heard of before, called [Theo](https://www.youtube.com/live/NBF39o6XZZ8?si=ZNVas2gvMkcIYHvB&t=13674). He said he's planning to do a full video about it, so I did a bit of spring-cleaning in DreamBerd this week. I hope to do a bit more too. And I also donated £99 to [UNICEF](https://www.unicef.org/) for one of the accomplished DreamBerd [bounties](https://github.com/TodePond/DreamBerd/discussions/616).

**Thank you very very much for all your support. And welcome to all the newbies this week! Did Theo send you? Or did you come from somewhere else? Either way, I can't thank you enough. And wherever you are in the world, whatever you're doing, I hope you have a great week.**

_Days since tode fell asleep: 494_<br>
_Days since bot went missing: 459_<br>
_Days since berd flew away: 122_
