/// <reference path="../../../typings/tsd.d.ts" />

import { USINE } from '../actions/usine.actions'
import { clone } from '../helpers/helpers'

interface IUsine {
  running: boolean,
  wheels: Object[]
}
const usine: IUsine = {
  running: false,
  wheels: []
}

function usineReducer(state: IUsine = usine, action: any) {

  switch (action.type) {
    case USINE.ADD:
      return Object.assign({}, state, { wheels: [...state.wheels, {
        ix: state.wheels.length + 1,
        running: state.running
      }]})

    case USINE.REMOVE:
      return Object.assign({}, state, {
        wheels: [...state.wheels].slice(0, state.wheels.length - 1)
      })

    case USINE.RUN:
      const newWheels = clone(state.wheels)
      return Object.assign({}, state,
        { running: !state.running },
        { wheels: newWheels.map(item => Object.assign({}, item, {
            running: !state.running
          })
        )}
      )

    case USINE.SELECT:
      return Object.assign({}, state, { wheels: [
          ...state.wheels.slice(0, action.wheel.ix - 1),
          {
            ix: action.wheel.ix,
            running: !action.wheel.running
          },
          ...state.wheels.slice(action.wheel.ix)
        ]
      })

    default:
      return state

  }

}

export default usineReducer
