import Landing from "./Landing"
import Navbar from "./Navbar"
import OurServices from "./OurServices"

let App = () => {
    return (<>
        <div className="w-full h-full">
            <Navbar />
            <Landing />

            {/* Services */}
            <OurServices />

            {/* Get in touch */}
        </div>
    </>)
}

export default App