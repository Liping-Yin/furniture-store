# Learn Responsive Webdesign

This is a frontend project to practice useful tricks of realizing responsive Weeb design. From laptop to mobile application.
UI/UX design is inspired by [Alamin Hossen](https://dribbble.com/shots/16039018-E-commerce-Furniture-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=alaminhossen75&utm_content=E%20commerce%20Furniture%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alaminhossen75&utm_content=E%20commerce%20Furniture%20Landing%20Page&utm_medium=Social_Share) from Dribble.

## Website links

## learning resources:

- [CSS Tricks](https://css-tricks.com/);
- [freeCodeCamp](https://www.freecodecamp.org/news/search/?query=responsive);

## what I focused on in this project?

- React framework
- Flexbox
- CSS3 with Sass preprocessor and BEM naming convention
- HTML5: Semantic elements

## what do I learn ?

- Strategies about responsive:

  - set viewport in `<meta>` tag
  - size content to viewport:
    - layout
    - images: set width or height for rendering space reservation; max-width to avoid overflow
    - responsive Typography: [fluid font-size](https://css-tricks.com/snippets/css/fluid-typography/) (using calc()); responsive root font-size(combined with rem); [max/min font-size techniques](https://css-tricks.com/how-do-you-do-max-font-size-in-css/)
  - CSS media queries for responsiveness
  - breakpoints selections
    - start with small screen size, then expand to other necessary breakpoints: layout change significantly
      - max-widh, min-width
    - pick minor breakpoints when necessary: minor adjustment such as margin, padding, font-size,...
      - min-width
    - optimize text for reading
      - maximum 70 to 80 chars(about 8 to 10 words) per line suggestions
    - avoid simply hiding contents
  - Chrome DevTools

- Reasonable units usages

  - relative unit: em/rem
  some 'rule of thumb', but not hard and fast rules
    - font-size: rem
    - padding and margin: em
    - widths: em or percentage
  - absolute unit: px ,pt, cm,...
  - percentage：
    - relative to parent element: %
    - relative to viewport: vw/vh, vmin/vmax

- Handle images
- Layout techniques: Flexbox, Grid Layout, and Multicol
- Media queries
- Semantic elements

  - characteristics:
    - accessibility
    - readability
    - consistency
  - main specifications:

    - `<article>` and `<section>`
      - used as containers to group content
      - `<article>`: is intended to be independently distributed or reusable, which specifies independent, self-contained content
        - forum posts
        - blog posts
        - user comments
        - product cards
        - newspaper articles -`<section>`: is a thematic grouping content,typically with a heading.
        - Chapters
        - Introduction
        - News items
        - Contact information
    - `<header> and <hgroup>`

      - `<header>`: usually at the top of a document, a section, or an article and usually contains the main heading,logo or icon,authorship information, some navigation and search tools.
      - `<hgroup>`: main heading with one or more subheadings, can only contain other headers, which is `<h1>` to `<h6>` and including `<hgroup>`.

      - `<aside>`
        intend for content that is not part of the flow of the text in which is appears, but still in a related way.
      - `<nav>`
        you can have any number of `<nav>` elements on a page, such as a global navigation across the top( in the `<header>`) and local navigation( in a sidebar `<aside>`)
      - `<footer>`
        if there is a `header`, there must be a `<footer>`, generally found at the bottom of a document, a section or an article.
        - authorship information
        - copyright information
        - contact information
        - sitemap
        - back to top links
        - related documents
      - `<small>`
        often appears within a `<footer>` or `<aside>` element which would usually contain copyright information or legal disclaimers, and other such fine print.
      - `<time>`
        allows an unambiguous ISO 8601 date to be attached to a human-readable version of that date.
      - `<figure>` and `<figcaption>`
        wrap image content
