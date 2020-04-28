import {
  observable,
  action,
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

  decrementCount() {
    if (this.count > 0) this.count = --this.count;
  }
}

decorate(Store, {
  count: observable, //majority of state, is observable, i.e. track and update it
  decrementCount: action
})

export const store = new Store();