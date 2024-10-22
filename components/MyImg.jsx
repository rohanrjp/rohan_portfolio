import Image from "next/image"

const MyImg = ({containerStyles,imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
        <Image src={imgSrc} fill alt=""></Image>
    </div>
  )
}

export default MyImg