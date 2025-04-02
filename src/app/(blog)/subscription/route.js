import axios from "axios";
import { addToMailingList } from "../../../../utils/brevo";

const sendpulse = require("sendpulse-api");


let brevo_key = process.env.BREVO_API

async function addToList (email) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': brevo_key
    },
    body: JSON.stringify({
      email: email,
      includeListIds: [8],
      templateId: 6,
      redirectionUrl: 'https://blog.usepie.ng/'
    })
  };
  
  let add_call = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', options)
    .then(res => res.status)
    .catch(err => console.error(err));

  console.log(add_call)

  return add_call
}

export async function GET(request) {

  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  
  // const response = await addSubscriber(email)
  const sub_res = await addToList(email)

  if (sub_res == 204 || sub_res == 201) {
    return Response.json({"message": "success"})
  } else {
    return Response.error()
  }

}