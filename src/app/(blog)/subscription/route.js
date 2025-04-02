import axios from "axios";
import { addToMailingList } from "../../../../utils/brevo";

const sendpulse = require("sendpulse-api");

var API_USER_ID = "d15e2c1a23f6bcb3c5e4360b5c1e00b9";
var API_SECRET = "ee99aea2286e41de6b98a34574756fe8";
var TOKEN_STORAGE = "/tmp/";

async function addSubscriber (email) {


    const sendpulsetoken = await getSendPulseToken()

    if (sendpulsetoken.status == 200) {

      const response = await axios.post("https://api.sendpulse.com/addressbooks/241130/emails", 
      {
        "emails":[
           {
              "email":`${email}`
           }
        ],
        "confirmation":"force",
        "sender_email":"hello@cleva.ng",
        "message_lang":"en"
     },
    {
      headers: {Authorization: `Bearer ${sendpulsetoken.data.access_token}`}
    })

    // console.log(response.data)
    return response
    
  } else {
      // console.log(response.status)
      return response.status
      
    }
    

}

async function getSendPulseToken () {

  const response = await axios.post("https://api.sendpulse.com/oauth/access_token", 
  {   
    grant_type:'client_credentials',
    client_id:'d15e2c1a23f6bcb3c5e4360b5c1e00b9',
    client_secret:'ee99aea2286e41de6b98a34574756fe8'
  })

  return response

}

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