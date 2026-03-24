# Nudel's longest death

[Nudel](https://nudel.cc) is down at the moment. It's the longest it's ever been down. I was one of the instigators of this, along with several other [pastagang](https://codeberg.org/pastagang) jammers.

It doesn't bring me joy. It makes me quite sad. It makes me *really* sad! Nudel has represented a magical and wonderful part of my life over the past ... (checks watch) ... 17 months. It has introduced me to an entire new world. It has taken me to new places: It has let my travel around and meet people and take part in talks and performances. It has given me many new in-person friends. It has got me to start performing music in-person. It has been an absolute whirlwind and I can't even start to try processing all that right now. 

All of this on a backdrop of an increasingly broken world, nudel has been a sanctuary / escape within the ... (gestures at everything).

<br>

Different people had different understandings of what nudel was or what was expected from it. That was kind of the whole idea. The [original readme](https://codeberg.org/pastagang/nudel/src/commit/cfab36b874b1d9830c9aca9121bc2b9c878b6d2a/README.md) (which was [not written by me](https://codeberg.org/pastagang/nudel/commit/cfab36b874b1d9830c9aca9121bc2b9c878b6d2a)) read as follows:

> "you can create an issue to get invited as a maintainer of this repo.\
let's aim to be hierarchy free, so anyone is welcomed to change things they see fit.\
let's _not_ have a bdfl, or a small group of people having the last say.\
let's _not_ have hard rules to how we roll here. create a PR, or push directly to main.\
this project has been born out of a jam session, so let's carry that ethos into the code behind the jam."

That change changed pastagang. It wasn't like that before. Pastagang had existed 3 months up until that point and it had all been pretty distributed. Different people did different things. For example, Felix was making nudel. Midirus was making tracks. I was making the pastagang website. It feels almost sacreligious— is that how you spell it? It feels [illegal](https://pastagang.bandcamp.com/album/all-the-best-things-are-illegal-live) to say that now. Nowadays, we'd say that pastagang made those things or we'd use the mantra: "i'm pretty sure it was pastagang", and with good reason: It's an oversimplification to attribute credit to any one individual. It fails to acknowledge the small acts of collaboration that happened. So we started using the word "pastagang" to avoid the annoying case where we miss people out when giving credit. "Pastagang did it" means "everyone did it".

Back then, "pastagang" wasn't really a thing at all, so saying "pastagang did it" felt like nonsense. Nowadays, now that pastagang is a beast of its own, "pastagang did it" has a different feeling: It has a different taste now.

<br>

After the change to the nudel readme, most pastagang-related projects got "donated" / "given" to pastagang. Back then, this meant transferring ownership to the pastagang organisation on GitHub.

We *did* give admin rights to anyone who asked but we were certainly more cautious at the start. There are different levels of "admin" back on github and different people had different rights depending on how trusted they were. And still, many people didn't become admin and instead submitted pull requests. That's where the infamous "merged without checking" line grew.

Over time, we clearly became numb to the fear of vandalism and it got to the point where everyone was not just an admin of nudel, but an owner of the pastagang organisation itself, which eventually moved to codeberg. It even got to the point where there was a public password for an [owner account](https://codeberg.org/anonymous_nudelfan) that anyone could log into.

<br>

It has always been my opinion that part of the reason jamming works is: The environment is set up to put the laws of entropy on your side. It's much easier to delete than to create. This means: If things get bad(!) or problematic, you can delete everything and start again with no problem. In nudel itself, this is evident. When you experience a bug in your strudel that you're struggling to figure out, you can *always* select all + backspace to fix the bug, no matter how complex it is. Likewise, if someone starts typing hateful things— Well, in nudel, it's much easier to delete things than to type them. This is why paste and undo are disabled.

I disabled pasting in nudel (yes, me!) because I noticed that some people were using pasting to enforce their vision of what panes should be used for. Although it was for harmless fun things, I saw it as an abuse vector. I saw how easy it was to force things to appear and I worried about someone doing the same with something offensive. And besides, it seems more in the spirit of live coding to type things out by hand on the spot instead of bringing things in from the past. 

We didn't get rid of pasting altogether. It's still nice to be able to do that: We just needef to change the laws of entropy around it. Back then, I added pasting mode that was intentionally annoying to use. Over time, other jammers worked towards the right balance. The problem with my original implementation was: Once you're in pasting mode, you can keep pasting to your heart's content. Nowadays, pasting mode is easier to enable but it gives you a popup every time you paste with it. This slows you down. It gives the deleters the upper hand. It biases the direction of flow **towards scratch**.

I did not remove undo but it was done by a complete newcomer after being told about the pasting thing. I remember some people complaining about it at the time within nudel, but it stuck around, and it further gave the deleters the upper hand. If someone deletes your code, it's gone for good. There is no going back. There is no undo.

<br>

The same rules don't apply to the nudel repo itself. It's very easy to "undo" a change. It's very easy to paste in old code. That's why nudel reappeared within 24 hours after someone deleted it the first time. That person wasn't me and it seems like whoever did it felt a bit [bad about it](https://codeberg.org/pastagang/pastagang/src/branch/pages/_posts/2026-01-12-pastagang-killed-the-nudel-repo.md) afterwards.

In this sense, the laws of entropy are very different outside nudel.

- Deletions can be undone. 
- Old things can be pasted.
- Deleters feel bad about deleting.

Compare this to within nudel itself where: 

- There is no undo. 
- Pasting is disabled. 
- Everyone embraces deletion. We let code die and move on. 

Though even in nudel, that third point has really begun to change. More and more people are resistant to deletion within nudel and it's becoming common for people to call you names or complain or try to get you to feel bad when you delete something.

Let's be clear: It's okay to be against deletion. It's okay for a community's values to change. What's tricky is: Nudel is built from the ground up to make deletion easier. But the people using it more and more are anti-deletion. This creates an uncomfortable mismatch. The values of the tool do not match the values of the [user](https://codeberg.org/pastagang/pastagang/src/branch/pages/_posts/2025-01-31-kill-the-user.md).

Maybe those newer users are less involved in developing nudel itself. Maybe they're not involved at all. Or maybe they feel they're not allowed to change some of the fundamental parts of nudel (eg: no pasting, no undo) despite there being no rules.

I wonder about a nudel-like tool that's more centered around code that lasts for a longer time. I think it would be really cool. Maybe there's a way to work on something by yourself for a while before adding it to the jam? Maybe you can watch people play single player and then come combine your single player creations together in exciting collaborative ways? I think there's loads of opportunities. The kind of work I see being done in nudel nowadays is way better suited towards something like that so I think it's a tragedy that this new wave of usage is trapped within a tool that is set up for the opposite approach: ephemeral code, rapid deletion, continual re-writing.

I think this new wave of pastagangers shouldn't be held down / held back by nudel. We should make space for them by making tools and environments where they're set up to win, not lose.

<br>

[Pastagang is political](https://codeberg.org/pastagang/pastagang/src/branch/pages/_posts/2025-09-10-is-pastagang-political.md). It's clearly anarchist, and anti-hierarchal. It's also very queer.

So it's been odd to see more and more linkedin-style dudebro language being thrown around it more recently. But it's even more proof that "mixed gendered spaces often quickly become male-dominated" // [thanks yaxu](https://post.lurk.org/@yaxu/113316566983590414)

Yes, it has made me very angry the number of times people have referred to me as "man" and "mister" and "dude" and "guy" and "bro" within nudel. Why would you assume that?

This is a big reason for me wanting to destroy nudel. 

<br>

Another big reason for me wanting to destroy nudel is the realisation that it is increasingly being used by children. I keep getting sent screenshots and reports of "incidents" that happen inside it where jammers who self-report as being children seemingly have meltdowns within nudel. And even worse, tons of adults seem to be interacting with them during these meltdowns. This is ridiculous. This has to stop.

It's a really complex topic in some ways. The "think of the children" angle is often used as nothing more than a hammer against *people like me*. But come on, be real with me: If children are having meltdowns in nudel while chatting to adults then *What are we doing*??

Whether it's one or two or more children, I don't know: What's clear is that it's happening and that several people are worried enough about it to send me and others screenshots of it. 

This isn't right. This ain't it.

<br>

Unfortunately, as I mentioned, you can't [just] delete nudel. It's too easy to undo the deletion or to paste it back again. So I had to be more creative: I needed to get the laws of entropy on my side if I wanted to win. I made the most of the rules of nudel itself (where there is no pasting and undoing) by making a script that deletes the entirety of nudel every half-second. It's been running for about a day now. It works. Nudel is dead. 

<br>

The deletion has been messy. Someone also closed dente for a long time using a similar script. And someone even went as far as deleting the entire pastagang organisation on codeberg. It's unclear if this was done in retaliation or in frustration or for fun or whatever. Either way, it's okay! Either way, it's what I signed up for: It's part of the jam: It's part of the cycle: Create, delete, create, delete. 

<br>

I doubt pastagang will grow back the same way. There are many questions about what will or should happen in circumstances like this because it's never happened to this extent before. That's exciting! 

The garden has been cut back after winter. Spring is here and the sun is shining through. There is a lot of light filling spaces where things once were, and new seedlings are poking up, thinking "Is this my time?" "Is this my space?"

Yes it is, little seedling. Do it. 

<br>

Like I said, I think the newer waves of jammers deserve better than a tool that's designed to thwart them. Don't settle with nudel: You can do so much better. 

For myself, I think I'm interested in going even further in the other direction. I'd love to see more variance and extremes within the group. Dente was clearly an exploration of minimism but it's already growing too big and I see it becoming yet-another-nudel. (Did you know: nudel was originally intended to be lightweight - but it didn't last long).

I'm also thinking a lot about how we can make tools that make more space. In the early nudel days I worked a lot on the settings system. It was a framework that people could use to make nudel more personalised. I think it worked, but it also feels so unambitious still. We can do so much more than [just] settings. 

A big part of the early nudel 2 work was about making space for *all sorts* of tools. It was jokingly called the "pastaverse" within the codebase, and I still feel confident that that's the right direction to go in. 

I'm also thinking of how we can let deletion win within our codebases and repos though.

And I'm thinking about how we can make public spaces that don't become male-dominated.

And I really have no idea what to do about children joining nudel but I know we have to do *something*.

<br>

Nudel might come back. It might not. Either way, everything will be different. We'll be in a post-destruction world either way. Either way...

I know some people think it's ridiculous to spend so much effort and energy in a project like this, and I don't need them to understand. I also know that some people psychoanalyse me over what I do within pastagang which I find really creepy but unfortunately unsurprising too.

Either way...

<br>

[Nudel](https://nudel.cc) is down at the moment. It's the longest it's ever been down. I was one of the instigators of this, along with several other [pastagang](https://codeberg.org/pastagang) jammers.

It doesn't bring me joy. It makes me quite sad. It makes me *really* sad! Nudel has represented a magical and wonderful part of my life over the past ... (checks watch) ... 17 months. It has introduced me to an entire new world. It has taken me to new places: It has let my travel around and meet people and take part in talks and performances. It has given me many new in-person friends. It has got me to start performing music in-person. It has been an absolute whirlwind and I can't even start to try processing all that right now. 

All of this on a backdrop of an increasingly broken world, nudel has been a sanctuary / escape within the ... (gestures at everything).

<br>

back to the [wikiblogardenite](/wikiblogardenite).
