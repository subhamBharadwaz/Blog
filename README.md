# Blog

Personal blog, build with [gatsby](https://www.gatsbyjs.com/),[theme-ui](https://theme-ui.com/) and [MDX](https://mdxjs.com/)

## 🛠 Installation & Set Up

This project was bootstrapped with [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/).

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

1. Install dependencies

   ```sh
   npm i
   ```

1. Start the development server

   ```sh
   gatsby develop
   ```

---

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   gatsby build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   gatsby serve
   ```

## Folder Structure

After creating an app, it should look something like:

```md
├── public
│ ├── [...]
├── src
│ ├── components
│ ├── constants
│ ├── gatsby-plugin-theme-ui
│ ├── images
│ ├── pages
│ ├── posts
│ └── scope.js
├── .gitignore
├── node_modules
│ ├── [...]
├── gatsby-browser.js
├── gatsby-config.js
├── package-lock.json
├──package.json
└── README.md
```
