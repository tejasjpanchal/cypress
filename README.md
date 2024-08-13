# README #

# Cypress 

This repository contains automated test scripts developed using Cypress for IMDb.com and pokeAPI , serving as a QA automation assignment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Infromation About Project](#Information-about-project)
- [Limitations of UI tests](#Limitations-of-UI-tests)
  

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js is installed on your machine. You can download it from (https://nodejs.org/).

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **If message apper "Please reinstall Cypress by running: cypress install" then run below command**:
    ```sh
    npm install cypress --save-dev
    ```

## Running Testsa

You can run the Cypress test scripts in different modes:

1. **Open Mode**: To run tests interactively in the Cypress Test Runner.
    ```sh
    npx cypress open
    ```

2. **Open Mode on the Specific Browser**: To Run All the tests on Chrome :
      ```sh
      npx cypress open --browser chrome 
      ```

## Project Structure

The project directory structure is as follows:
```sh
Cypress/
│
├── cypress/
│   ├── e2e/
│   │   ├── API-Test/
│   │   └── UI-Test/
│   ├── fixtures/
│   ├── screenshot/
│   └── support/
│   │   ├── pages/
│   │   ├── utilityFunction.js
│   │   └── commands.js
│
├── .gitignore
├── cypress.config.js
├── package.json
```

## Infromation about project : 

-  fuxture/IMDbTestData.json     :  Contains test data for IMDb tests
-  fuxture/pokeAPITestData.json  :  Contains test data for pokeAPI tests
-  support/pages/                :  Contains pages for IMDb tests
-  support/utilityFunction.js    :  Contains helper functions for tests
-  screenshot                    :  Contains screenshot for the test  

## Information about UI Tests : 

-  Scenario 01 : Till the time this test is created, there is no movie with tag "Completed" hence no movie will be selected but test will PASS. Once there is a movie with tag "Completed" is available then that movie will be selected.
-  Scenario 05 : Datepicker is not directly accesible due to nature of elements or implementation of datepicker hence the date is enetred using cypress type command in test script to complete the scenario.
-  Current version of UI Test spec files except "Nicolas_Cage.cy.js" under this project will not run on Firefox browser as the IMDb.com behaves inconsistantly on Firefox with Cypress.
-  Current version of UI Test spec files under this project will not run on headless mode on Crome and Firefox as the IMDb.com block the access with 403 forbidden error or Network error for Cypress.
   