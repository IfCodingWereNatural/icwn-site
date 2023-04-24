---
title: 'Finish Deploying Our First Website'
pubDatetime: 2023-04-24
postSlug: website-deployment
featured: true
tags:
  - SST
description: |
  This lesson picks up from Part 2. We'll deploy the Astro website to
  CloudFront using SST.
postNumber: 3
---

## Outline

1. Show what I'll be deploying

   - Use cloudfront URL so you don't reveal `ifcodingwerenatural.com` yet
   - Show the file uploader thingy. I'll show the rest of the blog site later.

1. A thing or two from last time:

   - CORS is an opt in policy, so I assumed by not setting the `cors` options,
     the response would not include CORS headers, and therefore I would not
     have to deal with CORS.

     Setting `cors: true` turns out to have the opposite effect I thought it
     would have, which is, it adds CORS headers, but allows any method and any
     origin by default.

     TL;DR: if you don't want to deal with CORS, set `cors: true` in the config.

   - I made a claim about having wide open permissions locally. I need to test
     this out, because the docs say the lambda function that runs locally
     should use the same permissions as the deployed lambda.

1. Deploy to CloudFront and explain the architecture.

   - In last video, I showed that I could upload an image to S3 from my local
     machine. Upload an image on the deployed site to demonstrate it works in
     the cloud
   - Create a cronjob to delete images.

1. Introduce [ifcodingwerenatural.com](https://ifcodingwerenatural.com).

   - If I'm going to make a tutorial on deploying a website, I might as well
     launch a website for my YouTube channel while I'm at it!
   - Show that I deployed using the `StaticSite` construct instead of
     `AstroSite`.
   - Explain that my blog site needs almost no JS. One of Astro's main selling
     points is shipping zero JS, and my blog site certainly doesn't need SSR,
     so even though there's an `AstroSite` construct, the `StaticSite`
     construct makes more sense for my needs, (this is because `AstroSite`
     requires you configure astro with SSR enabled).

1. Next up, Live Lambda!
