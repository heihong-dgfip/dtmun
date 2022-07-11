import { Component, Prop, h, ComponentInterface,Element } from '@stencil/core';

import '@gouvfr/dsfr/dist/dsfr.module.min'
 
declare global {
  interface Window { dsfr: {start?:Function, verbose:any, inspector?:{tree}, accordion?}; }
}


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  /**
   * The first name
   */
  @Prop() first: string;

  @Element() el!: HTMLElement;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;



  componentDidLoad(){
    console.log(window.dsfr)
    window.dsfr.verbose =  true;
    console.log(this.el.shadowRoot.querySelector('.fr-accordion'));
    console.log(window.dsfr.accordion)
  }


  render() {
   
    return <section class="fr-accordion">
    <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-93">Intitulé accordéon</button>
    </h3>
    <div class="fr-collapse" id="accordion-93">
       description
    </div>
  </section>;
  }
}
