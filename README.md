## Installation

```bash
# Install dependencies
$ npm install --force
```

## Running Nest.js

```bash
# development
$ npm run start-nest

# watch mode
$ npm run start-nest:dev

# production mode
$ npm run start-nest:prod
```

## Running Angular

```bash
# development
$ npm run start-angular

# production mode
$ npm run start-angular:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dockerize

```bash
# docker build
$ docker-compose build

# docker run
$ docker-compose up -d

```

## Api Documentation:

#Fetch All Doctors
Method:Get
Path:localhost:3000/doctor

#Fetch Specific Doctor By Id
Method:Get
Path: localhost:3000/doctor/:id

#Create A Doctor
Method:Post
Path: localhost:3000/doctor
Payload: {
"firstName": "Mohamed",
"lastName": "Ali",
"age": 27,
}

#Edit A Doctor By Id
Method:Put
Path: localhost:3000/doctor/:id
Payload: {
"firstName": "Mohamed",
"lastName": "Ali",
"age": 27,
}

#Delete A Doctor By Id
Method:Delete
Path: localhost:3000/doctor/:id

#Fetch All Patients
Method:Get
Path: localhost:3000/patient/:id

#Fetch Specific Patient By Id
Method:Get
Path: localhost:3000/patient/:id

#Create A Patient
Method:Post
Path: localhost:3000/patient
Payload: {
"firstName": "Mohamed",
"lastName": "Ali",
"age": 27,
"doctorId": 3
}

#Edit A Patient By Id
Method:Put
Path: localhost:3000/patient/:id
Payload: {
"firstName": "Mohamed",
"lastName": "Ali",
"age": 27,
"doctorId": 3
}

#Delete A Patient By Id
Method:Delete
Path: localhost:3000/patient/:id
