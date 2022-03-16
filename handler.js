"use strict";

const { wait } = require("./wait");

module.exports.hello = async (event) => {
  return await wait(event);
};
