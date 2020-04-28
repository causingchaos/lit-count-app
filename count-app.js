import { html, LitElement } from 'http://unpkg.com/lit-element?module';
import { store } from './store.js'

import { autorun } from "https://unpkg.com/mobx?module";

class CountApp extends LitElement {

  static get properties( ){
    return {
      count: { type: Number }
    }
  }
  constructor(){
    super()
    this.count = 10;
  }

  connectedCallback(){
    super.connectedCallback();
    this.diposer = autorun(() => {
      this.count = store.count;
    })
  }

  disconnectedCallback(){
    this.disposer();
  }

  render() {
    return html`
      <button @click=${() => store.decrementCount() } alt="Decrement Count">-</button>
      ${this.count}
      <button @click=${this.incrementCount} alt="Increment Count">+</button>
    `
  }
  incrementCount() {
    store.count = ++this.count;
  }
  decrementCount() {
    if (store.count > 0 ) store.count = --this.count;
  }

  /*
  incrementCount(){
    this.count = ++this.count;
    this.dispatchEvent(new CustomEvent('count-changed', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {
        count: this.count
      }
    }));
  }
  */
}

customElements.define('count-app', CountApp);