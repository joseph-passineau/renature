/* TypeScript file generated from Interpolate_unit.rei by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const Interpolate_unitBS = require('./Interpolate_unit.bs');

export const interpolateUnit: (_1:{
  readonly range: [number, number]; 
  readonly domain: [string, string]; 
  readonly value: number
}) => string = function (Arg1: any) {
  const result = Curry._3(Interpolate_unitBS.interpolateUnit, Arg1.range, Arg1.domain, Arg1.value);
  return result
};
