---
title: 'Finish Deploying Our First SST Website'
pubDatetime: 2023-04-23
postSlug: website-deployment
featured: false
tags:
  - SST
description: |
    Picking up from Part 2 and deploying the Astro website to
    CloudFront.
postNumber: 3
---

## Outline
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

