---
title: 'The Essence of Vim: Perspectives from a Former VSCode User'
pubDatetime: 2022-04-18
postSlug: essence-of-vim
featured: false
draft: true
tags:
  - VIM
  - NEOVIM
  - VSCODE
description: |
    In this blog post, I share my journey between Vim and VSCode, exploring the
    trade-offs and learning curves. 
---

## Table of contents

## A tale as old as time

My story is not uncommon. Early in my college days, I took a class where the
professor gushed about this thing I had never heard of - an editor called Vim.

> It was as though VSCode was giving me an ultimatum: "It's me… or Vim".

At first I was intrigued. Through innocent curiosity, I began to dabble. Of
course, I was terrible at first, but took pride in each small step gained. I
grew in confidence, knowing I could SSH into a remote server and edit files
without getting completely lost. Sure, I'd still reach for the arrow keys
instead of hjkl and occasionally get stuck in Ex mode (honestly, I still don't
know how to get out of Ex mode). Slowly, I improved, but wasn't ready for a
long term commitment.

Around this time, I had been in a relationship with Atom when this new flashy
new text editor caught my eye - Visual Studio Code. It was well connected and
came from a wealthy company. Dumping Atom was an easy choice. 

Things were wonderful in the beginning. However, eventually the feelings grew
platonic. I kept asking myself if I'd made the right decision. But you know, we
just… worked. VSCode was safe, familiar, and provided a sense of stability.

---

Eventually, I graduated from college and started my career. Occasionally, I'd
run into my old friend, Vim, and old feelings would resurface. I don't know if
it was simply boredom or realizing VSCode wasn't allowing me to be my best
self, but I started flirting with the idea of using Vim as my full-time text
editor. 

Unfortunately, as much as it made my wrist ache, it was just too hard.
By this point, VSCode and I had already had several projects together. It
wasn't only about me anymore, you know! Sure, I installed the Vim extension in
VSCode, but this only made things worse. The more I got to know Vim, the more I
needed it. How could I ignore the increased productivity and satisfaction I
felt as a developer? The buttery smooth keystrokes made me feel alive again as
I shot through my editor. I soon realized there was no going back. **I felt stuck
between two worlds: VSCode on one hand and Vim as an extension on the other. I
was living a dual life and I could tell Vim didn't feel like it belonged**. It
was almost like a mistress living in a house she knows isn't really her own.
Ha, I'm getting carried away -- such a silly analogy.

> I felt stuck between two worlds, VSCode on one hand and Vim on the other. I
> was living a dual life and I could tell Vim didn't feel like it belonged.


Time passed and I began to think
things might work out. But, as life would have it, I was unexpectedly put on a
large Typescript project. Just kidding, the project wasn't even that large.
Yet, out of nowhere, VSCode started struggling, like, a lot. The constant
linting, auto formatting, file watchers, and running code diagnostics became
too much for VSCode. 

This sort of thing had happened to some extent before. I
noticed VSCode was spending more and more time with Code Helper (Renderer). I
felt distant and we seemed to grow further and further apart. But, I had to
maintain the status quo, so I did what I could to keep us going.

---

## The ultimatum

Others had warned me of potential performance problems with VSCode, and trust
me, I had my suspicions. Yet, I never thought it would happen to me. *To me!* I
tried disabling other extensions in the hopes of patching things over, but in
the end it was as I had feared. The bulk of the performance issues stemmed from
my relationship with Vim. *It was as though VSCode was giving me an ultimatum:
"It's me… or Vim."*

And so I followed my heart and left VSCode.

It was hard. There were difficult days. At times I was tempted to run back to
the familiarity of VSCode. *But I was through with settling.*

I was fully committed to this new life, *but I couldn't deny that VSCode had
changed me*. I realized the most important thing to me was simply having an
editor that works. Even to this day, I still struggle with this.

---

## The Essence of Vim

Satire aside, entering the world of Vim is extremely daunting for the
uninitiated. Vim comes with its own set of tradeoffs, mainly in the form of a
large upfront cost, paid in the currency of time. But simply understanding Vim
is not enough. You could know the help docs in and out. You could know the
difference between the different modes, including insert, normal, visual,
visual block, visual line, select, select line, select block, insert
completion, insert visual, insert visual line, insert visual block, insert
select, insert select line, insert select block, replace, and virtual replace
modes (did I miss any?!?!). You could know everything about Vimscript or be a
master with Lua. In fact, you could have a perfect understanding of Vim and
still be completely useless.

> You could have a perfect understanding of Vim and still be completely
> useless.

