import { useEffect } from 'react';
import { Image } from '@nextui-org/react';

const base = import.meta.env.BASE_URL

function Component() {
    useEffect(() => {
        document.title = 'Partners | JMUN 2024'
    }, [])


    return (
        <div className="pt-[10vh] w-full min-h-[90vh] flex justify-center items-center">
            <div className='w-full flex justify-center items-center'>
                <div className='flex justify-center items-center w-full flex-col'>
                    <p className='text-center text-4xl md:text-5xl xl:text-6xl  font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ml-10'>Our Partners</p>
                    <div className="flex justify-center items-center max-w-[80vw] flex-col md:flex-row">
                        <Image src={base + 'images/partner1.png'} width={240} className='dark:invert ' />
                        <Image src={base + 'images/partner2.png'} width={240} className='dark:invert ' />
                        <Image src={base + 'images/partner3.png'} width={240} className='pt-2 ml-3' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;