---
title: 'Live Lambda'
pubDatetime: 2023-04-23
postSlug: live-lambda
featured: false
tags:
  - SST
description: If there's one reason to use SST, it's Live Lambda.
postNumber: 4
---

## Table of Contents

## Video Outline:

1. Demonstrate by showing the `Api` construct and pull up one of the lambda
   handlers.
   1. Start up sst
   1. Invoke a function
   1. Make a change
   1. Invoke immediately
   1. Profit
2. Explain why this is so amazing.

   - I already touched on some of these things in the introduction video
   - Working on lambda can be really painful

     - I used to use Serverless Framework and they had a feature called
       serverless offline. I found it really difficult to work with
       sometimes (I honestly don't remember the exact problems, just the
       lingering memory of pain). But it had shortcomings, and I personally
       found it more effective to create my own mock events and just pass in
       the mocks to my functions to test them out.
     - Another tactic I used was to only deploy the lambda function I was
       currently working on. This made it so I could deploy and test a
       function without deploying the entire stack.

       You could get similar functionality with AWS SAM CLI, which can
       detect local changes to your lambda code and immediately sync your
       changes to the cloud.

       And AWS CDK has a watch mode that does essentially the same thing.

       However, you still have to wait for the update to occur in the cloud.
       Even if it's only a few seconds, it can still be frustrating.
       
   - Check out the [Advantages](https://docs.sst.dev/live-lambda-development#advantages) section in docs.
        - The docs say it supports Lambda "IAM permissions", but from what I
          can tell this isn't true. If I'm totally missing something and you're
          from the SST team, please correct me in the comments.

   - Uses AWS IoT, which is completely serverless. This means it's very cost
     effective.

## Bonus Tips:
- I keep getting warning that `sst env` has been replaced by `sst bind`. But
  what does it do?

  Demonstrate by doing `pnpm sst bind sh` and display `SST_` env vars.

- NEED to talk about the new `Context` API!
