import '../link-to-element';
import {repeat} from 'lit-html/directives/repeat';
import '@aofl/drawer';
export default (ctx, html) => html`
<div id="mobileNav" class="section ${ctx.showMobileNav ? `open` : ``}">
  <div class="list-group">
    ${repeat(ctx.routes, ()=>null, (route)=>html`
      <link-to class="list-group-item" href="${route.link}">${route.label}</link-to>
    `)}
  </div>
</div>
  <div id="container">
    <div id="headerWrapper">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <link-to class="h4 m-0" .href="${`/`}">Len Lester</link-to>
        <div id="menuBtn" class="btn" @click="${ctx.showMobileNavHandler}">Menu</div>
      </div>
      <div id="mainNav" class="list-group">
        ${repeat(ctx.routes, ()=>null, (route)=>html`
          <link-to class="list-group-item" href="${route.link}">${route.label}</link-to>
        `)}
      </div>
    </div>
    <div id="pageWrapper">
      <slot></slot>
    </div>
  </div>
`;
