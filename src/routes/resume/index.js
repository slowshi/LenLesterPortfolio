/**
 * @route /resume/
 * @title Len Lester | Resume
 * @prerender false
 */
import styles from './template.css';
import template from './template';
import {AoflElement, customElement} from '@aofl/element';

/**
 * @summary Resume
 * @extends {AoflElement}
 */
@customElement('resume-element')
class Resume extends AoflElement {
  /**
   * Creates an instance of Resume.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'resume-element';
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default Resume;
