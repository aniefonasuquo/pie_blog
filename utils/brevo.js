// const brevo = require('@getbrevo/brevo');
// let defaultClient = brevo.ApiClient.instance;

// let apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = process.env.BREVO_API_KEY;

// let apiInstance = new brevo.TransactionalEmailsApi();
// let sendSmtpEmail = new brevo.SendSmtpEmail();

// sendSmtpEmail.subject = "My {{params.subject}}";
// sendSmtpEmail.htmlContent = "<html><body><h1>Common: This is my first transactional email {{params.parameter}}</h1></body></html>";
// sendSmtpEmail.sender = { "name": "John", "email": "example@example.com" };
// sendSmtpEmail.to = [
//   { "email": "example@brevo.com", "name": "sample-name" }
// ];
// sendSmtpEmail.replyTo = { "email": "example@brevo.com", "name": "sample-name" };
// sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
// sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" };


// apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
//   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
// }, function (error) {
//   console.error(error);
// });


// export async function addToMailingList (email) {
//   let apiInstance = new brevo.ContactsApi();
//   let contact = new brevo.CreateDoiContact();

//   contact.email = email
//   contact.templateId = 1
//   contact.includeListIds = [8]
//   contact.redirectionUrl = 'wwww.blog.usepie.ng'

//   apiInstance.createDoiContact(contact).then(function (data) {
//     console.log('API call successful')
//   }, function (error) {
//     console.error(error)
//   })
// }
  
