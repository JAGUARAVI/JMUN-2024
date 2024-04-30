import {Image} from "@nextui-org/react";
import uncstd from "./images/uncstd.jpeg"

function Component() {
    
   const committees = [
    {
        "name": '  UNCSTD- United Nations Commission on Science and Technology for Development',
        "agenda": 'Agenda - Roadmap for responsible development of AI with special reference to the global economy and developing strategies to mitigate AGI takeoff and its implications',
        "desc": `In the age of pervasive AI across sectors like healthcare, finance,
        transportation, and communication, the requirement for an ethical
        framework is paramount. As we navigate AI's development, we face
        critical questions on its impact on employment, socioeconomic
        disparities, and global competitiveness. Will AI propel economic
        growth and innovation, or widen inequalities? Additionally, the
        looming specter of AGI demands a strategy to ensure alignment with
        human values and mitigate existential risks. UNCSTD seeks to guide
        this journey sustainably and inclusively, fostering interdisciplinary
        collaboration to balance innovation with responsibility and ensure
        equitable AI progress while managing AGI risks. Join us in shaping a
        future where AI empowers all while upholding human dignity..`
    },
    {
        "name": '  UNCSTD- United Nations Commission on Science and Technology for Development',
        "agenda": 'Agenda - Roadmap for responsible development of AI with special reference to the global economy and developing strategies to mitigate AGI takeoff and its implications',
        "desc": `In the age of pervasive AI across sectors like healthcare, finance,
        transportation, and communication, the requirement for an ethical
        framework is paramount. As we navigate AI's development, we face
        critical questions on its impact on employment, socioeconomic
        disparities, and global competitiveness. Will AI propel economic
        growth and innovation, or widen inequalities? Additionally, the
        looming specter of AGI demands a strategy to ensure alignment with
        human values and mitigate existential risks. UNCSTD seeks to guide
        this journey sustainably and inclusively, fostering interdisciplinary
        collaboration to balance innovation with responsibility and ensure
        equitable AI progress while managing AGI risks. Join us in shaping a
        future where AI empowers all while upholding human dignity..`
    }
   ]

   const sectionCont = committees.map(committee => 
    <div className="text-center lg:w-2/3 w-full">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
      {committee.name}
    </h1>
    <h2 className="title-font sm:text-2xl text-3xl mb-4 font-small ">
      {committee.agenda}
    </h2>
    <p className="mb-8 leading-relaxed">
        {committee.desc}
    </p>
    <div className="flex justify-center">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Background Guide
      </button>
    </div>
  </div>
);
    return <div className="pt-[10vh] w-full min-h-[100vh]">
        <div className="w-full flex  items-center flex-col ">
            <h1 className="text-6xl py-6xl mb-2xl">Committees</h1>


            <section style={{backgroundImage: `url(${uncstd}`, backgroundSize: "100% 100%"}} >
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>

    <div className="container flex px-5 py-24 items-center justify-center flex-col">
     
      {/* <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
          UNCSTD- United Nations Commission on Science and Technology for
          Development
        </h1>
        <h2 className="title-font sm:text-2xl text-3xl mb-4 font-small ">
          Agenda - Roadmap for responsible development of AI with special
          reference to the global economy and developing strategies to mitigate
          AGI takeoff and its implications
        </h2>
        <p className="mb-8 leading-relaxed">
          In the age of pervasive AI across sectors like healthcare, finance,
          transportation, and communication, the requirement for an ethical
          framework is paramount. As we navigate AI's development, we face
          critical questions on its impact on employment, socioeconomic
          disparities, and global competitiveness. Will AI propel economic
          growth and innovation, or widen inequalities? Additionally, the
          looming specter of AGI demands a strategy to ensure alignment with
          human values and mitigate existential risks. UNCSTD seeks to guide
          this journey sustainably and inclusively, fostering interdisciplinary
          collaboration to balance innovation with responsibility and ensure
          equitable AI progress while managing AGI risks. Join us in shaping a
          future where AI empowers all while upholding human dignity..
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Background Guide
          </button>
        </div>
      </div> */}
      {sectionCont}
    </div>
</div>
  </section>
        </div>
    </div>
}

export default Component;