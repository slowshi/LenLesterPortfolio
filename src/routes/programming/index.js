/**
 * @route /programming/
 * @title Len Lester | Programming
 * @prerender false
 */
import styles from './template.css';
import template from './template';
import {AoflElement, customElement} from '@aofl/element';

/**
 * @summary Programming
 * @extends {AoflElement}
 */
@customElement('programming-element')
class Programming extends AoflElement {
  /**
   * Creates an instance of Programming.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'programming-element';
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default Programming;
