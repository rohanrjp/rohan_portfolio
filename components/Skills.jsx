import { MacbookScroll } from './MacScroll'

const Skills = () => {
  return (
    <section className='pb-12 flex-col justify-center items-center mx-auto sm:min-h-screen'>
        <div className="container mx-auto">
        <MacbookScroll title="Powering My Projects" showGradient={true} src={"/Skills.png"}/>
        </div>
    </section>
  )
}

export default Skills