import Image from 'next/image'
import React from 'react'
import TwitterIcon from "@/public/TwitterIcon.png"

const CustomIcon = () => {
    return (
        <div
            >
            <Image
                src={TwitterIcon}
                width={650}
                height={650}
                alt='icon' />
        </div>
    )
}

export default CustomIcon