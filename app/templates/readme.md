# <%= repoName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>)<% if (codecov) { %> [![codecov](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>/badge.svg?branch=master)](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>?branch=master)<% } %> [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/<%= repoName %>-explain)

「 <%= moduleDescription %> 」

[中文](./readme.md) | ~~[english](./readme.en.md)~~

[![Npm version](https://runkit.io/bokub/npm-version/branches/master/<%= moduleName %>)](https://npmjs.com/package/<%= moduleName %>)

## Install

<% if (cli) { %>

```
npm i -g <%= moduleName %>
```

<% }else{ %>

```
npm install <%= moduleName %>
```

```
yarn add <%= moduleName %>
```

<% } %>


## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> 'unicorns & rainbows'
```


## API

### <%= camelModuleName %>(input, [options])

#### input

name: | input
---------|----------
Type: | `string`
Desc: | Lorem ipsum.

#### options

##### foo

 name: | foo
---------|----------
Type: | `boolean`
Default: | `false`
Desc: | Lorem ipsum.

<% if (cli) { %>
## CLI

```
npm install --global <%= moduleName %>
```

```
$ <%= repoName %> --help

  Usage
    <%= repoName %> [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %> ponies
    ponies & rainbows
```


## concat

- [two-log](https://github.com/chinanf-boy/two-log) just two log with ora/winston
- [weoptions](https://github.com/chinanf-boy/weoptions) need global store object with id


<% } %>



## License

MIT © [<%= name %>](<%= website %>)
