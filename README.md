# NYC schools App

This application shows list of NYC schools. 
When user clicks on one of the schools in the list Details and SAT parts are populated with data fetched from API.

## To run this app:
  - `npm install`
  - `npm run dev`

## To run tests:
  - `npm run test`

## Performans
`NYCSchools` component is loading all schools in one call, however in order to keep the response slim, we are only loading `school_name` and `dbn` attributes. When a user clicks on one of the schools, the `dbn` is passed to `SATScores` and `SchoolDetails`, which both load their corresponding data. We could load everything in one shot (schools and details), but what if the list of schools was 40k records instead of 400? Also, the user may not click on every single school, so why compromise initial performance? 

## Tests
There are two test 
- `App.test.tsx`: This test simulates user actions. It waits until the initial data is loaded (list of schools), then the user clicks on one of the schools. It further waits until the data in the corresponding components is loaded and then verifies that the data is rendered correctly. This test is integration test, since its rendering whole component sub-three
- `SATScores.test.tsx`: This test renders only one component. This is unit test.








This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
