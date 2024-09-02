import React from 'react';
import { Icon } from "@iconify-icon/react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Icon
                icon="gg:spinner"
                width={30} //
                height={30}
                style={{ color: "#1DA1F2" }}
                className='spin'
            />
        </div>
    );
}

export default Loading;
