import {
  observable,
  decorate,
  computed,
  autorun,
} from "https://unpkg.com/mobx?module";

//three pieces
// store, view layer, action layer

class Store {
  constructor() {
    this.count = 0;
  }
}

decorate(Store, {
  count: observable //majority of state, is observable, i.e. track and update it
})

export const store = new Store();