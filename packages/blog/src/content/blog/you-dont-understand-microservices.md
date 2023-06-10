---
title: "You Don't Understand Microservices"
pubDatetime: 2023-06-10
featured: true
draft: false
tags:
  - microservices
description: |
  This blog post is my take on why people say you should not use
  microservices.
---

## DISCLAIMER

These are just the rambling thoughts of a random guy on the internet. The
following are essentially notes I used to put my thoughts together for a
youtube video (should be linked below).

This article is not polished. It is a rough draft of the rough draft.

You have been warned.

By the way, how did you even end up here? 😂

## Table of contents

## Introduction

If you write software for a living, you've probably heard many times that
microservices are a bad idea and we should all just use monoliths. We seem to
be warned time and time again not to use a microservices. So why then are
microservices so proliferated?

Personally, I've never worked for an organization or company that didn't claim
to use microservice in some form or fasion.

I watched a video called "microservices explained in 5 minutes" and oh
boy, there's so much wrong that it inspired me to make my own video.

I won't link to the video because the goal of this is not to crap on someone
else's content, but because I want to talk about what microservices really are.

I think the main reason teams choose the _Microservice Architectures_ (MSAs) is
to decompose applications into separate services to make them independently
deployable. This is a misguided reason. **But if you think the main purpose of
MSAs to to independently deploy a project, then you might not understand
microservices very well**.

MSAs increase complexity. Why? And how? I'll get into that, but they do. But,
if the only reason a team chooses an MSA is to independently deploy services,
then additional complexity is introduced into the system essentially for no
good reason.

The following are a list of "assertions" I came up with that are true for
microservices.

## Assertion 1: If your system doesn't treat events as first class citizens, then you don't really have a microservices architecture.

I honestly am not sure there's a good term to describe the approach I see most
teams use, because neither SOA or MSA are totally fitting. I don't think you
truly have an MSA unless events are treated as first class citizens in a
system, which are used to solve fairly specific _optimization_ problems
(usually around scalability) in a system. But this idea of treating events as
first class citizens is a poorly understood subject by most devs and when
events _are_ used, it's usually a naive implementation, but most of the time,
teams do not have these things at the forefront of their mind when "adopting a
Microservices Architecture".

## Assertion 2: a key characteristic of MSAs is that each service has its own database.

And you never allow two services to share a database? But why? There's kind of 2 parts to this.

There's one part where you have encapsulation and separation of concerns. I
manage my data, you manage yours. But remember, microservices solve a specific optimization problem.
So the separation isn't only about logically separating databases, but also physically separating infrastructure.

If I have two services that use mongodb, each with their own databases, but
hosted on the same cluster, and one service experiences a huge spike in
traffic, this could effect the availability of the other service while you wait
for your infrastructure to scale up. If this is your architecture, do you
really have microservices? Because you have defeated one of the primary reasons
for using microservices.

How do things go wrong with this? In my experience, 1 of 2 things happens.
Either you end up having 2 services share the same database, breaking the
cardinal rule of not doing so, or you have one service rely completely on
another service for key pieces of data. The former is most common IME (in my
experience). For example, if you have the classic "Order Service" that tracks
all customer orders, then you might also have a "Product Service" where all the
data about products... also something about "Inventory Service"... and skip to
recording this... basically trying to say that communication between services
typically ends up being a bunch of synchronous (i.e. blocking) REST API calls
to other services. And this can create real preformance issues.

And so, what do you do?

## Assertion 3: cross cutting concerns between services is the crux of why microservices are difficult

It pretty much always boils down to sharing data, which introduces the tradeoff of:

- strong consistency (which is less preformant, but reduces complexity)
- eventual consistency (which offers preformance, but greatly increases complexity)

> Aside: in a monolith, this is far less of an issue because you have direct
> access to the data don't need to communicate with other services over a
> network to get the data that you need. You do need to communicate over a
> network to access the database (most likely), but this is far less costly in
> terms of preformance.

A well known quote from Star Wars:

> Fear leads to anger. Anger leads to hate. Hate leads to suffering.
>
> - Yoda

In like manner, MSA leads to cross cutting concerns, which leads to data
sharing, which leads to dealing with the tradeoff of strong vs eventual
consistency, which leads to either a significant decrease in preformance or a
significant increase in complexity (and sometimes both).

Oh, and MSAs also lead to suffering.

## Assertion 4: You should start with a monolith because...

A monolith is the quickest way to finding the hidden and unforseen complexity
that exists in every business. And if you start with a microservices
architecture, you will, 100% guaranteed, run into issues that will be far more
difficult to address/modify/fix than if you had just started with a monolith.
MSAs are an optimization. If you follow the common wisdom of "make something
work, then make it better, then optimize it", then starting with a monolith if
the logical first step.

MSA's introduce complexity, but provide benefits that aren't possible with
monoliths such as scalability that aren't possible (or at least, a lot more
difficult to achieve) with monoliths, but that complexity should be
intentional. Usually the complexity is unintentional, or at least not
anticipated, and you end up with a complex system without the true benefits of
an MSA.

