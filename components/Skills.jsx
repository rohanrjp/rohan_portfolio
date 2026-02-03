import { MacbookScroll } from './MacScroll'

const Skills = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 flex-col justify-center items-center mx-auto">
      <div className="container mx-auto">
        <MacbookScroll
          title="Powering My Projects"
          showGradient={true}
          src={"/Skills.png"}
        />
      </div>
    </section>
  );
}

export default Skills
