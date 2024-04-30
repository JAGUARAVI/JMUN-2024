import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';

function Component() {
    const [selected, setSelected] = useState(null)
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'G20',
            subtitle: 'Subtitle 1',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/G20.jpg'
        },
        {
            id: 2,
            title: 'Global Press Summit',
            subtitle: 'Subtitle 2',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/Global%20Press%20Summit.jpg'
        },
        {
            id: 3,
            title: 'Joint Crisis Committee',
            subtitle: 'Subtitle 3',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/Joint%20Crissis%20Committee.jpeg',
        },
        {
            id: 4,
            title: 'Jobs Reset Summit',
            subtitle: 'Subtitle 4',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/Jobs%20Reset%20Summit.png',
        },
        {
            id: 5,
            title: 'Lok Sabha',
            subtitle: 'Subtitle 5',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/Lok%20Sabha.jpg'
        },
        {
            id: 6,
            title: 'United Nations General Assembly',
            subtitle: 'Subtitle 6',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/United%20Nations%20General%20Assembly.png'
        },
        {
            id: 7,
            title: 'United Nations Human Rights Council',
            subtitle: 'Subtitle 7',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/United%20Nations%20Human%20Rights%20Council.jpg'
        },
        {
            id: 8,
            title: 'United Nations Security Council',
            subtitle: 'Subtitle 8',
            image: 'https://jmun-23.github.io/jmun/assets/Committees%20BG/United%20Nations%20Security%20Council.jpg'
        },
    ]);

    useEffect(() => {
        document.title = 'Home | JMUN\'24'
    }, [])

    return (
        <div className="pt-[10vh] w-full min-h-[100vh]">
            <div className="w-full h-[90vh] flex justify-center items-center">
                <h1 className="text-4xl">Home</h1>
            </div>
            <div className="h-[90vh] w-full flex items-center flex-col">

                <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-8 xl:grid-rows-1 w-full">
                    <AnimatePresence>
                        {!selected && items.map(item => (
                            <motion.div className='w-full h-[30vh] hover:z-10 md:h-[40vh] xl:h-[80vh] bg-primary-100 brightness-75 transition-all hover:brightness-100 hover:scale-[105%] flex justify-end items-center flex-col bg-cover bg-center data-[low=true]:hidden data-[low=true]:md:flex' key={item.id} layoutId={item.id} onClick={() => setSelected(item)}
                                style={{
                                    backgroundImage: `url(${item.image})`,
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

                <div className="grid grid-cols-2 gap-4">

                </div>
            </div>
        </div>
    )
}

export default Component