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

## Errors handling
`SATScores` and `SchoolDetails` components have error state. The error state is set when the async fetching function throws an error. The application is wrapped with `SchoolsErrorBoundary`, which is triggered if a rendering error occurs in any of the components. To simulate a rendering error, you can uncomment the code in `api/nycschools.ts`.

## ADA Compliance
- Site is operable with keyboard. When the user presses the tab key after loading the site in the initial state, the user lands on the first item in the list. (More needs to be done to enable arrow keys to navigate up and down the list.)
- All items in the list have `aria-label` attributes for screen readers. Items in the score card have `aria-labels` that describe their colors.
- I followed the Checklist at https://guides.18f.gov/accessibility/checklist/ to ensure compliance with accessibility standards.


