# Bitly clone Rest API
Project cloning bit ly, ini hanya rest api/backend

Before using please...
```
npm install
```
For running this project

```
npm run dev
```
## API Endpoint

| Route         | Http          |  Auth   | Description|
| ------------- |:-------------:| --------:|-----------:|
| `/users/login`  | `POST`          | No        | Login and generate token|
| `/users/register`| `POST`         | No      | Create New Account |
| `/url`          | `POST`          | Yes     | Generate new Short Url for current                                                    account|
| `/url`          | `GET`           |Yes        |List All shortlink from current account|
|`/url/:id`       | `DELETE`        | Yes       |Delete shortlink with id from current                                                  account|
|`/:code`      | `GET`        | No       |Shortlink and it will be automatic redirect to original url|

example for .env file
```
PORT = 5000
MYSQL_USERNAME = root
MYSQL_DATABASE = urlshort
SECRET_KEY = secretkey
```

## Fitur
- Passport js
- Json Web Token
- User bisa generate shortcode/shortlink sendiri/akan otomatis di generate secara random
- Database dengan mysql

Untuk database sudah saya sertakkan di dalam folder config.
