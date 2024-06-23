import { useEffect } from 'react';
import { Button, ButtonGroup, Image, Tabs, Tab } from "@nextui-org/react";
import { AnimatePresence, motion } from 'framer-motion';

const base = import.meta.env.BASE_URL

const core = [
    { src: base + "images/secretariat/Vaibhav.jpg", alt: "Image 3", name: "Vaibhav Krishna", post: "Secretary General" },
    { src: base + "images/secretariat/Zoya.jpg", alt: "Image 4", name: "Zoya Khan", post: "Deputy Secretary General" },
    { src: base + "images/secretariat/Ishan.jpg", alt: "Image 1", name: "Ishan Srivastava", post: "Under-Secretary General for Delegate Affairs" },
    { src: base + "images/secretariat/Aman.jpg", alt: "Image 2", name: "Aman Bhargava", post: "Under-Secretary General for Technical Operations" },
    { src: base + "images/secretariat/Dhrati.jpg", alt: "Image 5", name: "Dhrati Tewari", post: "Under-Secretary General for Delegate Affairs" },
    { src: base + "images/secretariat/Chinmay.jpg", alt: "Image 6", name: "Chinmay Jain", post: "Under-Secretary General for Finance" },
    { src: base + "images/secretariat/Madhvi.jpg", alt: "Image 7", name: "Madhvi Khanchandani", post: "Under-Secretary General for Finance" },

];

const extended = [
    { src: base + "images/secretariat/Vaibhav.jpg", alt: "Image 3", name: "Vaibhav Krishna", post: "Secretary General" },
    { src: base + "images/secretariat/Zoya.jpg", alt: "Image 4", name: "Zoya Khan", post: "Deputy Secretary General" },
    { src: base + "images/secretariat/Ishan.jpg", alt: "Image 1", name: "Ishan Srivastava", post: "Under-Secretary General for Delegate Affairs" },
    { src: base + "images/secretariat/Aman.jpg", alt: "Image 2", name: "Aman Bhargava", post: "Under-Secretary General for Technical Operations" },
    { src: base + "images/secretariat/Dhrati.jpg", alt: "Image 5", name: "Dhrati Tewari", post: "Under-Secretary General for Delegate Affairs" },
    { src: base + "images/secretariat/Chinmay.jpg", alt: "Image 6", name: "Chinmay Jain", post: "Under-Secretary General for Finance" },
    { src: base + "images/secretariat/Madhvi.jpg", alt: "Image 7", name: "Madhvi Khanchandani", post: "Under-Secretary General for Finance" },
    { src: base + "images/secretariat/Aaishvarya.jpg", alt: "Image 8", name: "Aishwarya Khanna", post: "Creative Co-Head" },
    { src: base + "images/secretariat/Vidha.jpg", alt: "Image 9", name: "Vidha Chandra", post: "Under-Secretary General for PR and Outreach" },
    { src: base + "images/secretariat/Aadya.jpg", alt: "Image 10", name: "Aadya Mishra", post: "Under-Secretary General for Logistics and Hospitality" },
    { src: base + "images/secretariat/Samriddhi.jpg", alt: "Image 11", name: "Samriddhi Yadav", post: "Under-Secretary General for Logistics and Hospitality" },
    { src: base + "images/secretariat/Dhwaj.jpg", alt: "Image 12", name: "Dhwaj Sinha", post: "Under-Secretary General for Administration" },
    { src: base + "images/secretariat/Tanishka.jpg", alt: "Image 13", name: "Tanishka Singh", post: "Head of International Press" },
    { src: base + "images/secretariat/Tanishka.jpg", alt: "Image 13", name: "Ananya Singhal", post: "Creative Co-Head" },
];

const item = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
};

const ImageSelector = () => {
    useEffect(() => {
        document.title = 'Team | JMUN 2024'
    }, [])

    return (
        <div className="pt-[10vh] w-full min-h-[100vh]" >
            <div className="flex flex-col items-center gap-4">
                <Tabs size='lg' radius='full'>
                    <Tab value="core" title='Core Secretariat'>
                        <div className="p-5 sm:w-[80vw] md:w-[70vw] w-full lg:w-[50vw] grid grid-cols-5 gap-10"
                            animate="visible">
                            {core.map((image, index) => (
                                <>
                                    {
                                        index % 2 === 1 &&
                                        <motion.div initial='hidden' whileInView="visible" viewport={{ once: true }} variants={item} className="flex flex-col col-span-2 gap-2 justify-center items-end">
                                            <p className="text-md md:text-xl font-semibold">{image.name}</p>
                                            <p className="text-sm md:text-lg">{image.post}</p>
                                        </motion.div >
                                    }
                                    <motion.div initial='hidden' whileInView="visible" viewport={{ once: true }} variants={item} className="col-span-3">
                                        <Image loading='eager' classNames={{ wrapper: 'col-span-3' }} key={index} src={image.src} alt={"Image of " + image.post} />
                                    </motion.div>
                                    {
                                        index % 2 === 0 &&
                                        <motion.div initial='hidden' whileInView="visible" viewport={{ once: true }} variants={item} className="flex flex-col col-span-2 gap-2 justify-center items-start">
                                            <p className="text-md md:text-xl font-semibold">{image.name}</p>
                                            <p className="text-sm md:text-lg">{image.post}</p>
                                        </motion.div >
                                    }
                                </>
                            ))}
                        </div>
                    </Tab>
                    <Tab value="extended" title='Extended Secretariat'>
                        <div className="p-3 sm:w-[80vw] md:w-[70vw] w-full lg:w-[50vw] grid grid-cols-5 gap-10"
                            animate="visible">
                            {extended.map((image, index) => (
                                <>
                                    {
                                        index % 2 === 1 &&
                                        <motion.div initial='hidden' whileInView="visible" viewport={{ once: true }} variants={item} className="flex flex-col col-span-2 gap-2 justify-center items-end">
                                            <p className="text-md md:text-xl font-semibold">{image.name}</p>
                                            <p className="text-sm md:text-lg">{image.post}</p>
                                        </motion.div >
                                    }
                                    <motion.div initial='hidden' whileInView="visible" viewport={{ once: true }} variants={item} className="col-span-3">
                                        <Image loading='eager' classNames={{ wrapper: 'col-span-3' }} key={index} src={image.src} alt={"Image of " + image.post} />
                                    </motion.div>
                                    {
                                        index % 2 === 0 &&
                                        <motion.div initial='hidden' whileInView="visible" viewport={{ once: true }} variants={item} className="flex flex-col col-span-2 gap-2 justify-center items-start">
                                            <p className="text-md md:text-xl font-semibold">{image.name}</p>
                                            <p className="text-sm md:text-lg">{image.post}</p>
                                        </motion.div >
                                    }
                                </>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default ImageSelector;
