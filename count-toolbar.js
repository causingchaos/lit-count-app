import { html, LitElement } from 'http://unpkg.com/lit-element?module';

class CountToolbar extends LitElement{

  static get properties(){
    return {
      count: { type: Number }
    }
  }

  constructor(){
    super()
    this.count = 10;

    window.addEventListener('count-changed', this.countChanged.bind(this))
  }

  countChanged(e) {
    console.log(e);
  }

  render(){
    return html`
      Hey there user! You have a count of ${this.count}
    `;
  }
}

customElements.define('count-toolbar', CountToolbar);