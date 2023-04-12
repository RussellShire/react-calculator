# REACT CALCULATOR

A calculator built in React using functional components.

This is one of several calculators I've built to learn different JavaScript frameworks.
- Vue Calculator: https://github.com/RussellShire/vue-calculator
- Svelte Calculator: https://github.com/RussellShire/svelte-calculator

# Project Specification

- A simple calculator built in React
- There should be an output that immediately shows user inputs
- When equals is pressed the result should appear in the output
- When equals is pressed the requested steps should also be displayed
- Users shouldn't be able to add more than one period or operand between number inputs
- Functionality is more important than looks

# Hosted

https://russellshire.github.io/react-calculator/

# To Do

- Fix bug where if people press equals immediately after an operand it returns zero eg. '3x3x=' = 0 rather than ignoring second 'x' and returning 9

# Optional To Do

- Currently after pressing equals then an operand it starts a new calculation, it would be nice if people could perform futher calculations on the results of previous calculatons
- Minus numbers currently not being handled
- Styling could be added such as centering

# Usage

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Updates hosted Github Pages
