


### React Eslint + Prettier 사용하기

<br>


#### 🙋 Lint 가 뭔가요?

<br>

🌟 소스 코드를 분석해서 `문법오류`, `스타일 오류`, `부적절한 구조` 를 가지는 코드를 식별할 수 있게 해주는 도구입니다.

<br>

#### 🙋 Code Formatter 가 뭔가요?

<br>

🌟 개발자들에게 일관적인 코딩 스타일을 유지할 수 있게 도와주는 도구입니다.

<br>

🌟 소스코드 작성 시 미리 정해진 스타일 가이드를 따라줄 수 있도록 코드를 자동으로 변환해주는 도구입니다.


<br>

#### 🙋 왜 쓰나요?

<br>

🌟 특히 협업 상황에서 자잘한 코드 규약 관련 문제들을 하나하나 찾아내서 적용하기 불편한데 이를 사전에 식별할 수 있게 해줍니다..

<br>

🌟 특히 자바스크립트는 인터프리터 언어라서 런타임 에러에 취약한데 런타임 이전에 오류를 미리 찾아줄 수 있도록 도와줍니다


<br>


#### 🙋 시작하기

<br>

**ESLint 설치**

```shell
$ npm install eslint --save-dev
```

<br>

**Prettier 설치**

```shell
$ npm install prettier --save-dev --save-exact
```

<br>

**Prettier + ESLint 모듈**

```shell
$ npm install eslint-plugin-prettier eslint-config-prettier --save-dev
```

<br>

**프로젝트 루트 경로에 `.eslintrc.js` 파일 추가 예시**

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

**프로젝트 루트 경로에 `.prettierrc.js` 추가 예시**

<br>

```javascript

module.exports = {
    singleQuote: true, // 문자열은 따옴표
    semi: true, //코드 마지막에 세미콜른 있게
    tabWidth: 2, // 들여쓰기 너비는 2칸
    trailingComma: 'all', // 객체나 배열 뒤에 항상 콤마를 붙임
    printWidth: 100, // 코드 한줄에 쓸 수 있는 코드 길이
    arrowParens: 'avoid', // Arrow Function 하나의 매개변수를 받을 때 괄호를 생략
    bracketSpacing: true, // 중괄호 사이 공백 지정 
  }

```


<br>

#### 🙋 VSCode 에서 사용하기

<br>


** Extension 에서 `ESLint` 와 `Prettier` 를 설치하고 활성화 해줍니다.**

![eslint1](https://user-images.githubusercontent.com/76927397/168409441-f3b3d633-4a09-4b31-ac1f-a124e2f3cb37.JPG)

<br>

**settings.json 수정**

> ctrl + shift + p 를 누르고 settings.json 검색

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

// `editor.defaultFormatter` (기본 포매터)는 알아서 지정하시면 됩니다.

<br>

#### 🙋 References

<br>


[프리티어 공식 사이트](https://prettier.io/docs/en/options.html)

[ref](https://velog.io/@njh7799/Eslint-Prettier-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95)



