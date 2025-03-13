import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import React from "react"

const Contacts = () => {
    return (<>
        <div id="contact_us" className="pt-20 pb-20 px-10 bg-slate-800 text-slate-400 text-center">
            <p className="text-5xl font-bold text-slate-300">Get In Touch With Us</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                <div className="text-left text-[18px]">
                    <p>Shanton Peaceful Home</p>
                    <p>Post Office Box 34KL</p>
                    <p>Kuntami 04 street,</p> 
                    <p>Kumansi, Ghana</p>
                    <a href="#">
                        <p className="mt-5 flex items-center gap-2">
                            <FaTwitter /> shantonpeaceful
                        </p>
                    </a>
                    <p className="mt-2 flex items-center gap-2"><FaFacebook /> shantonpeaceful</p>
                    <p className="mt-2 flex items-center gap-2"><FaInstagram /> shantonpeaceful</p>
                </div>
                <div className="text-left text-[18px]">adsf</div>
            </div>
        </div>
    </>)
}

export default Contacts