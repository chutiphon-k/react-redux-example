# React Redux Example
> Please run both web server and api server.

## Using Web

``` bash
cd web

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

# build for production
npm run build
```

## Using API

``` bash
cd api

# install dependencies
npm install

# serve at localhost:3001
npm run start
```

## RESTful API

| HTTP METHOD | GET            | POST       | PUT         | PATCH | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ | ------ |
| /pokemons       | / | / | x | x | / |
| /pokemons/:id       | / | x | / | / | / |