/// <reference path="../../../typings/tsd.d.ts" />

export function clone(item) {
  return JSON.parse(JSON.stringify(item))
}
