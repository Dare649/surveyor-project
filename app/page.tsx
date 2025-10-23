import Hero from "@/components/hero/page";
import Rep from "@/components/rep/page";
import WhatsApp from "@/components/whats-app/page";
import StatsSection from "@/components/stat-section/page";

const Home = () => {
  return (
    <div className='w-full'>
      <Hero/>
      <WhatsApp/>
      <Rep/>
      <StatsSection/>
    </div>
  )
}

export default Home