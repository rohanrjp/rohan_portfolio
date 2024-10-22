import { Sheet,SheetContent,SheetTrigger } from "./ui/sheet"
import { AlignJustify } from "lucide-react"
import Navbar from "./Navbar"
import Socials from "./Socials"


const MobilenavBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-40">
            <Navbar containerStyles="flex flex-col gap-y-8 items-center" linkStyles="text-4xl"/>
          </div>
          <Socials containerStyles="flex gap-x-6 " linkStyles="text-3xl"/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobilenavBar