const addArraySet = ({ config, extendConfig, key }) => ({
  ...config,
  [key]: [
    ...config[key],
    ...extendConfig[key],
  ],
});

const addObjectSet = ({ config, extendConfig, key }) => ({
  ...config,
  [key]: {
    ...config[key],
    ...extendConfig[key],
  },
});

const getKeyType = (value) => {
  if (typeof value === 'undefined') {
    return 'Undefined';
  }
  return value.constructor.name;
};

const isPlainObjectOrArray = (obj) => {
  const keys = Object.keys(obj);
  const subObjects = keys.filter((k) => {
    const { constructor } = obj[k];
    const { name } = constructor;
    return name === 'Object' || name === 'Array';
  });
  return subObjects.length === 0;
};

const getConvertType = ({ config, extendConfig, key }) => {
  const configKeyType = getKeyType(config[key]);
  const extendConfigKeyType = getKeyType(extendConfig[key]);
  const isEmptyKey = configKeyType === 'Undefined';
  const hasMismatchedType = !isEmptyKey
      && configKeyType !== extendConfigKeyType;
  let convertType = 'default';

  if (hasMismatchedType) {
    return 'Mismatch';
  }

  if (!isEmptyKey && !isPlainObjectOrArray(config[key])) {
    return 'JoinNested';
  }

  convertType = isEmptyKey ? 'Empty' : extendConfigKeyType;
  return convertType;
};

const dynamicAddKey = (config) => (config ? { overrideKeys: config } : {});

const joinSet = ({
  config, extendConfig, key, overrideKeys,
}) => {
  const convertType = getConvertType({ config, extendConfig, key });
  switch (convertType) {
    // error
    case 'Mismatch':
      throw new Error(`${key} extend type not matching with origin config type`);
    // add
    case 'Empty':
      return { ...config, [key]: extendConfig[key] };
      // join
    case 'Array':
      return addArraySet({ config, extendConfig, key });
    case 'Object':
      return addObjectSet({ config, extendConfig, key });
      // override
    case 'JoinNested': {
      // eslint-disable-next-line no-use-before-define
      const joinKeySet = joinConfig({
        config: config[key],
        extendConfig: extendConfig[key],
        ...dynamicAddKey(overrideKeys),
      });
      return { ...config, [key]: joinKeySet };
    }
    default:
      return { ...config, [key]: extendConfig[key] };
  }
};

const joinConfigArray = ({ config, extendConfig }) => {
  const result = extendConfig.map((key, index) => {
    if (config[index] === (key)) {
      return key;
    }
    // eslint-disable-next-line no-use-before-define
    return joinConfig({ config: config[index], extendConfig: key });
  });

  return result;
};

const joinConfig = ({ config, extendConfig, overrideKeys }) => {
  let joined = config;
  const configType = getKeyType(config);
  const extendConfigType = getKeyType(extendConfig);
  if (configType === 'Array' && extendConfigType === 'Array') {
    return joinConfigArray({ config, extendConfig });
  }

  const keys = Object.keys(extendConfig);
  if (!overrideKeys) {
    keys.forEach((key) => {
      joined = joinSet({ config: joined, extendConfig, key });
    });
    return joined;
  }
  keys.forEach((key) => {
    if (overrideKeys.includes(key)) {
      joined = { ...joined, [key]: extendConfig[key] };
      return;
    }
    joined = joinSet({
      config: joined, extendConfig, key, overrideKeys,
    });
  });

  return joined;
};

class GenerateConfig {
  constructor() {
    this.config = {};
  }

  get setup() {
    return this.config;
  }

  addConfig(extendConfig) {
    this.config = joinConfig({ config: this.config, extendConfig });
    return this;
  }

  addAndOverrideConfig({ extendConfig, overrideKeys }) {
    this.config = joinConfig({ config: this.config, extendConfig, overrideKeys });
    return this;
  }
}

module.exports = {
  GenerateConfig,
  joinConfig,
  isPlainObjectOrArray,
  joinSet,
  addArraySet,
  addObjectSet,
  getKeyType,
};
