
![Logo](https://vicehabbo.eu/public/img/logo.gif)


# 🚀 API ViceHabbo

💬 A NodeJS API for ViceHabbo Project: http://vicehabbo.eu/ (use with Arcturus) - http://api.vicehabbo.eu/


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Routes

#### Get all users

```http
  GET /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get all news

```http
  GET /news
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get all comments of a news

```http
  GET /comments
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `news_id` |   `int`  | **Required**. News ID      |

## Authors

- [Sple](https://github.com/Sple-VH)
- [Python](https://github.com/whynotap)


