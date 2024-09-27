import React, { ReactNode } from 'react'


interface StyleTopBarProps {
  children: ReactNode;
}

const styleTopBar = ({ children }: StyleTopBarProps) => {




  return (

    <div className='sticky top-0 font-twitterChirp  backdrop-blur-md bg-black/65 border-twitterBorder border-b z-10'>
      {children}
    </div>



  )

}



export default styleTopBar;