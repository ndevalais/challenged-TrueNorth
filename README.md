# CHALLENGE

Create a task api that has 2 endpoint

## GET /tasks that generate N tasks (N is dynamic, default is 3).

○ Tasks are composed of a UUID and a Title.

○ Titles are fetched from an external API
(https://lorem-faker.vercel.app/api?quantity={someNumber})

○ This particular API is not idempotent, so all the invocations to /tasks will return a different list.

##  PUT /tasks that mark one task as done.
○ This endpoint will only create a log entry


##  Task

Task API \

```http
GET https://challenged-true-north.vercel.app/api/v1/task
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `quantity` | `string` | **No Required**. Number of returned task records |

## Responses

Many API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, Gophish returns a JSON response in the following format:

```javascript
{
  "message" : string,
  "success" : bool,
  "data"    : [{
        "uuid": string,
        "task": string
    },
    ...]
}
```

## Status Codes

Gophish returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |