import Link from "next/link";
import { Button } from "./ui/button";
import { ExpandableCardDemo } from "./ExpCards";



const LatestProjects = () => {
    return (
      <section className="relative min-h-[75vh] xl:pt-20">
        <div className="container mx-auto h-full flex flex-col xl:flex-row items-center xl:items-stretch gap-8 px-6">
          
          {/* Left Section: Title and Button */}
          <div className="flex flex-col justify-center items-center xl:items-start gap-6 w-full xl:w-1/2 h-auto p-4">
            <h2 className="text-3xl font-bold">Latest Projects</h2>
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
          </div>
  
          {/* Right Section: Expandable Card */}
          <div className="w-full xl:w-1/2 flex justify-center items-center h-auto overflow-auto">
            <ExpandableCardDemo />
          </div>
        </div>
      </section>
    );
  };
  export default LatestProjects;