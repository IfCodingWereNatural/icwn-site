---
title: SST Tutorial Course Outline
pubDatetime: 2022-06-06T04:06:31Z
postSlug: sst-tutorial-course-outline
featured: true
draft: false
tags:
  - TypeScript
  - SST
description: Course outline for SST tutorial.
---

## Part 1: Introduction

Learn how to build full-stack applications on AWS with Serverless Stack (SST).
This introduction video covers what SST is, compares some alternatives, and
explains why you'd want to use it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/E547i_xPqrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Part 2: Getting Started

Learn how to build full-stack applications on AWS with Serverless Stack (SST).
In this video, I'll setup our first SST project and show how easy it is to
deploy infrastructure to AWS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PlmzPEfchBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Part 3: Finish Deploying Our First Website

### Video Outline:
1. Explain what we're doing
1. Deploy to CloudFront and explain the architecture.
   - Upload an image to demonstrate it works in the cloud
   - Create a cronjob to delete images.
1. Introduce [ifcodingwerenatural.com](https://ifcodingwerenatural.com). If I'm
   going to make a tutorial on deploying a website, I might as well launch a
   website for my YouTube channel while I'm at it!
   - Show that I deployed using the `StaticSite` construct instead of
     `AstroSite`.
   - Explain that my blog site needs almost no JS. One of Astro's main selling
     points is shipping zero JS, and my blog site certainly doesn't need SSR,
     so even though there's an `AstroSite` construct, the `StaticSite`
     construct makes more sense for my needs, (this is because `AstroSite`
     requires you configure astro with SSR enabled).
1. Next up, Live Lambda!

## Part 4: This is Why You Should Use SST: Live Lambda

### Video Outline:
1. Show with showing the `Api` construct and pull up one of the lambda handlers.
    1. Start up sst
    1. Invoke a function
    1. Make a change
    1. Invoke immediately
    1. Profit
2. Explain why this is so amazing.
    - Mention that I already touched on some of these things in the [introduction](#part-1-introduction) video.
    - Working on lambda locally can be painful.

