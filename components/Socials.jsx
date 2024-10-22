'use client';
import Link from 'next/link'
import React from 'react'
import {
    RiInstagramFill,
    RiGithubFill,
    RiLinkedinFill
} from 'react-icons/ri'

const icons=[
    {path:'/',name:<RiGithubFill/>},
    {path:'/',name:<RiLinkedinFill/>},
    {path:'/',name:<RiInstagramFill/>}
]

const Socials = ({containerStyles,linkStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon,index)=>{
           return <Link href={icon.path} key={index}>
            <div className={`${linkStyles}`}>{icon.name}</div>
           </Link>

        })}


    </div>
  )
}

export default Socials