import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-background py-32">
      <div className="container mx-auto"> 
        <div className="flex flex-col items-center justify-between">
          <Socials containerStyles="flex gap-x-8 mb-4 mx-auto xl:mx-0" linkStyles="text-black text-[30px] dark:text-white/70 hover:text-primary dark:hover:text-primary transition-all"/>
          <div className="text-muted-foreground text-center">
            Developed using Next.js, Tailwind CSS, shadcn/ui and Aceternity UI
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;