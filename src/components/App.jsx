import { Landing, Navbar, OurServices, Testimonials } from "../components"

let App = () => {
    return (<>
        <div className="w-full h-full">
            <Navbar />
            <Landing />

            {/* Services */}
            <OurServices />

            {/* What our customers say */}
            <Testimonials />

            {/* Get in touch */}
        </div>
    </>)
}

export default App