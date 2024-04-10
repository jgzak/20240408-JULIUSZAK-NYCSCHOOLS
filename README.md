# NYC schools App

This application shows list of NYC schools. 
When user clicks on one of the schools in the list Details and SAT parts are populated with data fetched from API.

## To run this app:
  - `npm install`
  - `npm run dev`

## To run tests:
  - `npm run test`
  

## Performance
The `NYCSchools` component loads all schools in one call, but only retrieves the `school_name` and `dbn` attributes to keep the response slim. When a user clicks on a school, the `dbn` is passed to `SATScores` and `SchoolDetails`, which then load their corresponding data. This approach allows for better performance, especially when dealing with a large number of schools. Additionally, it avoids unnecessary loading of data for schools that the user may not interact with.

## Tests
There are two tests:
- `App.test.tsx`: This test simulates user actions. It waits until the initial data is loaded (list of schools), then the user clicks on one of the schools. It further waits until the data in the corresponding components is loaded and then verifies that the data is rendered correctly. This test is an integration test, as it renders the whole component subtree.
- `SATScores.test.tsx`: This test renders only one component. This is a unit test.

## Error Handling
Both the `SATScores` and `SchoolDetails` components have an error state. This error state is set when the asynchronous fetching function throws an error. The application is wrapped with a `SchoolsErrorBoundary`, which is triggered if a rendering error occurs in any of the components. To simulate a rendering error, you can uncomment the code in `api/nycschools.ts`.

## ADA Compliance
- Site is operable with keyboard. When the user presses the tab key after loading the site in the initial state, the user lands on the first item in the list. (More needs to be done to enable arrow keys to navigate up and down the list.)
- All items in the list have `aria-label` attributes for screen readers. Items in the score card have `aria-labels` that describe their colors.
- I followed the Checklist at [https://guides.18f.gov/accessibility/checklist/](https://guides.18f.gov/accessibility/checklist/) to ensure compliance with accessibility standards.


