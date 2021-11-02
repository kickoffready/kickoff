# `lint`

the common lint set for eslint & stylelint 

## usage
1. [eslint config](https://github.com/kickoffready/kickoff/tree/master/packages/lint/eslint)
2. [stylelint config](https://github.com/kickoffready/kickoff/blob/master/packages/lint/stylelint/rules.js)

## eslint

### base 

```
yarn add eslint@7 @kickoffready/generate-config -D
```


### air-bnb-base / without react 

```
yarn add eslint@7 @kickoffready/generate-config eslint-config-airbnb@18 eslint-plugin-import@2 -D
```

### ts

```
yarn add eslint@7 @kickoffready/generate-config typescript@4 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5 -D
```

### react air-bnb

```
yarn add -D eslint@7 @kickoffready/generate-config eslint-config-airbnb@18 eslint-plugin-import@2 eslint-plugin-jsx-a11y@6 eslint-plugin-react@7 eslint-plugin-react-hooks@4
```

### react air-bnb ts

```
yarn add -D eslint@7 @kickoffready/generate-config eslint-config-airbnb@18 eslint-plugin-import@2 eslint-plugin-jsx-a11y@6 eslint-plugin-react@7 eslint-plugin-react-hooks@4
typescript@4 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5
```

### jest

* require base / es6 

```
yarn add eslint@7 @kickoffready/generate-config eslint-plugin-jest@25 -D
```

## Stylelint

### standard

```
yarn add stylelint@13 stylelint-config-standard@22 -D
```

### standard

```
yarn add stylelint@13 stylelint-config-standard@22 stylelint-config-styled-components -D
```

### rules
if need sass 

```
yarn add stylelint@13 stylelint-config-sass-guidelines@8 -D
```