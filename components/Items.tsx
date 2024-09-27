import React, { ReactNode } from 'react'

interface ItemsProps{
  children: ReactNode;
}

export default function Items({ children }:ItemsProps) {
  return (
    <div className='flex'>{children}</div>
  )
}
