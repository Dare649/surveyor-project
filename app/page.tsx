import Hero from "@/components/hero/page";
import Rep from "@/components/rep/page";
import WhatsApp from "@/components/whats-app/page";


const Home = () => {
  return (
    <div className='w-full'>
      <Hero/>
      <WhatsApp/>
      <Rep/>
    </div>
  )
}

export default Home