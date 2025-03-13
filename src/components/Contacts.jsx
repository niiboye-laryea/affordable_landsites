import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaPhone, FaPhoneAlt, FaPhoneSlash, FaTwitter } from "react-icons/fa"
import React from "react"

const Contacts = () => {
    return (<>
        <div id="contact_us" className="pt-20 pb-20 px-10 bg-slate-800 text-slate-400 text-center">
            <p className="text-left lg:text-center text-5xl font-bold text-slate-300">Get In Touch With Us</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15">
                <div className="text-left text-[18px]">
                    <div className="flex flex-col">
                        <span>Shanton Peaceful Home</span>
                        <span>Post Office Box 34KL</span>
                        <span>Kuntami 04 street,</span> 
                        <span>Kumansi, Ghana</span>
                    </div>
                    <div>
                        <a href="#" className="social-links">
                            <span className="mt-4 flex items-center gap-4"><FaTwitter /> shantshome.peaceful  </span>
                        </a>
                        <a href="#" className="social-links">
                            <span className="mt-2 flex items-center gap-4"><FaFacebook /> shantshome</span>
                        </a>
                        <a href="#" className="social-links">
                            <span className="mt-2 flex items-center gap-4"><FaInstagram /> shantonspeaceful</span>
                        </a>
                    </div>
                    <div>
                        <p className="mt-4 flex items-center gap-4">
                            <FaPhoneAlt /> 
                            <section className="flex flex-col">
                                <p>+241 215 885442</p>
                                <p>+233 552 421585</p>
                            </section>
                        </p>
                    </div>
                </div>
                <div className="text-left text-[18px]">adsf</div>
            </div>
        </div>
    </>)
}

export default Contacts