import { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Spacer, Button } from '@nextui-org/react'
import vicechair from '/images/anjali_jaipuria.jpg'

const base = import.meta.env.BASE_URL

function Component() {
    useEffect(() => {
        document.title = 'About Our School | JMUN 2024'
    }, [])


    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center gap-20">
            <div className="relative w-full h-[50vh] font-generica font-semibold text-center" style={{
                backgroundImage: `url(${base + 'images/school.jpg'})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                overflow: 'hidden'
            }}>
                <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-black/50 opacity-80 z-20 "></div>
            </div>
            <div className=" w-full lg:max-w-[75vw] xl:max-w-[65vw] flex items-center flex-col p-7 mt-[-20vh] z-30">
                <Card className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>About Seth M.R. Jaipuria School</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7 grid gap-7">
                        <p className="text-justify">Seth MR. Jaipuria School, Gomti Nagar, Lucknow— the School of
                            Conscious Transformation, has been established in the memory of
                            Late Shri Seth Mungturam Jaipuria, a great nationalist and doyen of
                            the Textile Industry, who was conferred the Padma Bhushan by the
                            President of India in 1971 in recognition of his social services.</p>

                        <p className="text-justify">The school's focus is to provide a learning environment that protects
                            and nourishes three precious qualities inherent in children— innocence,
                            innagination, and a spirit of exploration.</p>

                        <p className="text-justify">Under the able patronship of Shri Sharad Jaipuria and Smt. Anjali
                            Jaipuria, and imaginative limits and working on novel concepts to
                            make this conference the experience it always is.</p>

                        <p className="text-justify">This conference has been home to never—seen—before committees
                            passed down as legacy since its inception.</p>

                        <p className="text-justify">The goal this year, for its eleventh edition, is to make it bigger and
                            better than it has ever been.</p>
                    </CardBody>
                </Card>
            </div>

            {/*<div className=" w-full lg:max-w-[75vw] xl:max-w-[65vw] flex items-center flex-col p-7 ">
                <Card className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Message from the Vice Chairperson</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7 grid gap-7">

                        <p className="text-justify">Seth MR. Jaipuria School, Gomti Nagar, Lucknow— the School of
                            Conscious Transformation, has been established in the memory of
                            Late Shri Seth Mungturam Jaipuria, a great nationalist and doyen of
                            the Textile Industry, who was conferred the Padma Bhushan by the
                            President of India in 1971 in recognition of his social services.</p>

                        <p className="text-justify">The school's focus is to provide a learning environment that protects
                            and nourishes three precious qualities inherent in children— innocence,
                            innagination, and a spirit of exploration.</p>

                        <p className="text-justify">Under the able patronship of Shri Sharad Jaipuria and Smt. Anjali
                            Jaipuria, and imaginative limits and working on novel concepts to
                            make this conference the experience it always is.</p>

                        <p className="text-justify">This conference has been home to never—seen—before committees
                            passed down as legacy since its inception.</p>

                        <p className="text-justify">The goal this year, for its eleventh edition, is to make it bigger and
                            better than it has ever been.</p>
                    </CardBody>
                </Card>
            </div>*/}

            <div className=" w-full lg:max-w-[75vw] xl:max-w-[65vw] flex items-center flex-col p-7">
                <Card className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Message from the Principal</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7  grid gap-7">

                        {/* <img
                            src={vicechair}
                            alt="Image description"
                            className="object-contain w-30"
                        /> */}

                        <p className="text-justify">If we wish to celebrate life, we must find peace not by avoiding life or trying to escape our problems but by confronting them head on. Disagreements and conflicts are not worrisome but not finding a solution to them which safeguards all interests is indeed not in the interest of the Globe. Solutions are learnt through experiences and understanding multiple perspectives. Resolutions should emphasise on such inclusive development which boosts economy while being conscious of the responsibility towards both man and nature.
                        </p>

                        <p className="text-justify">The period of Gupta rule between 300 and 600 CE in India was a period of peace in which trade thrived. It was called the Golden Age of India for its advances in science and emphasis on classical Indian art and literature. Over the centuries, we have known countries whose economy, developmentand culture touched an abysmal low with no hopes of revival because strife, lack of a larger purpose and conflict within and outside their borders controlled them.
                        </p>

                        <p className="text-justify">If History is a testimony to Peace being the most dependable associate of development, it is of paramount significance that we give children an experience in sweetening the sting of dissent and political interests by wading through debate, discussion and deliberation to understand the process of peaceful conflict resolution. JMUN 2024, from 18th to 20th July wishes the delegates to have an experience that final copy of a concrete, sustainable, inclusive development plan will emerge only after all disagreements are settled peacefully with the spirit of Vasudhaiv Kutumbakam' permeating the conference in letter and spirit.
                        </p>

                        <p className="text-justify">We look forward to hosting the team from your esteemed institution and learning from the delegates.
                        </p>

                        <p className="text-justify">
                            Warm Regards, <br />
                            Mrs. Promini Chopra <br />
                            Principal
                        </p>
                    </CardBody>
                </Card>
            </div>

            <div className=" w-full lg:max-w-[75vw] xl:max-w-[65vw] flex items-center flex-col p-7 ">
                <Card className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Message from the MUN Coordinator</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7 grid gap-7">


                        {/*<Image
                            alt="Image of Vice Chairperson"
                            classNames={{
                                wrapper: 'float-right'
                            }}
                            src={vicechair}
                            width={270}
                        />*/}

                        <p className="text-justify">Eleven successful years have passed and now the 12th edition of JMUN has finally arrived to carry forward the legacy of past years with the sole aim of awakening consciousness about global politics along with the skills to deal effectively with it. Our resolve to cultivate debates that fully elicit students as Delegates' skills has met with success through our endeavours. Each year has surprised us with the novelty that was created through agendas on challenging global issues where our young Delegates try to defend their stance and question the missing dots in the policy making.
                        </p>

                        <p className="text-justify">As Dr. Kalam said: "True Knowledge = Creativity + Righteousness + Courage," so problems are common but attitude makes the difference. Let's encourage our students to ask questions, to deliberate, defend and deliver.
                        </p>

                        <p className="text-justify">As young individuals who are shaping the future, it is crucial that students play an active role in understanding and addressing the challenges facing our world. Participation will not only expand their knowledge and awareness but also contribute to the development of their critical thinking and problem-solving skills. Moreover, engaging in such discussions instils in them a sense of responsibility towards the world and its people.
                        </p>

                        <p className="text-justify">As delegates when these students will explore the complexities of global issues, they will learn to view the world from diverse perspectives and understand the interdependence of various countries and societies. This exposure and understanding, in turn, can help them become responsible citizens who are committed to making the world a better place.
                        </p>

                        <p className="text-justify">The Twelfth Edition of JMUN has picked up the essence of world unity and peace together through a platform where simulation of UN, a platform of international cooperation will work as an important committee along with Lok Sabha as a Representative body of People from the World's largest Democracy -India.
                        </p>

                        <p className="text-justify">
                            JMUN 2024 is completely aligned with all three platforms which will change the world for the better. The discussions will not only yield unique solutions but also further enlighten the participants about the delicate texture of the world body which, many opine, is under serious threat.
                        </p>

                        <p className="text-justify">
                            Background guides, speeches, position-papers, organisation, deliberation, consideration, lobbying, working papers, resolutions are few of the various terms typical to MUN that make our pulses rise with excitement and anticipation. Imagine awe mingling with doubt, stress merging into confidence and competition growing into unity. There, you have the jar of emotions you'll be given to handle with.
                        </p>

                        <p className="text-justify">
                            Looking forward to meeting Heads of schools, Faculty in charges and Delegates in July from 18th to 20th, 2024 during the 12th session of JMUN.
                        </p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Component;