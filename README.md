# Installation and start nodemon

Run:
* npm i
* npm run devStart
<hr>

## Login

POST:
* /users/authenticate
- body: {username: test, password: test}

Catch  token and use it for every other request, as the value for Authorization Header (Prepend "Bearer " before token).
<hr>

## ToDo's Resource
* /todos
* remember to use Authorization token

GET: Gets all todos.

POST:
- bodyExample:<br>
{<br>
&nbsp;&nbsp;&nbsp;"task": "fifth task",<br>
&nbsp;&nbsp;&nbsp;"completed": false<br>
}

DELETE:
- bodyExample:<br>
{<br>
&nbsp;&nbsp;&nbsp;"task": "first task"<br>
}

DELETE:<br>
- bodyExample:<br>
{<br>
&nbsp;&nbsp;&nbsp;"task": "first task",<br>
&nbsp;&nbsp;&nbsp;"completed": true<br>
}
