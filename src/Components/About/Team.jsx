import React, { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/button";

const base = import.meta.env.BASE_URL


const imagesGrid = [
    { src: {base} + "/images/secretariat/Ishan.jpg", alt: "Image 1", name: "Ishan Srivastava", post: "Under-Secretary General for Delegate Affairs" },
    { src: {base} + "/images/secretariat/Aman.jpg", alt: "Image 2", name: "Aman Bhargava", post: "Under-Secretary General for Technical Operations" },
    { src: {base} + "/images/secretariat/Vaibhav.jpg", alt: "Image 3", name: "Vaibhav Krishna", post: "Secretary General" },
    { src: {base} + "/images/secretariat/Zoya.jpg", alt: "Image 4", name: "Zoya Khan", post: "Deputy Secretary General" },
    { src: {base} + "/images/secretariat/Dhrati.jpg", alt: "Image 5", name: "Dhrati Tewari", post: "Under-Secretary General for Delegate Affairs" },
    { src: {base} + "/images/secretariat/Chinmay.jpg", alt: "Image 6", name: "Chinmay Jain", post: "Under-Secretary General for Finance" },
    { src: {base} + "/images/secretariat/Madhvi.jpg", alt: "Image 7", name: "Madhvi Khanchandani", post: "Under-Secretary General for Finance" },

];

const imagesList = [
    { src: {base} + "/images/secretariat/Ishan.jpg", alt: "Image 1", name: "Ishan Srivastava", post: "Under-Secretary General for Delegate Affairs" },
    { src: {base} + "/images/secretariat/Aman.jpg", alt: "Image 2", name: "Aman Bhargava", post: "Under-Secretary General for Technical Operations" },
    { src: {base} + "/images/secretariat/Vaibhav.jpg", alt: "Image 3", name: "Vaibhav Krishna", post: "Secretary General" },
    { src: {base} + "/images/secretariat/Zoya.jpg", alt: "Image 4", name: "Zoya Khan", post: "Deputy Secretary General" },
    { src: {base} + "/images/secretariat/Dhrati.jpg", alt: "Image 5", name: "Dhrati Tewari", post: "Under-Secretary General for Delegate Affairs" },
    { src: {base} + "/images/secretariat/Chinmay.jpg", alt: "Image 6", name: "Chinmay Jain", post: "Under-Secretary General for Finance" },
    { src: {base} + "/images/secretariat/Madhvi.jpg", alt: "Image 7", name: "Madhvi Khanchandani", post: "Under-Secretary General for Finance" },
    { src: {base} + "/images/secretariat/Aaishvarya.jpg", alt: "Image 8", name: "Aishwarya Khanna", post: "Creative Co-Head" },
    { src: {base} + "/images/secretariat/Vidha.jpg", alt: "Image 9", name: "Vidha Chandra", post: "Under-Secretary General for PR and Outreach" },
    { src: {base} + "/images/secretariat/Aadya.jpg", alt: "Image 10", name: "Aadya Mishra", post: "Under-Secretary General for Logistics and Hospitality" },
    { src: {base} + "/images/secretariat/Samriddhi.jpg", alt: "Image 11", name: "Samriddhi Yadav", post: "Under-Secretary General for Logistics and Hospitality" },
    { src: {base} + "/images/secretariat/Dhwaj.jpg", alt: "Image 12", name: "Dhwaj Sinha", post: "Under-Secretary General for Administration" },
    { src: {base} + "/images/secretariat/Tanishka.jpg", alt: "Image 13", name: "Tanishka Singh", post: "Head of International Press" },
    { src: {base} + "/images/secretariat/Tanishka.jpg", alt: "Image 13", name: "Ananya Singhal", post: "Creative Co-Head" },
];


const ImageSelector = () => {
    const [selectedView, setSelectedView] = useState("grid");

    const handleViewChange = (view) => {
        setSelectedView(view);
    };

    return (
        <div className="pt-[10vh] w-full min-h-[100vh]">
            <div className="flex flex-col items-center gap-4">
                <ButtonGroup>
                    <Button
                        css={{ backgroundColor: selectedView === "grid" ? "blue" : "gray" }}
                        onPress={() => handleViewChange("grid")}
                    >
                        Secretariat
                    </Button>
                    <Button
                        css={{ backgroundColor: selectedView === "list" ? "blue" : "gray" }}
                        onPress={() => handleViewChange("list")}
                    >
                        Extended - Secretariat
                    </Button>
                </ButtonGroup>
                {selectedView === "grid" && (
                    <div className='grid grid-col-4 gap-5 h-full w-full'>
                        <div>
                            <image src={imagesGrid.src} alt={imagesGrid.alt} className='h-[10vh] w-[10vh]'></image>
                        </div>
                    </div>
                )}
                {selectedView === "list" && (
                    <div className="grid grid-cols-4 gap-10">
                        {imagesList.map((image, index) => (
                            <ImageItem key={index} {...image} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageSelector;
