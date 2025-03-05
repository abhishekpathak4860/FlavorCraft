import { useState } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";


export default function Home() {
    const [search,setSearch]=useState('');
    const [choice,setChoice]=useState('All');
    return (
        <>
        <Header setSearch={setSearch} setChoice={setChoice} />
        <HeroSection search={search} choice={choice} />
        </>
    )
}
