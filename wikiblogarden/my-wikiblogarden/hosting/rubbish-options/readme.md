# Rubbish hosting options

My website is hosted on github pages. I don't like it.

## Github pages

[Github pages](https://pages.github.com/) is easy. You just write some markdown, add some DNS records, and you're done. The hardest part was the DNS, but it was mostly a copy-paste job. I could set it all up again easily.

Your pages come with some default styling, and extra SEO bits that you don't want. But you can override this default 'layout'. I just cleared it all out, and started from scratch.

_From a slippiness point-of-view, it seems good._

But... it's all built on top of github stuff.

- The online editors are rubbish. It's not that they're lacking features. They have _too many_ features. They're slow, and bad on mobile, and very un-local-first. I could write my own little editor, but I don't want to have to use the github API, and get more ingrained with them.

- The github website is getting more and more infected with advertising about AI. They're always trying to trap me into their new locked-down systems.

- It's very slow to update the site. The time from 'commit' to 'publish' is long. I have to wait a while. Converting markdown to html should be fast.

**In conclusion, github pages starts slippy, but gets less slippy as you go deeper. I want to leave.**

## Codeberg

[Codeberg](https://codeberg.org/) is like a non-evil version of github. It has many of the same features, like pages, and editors, and so on. Also, the editor is really nice!

However...

- They've been having trouble recently with keeping the servers running smoothly. I'm hesitant to put my stuff on there, which can occasionally attract bumps of high traffic. The site itself can load really slowly on certain pages.

- You can't just write markdown. You need to implement your own build step for converting it to html. They said they don't want to add this feature.

I'm not sure that codeberg is the place for me at this point. Maybe if their server situation calms down one day. But seeing as they don't provide an auto-markdown-build step, I don't think I get much from it anyway, compared to some of the following choices.

## Surge

[Surge](https://surge.sh/) is a super simple static file host.

But...

- It all happens from the command line. This means that I can't update my website from my phone. I guess I could add an action to github or codeberg or something. But then I may as well use their services, instead of adding an extra thing into the mix!

- Even worse, it runs on node, which means entering the highly unslippy ecosystem of tech-bro-hell.

If someone wrote a noob-friendly visual UI wrapper around surge, maybe it would be worth it.

## Neocities

[Neocities](https://neocities.org/) is fun and simple. You just put files on it. You don't need to use the terminal, but you can if you want.

- It doesn't auto-convert markdown to html though.

- Damn. Is there no way I can add a build-step to one of these things in a simple way?

<br>

I discovered a [journey](../journey).
