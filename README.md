<!-- markdownlint-disable-next-line -->
<div align="center">

  <!-- markdownlint-disable-next-line -->
  # Hacks-Vault Jekyll Theme
</div>

Customized version of Chirpy theme to look more like a terminal

## Dependencies

jekyll, bundle, ruby, etc...

## How to use it

There are two ways of using this theme. If you need to keep your site repository private, use the *Clone* option. You will not be able to use GitHub pages with the repo but you can still serve your site locally (`bundle exec jekyll serve`). In any other case, it is recommended to use *Fork* option.

### Fork this repo

- Advantages: Can receive theme updates
- Disadvantages: Repo **must** be public

1. Go to the [repository](https://github.com/uRHL/hacks-vault-theme.git)
2. Create a new fork. Use the name you prefer for your Vault. It may be changed later
3. Clone the forked repository

```bash
git clone https://github.com/your-username/forked-repo.git
```

### Clone the repo, then update remote origin

- Advantages: Repo may be private or public
- Disadvantages: no theme updates (fork linkage broken)

```bash
YOUR_VAULT_NAME=""
# 1. Create a empty private repo in your account
# 2. Clone this repo
git clone https://github.com/uRHL/hacks-vault-theme.git $YOUR_VAULT_NAME$
cd $YOUR_VAULT_NAME
# 3. Update remote origin
git remote set-url origin https://github.com/your-username/private-repo.git
git push -u origin main
```
Now you should have the theme installed and ready to run.

## Test you site locally

> Ensure you have all the dependencies installed

If you plan to host the site yourself, or if you are modifiying your site and need to see the changes is real-time, you will need to run jekyll locally.
`bundle exec jekyll serve`

## Setup GitHub pages

If you are using a free account, you will not be able to host your site in GitHub pages if the repository is private. 
Thus first of all the repository must be public. If this is not the case, go to `Settings` > `Danger Zone` > `Change repository visibility`.

Now go to `Settings` > `Pages`. It is recommended to use GitHub Actions to deploy your site, although you can use the traditional way.
Select GitHub Actions, add a new workflow from Jekyll template. Ensure the main branch is targeted in the workflow. Save the rule. Ensure the gh-pages environment rule uses main branch
Now the rule is configured and will be triggered each time you push content to the main branch.

## Changelog

- Font families
  - Headings: "Anonymous Pro" monospace
  - Text: "Fira Code" monospace
  - Site title, Post title: "Workbench" Sans-serif
- Color code
  - All clickable elements are green colored. When hover over them, they are highlighted in blue
- _include/sidebar.html
  - Animation: typing terminal like. Only triggered when loading HOME page
  - Avatar moded from sidebar to `About` page
  - Site title: change font to "Workbench"
  - Site subtitle: show terminal-like log messages. Add "blinking low-dash" after last line 
  - Tabs
    - Add item selector `>` shown on hover
    - Change Icons by `$`
    - Active section blue color, inactive green
  - Contact
    - TODO: Add chip legs around contact elements
- Page
  - Move `Trending tags` from right-aside to `Tags`page
  - Add animated background "circuit animation". Thanks to [Christopher Prins](https://codepen.io/christopherprins/pen/rZZWoj)
  - Change colors, round borders
