# About

A simple node app that shows how to run redis via docker-compose and use it with nodejs.

# How to run

1. `docker-compose up`
2. `node app.js`

This will set the field `name` and then get and print its value `rizwan` on the terminal.

NOTE: In this project I am using ES6 style modules instead of commonjs, this is possible because I have defined `"type": "module"` in the `package.json` file. 