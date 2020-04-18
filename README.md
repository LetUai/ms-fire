## microFire - FirebaseAuth (API) 

> This is an abstraction from the firebase authentication API.
 * Create a project in the firebase console.
 * create an .env file from the .envExample template
* enable the email and password authentication service on the firebase console.

 ### The endpoints are:

##### auth / register 
##### &nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp; post json 
#
``` bash
{
    "email" : "johndone@email.com",
    "password" : "password"
}
```
##### auth / login
##### &nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp; post json 
#
``` bash
{
    "email" : "johndone@email.com",
    "password" : "password"
}
```
##### auth / recover
##### &nbsp;&nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp; post json 
#
``` bash
{
    "email" : "johndone@email.com"
}
```