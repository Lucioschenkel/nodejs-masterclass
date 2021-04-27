/**
 * Library that demonstrates something throwing when it's init() is called
 */

// Container for the module
const example = {};

// Init function
example.init = function() {
  // This is an error create intentionally (bar is not defined)
  let foo = bar;
};

module.exports = example;
