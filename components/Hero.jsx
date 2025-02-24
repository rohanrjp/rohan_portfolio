"use client";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import { RiTodoFill, RiArrowDownSLine, RiBriefcase2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import MyImg from "./MyImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-0 sm:py-12 xl:py-24 h-[84vh] xl:pt-28 -mb-40 sm:-mb-0">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Developer
            </div>
            <h1 className="h1 mb-3">
              Hey, My name is{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-green-500 dark:to-cyan-500">
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Rohan Paul
                </motion.span>
              </span>
            </h1>{" "}
            <p className="subtitle">
              I specialize in Python backend development with Flask and FastAPI,
              leveraging my fast learning ability to focus on data science,
              analysis, and visualization as well. Learning Go for microservices backend development.
            </p>
            <div className="pt-6 flex flex-col mx-auto gap-y-3 md:flex-row gap-x-3 xl:mx-0 mb-12">
              <Link href="/contact">
                <Button variant="secondary" className="gap-x-2">
                  Contact Me!
                  <Send size={18} />
                </Button>
              </Link>
              <Button className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-8 mx-auto xl:mx-0"
              linkStyles="text-foreground text-[32px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative mr-20">
            <Badge
              containerStyles="absolute top-[-4vh] -left-[40rem] bg-white "
              icon={<RiBriefcase2Fill />}
              endcountNum={2}
              badgetext="Years of experience"
            />
            <div className="absolute top-[7vh] -left-[37rem]">
              <Image
                src="/arrow_up_light.png"
                width={200}
                height={200}
                className="block dark:hidden"
              />
              <Image
                src="/arrow_up_dark.png"
                width={200}
                height={200}
                className="hidden dark:block"
              />
            </div>
            <div className="absolute top-[40vh] -left-[35rem]">
              <Image
                src="/arrow_down_light.png"
                width={200}
                height={200}
                className="block dark:hidden"
              />
              <Image
                src="/arrow_down_dark.png"
                width={220}
                height={220}
                className="hidden dark:block"
              />
            </div>
            <Badge
              containerStyles="absolute top-[60vh] -left-[35rem]"
              icon={<RiTodoFill />}
              endcountNum={10}
              badgetext="Projects"
              endText="+"
            />
            <div className="absolute w-[500px] h-[500px] rounded-full overflow-hidden -top-1 -right-12">
              <MyImg
                containerStyles="w-full h-full object-cover"
                imgSrc="/portrait_rohan.png"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute xl:bottom-10 left-1/2  animate-bounce  ">
          <RiArrowDownSLine className="text-4xl text-primary mx-auto pr-3 " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