---

# Transcript Notes

I'm lazy, and this is really only meant for my eyes (apologies random internet
traveler if you come across this), but the rest of this stuff is an audio
transcription of me just talking my thoughts out loud.

<details>
    <summary markdown="span">
    Click to expand transcription notes.
    </summary>

1st falacy, microservices are a bad idea. that's not true, microservices are an
optimization. there's certain scenarios where ma's are entirely appropriate.
the problem is, most people just jump for microservices right off the bat
before the understand the problem space.

this is a problem becuase MAs introduce complexity to a system. so if you want
to make your life more difficult, then use MAs.

if you're like me, then you may have thought that microservices make things
easier. that's the second fallacy, that MAs make things easier.

Okay, these are just kind of unstructured thoughts about microservices. Ah,
first fallacy is that microservices are a bad idea. That's not true.
Microservices are an optimization. There's certain scenarios where
microservices are entirely and completely appropriate. The problem is that most
people just jump for microservices right off the bat and use it before they
understand the problem space.

Microservices introduce a lot of complexity to a system. And so if you want to
make your life harder, then adopt microservices.

Now, when I say that, this is the way that I used to think about it, and I'm
sure a lot of other people, and I'm sure a lot of you think or have thought the
same thing, that Microservices make things easier. And that's second fallacy:
that microservices make things easier and that's why people jump to it.
Microservices do have benefits. I think the main one, and probably the reason
why developers choose a microservice is architecture, is because it's easy to
structure teams around independent services, and you can deploy independently
and have separate projects and it's easier to work on your own set of features
without stepping on other people's toes. But there's a couple problems with
that.

