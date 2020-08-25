import {Sdo, storeInstance, state} from '@aofl/store';

const NAMESPACE = 'page-template';

class PageTemplateSdo extends Sdo {
  static namespace = NAMESPACE;

  @state()
  showMobileNav = false;

  @state()
  routes = [
    {
      label: 'Programming',
      link: '/programming/',
      group: 'programming'
    },
    {
      label: 'About',
      link: '/about/',
    },
    {
      label: 'Contact',
      link: '/contact/'
    }
  ];
}

const pageTemplateSdo = new PageTemplateSdo();

storeInstance.addState(pageTemplateSdo);

export {
  pageTemplateSdo
};

