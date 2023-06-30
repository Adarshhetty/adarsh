// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'

type Data = {
  name: string,

 
}

export default async function ContactAPI(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) 
{
  
  res.status(200).json({name:"Adarsh shetty"})
  }

 

 
 

