import React from 'react'
import TopSection from './components/topSection/TopSection'
import Navbar from './components/navbar/Navbar'
import BusinessSection from './components/businessSection/BusinessSection'
import AuthenticProperties from './components/authenticProperties/AuthenticProperties'
import EstateProcess from './components/estateProcess/EstateProcess'
import SellingSection from './components/sellingSection/SellingSection'
import ProductionSection from './components/productionSection/ProductionSection'
import FormCalculator from './components/formCalculator/FormCalculator'
import ThreeStepGuide from './components/threeStepGuide/ThreeStepGuide'
import MedalSection from './components/medalSection/MedalSection'
import TestimonialSection from './components/testimonialSection/TestimonialSection'
import OverviewSection from './components/overviewSection/OverviewSection'
import Footer from './components/Footer/Footer'

function page() {
    return (
        <div>
          <TopSection />
          <Navbar />
          <BusinessSection />
          <AuthenticProperties />
          <EstateProcess />
          <SellingSection />
            <ProductionSection />
            <FormCalculator />
            <ThreeStepGuide />
            <MedalSection />
            <TestimonialSection />
            <OverviewSection />
            <Footer />
        </div>
    )
}

export default page