import styles from './template.css';
import template from './template';
import {AoflElement, customElement, property} from '@aofl/element';
import {pageTemplateSdo} from '../sdo-page-template';
/**
 * @summary PageTemplate
 * @extends {AoflElement}
 */
@customElement('page-template')
class PageTemplate extends AoflElement {
  @property({type: Array, store: pageTemplateSdo, mapState: 'routes'})
  routes = [];
  @property({type: Boolean, store: pageTemplateSdo, mapState: 'showMobileNav'})
  showMobileNav = false;
  /**
   * @readonly
   */
  static is = 'page-template';
  /**
   *
   */
  showMobileNavHandler() {
    pageTemplateSdo.showMobileNav = !this.showMobileNav;
    this.showMobileNav = !this.showMobileNav;
  }
  connectedCallback() {
    super.connectedCallback();
    pageTemplateSdo.showMobileNav = false;
  }
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default PageTemplate;
