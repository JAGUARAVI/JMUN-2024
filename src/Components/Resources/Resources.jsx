import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL

function Component() {
    const items = [
        {
            id: 'unsc',
            title: 'UNSC',
            subtitle: 'Subtitle 8',
            image: 'images/unsc.jpg'
        },
        {
            id: 'gps',
            title: 'GPS',
            subtitle: 'Subtitle 2',
            image: 'images/gps.jpg',
            position: '71% 50%'
        },
        {
            id: 'unctad',
            title: 'UNCTAD',
            subtitle: 'Subtitle 4',
            image: 'images/unctad.jpg',
        },
        {
            id: 'ls',
            title: 'Lok Sabha',
            subtitle: 'Subtitle 5',
            image: 'images/ls.jpg',
            position: '15% 50%'
        },
        {
            id: 'uncstd',
            title: 'UNCSTD',
            subtitle: 'Subtitle 3',
            image: 'images/uncstd.jpg',
        },
        {
            id: 'unga',
            title: 'UNGA',
            subtitle: 'Subtitle 6',
            image: 'images/unga.jpg',
        },
        {
            id: 'unhrc',
            title: 'UNHRC',
            subtitle: 'Subtitle 7',
            image: 'images/unhrc.jpg',
        },
        {
            id: 'uscri',
            title: 'USCRI',
            subtitle: 'Subtitle 1',
            image: 'images/uscri.jpg'
        },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Resources | JMUN 2024'
    }, [])

    return (
        <>
            <div className="pt-[10vh] w-full min-h-[100vh]">
                <div className="w-full flex  items-center flex-col">
                    <div className="py-[5vh] text-center">
                        <p className="text-5xl lg:text-6xl py-6xl mb-2xl font-generica font-bold">Resources</p>
                        <p className="pt-[5vh]">Click on your respective committee to download its background guide.</p>
                    </div>
                    <div className="min-h-[80vh] w-full flex items-center flex-col">
                        <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-8 xl:grid-rows-1 w-full">
                            {items.map((item) => (
                                <div className='w-full h-[30vh] hover:z-10 md:h-[40vh] xl:h-[80vh] bg-primary-100 brightness-75 transition-all hover:brightness-100 hover:scale-[105%] flex justify-end items-center flex-col bg-cover bg-center data-[low=true]:hidden data-[low=true]:md:flex' key={item.id} layoutId={item.id} onClick={() => window.open(base + 'resources/' + item.id + '.pdf', '_blank').focus()}
                                    style={{
                                        backgroundImage: `url(${base + item.image})`,
                                        backgroundPosition: item.position || 'center',
                                    }}
                                    transition={{ duration: 0 }}
                                    data-low={item.low ? 'true' : 'false'}
                                >
                                    <div className='h-[10vh] w-full'>
                                        <h2 className='text-3xl text-center text-white'>{item.title}</h2>
                                        {//<motion.h5>{item.subtitle}</motion.h5>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Component;