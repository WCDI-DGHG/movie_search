


### React Eslint + Prettier μ¬μ©νκΈ°

<br>


#### π Lint κ° λ­κ°μ?

<br>

π μμ€ μ½λλ₯Ό λΆμν΄μ `λ¬Έλ²μ€λ₯`, `μ€νμΌ μ€λ₯`, `λΆμ μ ν κ΅¬μ‘°` λ₯Ό κ°μ§λ μ½λλ₯Ό μλ³ν  μ μκ² ν΄μ£Όλ λκ΅¬μλλ€.

<br>

#### π Code Formatter κ° λ­κ°μ?

<br>

π κ°λ°μλ€μκ² μΌκ΄μ μΈ μ½λ© μ€νμΌμ μ μ§ν  μ μκ² λμμ£Όλ λκ΅¬μλλ€.

<br>

π μμ€μ½λ μμ± μ λ―Έλ¦¬ μ ν΄μ§ μ€νμΌ κ°μ΄λλ₯Ό λ°λΌμ€ μ μλλ‘ μ½λλ₯Ό μλμΌλ‘ λ³νν΄μ£Όλ λκ΅¬μλλ€.


<br>

#### π μ μ°λμ?

<br>

π νΉν νμ μν©μμ μμν μ½λ κ·μ½ κ΄λ ¨ λ¬Έμ λ€μ νλνλ μ°Ύμλ΄μ μ μ©νκΈ° λΆνΈνλ° μ΄λ₯Ό μ¬μ μ μλ³ν  μ μκ² ν΄μ€λλ€..

<br>

π νΉν μλ°μ€ν¬λ¦½νΈλ μΈν°νλ¦¬ν° μΈμ΄λΌμ λ°νμ μλ¬μ μ·¨μ½νλ° λ°νμ μ΄μ μ μ€λ₯λ₯Ό λ―Έλ¦¬ μ°Ύμμ€ μ μλλ‘ λμμ€λλ€


<br>


#### π μμνκΈ°

<br>

**ESLint μ€μΉ**

```shell
$ npm install eslint --save-dev
```

<br>

**Prettier μ€μΉ**

```shell
$ npm install prettier --save-dev --save-exact
```

<br>

**Prettier + ESLint λͺ¨λ**

```shell
$ npm install eslint-plugin-prettier eslint-config-prettier --save-dev
```

<br>

**νλ‘μ νΈ λ£¨νΈ κ²½λ‘μ `.eslintrc.js` νμΌ μΆκ° μμ**

<br>

```javascript
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        es2020: true,
        jest: true,
    },
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'prettier',
    ],

    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 0,
        'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    },
};

```

<br>

**νλ‘μ νΈ λ£¨νΈ κ²½λ‘μ `.prettierrc.js` μΆκ° μμ**

<br>

```javascript

module.exports = {
    singleQuote: true, // λ¬Έμμ΄μ λ°μ΄ν
    semi: true, //μ½λ λ§μ§λ§μ μΈλ―Έμ½λ₯Έ μκ²
    tabWidth: 2, // λ€μ¬μ°κΈ° λλΉλ 2μΉΈ
    trailingComma: 'all', // κ°μ²΄λ λ°°μ΄ λ€μ ν­μ μ½€λ§λ₯Ό λΆμ
    printWidth: 100, // μ½λ νμ€μ μΈ μ μλ μ½λ κΈΈμ΄
    arrowParens: 'avoid', // Arrow Function νλμ λ§€κ°λ³μλ₯Ό λ°μ λ κ΄νΈλ₯Ό μλ΅
    bracketSpacing: true, // μ€κ΄νΈ μ¬μ΄ κ³΅λ°± μ§μ  
  }

```


<br>

#### π VSCode μμ μ¬μ©νκΈ°

<br>


** Extension μμ `ESLint` μ `Prettier` λ₯Ό μ€μΉνκ³  νμ±ν ν΄μ€λλ€.**

![eslint1](https://user-images.githubusercontent.com/76927397/168409441-f3b3d633-4a09-4b31-ac1f-a124e2f3cb37.JPG)

<br>

**settings.json μμ **

> ctrl + shift + p λ₯Ό λλ₯΄κ³  settings.json κ²μ

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

// `editor.defaultFormatter` (κΈ°λ³Έ ν¬λ§€ν°)λ μμμ μ§μ νμλ©΄ λ©λλ€.

<br>

#### π References

<br>


[νλ¦¬ν°μ΄ κ³΅μ μ¬μ΄νΈ](https://prettier.io/docs/en/options.html)

[ref](https://velog.io/@njh7799/Eslint-Prettier-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95)



