import React from "react";
import HeroComponent from "../components/heroComponent";
import NavbarComponent from "../components/navbarComponent";
import CardComponent from "../components/cardComponent";
import VideoComponent from "../components/videoComponent";
import TimelineComponent from "../components/timelineComponent";
import "aos/dist/aos.css";
import AccordionComponent from "../components/accordionComponent"
import MoviesComponent from "../components/moviesComponent";

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <HeroComponent />
            <TimelineComponent />
            <AccordionComponent />
            <VideoComponent />
            <MoviesComponent />
        </>
    )
}

export default Home