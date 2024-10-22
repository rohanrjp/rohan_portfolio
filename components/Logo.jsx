import Link from "next/link"
import Image from "next/image"


const Logo = () => {
  return (
    <Link href='/'> 
        <Image src='/logo.png' width={120} height={120} alt='Logo of website'/>
    </Link>
  )
}

export default Logo