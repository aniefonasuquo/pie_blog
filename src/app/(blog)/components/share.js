'use client'

import { 
  FacebookShareButton, 
  FacebookIcon, 
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  InstapaperShareButton,  
  InstapaperIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon} from "next-share";

  export default function Sharing ({url, title}) {
    return (<>
    <div>
    <EmailShareButton url={url} subject={title} body="body"> 
    <EmailIcon size={32} round />
    </EmailShareButton>  
    </div>

    <div>
    <WhatsappShareButton url={url} title={title} separator=":: ">
    <WhatsappIcon size={32} round />
    </WhatsappShareButton>
    </div>

    <div>
    <FacebookShareButton url={url} quote={title} hashtag={'#wealth'}>
    <FacebookIcon size={32} round />
    </FacebookShareButton>

    </div>
    <div>
    <TwitterShareButton url={url}title={title}>
    <TwitterIcon size={32} round />
    </TwitterShareButton>

    </div>
    <div>
    <TelegramShareButton url={url} title={title}>
    <TelegramIcon size={32} round />
    </TelegramShareButton>

    </div>
    <div>
    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>

    </div>
    <div>
    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round />
    </RedditShareButton>

    </div>
    </>)
  }