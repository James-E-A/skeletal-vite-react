# About

This repo tries to be a conservative starting point. While it is
opinionated, it tries to ensure that it's MAXIMALLY easy to apply any
difference of opinion you may have to the codebase.

## Opinionations

- The codebase uses relative paths, which means your code won't break
  if you upload it to a non-root folder on a static webhost. I do not
  understand why you would want non-relative paths, but you can
  configure this via the _base_ key in `vite.config.js`.

- The codebase currently keeps all your project's source code under
  `/src`, and puts the build output in `/dist`. If you don't like this,
  edit or remove _root_ and _build.OutDir_ within `vite.config.js`, and
  then actually move the contents of `/src` where you want them to be.

- The codebase currently puts the modules, assets, and `index.html`
  all directly in `/dist`. If you want to restore the Vite default
  behavior of segregating the modules into the `/dist/assets` subfolder,
  remove the _build.assetsDir_ key from `vite.config.js`.

- The codebase does NOT "statically link" all JS into a one-file blob;
  instead, it leaves each module discrete in the build output. (The
  modules have other Vite default build settings, including minification,
  tree-shaking, and very mild filename mangling.) If you want to restore
  the default Vite behavior of rolling up all modules into a blob,
  remove the _build.rollupOptions_ entry from `vite.config.js`.

- The `index.html` entrypoint includes a noscript message advising
  users who have Javascript disabled to enable it, and linking to an
  archived copy of an excellent article from Microsoft that describes
  how to do this on a very wide array of popular browsers.

- There is an example Favicon included to demonstrate use of the
  `public` folder.

- The entrypoint script is named `main.mjs`.

# Usage

## With Node+NPM

```cmd
npm install
git add "package-lock.json" && git commit -m "Update dependencies"

npm exec -- vite dev

npm exec -- vite build --emptyOutDir
npm exec -- http-server dist -o
```

## With Bun

```cmd
bun install -y
git add "yarn.lock" && git commit -m "Update dependencies"

bun x -- vite dev

bun x -- vite build --emptyOutDir
bun x -- http-server dist -o
```
