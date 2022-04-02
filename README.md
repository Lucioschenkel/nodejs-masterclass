# Node.js Masterclass

This repository contains the source code of the project developed during pirple's Nodejs Masterclass. It consists of a REST API written in Javascript using only node's built-in modules. It also includes a simple GUI with some basic templating logic for variable interpolation inside the templates. The "misc" folder contains some usage examples of modules not present in the API itself.

## Running

To start the application, run:

```bash
node index.js
```

After that, the app will be listening to incoming requests on two ports: one for http and another for https. The default environment is "staging" and the configuration file is at "lib/config.js".

## Testing

The project includes a basic test runner, contained in the "test" folder. Some of the tests are failing on purpose, for the sake of demonstrating the testing functionality. To test the app, run:

```bash
node test
```
