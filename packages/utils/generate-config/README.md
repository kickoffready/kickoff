# `@kickoffready/generate-config`

> join configuration object for things like webpack and eslint

## Usage

```
const { GenerateConfig } = require('@infomediacode/generate-config');

// eslint sample
const set = new GenerateConfig();
const config = set
  .addConfig(ts)
  .addConfig(jasmine)
  .addConfig(rx)
  .setup;

module.exports = config;
```

