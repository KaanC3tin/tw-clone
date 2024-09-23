import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const Search = () => {
  return (
    <div className='sticky top-0 bg-black z-10'>
      <Popover>
        <PopoverButton
          className='h-[42px] w-[350px] bg-[#202327] rounded-full px-5 flex items-center border border-transparent focus-within:border-[#1d9bf0]  focus-within:bg-black group z-50'
        >

          {/* <div className='h-[53px] w-[350px] bg-[#202327] rounded-full px-5 flex items-center border border-transparent focus-within:border-[#1d9bf0]  focus-within:bg-black group '> */}
          <label className='flex mr-12 text-[#71767B] '>
            <svg height={45} width={18.50} fill='#71767B' viewBox="0 0 24 24" aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1bwzh9t r-4wgw6l r-2dysd3">
              <g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
              </path></g></svg>
            <div className='ml-5 font-normal text-[15px]'>
              <input
                type="text"
                className='bg-transparent w-full h-full  border-0  focus:border-none outline-none placeholder:text-[#71767B]'
                placeholder='Search' />

            </div>
          </label>
          {/* </div> */}
        </PopoverButton>
        <PopoverPanel className="bg-black shadow-box flex justify-center pt-[20px] h-[105px] bottom-0 rounded-xl z-10 text-[#71767B] font-normal text-[15px]">
          <span>Try searching for people,lists, or keybords</span>
        </PopoverPanel>
      </Popover>
    </div>
  )
}

export default Search