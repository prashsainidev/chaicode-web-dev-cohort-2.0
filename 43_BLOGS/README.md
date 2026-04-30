# Blogs Workspace

This folder is the central home for all blog-related work in this repository.

It exists so the writing system stays clean, the publishing flow stays consistent, and blog drafts do not get scattered across class folders.

Simple idea:

- GitHub is the writing workspace
- Hashnode is the publishing and reading platform

## Current State

This blog system is no longer in the early draft stage.

What is already in place:

- all blog drafts are centralized inside `43_BLOGS/drafts/`
- drafts are organized inside numbered public-series folders
- the Hashnode publish flow is documented in `43_BLOGS/txt/`
- `published-links.md` tracks live links and upcoming publish-ready drafts
- `Start Here` and `Explore by Topic` page drafts are maintained here
- class folders point to these blog drafts instead of duplicating full article content

Current publishing snapshot:

- article `01` to `40` are already live
- article `41` to `54` are fully drafted and ready for the next publishing wave
- the blog system now spans `15` series folders

## Folder Structure

```text
43_BLOGS/
|
+-- drafts/
|   +-- 00-start-here-my-web-development-learning-path.md
|   +-- 00-explore-by-topic-every-series-in-one-place.md
|   +-- 01-networking-and-internet/
|   +-- 02-git-and-version-control/
|   +-- 03-html-and-css-basics/
|   +-- 04-javascript-fundamentals/
|   +-- 05-javascript-arrays-and-objects/
|   +-- 06-advanced-javascript-concepts/
|   +-- 07-asynchronous-javascript/
|   +-- 08-modern-javascript/
|   +-- 09-dom-and-browser-apis/
|   +-- 10-backend-and-data-exchange/
|   +-- 11-nodejs-foundations/
|   +-- 12-nodejs-concurrency-and-async-flow/
|   +-- 13-expressjs-fundamentals/
|   +-- 14-api-design-and-authentication/
|   +-- 15-file-uploads-and-storage/
|   +-- peer-review/
|
+-- txt/
|   +-- hashnode-publishing-guide.txt
|   +-- hashnode-seo-metadata-bank.txt
|   +-- 0-series-diagram.txt
|   +-- 1-cover-image.txt
|   +-- 2-best-diagrams.txt
|
+-- published-links.md
+-- README.md
```

## What Each Part Does

### `drafts/`

This is the main writing area.

- every article draft lives here
- drafts are grouped inside numbered public series
- series folders are numbered so GitHub order stays clean
- article filenames stay numbered according to the master blog order

The two `00-...` files are special page drafts:

- `Start Here: My Web Development Learning Path`
- `Explore by Topic: Every Series in One Place`

These are not normal articles. They are Hashnode page drafts used for blog navigation and discovery.

### `txt/`

This folder holds helper files for the publishing workflow.

Important files:

- `hashnode-publishing-guide.txt`
  - step-by-step publish system
  - master blog order
  - series structure
  - publishing checklist

- `hashnode-seo-metadata-bank.txt`
  - slugs
  - tags
  - SEO titles
  - SEO descriptions
  - draft path references

- image and diagram helper files
  - cover image prompts
  - diagram ideas
  - visual planning notes

These files exist to reduce friction while publishing and to keep the blog system consistent across articles.

### `published-links.md`

This is the publishing index.

It tracks:

- series links
- article links
- publish status
- which series are already live
- which series are draft-ready and next in the queue

Whenever a new article goes live on Hashnode, this file should be updated.

## Why Drafts Are Centralized

This repo has class folders, trackers, notes, and learning resources. If full blog drafts were also copied into every class folder, the repository would become repetitive and difficult to maintain.

That is why this system follows one clear rule:

- class folders keep references
- `43_BLOGS/drafts/` keeps the full article drafts

This keeps writing ownership in one place while still letting class folders connect to the right blog content.

## Relationship With Class Folders

The intended repo flow is:

1. class `README.md` explains the topic
2. class `links.md` points to the related draft or published blog
3. `43_BLOGS/drafts/` stores the actual article content
4. `43_BLOGS/published-links.md` stores the live public link or current publish state

So the system is connected, not duplicated.

## Publishing Workflow

The working publish flow is:

1. open the correct draft in `43_BLOGS/drafts/<series-folder>/`
2. read the hidden note at the top of the file
3. collect:
   - Hashnode title
   - subheadline
   - cover image prompt
4. prepare the cover image
5. use inline image prompts where needed
6. publish the article on Hashnode in the correct series
7. update `published-links.md`
8. update relevant class `links.md` files if needed

The helper files inside `txt/` exist to make this flow repeatable.

## Draft Conventions

This folder follows a few deliberate conventions:

- numbered article order is preserved
- series folders are numbered
- article drafts stay in Markdown
- page drafts stay at the top level of `drafts/`
- Hashnode title and publishing metadata stay inside the draft header comment
- image placement is planned before publishing
- image slots include specific diagram comments where needed

The goal is not just to write articles. The goal is to maintain a system that stays readable and easy to update over time.

## When This Folder Should Be Updated

Update this folder when:

- a new article draft is added
- a new series is introduced
- an article is moved to a different series
- a slug changes
- a new article is published
- `Start Here` or `Explore by Topic` pages are updated
- publishing helpers or metadata banks change

At minimum, after publishing a blog, check:

- the article draft
- `published-links.md`
- related class `links.md`
- any page draft that references that article

## Final Note

The class folders represent the learning journey.

The `43_BLOGS` folder represents the writing, publishing, and public-facing blog system built around that journey.
