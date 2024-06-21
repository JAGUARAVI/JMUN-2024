import { } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Spacer, Button } from '@nextui-org/react'
import vicechair from '/images/anjali_jaipuria.jpg'

const base = import.meta.env.BASE_URL

function Component() {
    return (
        <div className="w-full min-h-[100vh]">
            <div className="relative w-full h-[50vh] font-generica font-semibold text-center" style={{
                backgroundImage: `url(${base + 'images/school.jpg'})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                overflow: 'hidden'
            }}>
                <div className=" w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-20 "></div>
            </div>
            <div className="min-h-[70vh] w-full flex items-center flex-col p-7 mt-[5vh]">
                <Card isBlurred className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>About Seth M.R. Jaipuria School</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7">
                        <p>Seth MR. Jaipuria School, Gomti Nagar, Lucknow— the School of
                            Conscious Transformation, has been established in the memory of
                            Late Shri Seth Mungturam Jaipuria, a great nationalist and doyen of
                            the Textile Industry, who was conferred the Padma Bhushan by the
                            President of India in 1971 in recognition of his social services.<br /><br /></p>

                        <p>The school's focus is to provide a learning environment that protects
                            and nourishes three precious qualities inherent in children— innocence,
                            innagination, and a spirit of exploration.<br /><br /></p>

                        <p>Under the able patronship of Shri Sharad Jaipuria and Smt. Anjali
                            Jaipuria, and imaginative limits and working on novel concepts to
                            make this conference the experience it always is.<br /><br /></p>

                        <p>This conference has been home to never—seen—before committees
                            passed down as legacy since its inception.<br /><br /></p>

                        <p>The goal this year, for its eleventh edition, is to make it bigger and
                            better than it has ever been.<br /><br /></p>
                    </CardBody>
                </Card>
            </div>

            <div className="min-h-[80vh] w-full flex items-center flex-col p-7 ">
                <Card isBlurred className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Message from the Vice Chairperson</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7">

                        {/* <img
                            src={vicechair}
                            alt="Image description"
                            className="object-contain w-30"
                        /> */}

                        <p>Seth MR. Jaipuria School, Gomti Nagar, Lucknow— the School of
                            Conscious Transformation, has been established in the memory of
                            Late Shri Seth Mungturam Jaipuria, a great nationalist and doyen of
                            the Textile Industry, who was conferred the Padma Bhushan by the
                            President of India in 1971 in recognition of his social services.<br /><br /></p>

                        <p>The school's focus is to provide a learning environment that protects
                            and nourishes three precious qualities inherent in children— innocence,
                            innagination, and a spirit of exploration.<br /><br /></p>

                        <p>Under the able patronship of Shri Sharad Jaipuria and Smt. Anjali
                            Jaipuria, and imaginative limits and working on novel concepts to
                            make this conference the experience it always is.<br /><br /></p>

                        <p>This conference has been home to never—seen—before committees
                            passed down as legacy since its inception.<br /><br /></p>

                        <p>The goal this year, for its eleventh edition, is to make it bigger and
                            better than it has ever been.<br /><br /></p>
                    </CardBody>
                </Card>
            </div>
            
            <div className="min-h-[80vh] w-full flex items-center flex-col p-7 ">
                <Card isBlurred className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Message from the Principal</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7">

                        {/* <img
                            src={vicechair}
                            alt="Image description"
                            className="object-contain w-30"
                        /> */}

                        <p>Seth MR. Jaipuria School, Gomti Nagar, Lucknow— the School of
                            Conscious Transformation, has been established in the memory of
                            Late Shri Seth Mungturam Jaipuria, a great nationalist and doyen of
                            the Textile Industry, who was conferred the Padma Bhushan by the
                            President of India in 1971 in recognition of his social services.<br /><br /></p>

                        <p>The school's focus is to provide a learning environment that protects
                            and nourishes three precious qualities inherent in children— innocence,
                            innagination, and a spirit of exploration.<br /><br /></p>

                        <p>Under the able patronship of Shri Sharad Jaipuria and Smt. Anjali
                            Jaipuria, and imaginative limits and working on novel concepts to
                            make this conference the experience it always is.<br /><br /></p>

                        <p>This conference has been home to never—seen—before committees
                            passed down as legacy since its inception.<br /><br /></p>

                        <p>The goal this year, for its eleventh edition, is to make it bigger and
                            better than it has ever been.<br /><br /></p>
                    </CardBody>
                </Card>
            </div>

            <div className="min-h-[80vh] w-full flex items-center flex-col p-7 ">
                <Card isBlurred className="max-w-[90vw] md:max-w-[80vw] xl:max-w-[75vw]">
                    <CardHeader className="flex items-center">
                        <p className='pl-4 tracking-wider text-center w-full h-[10vh] flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-generica bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text'>Message from the MUN Coordinator</p>
                    </CardHeader>
                    <Divider />
                    <CardBody className="p-7">

                        {/* <img
                            src={vicechair}
                            alt="Image description"
                            className="object-contain w-30"
                        /> */}

                        <p>Seth MR. Jaipuria School, Gomti Nagar, Lucknow— the School of
                            Conscious Transformation, has been established in the memory of
                            Late Shri Seth Mungturam Jaipuria, a great nationalist and doyen of
                            the Textile Industry, who was conferred the Padma Bhushan by the
                            President of India in 1971 in recognition of his social services.<br /><br /></p>

                        <p>The school's focus is to provide a learning environment that protects
                            and nourishes three precious qualities inherent in children— innocence,
                            innagination, and a spirit of exploration.<br /><br /></p>

                        <p>Under the able patronship of Shri Sharad Jaipuria and Smt. Anjali
                            Jaipuria, and imaginative limits and working on novel concepts to
                            make this conference the experience it always is.<br /><br /></p>

                        <p>This conference has been home to never—seen—before committees
                            passed down as legacy since its inception.<br /><br /></p>

                        <p>The goal this year, for its eleventh edition, is to make it bigger and
                            better than it has ever been.<br /><br /></p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Component;