## microFire - FirebaseAuth (API)

> This is an abstraction from the firebase authentication API.

- Create a project in the firebase console.
- create an .env file from the .envExample template
- enable the email and password authentication service on the firebase console.

### The endpoints are:

##### auth / register

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POST json

#

```bash
{
    "email" : "johndoe@email.com",
    "password" : "password",
    "name" : "John doe"
}
```

##### auth / login

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POST json

#

```bash
{
    "email" : "johndoe@email.com",
    "password" : "password"
}
```

##### auth / recover

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POST json

#

```bash
{
    "email" : "johndoe@email.com"
}
```

##### auth/commerce/list

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; GET

#

#### /auth/user/favorites

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POST json

#

```bash
{
	  "user": ""
}
```

#### /auth/user/update/favorite

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POST json

#

```bash
{
   "_id": "",
   "favorites" : []
 }
```

#### /auth/commerce/register

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POST json

#

```bash
{
    "user": "",
	"description" : "",
	"phone": "",
	"commerceName" : "",
    "tags": [],
    "location": {
    "type" : "Point",
    "coordinates" : [
    -16.7026906,
    -43.8791442
   ]
}
}
```

#### /auth/commerce/update

##### &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; POST json

#

```bash
{
    "user": "",
	"description" : "",
	"phone": "",
	"commerceName" : "",
    "tags": [],
    "location": {
    "type" : "Point",
    "coordinates" : [
    -16.7026906,
    -43.8791442
  ]
}
}
```