Why? Because effectiveness in Vim comes as a result of repeatedly doing the
same things over and over until they become automatic. In a literal sense, you
must become Vim. It's knowledge stored in the body, not the mind. That's the
essence of Vim. You simply think of what you want and it happens automatically.
But boy oh boy, it takes time to get there.

> In a literal sense, you must become Vim. It's knowledge stored in the body,
> not the mind. That's the essence of Vim.

I no longer consider VSCode a viable alternative *for myself*. This is, after
all, a personal journey. Yet, on the other hand it takes hours of configuring
Vim to bring it up to feature parity with VSCode. And after the configuration
is done, it takes even more hours of training muscle memory before the promise
of increased productivity comes to fruition. And that's not even the end of it!
Oftentimes, I discover a new plugin that solves a problem I didn't know I had
or has a superior workflow I need to adopt, taking me back to square one.

> Aside: Thankfully, Neovim takes some of the pain of configuration away. As
> the Neovim core team continues to add Lua support, I suspect things will only
> get better.

There's a sentiment in Vim culture that one's `.vimrc`/`init.vim` is a very
personal thing. The uniqueness of a setup is often engendered with feelings of
pride and something to be celebrated. My personal take: this just happens
naturally as people cobble together a config until it finally works, which has
resulted in people [bikeshedding](https://thedecisionlab.com/biases/bikeshedding) over whether `,` or `<space>` is the superior
Leader key, or if you should use `Ctrl-c` or type `jk` in rapid succession to leave
insert mode. Consistency is difficult to find in Vimland when every possible
key combination is a potential shortcut. It's one of Vim's greatest strengths
and weaknesses at the same time.

When someone shares their Vim config publicly, it's often done in the spirit of
providing inspiration or instruction. For long term Vim users, adopting someone
else's config would represent a massive disruption to their workflow. New Vim
users are more prone to doing a full "copy-paste" of someone else's config,
which only results in a suboptimal effectiveness (I know because I've been
there). This is because new vimmers don't understand or consider how an author
arrived to a specific setup, including the problems they were trying to solve,
why they chose their specific set of plugins, their choice of keybindings, and
so on.

As a personal example, I just discovered the power of Telescope integrated with
ripgrep to pipe language diagnostics provided by null-ls/LSP into a quickfix
list so I can apply a regex pattern with :cdo to preform a project wide find
and replace.

Those familiar with the workflow I just described are going, "Awesome, right!"
Long term Vim users who're unfamiliar with one or more of the tools mentioned
are going, "Hmm, sounds interesting, I should learn more." New Vim users are
going, "Wtf did I get myself into?…", and VSCode users are going, "Did you say
'find and replace'? Yeah no. I'll stick with Ctrl+Shift+F". And I wouldn't
blame them. Forgive the generalizations, but the sentiment is spot on.

---

## So now what?

In mentioning the above find-and-replace workflow, I readily admit I didn't
come to it on my own. It came as a result of [Lunarvim](https://lunarvim.org).

Lunarvim is and "IDE layer for Neovim" that ships with a nice collection of
plugins and sane defaults. This came as a reprieve because I could get
something out of the box that's 100% Vim native with (nearly) every feature I
want in an IDE .

> NvChad is another preconfigured Neovim editor I think deserves an honorable
> mention, which (at the time of writing) has more stars on Github than
> Lunarvim.

Historically, Vim/Neovim users have been known to get a kick out of tinkering
with their config. I suspect there's a growing audience who want to use Vim as
IDE without the toil of configuring every last inch of their environment.

I've felt the confusion of figuring out which plugin manager to use, why there
are so many, and feeling frustrated that I even needed to care. I picked up Lua
for no other reason than to configure Neovim. Yeah, it's a nifty little
language. *No I don't care*. **After all, I use Vim for the express purpose of
writing code as productively and quickly as possible.** Learning an extra
language (even a simple one) simply to configure my editor so I can do my
*actual* work is a *pretty big freaking barrier*!

Despite Lunarvim providing a prebuilt Neovim, I still found myself tweaking the
experience, which naturally involved going down deep and cavernous rabbit
holes. It wasn't exactly what I'd call a user friendly experience. But it is
progress.

---

## TL;DR

This is a long winded post, it's late, and I'm stalling, so here's the short of
it.

- I envision a day when there's a fully featured, Vim native IDE, that just
  works and is easy to configure.
- Vim is already hard enough to learn let alone a whole plugin ecosystem. While
  I fully respect the tinkerers, some of us just want to skip to the part where
  the coding happens for our day job.
- VSCode, despite its bad rap in the Vim community, has valuable lessons in
  usability and ergonomic interfaces.

Ironically, I guess it's time to learn how to write Lua plugins for Neovim and make the dream happen!
