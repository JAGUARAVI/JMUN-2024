import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';
import { RangeCalendar, Card, CardHeader, CardBody, CardFooter, Divider, Image, Spacer, Button } from '@nextui-org/react'
import Countdown from 'react-countdown';
import { CalendarDate } from '@internationalized/date';
import { Close } from '../../Icons'

const base = import.meta.env.BASE_URL

function Component() {
    const [selected, setSelected] = useState(null)
    const [items, setItems] = useState([
        {
            id: 8,
            title: 'UNSC',
            fulltitle: 'United Nations Security Council',
            subtitle: 'Agenda - Addressing the relevance and shortcomings of peacekeeping methods adopted by the council, keeping in mind the recent violation of resolutions in the Israel-Palestine conflict.',
            image: 'images/unsc.jpg',
            logo: 'logos/unsc.png',
        },
        {
            id: 2,
            title: 'GPS',
            fulltitle: 'Global Press Summit',
            subtitle: 'Agenda - Role of Media in Crises with Special Emphasis on Access to Conflict Zones',
            image: 'images/gps.jpg',
            logo: 'logos/gps.png',
            position: '71% 50%'
        },
        {
            id: 4,
            title: 'UNCTAD',
            fulltitle: 'United Nations Council on Trade and Development',
            subtitle: 'Agenda - Deliberating upon the security of the trade routes with special emphasis on the impact of the global food crisis.',
            image: 'images/unctad.jpg',
            logo: 'logos/unctad.png',
        },
        {
            id: 5,
            title: 'Lok Sabha',
            fulltitle: 'LOK SABHA, Special Session- 1975',
            subtitle: 'Agenda - Deliberating upon the need for proclamation of national emergency with special emphasis on measures taken by the government during this period.',
            image: 'images/ls.jpg',
            logo: 'logos/ls.png',
            position: '15% 50%'
        },
        {
            id: 3,
            title: 'UNCSTD',
            fulltitle: 'United Nations Commission on Science and Technology for Development',
            subtitle: 'Agenda - Roadmap for responsible development of AI with special reference to the global economy and developing strategies to mitigate AGI takeoff and its implications.',
            image: 'images/uncstd.jpg',
            logo: 'logos/uncstd.png',
        },
        {
            id: 6,
            title: 'UNGA',
            fulltitle: 'United Nations General Asssembly - 2nd Committee (ECOFIN - Economic and Financial Affairs Council)',
            subtitle: 'Agenda - Deliberating upon the increased global economic disparities in world trade and measures to promote development in the least developed countries. ',
            image: 'images/unga.jpg',
            logo: 'logos/unga.png',
        },
        {
            id: 7,
            title: 'UNHRC',
            fulltitle: 'United Nations Human Rights Council',
            subtitle: 'Agenda - Deliberating upon the need for criminal justice reforms and prison rehabilitation programmes, keeping in mind the 2030 Agenda for Sustainable Development.',
            image: 'images/unhrc.jpg',
            logo: 'logos/unhrc.png',
        },
        {
            id: 1,
            title: 'USCRI',
            fulltitle: 'United States Committee for Refugees and Immigrants',
            subtitle: 'Agenda - Deliberating upon the need for creating a new nation to resettle the world\'s refugee population with special emphasis on the 2015 proposal for \'Refugee Nation\'',
            image: 'images/uscri.jpg',
            logo: 'logos/uscri.png',
        },
    ]);

    useEffect(() => {
        document.title = 'Home | JMUN\'24'
    }, [])

    return (
        <div className="w-full min-h-[100vh]">
            <div className="w-full h-[100vh] font-generica font-semibold text-center" >
                <div className='w-full h-full absolute  bg-cover bg-fixed opacity-[0.4]' style={{
                    backgroundImage: `url(${base + 'images/bg.jpg'})`,
                    backgroundPosition: 'center',
                }}></div>
                <div className='w-full h-full pt-[10vh] flex justify-center items-center backdrop-grayscale flex-col gap-10'>
                    <Image draggable={false} src={base + 'logoWhiteTransparent.png'} width={450} className='invert dark:invert-0' />
                    <h1 className="text-5xl">Deliberate<span className='text-6xl'>.</span> Defend<span className='text-6xl'>.</span> Deliver<span className='text-6xl'>.</span></h1>
                </div>
            </div>
            <div className='min-h-[90vh] flex justify-center items-center flex-col text-center py-20'>
                <div className='w-full min-h-[10vh] flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>
                    Jaipuria Model United Nations 2024
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 mt-8 flex justify-center items-center">
                    <Countdown
                        date={new Date('2024-07-18T10:00:00')}
                        intervalDelay={1000}
                        precision={0}
                        renderer={props => <div className="h-full w-full col-span-3 flex justify-center items-center font-reguilar text-2xl md:text-3xl lg:text-4xl gap-16 ml-4 mr-4">
                            <div>
                                <div>{props.days} Days</div>
                                <Spacer y={10} />
                                <div>{props.minutes < 10 ? '0' + props.minutes : props.minutes} Minutes</div>
                            </div>
                            <div>

                                <div>{props.hours} Hours</div>
                                <Spacer y={10} />
                                <div>{props.seconds < 10 ? '0' + props.seconds : props.seconds} Seconds</div>
                            </div>
                        </div>
                        }
                    />
                    <div className='flex justify-center col-span-2 mb-3 mt-5'>
                        <RangeCalendar
                            isReadOnly
                            aria-label="Display Calendar"
                            defaultValue={{
                                start: new CalendarDate(2024, 7, 18, 10, 0, 0, 'UTC'),
                                end: new CalendarDate(2024, 7, 20, 18, 0, 0, 'UTC'),
                            }}
                        /></div>
                </div>
            </div>
            <div className="min-h-[80vh] w-full flex items-center flex-col p-7 mb-7 mt-[10vh] mb-[10vh]">
                <Card isBlurred className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Letter from the Secretary General</p>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className=' w-full flex text-sm md:text-lg lg:text-xl p-8'>Greetings!<br /><br />
                            With great excitement and a passionate heart, we extend our warm invitation to the twelfth chapter of the Jaipuria Model United Nations, scheduled for the 18th to the 20th of July, 2024. In this edition of JMUN we promise you a fusion of exhilaration and scholarly debate that transcends the conventional conference framework. It’s a celebration, a cherished sentiment that imprints itself indelibly upon our minds.<br /><br />
                            We beckon you to explore the rich mosaic of worldwide concerns through the lens of international diplomacy, showcasing eight thought-provoking committees, from discussions on creating a special refugee state to the quite literal 'historic' Lok Sabha we have it all. Our goal is to create an unforgettable experience, leaving you with lasting memories. Embrace this unique chance to spark transformation and magnify your impact.<br /><br />
                            In the spirit of JMUN’s legacy since 2013, which has consistently shone with unmatched splendor, we invite you to join us for a three-day journey of personal and collective evolution, fortitude, and introspection. Seize this pivotal moment to become an agent of change, sculpting policies and actions that forge a fair, just, and sustainable tomorrow. Following in the footsteps of our predecessors, we are committed to delivering an unparalleled experience over these three days.<br /><br /> We invite you to Deliberate, Defend, Deliver.
                            <br /><br />
                            Regards,<br /> The Secretary-General
                        </p>
                    </CardBody>
                </Card>
            </div>
            <div className="min-h-[80vh] w-full flex items-center flex-col">
                <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-8 xl:grid-rows-1 w-full">
                    <AnimatePresence>
                        {!selected && items.map(item => (
                            <motion.div className='w-full h-[30vh] hover:z-10 md:h-[40vh] xl:h-[80vh] bg-primary-100 brightness-75 transition-all hover:brightness-100 hover:scale-[105%] flex justify-end items-center flex-col bg-cover bg-center data-[low=true]:hidden data-[low=true]:md:flex' key={item.id} layoutId={item.id} onClick={() => setSelected(item)}
                                style={{
                                    backgroundImage: `url(${base + item.image})`,
                                    backgroundPosition: item.position || 'center',
                                }}
                                transition={{ duration: 0 }}
                                data-low={item.low ? 'true' : 'false'}
                            >
                                <motion.div className='h-[10vh] w-full'>
                                    <motion.h2 className='text-3xl text-center text-white'>{item.title}</motion.h2>
                                    {//<motion.h5>{item.subtitle}</motion.h5>
                                    }
                                </motion.div>
                            </motion.div>
                        ))}
                        {selected && (
                            <motion.div className='w-full min-h-[80vh] bg-primary-100 row-span-4 col-span-2 md:row-span-2 md:col-span-4  xl:row-span-1 xl:col-span-8 p-4 flex justify-center items-center flex-col bg-cover bg-center' key={selected.id} layoutId={selected.id}
                                style={{
                                    backgroundImage: `url(${base + selected.image})`,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                exit={{ opacity: 0 }}
                            //onClick={() => setSelected(null)}
                            ><div className='flex justify-center items-center flex-col bg-opacity-70 rounded-2xl my-8'>
                                    <Card isBlurred className='z-10 p-8 min-w-[50vw] min-h-[50vh] dark:bg-black/50'>
                                        <CardHeader className="flex gap-3 flex justify-between">
                                            <Image
                                                draggable={false}
                                                alt={selected.title + " Logo"}
                                                height={100}
                                                radius="sm"
                                                src={base + selected.logo}
                                                width={100}
                                                className='invert dark:invert-0'
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-xl font-semibold">{selected.title}</p>
                                            </div>
                                            <Button color="default" onClick={() => setSelected(null)}><Close size={16} /> Close</Button>
                                        </CardHeader>
                                        <CardBody className='flex items-center justify-center'>
                                            <div className='text-center text-2xl'>{selected.fulltitle}</div>
                                            <Spacer y={10} />
                                            <div className='text-center flex items-center justify-center'>
                                                <p
                                                    className='md:max-w-[80vw]'>{selected.subtitle}
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Component