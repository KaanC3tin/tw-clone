import React, { ReactNode } from 'react'

interface ContentProps {
    children: ReactNode;
    id: string;
}

export default function Content({ children,id }: ContentProps) {
    return (
        <div>
            {/* {id} */}
            {children}
        </div>
    )
}
