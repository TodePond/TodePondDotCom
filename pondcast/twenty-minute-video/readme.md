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

# TODEPOND PONDCAST: Twenty minute video

<audio controls>
  <source src="1.m4a" type="audio/x-m4a">
</audio>

Finally, it's another weekly episode of the

🐸 TODEPOND PONDCAST 🐸

What's new this week? A lot.

## Twenty minutes

I've been editing and arranging the video, getting all the sands in order. As part of this, I've been cutting up and stretching around different pieces. This has caused some bits of music to get very disformed and messed up. It's got to a point where I've completely blasphemised [Ivan](https://ivanish.ca/)'s original score.

He said he'd be happy to do a better version of some of my edits. It's funny, the same exact thing happened with [Flora](https://floracaulton.com/) when I first tried to draw berd using her artstyle. Sometimes I can secure help just by doing something infuriatingly badly!

The video has changed quite a bit since Ivan made the first batch of music, so I had to update the shared plan to show him what will happen. The main difference is that it has quite a long section of lower energy, which is quite unusual for a (more recent) [sandpond saga](https://youtube.com/@TodePond?si=mVhwDLbwBvnncuCs) video.

Oh, and also, it's currently a twenty minute video.

## Four point five billion years

This week, I've also been planning a future video. It's not one of the choices from the [vote](https://www.todepond.com/fame/vote/). It'll come out a long long long from now, maybe multiple years away.

Why?

Because this video will be 100% animated, drawn frame-by-frame. So I've been discussing it with (British Animation Awards nominee) Flora Caulton, and we've been mocking up what it could look like, and how it could work.

God I wish I could work on this stuff full-time. Please tell your friends to sign up to the [patreon](https://patreon.com/TodePond).

## Seet

As part of my [research residency](https://www.todepond.com/wikiblogarden/research/er-in-residence/) at [ink and switch](https://www.inkandswitch.com/), I've been building? designing? exploring?

Hm..

I've been _working on_ something called Seet. I can see the potential for a tool that lets you _see_ computer memory. Or at least, a helpful representation of computer memory.

I explored a lot of prior art, and I made a crappy version of my own. And I came up with a way of annotating these existing examples - with three lines - red, green, and blue (like usual).

When I write it out like this, the project sounds really boring to me, which is why I'm really surprised by the response it has had so far. It seems to have struck a chord with people, so I think there's more to pursue here.

## Fractal bucket

I've started building [fractal bucket](https://www.patreon.com/posts/todepond-fractal-89529064), which is a programming language that you can paint (on the computer screen). I've been building it with a thing called [WebGPU] that lets you make it run very fast by using your computer's graphics card. It also lets you make it look very pretty and colourful.

First I had to learn WebGPU, and now I have an extremely barebones starting point for [fractal bucket]. I've built the basics - painting brush strokes, changing tools, and stuff. I've been focusing on making it feel nice, and smooth, and claylike.

On the canvas, you can paint two different things. You can paint pipes. And you can paint ... paint. Paint and pipes can overlap each other, or not, and paint gets drawn through pipes. I've tried out some different ways of visually representing this, and I don't like it yet. It needs to be more splodgy.

## Torn leaf

I'm setting up an experimental online gallery called [torn leaf](https://tornleaf.gallery). It's something that I've been thinking about for a long long time. And I think I finally have the chance to do it.

Check out the torn leaf [website](https://tornleaf.gallery) for more information, and please submit something! You can submit anything, as long as you follow the format.

I'm heavily influenced by [surrealist] movements that mixed together all sorts of fields, like art, philosophy, politics, comedy, literature, research. Let's see if we improve on that in the online age. I'd like to make something that feels human, and empathetic, and rebellious.

There's a good chance that torn leaf fails, but I really want to try. So please help! [Submit your submission](https://tornleaf.gallery) and invite others as well. I want to publish a wide range of diverse voices, including those who normally wouldn't do this sort of thing.

## Beyond efficiency

Last week, I appeared on the [future of coding] podcast's new [episode]. This time, it was about [Dave Ackley]'s paper, [Beyond Efficiency].

This was an important moment for me because Beyond Efficiency was the paper that got me into coding sand in the [first place]. Dave's [accompanying video] inspired me to combine falling sand games with a robust-first approach, and the rest is [history](https://youtube.com/@Todepond).

I hope people enjoy the episode and the rabbit hole.

And that's it for this week! Thank you so much for supporting me and my projects, and welcome to all the new supporters this week!

_Days since tode fell asleep: _<br>
_Days since bot went missing: _<br>
_Days since berd flew away: _
