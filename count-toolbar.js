import { html, LitElement } from 'http://unpkg.com/lit-element?module';
import { store } from './store.js'
import { autorun } from "https://unpkg.com/mobx?module";

class CountToolbar extends LitElement{

  static get properties(){
    return {
      count: { type: Number }
    }
  }

  constructor(){
    super()
    this.count = 10;
    
    autorun(() => {  //doesn't need listners, does it behind the scenes
      this.count = store.count;
    })
    //listen for bubbling events from lower order functions
    //window.addEventListener('count-changed', this.countChanged.bind(this))
  }
  connectedCallback() {
    super.connectedCallback()
    autorun(() => {
      this.count = store.count;
    })
  }

  disconnectedCallback(){
    this.disposer();
  }

  render(){
    return html`
      Hey there user! You have a count of ${this.count} 
      <button @click=${() => store.count = 0} alt="Reset Count">reset</button>
      <button @click=${() => store.decrementCount()} alt="Decrement Count">-</button>
    `;
  }

  //disconnectedCallback() {
    //window.removeEventListener('count-changed', this.countChanged.bind(this))
  //}

  //countChanged(e) {
  //  console.log(e);
    //this.count = e.detail.count;
  //}

  
}

customElements.define('count-toolbar', CountToolbar);