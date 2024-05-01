import { Image } from '@nextui-org/react';
import { Marker } from '../../Icons';

function Component() {
    return (
        <div id='footer' className='w-full grid grid-cols-1 md:grid-cols-3 pt-12 pb-12 pl-8 pr-8 gap-8 bg-[rgb(20,18,18)] text-white'>
            <div className='w-full flex justify-center items-center flex-col gap-8'>
                <div className=''>
                    <h4 className='text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Conference Dates</h4>
                    <p className='text-lg ordinal'>
                        18th. 19th. 20th. July. 2024.
                    </p>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='flex items-center justify-center'>
                        <Marker className='inline row-span-3' size={40} />
                    </div>
                    <div>
                        <p className='text'>
                            &nbsp;Seth M.R. Jaipuria School
                        </p>
                        <p className='text'>
                            Vineet Khand, Gomti Nagar,
                        </p>
                        <p className='text'>
                            Lucknow, Uttar Pradesh, India.
                        </p>
                    </div>
                </div>
            </div >
            <div className='w-full flex justify-center items-center'>
                <Image src='/logoWhiteTransparent.png' width={250} />
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className=''>
                    <h4 className='text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Our Partners</h4>
                    <a href='#' className='block mb-2'>Idk what</a>
                    <a href='#' className='block mb-2'>should be</a>
                    <a href='#' className='block mb-2'>here</a>
                </div>
            </div>
        </div >
    );
}

export default Component;