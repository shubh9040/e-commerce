
require('ignore-styles')// we ignor style because there is no need to take style from server.

require('@babel/register')({
  ignore: [/(node_modules)/],// ignore node-modules.
  presets: ['@babel/preset-env', '@babel/preset-react']//convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.
})

require('../server/server')
