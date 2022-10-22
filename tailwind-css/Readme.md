## Tailwind CSS

Tailwind CSS is a collection of CSS classes with a standardized naming convention.

You can build good-looking responsive website with it.

It also helps developers to work together because of it's well defined naming standard.

To use tailwind CSS you need to install tailwindcss node package, and tell it which files it needs to watch to create css file for your application.

1. Install Tailwind CSS

```sh
npm install -D tailwindcss
npx tailwindcss init
```

2. Set Tailwind configuration

`tailwind.config.js` file.

Tell tailwindcss to which files to scan to create the output css file by setting `content` param.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Create `input.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Run tailwindcss so that it creates the output css file

```sh
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

4. Do not forget to add css link to your html file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/dist/output.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      <!-- Those are tailwwind classes -->
      Hello world!
    </h1>
  </body>
</html>
```
