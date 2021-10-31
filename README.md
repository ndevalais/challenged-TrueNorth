# CHALLENGE

Create a task api that has 2 endpoint

## GET /tasks that generate N tasks (N is dynamic, default is 3).

○ Tasks are composed of a UUID and a Title.

○ Titles are fetched from an external API
(https://lorem-faker.vercel.app/api?quantity={someNumber})

○ This particular API is not idempotent, so all the invocations to /tasks will return a different list.

##  PUT /tasks that mark one task as done.
○ This endpoint will only create a log entry


##  GET Task

Tasks that generate N tasks (N is dynamic, default is 3).

```http
GET https://challenged-true-north.vercel.app/api/v1/task?quantity=10
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `quantity` | `string` | **No Required**. Number of returned task records |

## Responses

If a valid request is sent, it returns a JSON response in the following format:

```javascript
{
  "status" : string,
  "message" : string,
  "result"    : [{
        "uuid": string,
        "task": string
    },
    ...]
}
```

If an invalid request is sent or some other error occurs, it returns a JSON response in the following format:

```javascript
{
  "statusCode" : number,
  "error": string,
  "message" : string,
}
```

##  PUT Task

Task API \

```http
PUT http://localhost:3000/api/v1/task

{
    "uuid": "002c7fd25a8a7a885708cecbfdc54947eb4c7053",
    "task": "quia ea numquam"
}
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `quantity` | `string` | **No Required**. Number of returned task records |

## Responses

If a valid request is sent, it returns a JSON response in the following format:

```javascript
{
  "status" : string,
  "message" : string,
  "result"    : [{
        "uuid": string,
        "task": string
    },
    ...]
}
```

If an invalid request is sent or some other error occurs, it returns a JSON response in the following format:

```javascript
{
  "statusCode" : number,
  "error": string,
  "message" : string,
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