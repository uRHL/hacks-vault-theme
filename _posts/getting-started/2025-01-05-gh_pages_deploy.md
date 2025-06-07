---
title: GitHub Pages deployment
categories: [getting-started, deployment]
tags: [getting-started, github-pages]
---

## Setup GitHub pages

> If you are using a free account, you will not be able to host your site in GitHub pages if the repository is private. Thus first of all the repository must be public. If this is not the case, go to `Settings > Danger Zone > Change repository visibility`.
{: .prompt-tip}

The recommended deployment option is `GitHub Actions`, although you can use the traditional way.
Go to `Settings > Pages`. Select `GitHub Actions`, then create a new workflow from `Jekyll` template. Ensure `main` branch is targeted in the workflow, then commit the workflow. 

Finally, ensure the environment configuration allows the workflow to be triggered on `main` branch. Go to `Settings > Environments > github-pages > Deployment branches and tags` then add `main` branch to the white-list.


Workflow and environment are now configured. Each time you push any change to the `main` branch your site will be automatically build and deployed.
