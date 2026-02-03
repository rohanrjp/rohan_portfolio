import { MacbookScroll } from './MacScroll'

const Skills = () => {
  return (
    <section className='xl:h-[2660px] md:h-[2660px] sm:h-[1000px] pb-12  flex-col justify-center items-center mx-auto'>
        <div className="container mx-auto">
        <MacbookScroll title="Powering My Projects" showGradient={true} src={"/Skills.png"}/>
        </div>
    </section>
  )
}

export default Skills