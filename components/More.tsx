import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import React from 'react'

const page = () => {
    return (
        <Popover className="relative">
            <PopoverButton className="px-0 bg-black w-[130px] outline-none ">
                <div className='flex items-center group hover:bg-twitterIConHover  hover:rounded-full duration-1000 transition-all ease-in-out w-full  space-x-1.5'>
                    <div className='w-14 h-14 relative flex items-center justify-center '>
                        <svg
                            fill='#ffff'
                            height={26.5}
                            width={26.5}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
                        >
                            <g>
                                <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
                            </g>
                        </svg>
                    </div>
                    <span className='text-lg text-white font-normal '>
                        more
                    </span>
                </div>
            </PopoverButton>
            <PopoverPanel className="absolute w-[318px] bottom-0 left-0 bg-black  shadow-box rounded-xl flex flex-col  text-xl">
                <div className='flex items-center px-5 py-4 hover:bg-twitterIConHover hover:rounded-xl'>
                    <svg fill='#ffff' height={24} width={24} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx r-1kihuf0 r-1472mwg r-di8nfa r-lrsllp" data-testid="icon"><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg>
                    <span className='flex items-center justify-center px-5 font-bold text-xl'>Lists</span>
                </div>
                <div className='flex items-center px-5 py-4 hover:bg-twitterIConHover hover:rounded:sm'>
                    <svg fill='#ffff' height={24} width={24} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx r-1kihuf0 r-1472mwg r-di8nfa r-lrsllp" data-testid="icon"><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg>
                    <span className='flex items-center justify-center px-5 font-bold text-xl'>Monetezization</span>
                </div>
                <div className='flex items-center px-5 py-4 hover:bg-twitterIConHover hover:rounded-sm'>
                    <svg fill='#ffff' height={24} width={24} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx r-1kihuf0 r-1472mwg r-di8nfa r-lrsllp" data-testid="icon"><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg>
                    <span className='flex items-center justify-center px-5 font-bold text-xl'>Ads</span>
                </div>
                <div className='flex items-center px-5 py-4 hover:bg-twitterIConHover hover:rounded-sm'>
                    <svg fill='#ffff' height={24} width={24} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx r-1kihuf0 r-1472mwg r-di8nfa r-lrsllp" data-testid="icon"><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg>
                    <span className='flex items-center justify-center px-5 font-bold text-xl'>Create your Space</span>
                </div>
                <div className='flex items-center px-5 py-4 hover:bg-twitterIConHover hover:rounded-xl'>
                    <svg fill='#ffff' height={24} width={24} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx r-1kihuf0 r-1472mwg r-di8nfa r-lrsllp" data-testid="icon"><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg>
                    <span className='flex items-center justify-center px-5 font-bold text-xl'>Settings and privacy</span>
                </div>            </PopoverPanel>
        </Popover>

    )
}

export default page