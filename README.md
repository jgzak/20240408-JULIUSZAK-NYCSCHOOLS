# NYC schools App

This application shows list of NYC schools. 
When user clicks on one of the schools in the list Details and SAT parts are populated with data fetched from API.

## To run this app:
  `npm install`
  `npm run dev`

## To run tests:
  `npm run test`

## Performans
`NYCSchools` component is loading all schools in one call, however in order to keep response slim, we are only loading `school_name` and `dbn` attributes. When user cliks on one of the schools: `dbn` passed to `SATScores` and `SchoolDetails` which both loading its corresponding data. We could load everything in one shot (schools and details) but what if list of schools was 40k records and not 400? Also user may not click on every single school, why to compromise initail performance? 








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
