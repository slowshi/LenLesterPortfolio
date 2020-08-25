import '../../modules/page-template';
export default (ctx, html) => html`
<page-template>
   <h1 class="text-center">Contact Me</h1>
   <div class="card m-5">
   ${ctx.submitted ? html`
     <div class="card-body">
      <h3>Thanks for contacting me I will get back to you soon!</h3>
     </div>
   `: html`
    <form class="card-body" action="https://script.google.com/macros/s/AKfycbxZAWF18mRcvIU_LoxukxyXwB1EPmgb5zi6p60onA/exec" @submit="${ctx.submitHandler}">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" type="text" name="name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" type="email" name="email">
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input class="form-control" type="text" name="subject">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" name="message"></textarea>
        </div>
        <input type="submit" value="Submit" class="mx-3 btn btn-block btn-light" ?disabled="${ctx.disableSubmit}">
    </form>
   `}
   </div>
</page-template>
`;
