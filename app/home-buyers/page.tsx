'use client';

import ImageHero from "@/components/image-hero/page";
import HomeBuyerSurvey from "@/components/home-owner-form/page";

const HomeBuyers = () => {
  return (
    <div>
      <ImageHero/>
      <div className="">
        <HomeBuyerSurvey/>
      </div>
    </div>
  )
}

export default HomeBuyers
