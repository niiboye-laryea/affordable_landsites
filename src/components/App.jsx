import { Landing, Navbar, OurServices, Testimonials, Footer } from "../components"
import Contacts from "./Contacts"
import 'bootstrap/dist/css/bootstrap.min.css'

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
            <Contacts />

            {/* Footer */}
            <Footer />
        </div>
    </>)
}

export default App