# About

This repo tries to be a conservative starting point. While it is
opinionated, it tries to ensure that it's MAXIMALLY easy to apply any
difference of opinion you may have to the codebase.

## Opinionations

- The codebase currently keeps all your project's source code under
  `/src`, and puts the build output in `/dist`. If you don't like this,
  edit or remove those two paths within `vite.config.js`, and move the
  contents of `/src` where you want them to reside.

- The codebase does NOT "statically link" all JS into a one-file blob;
  instead, it leaves each module discrete in the build output. (The
  modules have other Vite default build settings, including minification,
  tree-shaking, and very mild filename mangling.) If you want to restore
  the default Vite behavior of rolling up all modules into a blob,
  remove the _rollupOptions_ entry from `vite.config.js`.

- The `index.html` entrypoint includes a noscript message advising
  users who have Javascript disabled to enable it, and linking to an
  archived copy of an excellent article from Microsoft that describes
  how to do this on a very wide array of popular browsers.

- There is an example Favicon included to demonstrate use of the
  `public` folder

- The entrypoint script is named `main.mjs`.

# Usage

## With Node+NPM

```cmd
npm install
git add "package-lock.json" && git commit -m "Update dependencies"

npm exec -- vite dev

npm exec -- vite build --emptyOutDir
```

## With Bun

```cmd
bun install -y
git add "yarn.lock" && git commit -m "Update dependencies"

bun x -- vite dev

bun x -- vite build --emptyOutDir
```
