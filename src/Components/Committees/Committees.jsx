import {Image} from "@nextui-org/react";
import uncstd from "./images/uncstd.jpeg"
import hrc from "./images/hrc.jpeg"
import ctad from "./images/ctad.jpeg"
import ga from "./images/ga.jpeg"

import gps from "./images/gps.jpeg"
import sc from "./images/sc.jpeg"
import cri from "./images/cri.jpeg"


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
        future where AI empowers all while upholding human dignity..`,
        "img": uncstd
    },
    {
        "name": '  UNHRC (United Nations Human Rights Council)',
        "agenda" : `Agenda- Deliberating upon the need for criminal justice reforms and
        prison rehabilitation programmes, keeping in mind the 2030 Agenda
        for Sustainable Development.`,
        "desc": `In its twisted logic, modern criminal justice deems some lives expendable, dispensable, and unworthy of mercy. It is a system that preys upon the marginalised, the disenfranchised, and the vulnerable, casting them aside like refuse to rot in the dungeons of despair.

        From racial profiling to draconian sentencing laws to Sisyphean labour camps, the tendrils of this monstrous system extend far and wide. 
        
        Oppression becomes the new normal, a punch in the face of the human rights that our solemn constitutions guarantee us, grinding souls to dust in the system's relentless pursuit of punishment.
        
        Are we content to stand idly by as countless souls languish behind bars, their humanity stripped away by the cold, unyielding hand of oppression?
        
        Or will we dare to challenge the status quo, to confront the darkness that lurks within our midst, striving for a world where every individual is afforded the opportunity for redemption?`,
        "img" : hrc
    },
    {
      "name": " UNGA- 2nd Committee (ECOFIN- Economic and Financial Affairs Council)",
      "agenda": `Agenda- Deliberating upon the increased global economic disparities
      in world trade and measures to promote development in the least
      developed countries.`,

      "desc" : `Is global trade a rising tide that lifts all boats, or is it leaving some nations stranded?  The UNGA (ECOFIN) Committee tackles this critical question, focusing on the untapped potential of Least Developed Countries (LDCs) in a world driven by international commerce.

      Join a high-stakes negotiation where you'll explore the challenges hindering LDC participation in the global market.  Unmask the unfair trade practices that stifle competition, dissect the infrastructure gaps that impede growth, and analyze the crushing debt burden that restricts resources.
      
      Guided by the UN's Sustainable Development Goals (SDGs), we'll forge a path towards a more inclusive future.  Craft innovative solutions like establishing fair trade practices, spearheading investment initiatives in LDC infrastructure and education, and advocating for debt relief.`,

      "img": ga

    },
    {
      "name" : "UNCTAD- (United Nations Council on Trade and Development)",
      "agenda": "Agenda- Deliberating upon the security of the trade routes with special emphasis on the impact of the global food crisis",
      "desc": `The enduring issue of the global food crisis, deeply entrenched within geopolitics, has long been a subject of discourse. Its primary root cause lies in the insecurity plaguing global trade routes, which serve as critical conduits of international commerce. These routes represent pivotal junctures in the tapestry of world trade, the obstruction or illicit seizure of which could precipitate profound economic, political, and social ramifications.
      It is with this pressing concern in mind that our committee, the United Nations Conference for Trade and Development (UNCTAD), endeavors to shed light on this matter during the 12th edition of the Jaipuria Model United Nations in 2024. Within our deliberations, diverse perspectives will converge to explore avenues for resolving this crisis and devising legislative frameworks aimed at safeguarding against its recurrence on the global stage`,
      "img": ctad
    },
    {
      "name": ` LOK SABHA, Special Session- 1975`,
      "agenda": `Agenda- Deliberating upon the need for proclamation of national
      emergency with special emphasis on measures taken by the
      government during this period.`,

      "desc": `With a topic often criticized but rarely scrutinized, presenting before you the 5th session of the ‘house of the people’, a historical Lok Sabha set in 1976 when the ‘effects’ of the national emergency were at the all time high with the Agenda-”Deliberating Upon the Need for Proclamation of Emergency with Special Emphasis on Measures Taken by the Government.”

      A committee that brings virtually all the ‘leaders of the people’ under a single roof to discuss the impacts of the national emergency on the country.
      
      The committee brings all the leaders, elected as well as non elected, inside the ‘temple of democracy’ to discuss the so-called slander on it.`,

      "img": ""
    },

    {
      "name": `Global Press Summit
      `,
      "agenda": `Agenda- Role of Media in Crises with Special Emphasis on Access to
      Conflict Zones`,
      "desc" : `A committee unique to JMUN, the Global Press Summit is the perfect amalgamation of reporting and debate. Involving reporters, photographers and caricaturists, this committee deliberates upon issues concerning the media.
      The agenda, formed keeping in mind the current world scenario, aims at discussing both the perspectives reporting agencies over the defining role they play in crisis zones. As the fourth pillar of democracy, the media has a responsibility that it must realize in the midst of the chaos that surrounds the earth. The addition of the real world issues shall make this committee an unforgettable experience.`,
      "img": gps
    },
    {
      "name" : ` USCRI (United States Committee for Refugees and Immigrants)`,
      "agenda" : `Agenda- Deliberating upon the economic discrimination against
      women in all kinds of employment aspects with special emphasis on
      wage inequality`,

      "desc" : `When you think about home you automatically connect it with a sense of safety but have you ever thought about those who don't have any place to call their home? Who have no land and shelter on this wide earth, do you ever think about them and their fate?

      As the global refugee crisis persists as one of the most pressing humanitarian challenges of our time with millions displaced from their homes due to conflict, persecution, or environmental disasters, there grows an urgent need for innovative solutions to address their plight.
      
      Amidst this backdrop, the proposition of creating a refugee nation emerges as a bold yet potentially transformative idea. This committee convenes with the noble agenda of exploring the feasibility, challenges, and opportunities associated with establishing a refugee nation, guided by principles of sustainability, inclusivity, and empowerment.
      
      From the Rohingya Crisis to the Israel Palestine War, from Ethiopian Conflict to the Sudan Crisis, this committee deals with it all and looks forward to providing the most enriching and wonderful mun-ing experience to the delegates!`,
      "img": cri
    },
    {
      "name": `UNSC (United Nations Security Council)`,
      "agenda": `Agenda- Addressing the relevance and shortcomings of peacekeeping
      methods adopted by the council, keeping in mind the recent violation
      of resolutions in the Israel-Palestine conflict`,

      "desc": `The UN Security Council (UNSC) is the primary body tasked with maintaining international peace and security. This committee simulation will delve into the critical role of the UNSC in deploying peacekeeping missions and addressing the challenges that peacekeeping forces encounter in conflict zones.

      The committee with its intriguing agenda aims to direct the discussions mainly to what extent are traditional peacekeeping methods still relevant in addressing contemporary conflicts and how can the UNSC adapt its peacekeeping strategies to better address the complexities of modern conflicts.
      The committee will also examine a recent instance where resolutions established by the UNSC have been violated, specifically focusing on the Israel-Palestine conflict. Delegates will analyze this case study to understand the challenges of enforcing UN resolutions and the potential impact on the effectiveness of peacekeeping missions.
      
      The UNSC committee simulation is an ideal platform for delegates who are passionate about international relations, global security, and the role of the United Nations in maintaining a peaceful world.
      
      This committee promises to be a challenging and rewarding experience, fostering critical thinking, diplomatic negotiation, and the development of effective solutions to real-world problems.`,
      "img": sc

    }
   ]

   const sectionCont = committees.map(committee => 
    <section style={{backgroundImage: `url(${committee.img}`, backgroundSize: "100% 100%"}} >
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
      
    <div className="container flex px-5 py-24 items-center justify-center flex-col">
     
 
    
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
  </div>
  </div>
  </section>
);
    return <div className="pt-[10vh] w-full min-h-[100vh]">
        <div className="w-full flex  items-center flex-col ">
            <h1 className="text-6xl py-6xl mb-2xl">Committees</h1>
            {sectionCont}

            

</div>
  
    </div>
}

export default Component;