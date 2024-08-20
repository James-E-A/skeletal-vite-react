This repo tries to be a conservative starting point. While it is
opinionated, it tries to ensure that it's MAXIMALLY easy to apply any
difference of opinion you may have to the codebase.

# With Node+NPM

```cmd
npm install
git add "package-lock.json" && git commit -m "Update dependencies"

npm exec -- vite dev

npm exec -- vite build --emptyOutDir
```

# With Bun

```cmd
bun install -y
git add "yarn.lock" && git commit -m "Update dependencies"

bun x -- vite dev

bun exec -- vite build --emptyOutDir
```
