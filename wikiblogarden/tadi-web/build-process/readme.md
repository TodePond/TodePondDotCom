<style>
  iframe {
    background-color: white;
  }
</style>
# Unorthodox build processes for your website

What is a build process?

## No build

The web is made up of html files. If you want to make a website, you need to make html files.

You can write html by hand. It's human-readable and human-writable.

You could make a website just by writing html, and uploading each file.

This is the NO BUILD build process. It's the simplest build process of all.

<iframe src="no-build"></iframe>

## Copy paste

Often, you might want to re-use certain things in every single page of your website. For example, maybe you want every page to have the same font colour, or the same link at the top of the screen.

You can achieve this by writing that code once, and then copy-pasting it into every new file you make.

```html
<!-- Copy paste this to the top of every new file -->
<style>
  color: blue;
</style>
<nav>
  <a href="/”>Go home</a>
</nav>
```

This is known as the COPY PASTE build process. It's another simple one.

<iframe src="copy-paste"></iframe>

# Embed

But what if you change your mind? If you want to change the font colour, or change the link... you need to change it in every single file. This could take a really long time!

Instead, you could write them in another file, and EMBED them in.

```html
<!-- Copy paste this to the top of every new file -->
<link rel="stylesheet" href="/style.css" />
<iframe src="/nav.html" />
```

<iframe src="embed"></iframe>
