---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

> Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page.
{: .prompt-tip }

![logo](assets/img/banner.png)
<br><br>

## A Jekyll theme for CLI enthusiasts

<a href="{{ '/' | relative_url }}" id="avatar" class="rounded-circle">
    {%- if site.avatar != empty and site.avatar -%}
    {%- capture avatar_url -%}
    {% include media-url.html src=site.avatar %}
    {%- endcapture -%}
    <img src="{{- avatar_url -}}" width="112" height="112" alt="avatar" onerror="this.style.display='none'">
    {%- endif -%}
</a>

When I was looking for a theme for my [Jekyll](https://jekyllrb.com/) site, I had an idea of a retro terminal-like theme. I found some inspiring ideas but the voice of my inner programmer was repeating all the time: _nah, DIYS_. So I end up forking an existing theme and tailoring it. 

I used the [Chirpy theme](https://chirpy.cotes.page/) as code base since I found the layout very convinient. After modifying some templates, styles and behaviour I came up with the page you are seeing now. 


## Changelog

- Favicon
  - Thanks to by [Viscious Speed](https://viscious-speed.deviantart.com/) and [Games-Icons](https://game-icons.net/).
- Font families (from [Google Fonts](https://fonts.google.com/))
  - Headings: _Anonymous Pro_ monospace
  - Text: _Fira Code_ monospace
  - Site title, Post title: _Workbench_ Sans-serif
- Color code
  - All clickable elements are green colored. When hover over them, they are highlighted in blue
- Sidebar
  - Animation: typing terminal like. Only triggered when loading HOME page
  - Avatar moded from sidebar to `About` page
  - Site title: change font to `Workbench`
  - Site subtitle: show terminal-like log messages. Add _blinking low-dash_ after last line 
  - Tabs
    - Add item selector `>` shown on hover
    - Change Icons by `$`
    - Active section blue color, inactive green
  - Contact
    - [ ] TODO: Add chip legs around contact elements
- Page
  - Move `Trending tags` from right-aside to `Tags`page
  - Add animated background _circuit animation_. Thanks to [Christopher Prins](https://codepen.io/christopherprins/pen/rZZWoj)
  - Change colors, round borders
- Post
  - Post metadata (header and footer) is now displayed using a terminal-like style
  - [ ] TODO: Add `TOC` again to post pages
- Search results
  - Change style to look like the home page
- Footer:
  - Update `THEME` reference
