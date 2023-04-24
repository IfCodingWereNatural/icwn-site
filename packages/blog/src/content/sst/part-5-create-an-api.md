---
title: 'API Gateway'
pubDatetime: 2099-04-23
postSlug: apigw
featured: false
draft: true
tags:
  - SST
description: |
    In part 5 we'll create an API Gateway and look at some more
    features of SST.
postNumber: 5
---

### Video Outline:
1. Create an API Gateway

### Need to figure out ordering of the following points

- Show how to configure function routes, such as increasing the timeout,
  setting up permissions, setting env vars, etc.
    - Set up config values using `Config.Parameter` and `Config.Secret`
    - Also cover loading config values from SSM parameter store.
    - Show `cors` option and explain by default it allows ALL methods (I got
      this wrong in my first or second video)
- Set up routes, including get, post, put, delete.
- Set up an authorizer and explain reuse.
    - Might be worth showing how to keep your authorizer (not have to detach
      it) during local development.
- Mention that by default, a new role gets created for each lambda and can make
  you hit the 500 resource cap for stacks. You can reduce this by creating just
  1 role an assigning it to multiple lambdas.
- Point out `api.addRoutes` for conditionally adding routes (I didn't notice
  this until looking through the docs).
- You can set permissions for the entire api (`api.attachPermissions(['s3'])`)
- You can set permissions for a specific route
  (`api.attachPermissionsToRoute("GET /notes", ["s3"]);`)
- Set up a custom domain
- Show that there are a ton of different options you can use to configure your
  API and I won't be showing every single option.
