/**
 * @route /contact/
 * @title Len Lester | Contact
 * @prerender false
 */
import styles from './template.css';
import template from './template';
import {AoflElement, customElement, property} from '@aofl/element';

/**
 * @summary Contact
 * @extends {AoflElement}
 */
@customElement('contact-element')
class Contact extends AoflElement {
  /**
   * @readonly
   */
  static is = 'contact-element';
  @property()
  submitted = false;
  @property()
  disableSubmit = false;

  async submitHandler(e) {
    e.preventDefault();
    this.disableSubmit = true;
    const form = e.target;
    const formData = new FormData(form);
    formData.append('formDataNameOrder', JSON.stringify(['name', 'email', 'subject', 'message']));
    formData.append('formGoogleSheetName', 'responses');
    formData.append('formGoogleSendEmail', 'mail@catmanabat.com');
    await fetch(
      form.action,
      {
        method: 'POST',
        body: formData
      }
    );
    this.submitted = true;
    this.disableSubmit = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.submitted = false;
    this.disableSubmit = false;
  }
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default Contact;
