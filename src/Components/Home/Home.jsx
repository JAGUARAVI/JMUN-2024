import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';
import { RangeCalendar, Card , CardHeader, CardBody,CardFooter, Divider } from '@nextui-org/react'
import Countdown from 'react-countdown';
import { CalendarDate } from '@internationalized/date';

function Component() {
    const [selected, setSelected] = useState(null)
    const [items, setItems] = useState([
        {
            id: 8,
            title: 'United Nations Security Council',
            subtitle: 'Subtitle 8',
            image: '/images/unsc.jpg'
        },
        {
            id: 2,
            title: 'Global Press Summit',
            subtitle: 'Subtitle 2',
            image: '/images/gps.jpg',
            position: '71% 50%'
        },
        {
            id: 4,
            title: 'UNCTAD',
            subtitle: 'Subtitle 4',
            image: '/images/unctad.jpg',
        },
        {
            id: 5,
            title: 'Lok Sabha',
            subtitle: 'Subtitle 5',
            image: '/images/ls.jpg',
            position: '15% 50%'
        },
        {
            id: 3,
            title: 'UNCSTD',
            subtitle: 'Subtitle 3',
            image: '/images/uncstd.jpg',
        },
        {
            id: 6,
            title: 'United Nations General Assembly',
            subtitle: 'Subtitle 6',
            image: '/images/unga.jpg',
        },
        {
            id: 7,
            title: 'United Nations Human Rights Council',
            subtitle: 'Subtitle 7',
            image: '/images/unhrc.jpg',
        },
        {
            id: 1,
            title: 'UNCSW',
            subtitle: 'Subtitle 1',
            image: '/images/uncsw.jpg'
        },
    ]);

    useEffect(() => {
        document.title = 'Home | JMUN\'24'
    }, [])

    return (
        <div className="pt-[10vh] w-full min-h-[100vh]">
            <div className="w-full h-[90vh] flex justify-center items-center font-generica font-semibold text-center">
                <h1 className="text-5xl">Deliberate <span className='text-6xl'>.</span> Defend <span className='text-6xl'>.</span> Deliver</h1>
            </div>
            <div className='min-h-[70vh] flex justify-center items-center flex-col text-center py-20'>
                <div className='w-full h-[8vh] m-1 flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>
                    Jaipuria Model United Nations 2024
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
                    <Countdown
                        date={new Date('2024-07-18T10:00:00')}
                        intervalDelay={1000}
                        precision={0}
                        renderer={props => <div className="h-full w-full col-span-2 flex justify-center items-center font-reguilar text-2xl md:text-3xl lg:text-4xl gap-4 ml-4 mr-4">
                            <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">{props.days} Days</div>
                            <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">{props.hours} Hours</div>
                            <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">{props.minutes < 10 ? '0' + props.minutes : props.minutes} Minutes</div>
                            <div className="text-2xl md:text-2xl lg:text-5xl xl:text-5xl text-black font-mono dark:text-white">{props.seconds < 10 ? '0' + props.seconds : props.seconds} Seconds</div>
                        </div>
                        }
                    />
                    <div className='flex justify-center mb-3 mt-5'>
                        <RangeCalendar
                        prevButton="disabled"
                            isReadOnly
                            aria-label="Display Calendar"
                            defaultValue={{
                                start: new CalendarDate(2024, 7, 18, 10, 0, 0, 'UTC'),
                                end: new CalendarDate(2024, 7, 20, 18, 0, 0, 'UTC'),
                            }}
                        /></div>
                </div>
            </div>
            <div className="min-h-[80vh] w-full flex items-center flex-col p-7 mb-7">
                <Card className="max-w-[80%]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 text-center w-full h-[10vh] flex justify-center items-center font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Letter from the Secretary General</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p className=' w-full flex text-sm md:text-lg lg:text-xl pl-4'>Greetings!<br/><br/>

                        It is with boundless enthusiasm and fervent spirit that we invite you to the eleventh edition of Jaipuria Model United Nations to be held from 27th to 29th July, 2023. We guarantee that at this edition of JMUN you will witness the best of both enthrallment and intellect. JMUN comes off as more than a mere hich leaves an conference. lt is rather a festival,an emotion which leaves a nonpareil mark on our psyches.
                        <br/><br/>
                        We summon you to unveil the vibrant tapestry of global issues with international diplomacy as we present to you eight intellectually stimulating committees ranging from an environmental G20 to the much anticipated Lok Sabha. The Global Press Summit, one of its kind, will continue with its eleven year old legacy, to the finest mark Thus, we seek and strive to make you leave this edition of the conference with memories which you shall forever cherish. We invite you to seize the extraordinary opportunity to ignite change and amplify your impact.
                        <br/><br/>
                        JMUN, ever since its inception in 2013, has continued to remain unsurpassed in brilliance and unparalleled in magnificence. We solicit your presence on the three days of the conference which is not merely an event but an odyssey of growth, empowerment, resilience and self discovery. You have a monumental opportunity to be the catalyst of transformation, shaping policies and initiatives that pave the path of a just,equitable and sustainable future. As we prepare to walk on the footsteps of our seniors and endeavour to leave no stone unturned to provide an unmatchable experience at the three day conference, we welcome you to Deliberate Defend and Deliver!
                        <br/><br/>
                        Regards,<br/>
                        Secretary General<br/></p>
                    </CardBody>
                </Card>
            </div>
            <div className="min-h-[80vh] w-full flex items-center flex-col">
                <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-8 xl:grid-rows-1 w-full">
                    <AnimatePresence>
                        {!selected && items.map(item => (
                            <motion.div className='w-full h-[30vh] hover:z-10 md:h-[40vh] xl:h-[80vh] bg-primary-100 brightness-100 transition-all hover:brightness-120 hover:scale-[105%] flex justify-end items-center flex-col bg-cover bg-center data-[low=true]:hidden data-[low=true]:md:flex' key={item.id} layoutId={item.id} onClick={() => setSelected(item)}
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: item.position || 'center',
                                }}
                                transition={{ duration: 0 }}
                                data-low={item.low ? 'true' : 'false'}
                            >
                                <motion.div className='h-[10vh] w-full'>
                                    <motion.h2 className='text-xl text-center text-white'>{item.title}</motion.h2>
                                    {//<motion.h5>{item.subtitle}</motion.h5>
                                    }
                                </motion.div>
                            </motion.div>
                        ))}
                        {selected && (
                            <motion.div className='w-full h-[80vh] bg-primary-100 row-span-4 col-span-2 md:row-span-2 md:col-span-4  xl:row-span-1 xl:col-span-8 p-4 flex justify-center items-center flex-col bg-cover bg-center' key={selected.id} layoutId={selected.id}
                                style={{
                                    backgroundImage: `url(${selected.image})`,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                exit={{ opacity: 0 }}
                            >

                                <motion.h2>{selected.title}</motion.h2>
                                <motion.h5>{selected.subtitle}</motion.h5>
                                <motion.button onClick={() => setSelected(null)}>
                                    Close
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Component