I used to reason that, if the MSA is the ideal end-all-be-all architecture,
(which it's not), then why wouldn't you just start with an MSA to begin with?

But in a lot of cases I think eventually it does make sense to move that
direction, and I see why teams choose to do that because of the aforementioned
reasons that I talked about with being able to deploy features independently
from other teams. Honestly, I think that's like the reason why developers
choose to use a "microservices architecture". Although just because you have
independently deployable services does not mean you have a microservices
architecture. That is not the single distinguishing feature of microservice.

I used to think it was an upfront choice, as in, you look at the business
requirements and decide that a microservices architecture makes the most sense
for the system you'd like to design. And we mainly hear about the monolithic
architecture and the microservices architecture. And then I guess somewhere
vaguely in there is the "services oriented architecture". Although if you look
at the definition for services oriented architecture, you know, I think it's
terrible definition. Maybe a correct definition, but think just the way that
the microservices architecture is defined, when you look it up on Wikipedia or
whatever, it's a terrible definition. Okay, I guess, the definition is good,
but calling it "services oriented architecture", at least based on the
Wikipedia definition, needs a rebranding.

Makes it sound like services oriented architecture needs to be some big ole
enterprise application thing. Which is, uh, I guess true those did exist, but a
services oriented architecture, to me, sounds like the correct term for what
most organizations do. Even though it might not be technically correct, I don't
like how I worded that, but whatever.

So I used to think it was a decision. What kind of architecture are we gonna
pick? Monolith or MSA. And the obvious answer always felt like at MSA. And so,
I thought in my mind, if we're going to pick the microservice architecture,
then that's what we should just adhere to, and any kind of design choice we
think about would need to adhere to that architecture, which in principle
sounds right. Is sounds good. But I no longer see the microservices
architecture as an upfront decision.

There are stepping stones you need to take before you can effectively adopt a
microservices architecture. And that's because when you start a new project,
there are so many unknowns about what you are going to work on. And as you
start to work on a project, especially Greenfield projects, or maybe even a
rewrite because no one understands the existing application and they think it'd
just be easier to rewrite that application than to try to modify the existing
one. In which some cases that is the appropriate thing to do, but most of the
time probably not. Even though you, you might be able to make a system that is
more enjoyable to use because it's using newer technologies, or maybe you
switch to a language that you like more, or a framework that you think is
better. Those things are all good and fine, but from a business perspective,
that is usually at the wrong decision. And I'll probably get bit if I say by
saying you should put business decision in front of the wants and needs of
developers. But first, I never said "needs". But I guess my point here is, like
that's kind of the fact. Like why are you working for a business if not to
provide value to that business? Now, I'm not saying that businesses should
never put the needs or wants of their employees ahead of the needs or wants of
the business. But there needs to be a balance there. And if the business is
suffering, then that will affect the developers eventually. And so, in the long
run, I honestly think that the better approach, when making technology
decisions, is to provide as much value to the business and help the business
succeed.

And when that happens, you end up creating more opportunities for developers,
for engineers, for employees. And that only happens when the business can
really succeed. And I've seen that fail miserably because developers are, we're
like, you know, the, the dogs in the movie "Up". We see a squirrel and we just
want to chase chase the shiny thing. And those things are fun and provide a lot
of satisfaction. But as developers, we also need to realize that there is
another aspect of this, which is, you know, we're working in
real businesses with real dollars affecting real people's lives, and it's not just about us.

And yeah. I don't know where I was going with that. What was I saying? Right,
so one of the best starting points is a monolith, right?

Okay. So rewrites happen because of the unknown. Because the
complex existing system or something like that. But, um, unknowns are also the
reason why should start with a monolithic design. And that's because just by
the nature of monoliths, you can iterate faster and they're easier to modify.

But, um, if, if you have a badly designed monolith, those are still going to be
infinitely easier to fix than if you have a poorly designed microservices
architecture -- by an order of magnitude. And I might even go as far to say
that (depending on the how large the system is), a well designed microservices
architecture could be more difficult to modify than a poorly designed monolith.

And this would probably be controversial to say, but if you can't see that or
don't under Sure.

So this might be controversial to say, but if you don't see or understand why
that is, then the chances are you don't really understand microservices.

So far I have two different assertions. So with this one, a key characteristic
of MSAs is that each service has it's own database. This is not the same as
owning it's data, but that might be for another video.

And how do things go wrong with this? My experience, one of two things happen.
Either you end up having two services share the same database, which breaks the
cardinal rule of not allowing two services share a database. Or you have one
service rely completely, or at least heavily, on another service for key pieces
of data.

And former is most common in my experience. For example, if you have a classic
online retail example where you have the an order service that tracks all
customer orders, then you might also have a product service where, uh, a
product service where all the data about. Products are stored like titles,
descriptions, SKUs and whatnot.

> INSERT THING ABOUT ONLINE RETAIL EXAMPLE HERE!

But basically what I, what I was trying to say is that, um, the thing that I
wrote down is that communication between services typically ends up being a
bunch of synchronous blocking rest API calls to other services, and this can create
real performance issues. And so what do you do? Well, other than things like
caching or scaling up your infrastructure.

Although I guess that even that can be difficult because, um, yeah. Okay. Don't
need to get into that. Um, but what was I trying to say? Right. Um, so this,
the performance bottleneck happens because of needing to make rest API calls.
Essentially, it's because of inner service communication, and inter-service
communication, due to the need to share data, is the crux of why microservices
are hard.

One of the most difficult aspects, if not _the_ most difficult aspect of
microservices, is cross-cutting concerns between services. It pretty much
always boils down to sharing data and I guess that introduces the tradeoff
between strong consistency with lower complexity, and eventual with greater
performance but greatly increased complexity.

If you're going to do microservices, more power to you. I think microservices
can actually be really fun to work with and they provide very interesting
challenges and I enjoy interesting challenges and so that's why I like working
with microservices.

But anyways, um, so if you're gonna be stubborn about microservices, just start
with a monolith. At least start with a microlith, which is kinda like a
microservice, but it's like shoving a ton of responsibility into a single
service in your quote "microservice architecture" unquote. Figure out the
unknowns of the business -- the hidden and unforeseen complexity that exists in
every single business -- and get to those as quick as you can.

And the fastest way to get to those as quickly as possible is with a monolith.
It is far more difficult to move quickly with a microservice. Once you have
several pieces that are all interacting with each other, it's a lot harder to
diagnose issues with microservices, and, once you've solidified certain
processes in a microservice and settled on some kind of API contract, then you
realize, oh, shoot, like we actually need to break the API contract in order to
accommodate for this unforeseen case that we didn't consider at first.

Then suddenly you're breaking a ton of different things by changing the API
contract. Or before you've even hit an MVP, or finished a pilot program or had
a full release, you're already working on a second version of the API in order
to maintain backwards compatibility, and that's just like insane.

I'm not making this, this isn't like on my mind because of things at work. So
if you're someone I work with and you're listening to this, don't take this
personally. But like I am currently witnessing this at work where within the
last couple months, definitely within the last six months, I wanna say shorter
than that, maybe even like three or four months, we've had a new service
developed and other teams in the organization have started to use this service.
And already I'm hearing them talk about creating version two and needing to
version the api. And we're still in like, prototype phase of some of our stuff.
Like, we have customers using our products, but like, major initiatives we're
working on are still in a pilot phase, and we're already talking about coming
out with a second major version of a service that was just created a few months
ago. And this is not an isolated incident.

I swear. I, I've seen this happen so many times. And sometimes I guess it is
unavoidable. That's probably a different conversation, talking about when you
first create a library -- like, I don't think you should put a major version on
a new piece of software until it's been running in a production setting for
a minimum of six months. If you're really impatient, then like three or four
months. But that is still not a lot of time.

But anyway, you should start with monolith because that provides because
monoliths it's easier and faster to get something working. And because a
monolith is the quickest way to finding the hidden and unforeseen complexity
that exists in every business.

It's the quickest way of finding the complexity that exists in every business,
and you start with a microservices architecture, you will, 100% guaranteed, run
into issues that will be far more difficult to address/modify/fix than if you
had just started with a monolith approach.

</details>

## TL;DR

Microservices are an optimization. If you follow the common wisdom of:

1. make something work,
1. then make it better,
1. then optimize it,

then starting with a monolith is the only logical first step.
