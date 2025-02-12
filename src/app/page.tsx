import { CallToAction } from "@/sections/CallToAction";
import { NeuralCapabilities } from "@/sections/Capabilites";
import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero";
import { MeetOurAI } from "@/sections/MeetourAI";
import PricingPage from "./Pricing/page";


export default function Home() {
  return <>
    <Hero/>
    <MeetOurAI />
    <Features />
    <CallToAction/>
    <NeuralCapabilities />
    <PricingPage />
    </>
}
