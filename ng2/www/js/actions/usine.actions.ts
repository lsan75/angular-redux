import {Injectable} from '@angular/core'

export const USINE = {
  ADD: 'USINE_ADD',
  REMOVE: 'USINE_REMOVE',
  RUN: 'USINE_RUN',
  SELECT: 'USINE_SELECT'
}

@Injectable()
export default class UsineActions {

  public initialize = () => {
    return {
      type: USINE.ADD
    }
  }

  public action = event => {
    return {
      type: USINE[event]
    }
  }

  public select = wheel => {
    return {
      type: USINE.SELECT,
      wheel
    }
  }

}
