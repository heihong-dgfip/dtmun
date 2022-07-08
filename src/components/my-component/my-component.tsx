import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import '@gouvfr/dsfr/dist/dsfr.module.min'
 
declare global {
  interface Window { dsfr: any; }
}


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  print():any{
    console.log(window.dsfr)
    
  }

  render() {
    this.print();
    return <section class="fr-accordion">
      <h4>
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls='accordion1'>
          Titre de accordion
        </button>
      </h4>
      <div class="fr-collapse" id='accordion1'>
          <p>description</p>
      </div>
    </section>;
  }
}
