# CHALLENGE
# Create a task api that has 2 endpoint

## GET /tasks that generate N tasks (N is dynamic, default is 3).

○ Tasks are composed of a UUID and a Title.

○ Titles are fetched from an external API
(https://lorem-faker.vercel.app/api?quantity={someNumber})

○ This particular API is not idempotent, so all the invocations to /tasks will return a different list.

##  PUT /tasks that mark one task as done.
○ This endpoint will only create a log entry


##  Install

npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D


