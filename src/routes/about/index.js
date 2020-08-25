/**
 * @route /about/
 * @title Len Lester | About
 * @prerender false
 */
import styles from './template.css';
import template from './template';
import {AoflElement, customElement} from '@aofl/element';

/**
 * @summary About
 * @extends {AoflElement}
 */
@customElement('about-element')
class About extends AoflElement {
  /**
   * Creates an instance of About.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'about-element';
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default About;
