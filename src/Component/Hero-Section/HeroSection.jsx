import Intro from '../Intro/Intro'
import Navbar from '../Navbar/Navbar'
import TabSwitch from '../Tabs/TabSwitch'
import MainSection from '../MainSection/MainSection'
import Footer from '../Footer/Footer'
import { useState } from 'react'

const HeroSection = () => {
    const [showIntro, setShowIntro] = useState(true)
    if (showIntro) {
        return <Intro onComplete={() => setShowIntro(false)} />
    }

    return (
        <div className="pt-25 md:pt-35 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <Navbar title="I'm Deep Patel" />
                <MainSection />
                <TabSwitch />
                <Footer />

            </div>
        </div>

    )
}

export default HeroSection

