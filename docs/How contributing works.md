---
sidebar_position: 2
title: 'How contributing works'
slug: /contributing
tags:
  - Contributing
---

This website was built in such a way that creating a markdown file in the docs folder will make a new entry in the sidebar. Making a new folder makes a new dropdown in the sidebar and making a new markdown file in that folder makes an entry in that folder's dropdown. You can modify folders and files by cloning the [GitHub](https://github.com/CubeBeveled/6b6t-wiki/) repository.

## What are markdown files ?
Markdown files have the extension of .md, and are like HTML as they let you edit the way text looks. For example; you can make a text **bold** ,*italic*, <ins>underlined</ins> and much more. Learn more [here](https://www.youtube.com/watch?v=_PPWWRV6gbA&t=60s)

## I have made changes to a file locally, now what ?
Make a pull request to the GitHub repository, if it gets accepted it will get merged with the project and automatically built and deployed on vercel.

## How can I view the changes that I've made ?
You can run `npm install` to make sure all packages are installed and `npm run start` to run the website locally. A page should open in your browser, wait for that to load. The website automatically rebuilds when a file changes so you do not need to restart it manually.
