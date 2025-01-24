import Link from "next/link"
import Image from "next/image"


const Logo = () => {
  return (
    <Link href='/'> 
        <Image src='/rp_logo.png' width={100} height={100} alt='Logo of website'/>
    </Link>
  )
}

export default Logo