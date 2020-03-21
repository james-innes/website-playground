# My Website

## Framework Abstraction

Content abstracted from web framework using repository layer.
There can be lots of content which should be stored independent from framework e.g `src/pages` and `src/assets`.
Symlinking `repository/` dir in `my-website` to reference `public/` dir in alternative location.  

```md
 ├── repository/ -> /public
 │  :  :..
    :  :....
```

```javascript
//* NodeJs fs Symlink
const fsPromises = require("fs").promises;

(async () => {
    try {
        await fsPromises.symlink("../repo", './src', "dir");
    } catch (error) {
        console.error(error);
    }
})();
```

## Filesystem Sitemap

Sitemap and navigation reflects `repository/` dir filesystem. Dynamic sitemap/navigation creation instead of creating routes for every thing (blog post, project, repository etc).

[Serve Index in Browser][1]

Express middleware [serve-index][2]

## Component/Page/Template/Layouts

Either using a templating system (e.g Liquid, Pug, Handlebars .. [Consolidate.js][3]) or something more component based (e.g ReactJs, NextJs, Gatsby, Blazor) a file named `index` in any directory should be built as part of the framework. For example they could be bundled as part of a Webpack rule for a SPA or by SSR using an engine per file instead of at build time.

Ability to render all pages using common `include/layouts/with-navigation-header.` layout files. Ability to share common code such as buttons or a gallery via components/includes.

```javascript
import Gallery from "~/componnets/Gallery"

const ProjectAboutCats = () => {
 return (
    <>
      <h1>Project about cats :) </h1>
      <Gallery images={tree.img-cats} />
      <Button variant="primary" onClick(handleClick) />
    </>
 )
}

```

## Static content rendering

Ability to assign rendering engines and template for given file extensions. For example when acessing `path-to/my-script.js` the JavaScript could be rendered in the browser in a `<code>` tag or using a Markdown engine to achieve code highlighting.

Express middleware [serve-static][4]

## Static binary downloading

When accessing an address `public/My-Projects/Project-Two/Artwork.psd` pointing to a binary that can not be displayed in the browser (e.g `.psd` `.eps` `.db`) then ability to download content.

## Provide context of parent directory to template

In the project `project-about-cats` the template/component `index.jsx` should have access to a context of at least it's direct parent directory if not the whole of `public/`. The use case is to display all images in folder `img-cats` in the `index.jsx`

```
├── project-about-cats/
│   ├── img-cats/
│   │   ├── Cat-1.png
│   │   └── Cat-2.jpeg
│   ├── index.jsx
```

Server Side Approach  
Template has inlined code capable of accessing filesystem.

```php
//* PHP
<div class="gallery">
  <?php
    $images = glob("./img-cats/"."*[".png",".jpeg", ".jpg"]");

    foreach($images as $image) {
       echo '<img src="'.$image.'" />';
    }
  ?>
</div>
```

Client Side Approach  
At build time an Object or JSON file is created to represent the filesystem and all templates are provided access to this.

```javascript
const tree = {
  "img-cats": [
      "Cat-1.png"
      "Cat-2.jpeg"
   ]
}
```

```javascript
//* NodeJs Express

// Using liquid from Consolidate.js. Pass tree object to template
cons.liquid('index.liquid', { tree: {} }, function(err, html){
  if (err) throw err;
  // return and render `html`
});

```

```html
//* Liquid
// Access `tree` object from locals
<div class="gallery">
  {% for filename in tree.img-cats %}
    <img src="./img/cats/{{ filename }}" />
  {% endfor %}
</div>

```

Full project filesystem tree

```
Drive/
├── public/
│   ├── My-Repos/
│   │   ├── my-repo-one/
│   │   ├── My-Repo-Two/
│   │   └── My.Repo.Three/
│   ├── My-Projects/
│   │   ├── Project One/
│   │   ├── Project-Two/
│   │   ├── project-about-cats/
│   │   │   ├── img-cats
│   │   │   │   ├── Cat-1.png
│   │   │   │   └── Cat-2.jpeg
│   │   │   ├── index.jsx
│   │   ├── my-repo-one
│   │   └── Post-Three.html
│   ├── My-Blog/
│   │   ├── post-one.md
│   │   ├── Post Two.md
│   │   └── Post Three.md
├── my-website/
│   ├── framework/
│   │   ├── node_modules/
│   │   ├── components/
│   │   │   ├── Gallery/
│   │   │   │   ├── Gallery.sass
│   │   │   │   └── Gallery.jsx
│   │   │   ├── Button/
│   │   │   │   ├── Button.sass
│   │   │   │   └── Button.jsx
│   │   │   └── index.js
│   │   ├── server.js
│   │   ├── index.html
│   │   ├── index.jsx
│   │   ├── .gitignore
│   │   ├── .eslintrc
│   │   ├── package.lock
│   │   └── package.json
│   ├── repository/ -> /public
│   :   :...:..
│   :   :   :..
│   :   :   :..
  

```

  [1]: https://i.stack.imgur.com/Y2z5q.png
  [2]: https://github.com/expressjs/serve-index/blob/master/index.js
  [3]: https://github.com/tj/consolidate.js/
  [4]: https://github.com/expressjs/serve-static/blob/master/index.js
