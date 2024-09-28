import React, { ReactNode } from 'react'


interface StyleTopBarProps {
  children: ReactNode;
}

const styleTopBar = ({ children }: StyleTopBarProps) => {


  return (

    <div className='fixed top-0 w-[598px] font-twitterChirp  backdrop-blur-sm bg-black/65 border-twitterBorder transition-colors  border-b z-20 '>
      {children}
    </div>



  )

}



export default styleTopBar;