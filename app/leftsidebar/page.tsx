import Homes from "@/app/leftsidebar/Homes/page"
import Search from "@/app/leftsidebar/Explore/page"
import Alert from "@/app/leftsidebar/Alert/page"
import Messages from "@/app/leftsidebar/Messages/page"
import Grok from "@/app/leftsidebar/Grok/page"
import Communities from "@/app/leftsidebar/Communities/page"
import Premium from "@/app/leftsidebar/Premium/page"
import VerifiedOrgs from "@/app/leftsidebar/VerifiedOrgs/page"
import Profile from "@/app/leftsidebar/Profile/page"
import Post from "@/app/leftsidebar/Post/page"
import Bookmarks from "@/app/leftsidebar/Bookmarks/page"
import React from 'react'

const page = () => {
  return (
    <div className="leftSideFont">
      <Homes />
      <Search />
      <Alert />
      <Messages />
      <Grok />
      <Bookmarks />
      <Communities />
      <Premium />
      <VerifiedOrgs />
      <Profile />
      <Post />
      {/* <Accounts /> */}
    </div>
  )
}

export default page