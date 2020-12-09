# Generator React Client

## Build Status

### Master (Production):

TODO

### Development:

TODO

## Documentation

### Requirements
- Node 14.15.1 ([install with nvm](https://github.com/nvm-sh/nvm#nvmrc))
- npm 6.14.8

### Stack
- Node
- Jest + React Testing Library

### Environment Variables

#### Application variables
Set Application variables in the .env file
- NODE_ENV = development|test|production (default: development)

### Initialize

```bash
git clone <repo> <project-folder>
cd <project-folder>
npm i
```

### Running

#### Development mode

```bash
cp .env.sample .env
npm run dev
```

#### Production mode

Set environment variables

NODE_ENV = production

```bash
npm run build
```

Access /dev/index.html

### Testing

#### Running general tests

```bash
npm run test
```

#### Running tests with new snapshots

```bash
npm run test:snap
```

#### Running tests with code coverage report

```bash
npm run test:coverage
```

#### Running tests with code watch

```bash
npm run test:watch
```

#### Running tests on CI environment (running in band)

```bash
npm run test:ci
```

### Linting

#### Check general errors

```bash
npm run lint
```

#### Check Javascript errors (With ESLint)

```bash
npm run lint:code:check
```

#### Fix Javascript errors (With ESLint)

```bash
npm run lint:code:write
```

#### Check Style errors (With CSS in Js or Styled Components)

```bash
npm run lint:style:check
```

#### Fix Style errors (With CSS in Js or Styled Components)

```bash
npm run lint:style:write
```

## Release

### General releases:

When branch development is merged into the master branch through a PR process

- Update release version in changelog
- Update the release version in `package.json`
  ```bash
  npm version major|minor|patch -m "Upgrade to %s for reasons"
  ```
- Create the git tag from the last version of master branch
  ```bash
  git checkout master
  git tag -a v1.0.0 -m "Release v1.0.0"
  git push origin v1.0.0
