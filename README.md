# Information

Example application used to teach server to server communications with Promise.all

# Start Project

```sh
git clone https://github.com/RobinGulbrandsen/express-request-api.git
npm install
npm start
```

# Challange

* Use this API to return all the Articles with their comments
* Use this API to return a list of the most frequent commentors ordered by the number of comments for each

# API Doc

| TYPE | URI                        | Argument | Return | Comment |
|------|----------------------------|----------|--------|---------|
| GET  | /api/articles              | | List of Articles | |
| GET  | /api/articles/:id/comments | Article Id | List of Comments for an Article | 404 if no Article found |

## Sample Responses 

### /api/articles

```json
[
  {
    "id": 1,
    "author": "Batman",
    "title": "How to capture the Joker"
  }
]
```

### /api/articles/1/comments

```json
[
  {
    "id": 1,
    "article": 1,
    "author": "Batman",
    "content": "This is the best article in the world!"
  }
]
```


