'use client';
import Link from 'next/link'
import React from 'react'
import {
    RiInstagramFill,
    RiGithubFill,
    RiLinkedinFill
} from 'react-icons/ri'

const icons=[
    {path:'https://github.com/rohanrjp',name:<RiGithubFill/>},
    {path:'https://www.linkedin.com/in/rohan-paul-216460259/',name:<RiLinkedinFill/>},
    {path:'https://www.instagram.com/rohan_.jp/?igsh=Y3g2bmhtOGU1b3Iz&utm_source=qr#',name:<RiInstagramFill/>}
]

const Socials = ({containerStyles,linkStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon,index)=>{
           return <Link href={icon.path} key={index} target="_blank"  // Opens the link in a new tab
           rel="noopener noreferrer">
            <div className={`${linkStyles}`}>{icon.name}</div>
           </Link>

        })}


    </div>
  )
}

export default Socials