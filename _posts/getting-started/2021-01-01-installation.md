---
title: Installation
categories: [getting-started, installation]
tags: [getting-started, jekyll, chirpy]
last_modified_at: 2025-05-20
---
## Requirements

> Only required for local deployments
{: .prompt-tip }

To deploy your site locally Jekyll must be installed in you system. You can find the instructions in the [Jekyll official documentation]((https://jekyllrb.com/docs/installation/)).

## Installation

There are two ways of using this theme. If you need to keep your site repository private, use the *Clone* option. You will not be able to use GitHub pages with the repo but you can still serve your site locally. In any other case, it is recommended to use *Fork* option.


|    |         Fork            |                 Clone                  |
|---:|:-----------------------:|:--------------------------------------:|
|Pros| Receive theme updates   | Repo may be public / private           |
|Cons| Repo **must** be public | No theme updates (fork linkage broken) |


### Fork

1. Create a new fork of this repository. Use the name you prefer for your Vault (may be changed later)
2. Clone the forked repository

```bash
git clone https://github.com/your-username/forked-repo.git
```

### Clone

```bash
YOUR_VAULT_NAME="hacks-vault"
# 1. Create a empty private repo in your account
# 2. Clone this repo
git clone https://github.com/uRHL/hacks-vault-theme.git $YOUR_VAULT_NAME$
cd $YOUR_VAULT_NAME
# 3. Update remote origin
git remote set-url origin https://github.com/your-username/private-repo.git
git push -u origin main
```

Once you have installed the theme:
1. Update the configuration (`_config.yml`) with your information (url, description, ...)
2. `_data/origin/authors.yml`
2. Delete example posts (`_posts` directory)

Done! You may start adding your content.
