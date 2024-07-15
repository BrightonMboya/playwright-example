This repo contains the prototype for a new testing method that will be used for testing front-end projects.

The idea is to use a more sophiscated method that allows filling text inputs, checks for nodes in the DOM tree,
perform actions, and mimic the actual broswer such as chromium, firefox, and webkit.

This prototype uses a todo application from playwright to showcase what is possible with the library. https://demo.playwright.dev/todomvc


## Getting Started
-  clone the repo
- pnpm i
- Run `pnpm exec playwright test todo-app.spec.ts`

The above command will run the tests in the `tests/todo-app.spec.ts` file

Another use case for running the test is by using parameters which will allow to be used in the fns

To demonstrate this run `PAGE=https://demo.playwright.dev/todomvc pnpm exec playwright test -g "parameterized_test.spec.ts"`


This will run a test which accept PAGE as a variable and continue to do the test as usual

With this prototype we can be able to have a more robust testing methods for checker.


## Additional Info
You can also limit the number of cpu workers that are used in running the tests. This can be a useful flag when it comes to limiting the number of resources that are used to check for the corrections. This is via `...commandToRunTestAbove --workers 2`

You can also specify the number of failures that playwright can stop. This can be handy on also using less resources to do the checker
# playwright-example
