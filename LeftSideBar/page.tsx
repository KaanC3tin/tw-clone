import Homes from "@/LeftSideBar/Homes/page"
import Search from "@/LeftSideBar/Search/page"
import Alert from "@/LeftSideBar/Alert/page"
import Messages from "@/LeftSideBar/Messages/page"
import Grok from "@/LeftSideBar/Grok/page"
import Communities from "@/LeftSideBar/Communities/page"
import Premium from "@/LeftSideBar/Premium/page"
import VerifiedOrgs from "@/LeftSideBar/VerifiedOrgs/page"
import Profile from "@/LeftSideBar/Profile/page"
import Post from "@/LeftSideBar/Post/page"
import React from 'react'

const page = () => {
  return (
    <div>
      <Homes />
      <Search />
      <Alert />
      <Messages />
      <Grok />
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