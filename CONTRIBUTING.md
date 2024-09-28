# Contributing
***
Thanks for your interest in contributing to React Viper Ui. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request.
We also strongly recommend that you check for open issues and pull requests to see if someone else
is working on something similar.

## About this repository

This repository is a monorepo.

- We use [yarn](https://yarnpkg.com/) as a package manager for development.
- We use [Rollup](https://rollupjs.org/) as our module bundler.
- We use [Typescript](https://www.typescriptlang.org/) that allow us to write a more secure/strong code.
- We use [Storybook](https://storybook.js.org/) as our frontend workshop for building UI components and pages in isolation.
- We use [Styled components](https://styled-components.com/) to style our components.

## Structure

A Component must have its own folder (capitalized) that contains the `index.tsx` file where we can write it.
You also need to:
- create the `docs` folder that contains the `.mdx` file for markdown documentation and the `.stories.tsx` file for storybook.
- in the main folder you should write also the `test.tsx` file that do some basic test (that must pass).
- create the `types.ts` file where you can write typings for your component
- create the `styled.ts` file where you can style your component
- export your components in `src/index.ts`

Documentation is written using [MDX](https://mdxjs.com/docs/).

***

In order to create a new component please follow this folder structure.

```
root
└── src
    ├── components 
        ├── ComponentName
            └── docs
                ├── ComponentName.doc.mdx
                └── ComponentName.stories.tsx
            ├── index.tsx
            ├── ComponentPart1.tsx     
            ├── ComponentPart2.tsx     
            ├── ComponentName.test.tsx    
            ├── styled.ts   
            └── types.ts   
    ├── hooks 
    ├── utils 

```

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/justoverclockl/react-viper-ui.git
```

### Install dependencies from the root

```bash
yarn install
```

### Create a new Branch

```bash
git checkout -b feature/my-example-component
```

### Run storybook locally

```bash
yarn storybook
```

### Run tests locally

Tests are written using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). You can run all the tests from the root of the repository.
Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.

```bash
yarn test
```

### Run lint fix

```bash
yarn lint
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category:message` in your commit message while using one of
the following categories:

- `feature`: all changes that introduce completely new code or new
  features
- `bugfix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `documentation`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)

commit example: `feature: added avatar component`  
branch naming example: `feature/add-avatar-component`
