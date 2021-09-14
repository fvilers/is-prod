# @fvilers/is-prod

An helper method that returns true if the process use the production environment

## Installation

```
npm install @fvilers/is-prod
```

or

```
yarn add @fvilers/is-prod
```

## Usage

```ts
import isProd from "@fvilers/is-prod";

console.log(isProd());
```

It will output (if the `NODE` environment variable is set to `production`):

```
true
```
