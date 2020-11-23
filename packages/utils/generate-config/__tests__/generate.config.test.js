const {
  addArraySet, addObjectSet, getKeyType, joinSet, joinConfig,
  isPlainObjectOrArray, GenerateConfig,
} = require('../lib/generate-config');

const prevConfig = {
  array: {
    name: ['a', 'b'],
  },
  object: {
    code: {
      a: 1,
      b: 2,
    },
  },
};

const extraConfig = {
  array: {
    name: ['d'],
  },
  object: {
    code: {
      c: 1,
    },
  },
};

describe('GenerateConfig: isPlainObjectOrArray', () => {
  it('should recognize sub Object', () => {
    const check = isPlainObjectOrArray({
      config: prevConfig.object,
      key: 'name',
    });

    expect(check).toBe(false);
  });

  it('should recognize sub Array', () => {
    const check = isPlainObjectOrArray({
      config: prevConfig.array,
      key: 'name',
    });

    expect(check).toBe(false);
  });

  it('should recognize plain', () => {
    const check = isPlainObjectOrArray({ a: 3 });
    expect(check).toBe(true);
  });
});

describe('GenerateConfig: addArraySet', () => {
  it('should join config', () => {
    const joined = addArraySet({
      config: prevConfig.array,
      extendConfig: extraConfig.array,
      key: 'name',
    });

    expect(joined).toEqual({
      name: [
        'a',
        'b',
        'd',
      ],
    });
  });

  it('should add extra config key', () => {
    const joined = addArraySet({
      config: { name: [] },
      extendConfig: extraConfig.array,
      key: 'name',
    });

    expect(joined).toEqual({
      name: [
        'd',
      ],
    });
  });
});

describe('GenerateConfig: addObjectSet', () => {
  it('should join config', () => {
    const joined = addObjectSet({
      config: prevConfig.object,
      extendConfig: extraConfig.object,
      key: 'code',
    });

    expect(joined).toEqual({
      code: {
        a: 1,
        b: 2,
        c: 1,
      },
    });
  });

  it('should add extra config key', () => {
    const joined = addObjectSet({
      config: {},
      extendConfig: extraConfig.object,
      key: 'code',
    });

    expect(joined).toEqual({
      code: {
        c: 1,
      },
    });
  });
});

describe('GenerateConfig: getKeyType', () => {
  it('should recognize object', () => {
    const type = getKeyType({
      config: prevConfig.array,
      extendConfig: extraConfig.array,
      key: 'name',
    });

    expect(type).toBe('Object');
  });

  it('should recognize array', () => {
    const type = getKeyType(['we are ']);
    expect(type).toBe('Array');
  });

  it('should recognize undefine', () => {
    const k = {};
    const type = getKeyType(k.j);
    expect(type).toBe('Undefined');
  });

  it('should return Boolean', () => {
    const type = getKeyType(true);
    expect(type).toBe('Boolean');
  });
});

describe('GenerateConfig: joinSet', () => {
  it('should join array', () => {
    const joined = joinSet({
      config: prevConfig.array,
      extendConfig: extraConfig.array,
      key: 'name',
    });

    expect(joined).toEqual({
      name: [
        'a',
        'b',
        'd',
      ],
    });
  });

  it('should join object', () => {
    const joined = joinSet({
      config: prevConfig.object,
      extendConfig: extraConfig.object,
      key: 'code',
    });

    expect(joined).toEqual({
      code: {
        a: 1,
        b: 2,
        c: 1,
      },
    });
  });

  it('should handle add bool', () => {
    expect(joinSet({
      config: {},
      extendConfig: { u: true },
      key: 'u',
    })).toEqual({ u: true });
  });

  it('should handle override', () => {
    expect(joinSet({
      config: { u: false },
      extendConfig: { u: true },
      key: 'u',
    })).toEqual({ u: true });
  });

  it('should throw when type is not marching', () => {
    expect(() => joinSet({
      config: { u: '' },
      extendConfig: { u: true },
      key: 'u',
    })).toThrow();
  });
});

describe('GenerateConfig: joinConfig', () => {
  it('should join data', () => {
    const joined = joinConfig({
      config: prevConfig.array,
      extendConfig: extraConfig.array,
    });

    expect(joined).toEqual({
      name: [
        'a',
        'b',
        'd',
      ],
    });
  });
  it('should join object in array', () => {
    expect(joinConfig({
      config: {
        some: ['error', {
          what: ['a'],
        }],
      },
      extendConfig: {
        some: ['error', {
          what: ['c'],
        }],
      },
      key: 'some',
    })).toEqual(
      {

        some: [
          'error', {
            what: ['a', 'c'],
          },
        ],

      },
    );
  });

  it('should override with incorrect key type matching', () => {
    expect(
      joinConfig({
        config: { code: [''] },
        extendConfig: extraConfig.object,
        overrideKeys: ['code'],
      }),
    ).toEqual({
      code: {
        c: 1,
      },
    });
  });

  it('should override with nested incorrect key type matching', () => {
    expect(
      joinConfig({
        config: { set: { keycode: [''] }, home: 1 },
        extendConfig: { set: { keycode: true, key: 34 } },
        overrideKeys: ['keycode'],
      }),
    ).toEqual({
      home: 1,
      set: {
        keycode: true,
        key: 34,
      },
    });
  });

  it('should join nesting keys', () => {
    const joined = joinConfig({
      config: prevConfig,
      extendConfig: extraConfig,
    });

    expect(joined).toEqual({
      array: {
        name: [
          'a',
          'b',
          'd',
        ],
      },
      object: {
        code: {
          a: 1,
          b: 2,
          c: 1,
        },
      },
    });
  });
});

describe('GenerateConfig: main', () => {
  it('has no data', () => {
    const set = new GenerateConfig();
    expect(set.setup).toEqual({});
  });

  it('can add data', () => {
    const set = new GenerateConfig();
    expect(set.addConfig(prevConfig).setup).toEqual(prevConfig);
  });

  it('can override object data', () => {
    const set = new GenerateConfig();
    expect(set.addConfig({
      set: {
        b: 1234,
        a: 789,
      },
      yu: 10,
    })
      .addConfig({
        set: {
          c: 67,
          b: 45,
        },
        name: 3,
      }).setup).toEqual({
      set: {
        a: 789,
        b: 45,
        c: 67,
      },
      name: 3,
      yu: 10,
    });
  });

  it('can join data', () => {
    const set = new GenerateConfig();
    const config = set.addConfig(prevConfig).addConfig(extraConfig).setup;
    expect(config).toEqual({
      array: {
        name: [
          'a',
          'b',
          'd',
        ],
      },
      object: {
        code: {
          a: 1,
          b: 2,
          c: 1,
        },
      },
    });
  });

  it('should override with mismatched extend key type', () => {
    const set = new GenerateConfig();
    const config = set
      .addConfig({
        check: {
          codeName: [''],
          yyy: '2342343',
        },
      })
      .addAndOverrideConfig({
        extendConfig: {
          check: {
            codeName: true,
          },
          nest: '8',
        },
        overrideKeys: ['codeName'],
      })
      .setup;
    expect(config).toEqual({
      check: {
        codeName: true,
        yyy: '2342343',
      },
      nest: '8',
    });
  });
});
