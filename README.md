# task-datepicker-lib

## For contributors

### Getting Started

After cloning the repo, consult `package.json` for the requirements with regard to nodejs and yarn versions.
Install dependencies with:

```bash
yarn
yarn prepare
```

Create a .env file:

```bash
touch .env.local
```

Add environment variables to this file. An example of the required environment variables can be found in the .env.draft file

Run the development build with:

```bash
yarn dev
```

Run storybook development:

```bash
yarn storybook
```

Open http://localhost:6006 with your browser to see the result.

For the full list of available scripts (`yarn lint`, `yarn test`, `yarn build`, etc.), please consult `scripts` section of `package.json` or `scripts` section of the documentation for additional decription.

### Scripts

Run the scripts using:

```bash
yarn <script_name>
```

At the moment, the following scripts can be run within the project:

- build - create an optimised production build of the lib;
- dev - create an optimised production build and launch the lib in watch mode;
- storybook - starts Storybook in development mode on port 6006;
- build-storybook - builds Storybook for production;
- clean - delete the build folder and all its files using rm;
- clean:npm - delete the node_modules folder and all its files with rm;
- lint - check for all the existing eslint errors and warnings in the files;
- lint:fix - fix all eslint errors and warnings available for fixing;
- prettier - check for all code style issues in files;
- prettier:fix - fix all the code style issues in files;
- prepare - to setup husky hooks;
- chromatic - to run new build and publish storybook to chromatic;
- test - run tests and watch files for changes to rerun tests related to changed files;
- test:all - run tests and watch files for changes to rerun all tests when something changes;
- test:ci - running tests in a ci environment;
- test:coverage - delete the coverage folder and open a new coverage report after the tests have been executed;

**Note**: The following commands use the `.gitignore` file instead of their own ignore file: `lint`, `lint:fix`, `prettier`, `prettier:fix`.
