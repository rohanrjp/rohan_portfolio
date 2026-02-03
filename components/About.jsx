import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  GraduationCap,
  HomeIcon,
  CakeIcon,
  BriefcaseIcon,
  SchoolIcon,
} from "lucide-react";

const infoData = [
  { icon: <User2 />, text: "Rohan Paul" },
  { icon: <HomeIcon />, text: "Kochi" },
  { icon: <CakeIcon />, text: "22" },
  { icon: <GraduationCap />, text: "Bachelor of Computer Science (Hons.)" },
];

const eduData = [
  {
    university: "Rajagiri School of Engineering & Technology",
    qualification: "B.Tech. (Hons.) in Computer Science and Engineering ",
    years: "2020-2024",
  },
  {
    university: "Saraswati Vidyaniketan Public School",
    qualification: "Higher Secondary Certificate (CBSE)",
    years: "2018-2020",
  },
  {
    university: "Global Public School",
    qualification: "Secondary School Certificate (CBSE)",
    years: "2007-2018",
  },
];

const expData = [
  {
    company: "InfoView Technologies Pvt. Ltd. (IVTL)",
    designation: "Software developer",
    years: "2024-Present",
  },
  {
    company: "GIEOM Business Solutions",
    designation: "Intern (Software Development)",
    years: "2022",
  },
];

const About = () => {
  
  return (
    <section className="py-12 sm:py-16 xl:py-24 flex-col justify-center items-center mx-auto">
      <div className="container mx-auto">
        <h2 className="section-title text-center  mb-8 xl:mb-16 mx-auto">
          About Me
        </h2>
        <div className="flex justify-center">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none mx-auto ">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-12 xl:py-8 ">
              <TabsContent value="personal">
                <div className=" grid xl:grid-cols-2  gap-6 mb-12">
                  {infoData.map((item, index) => {
                    return (
                      <div
                        className="flex items-center gap-x-5 mx-auto xl:mx-0"
                        key={index}
                      >
                        <div className="text-primary">{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                  <div className="flex flex-col gap-y-3">
                    <div className="mt-5 font-semibold text-primary">
                      Languages spoken
                    </div>
                    <div className="border-t  border-gray-300 my-2 dark:border-white"></div>
                    <div>English, Malayalam, Hindi</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="education">
                <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:justify-between gap-12 xl:gap-x-22 ">
                  <div className="flex flex-row items-center justify-center text-center gap-8 ">
                    <SchoolIcon className="text-primary w-10 h-10" />
                    <h3 className="text-2xl font-semibold ">Education</h3>
                  </div>
                  <div className="hidden xl:block h-auto border-l border-gray-300 "></div>
                  <div className="flex flex-col gap-8 justify-center items-center">
                    {eduData.map((item, index) => (
                      <div
                        className="flex flex-col items-center gap-2 text-center"
                        key={index}
                      >
                        <div className="text-primary font-medium">
                          {item.university}
                        </div>
                        <div className="text-base">{item.qualification}</div>
                        <div className="text-sm text-gray-500">
                          {item.years}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="experience">
              <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:justify-between gap-12 xl:gap-x-22 ">
                  <div className="flex flex-row items-center justify-center text-center gap-8 ">
                    <BriefcaseIcon className="text-primary w-10 h-10" />
                    <h3 className="text-2xl font-semibold ">Experience</h3>
                  </div>
                  <div className="hidden xl:block h-auto border-l border-gray-300 "></div>
                  <div className="flex flex-col gap-8 justify-center items-center">
                    {expData.map((item, index) => (
                      <div
                        className="flex flex-col items-center gap-2 text-center"
                        key={index}
                      >
                        <div className="text-primary font-medium">
                          {item.company}
                        </div>
                        <div className="text-base">{item.designation}</div>
                        <div className="text-sm text-gray-500">
                          {item.years}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>    
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
