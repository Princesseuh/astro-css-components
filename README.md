# astro-css-components

⚠️ Very early in development, more of a proof of concept than a real thing at the moment ⚠️

Add "CSS Components" support to Astro, inspired by [eleventy-assets](https://github.com/11ty/eleventy-assets). This allows you to for instance, add page specific CSS. In my personal blog, I use it to add the CSS needed for syntax coloring only to the page that have code in them

The API is currently.. not very good. Use at your own caution - it should works, however

## Usage

_Page.astro_

```astro
---
import BaseLayout from "BaseLayout.astro"
import { CSSComponent } from "astro-css-components"
---

<CSSComponent register={{ name: "should-be-red", content: ".should-be-red {color: red;}" }} />

<BaseLayout>
  <article>
    <div class="should-be-red">My super text</div>
  </article>
</BaseLayout>
```

_BaseLayout.astro_

```astro
---
import { CSSComponent } from "astro-css-components"
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <CSSComponent getForURL />
</head>
<body>
    <slot />
</body>
</html>
```

**Result**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <style>.should-be-red {color: red;}</style>
</head>
<body>
  <article>
    <div class="should-be-red">My super text</div>
  </article>
</body>
</html>

```

## API

The CSSComponent component takes the following props:

### register

Used to register a new component, it takes an object with the following attributes:

- name: Name of your component
- content: CSS style your component has

Unless used with [global](#global), the component will be tied to the current URL

**Example:**

```jsx
<CSSComponent register={{ name: "should-be-red", content: ".should-be-red {color: red;}" }} />
```

#### global

By adding this props, you can make the component global, this mean you can call it from everywhere using [getByName](#getbyname)

**Example:**

```jsx
<CSSComponent global register={{ name: "should-be-blue", content: ".should-be-blue {color: blue;}" }} />
```

### getForURL

Get the components for the current URL, this get all the components registered for the current URL, to get a specific component, use [getByName](#getbyname)

**Example:**

```jsx
<CSSComponent getForURL />
```

### getByName

Get a specific component by name, this look in both the library for the current url and the global one


**Example:**

```jsx
<CSSComponent getByName="should-be-yellow" />
```
