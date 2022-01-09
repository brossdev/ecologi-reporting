# Introduction

A small react app written in typescript to pull data on the numbers of trees planted per day from the ecologi public api.

By default the data is filtered to only return tree planting data for the last month , a filter is provided to allow filtering between two dates. The data is is presented in two ways - a line graph showing the cumulative number of trees planted for each date, and a bar graph showing how many trees were planted for each weekday in the chosen period. 

At the time of writing the api returns over 600k entries, taking on average 40 seconds to respond, to help mitigate this I’ve used react query which which comes with client side cacheing to help reduce expensive round trips to the api. 

I took the decision to only format the data after filtering ( last month by default ) to allow for a quicker time to interactive, formatting all the data on response from the API blocked the event loop for too long as as such would result in a horrible experience for the end user. 

# running locally

yarn install to install dependencies 

yarn start to start the app

```bash

yarn install

yarn start

```

## Tests

Tests are written using jest, run yarn test to run all tests in the repository

## Git Hooks

This project uses git hooks to keep code quality consistent. 

Pre commit - on commit the pre commit hook will run Eslint and prettier configs across staged files, for simple fixes it will auto correct , for errors it will force a fix to be in place before commuting

Pre push - runs a test script across the repository to make sure all tests still pass before allowing a push to remote. 

## Improvements 

If I were to build this in the real world I would strongly suggest a refactor of the api.

With a large dataset I would propose building a GraphQL or REST api which would be responsible for formatting the data into a more readable format ( see tree types ) and would accept date parameters to allow smaller packets to be sent over the network.  Furthermore if at all possible I would look to investigate the data structure behind the api to see if it’s possible to structure in a format that requires less runtime processing on each request. 


## Next Steps

Error handling - the error handling at the moment is basic, the next step is to add an Error boundary and generic typescript error library for more consitant error handling.

Api refactor - had I had more time I intended to build a a lambda to demonstrate the api changes I proposed above to test the performance difference when handling the same data set server side. 

Styling - the styling is very simplistic and not scaleable


