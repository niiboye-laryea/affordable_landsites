import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md";
import React from "react"
import ContactForm from "./ContactForm";

const Contacts = () => {
    return (<>
        <div id="contact_us" className="pt-20 pb-10 px-10 bg-slate-800 text-slate-400 text-center">
            <p className="text-left lg:text-center text-5xl font-bold text-slate-300">Get In Touch With Us</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15">
                <div className="text-left text-[20px]">
                    <div>
                        <p className="mt-2 text-slate-300 font-bold">Box Address</p>
                        <div className="flex flex-col !text-[16px]">
                            <span>Shanton Peaceful Home</span>
                            <span>Post Office Box 34KL</span>
                            <span>Kuntami 04 street,</span> 
                            <span>Kumansi, Ghana</span>
                        </div>
                    </div>
                    <div>
                        <p className="mt-5 text-slate-300 font-bold">Social Media Handles</p>
                        <p>
                            <a href="#" className="social-links">
                                <span className="mt-2 flex items-center gap-4"><FaTwitter /> shantshome.peaceful  </span>
                            </a>
                            <a href="#" className="social-links">
                                <span className="mt-2 flex items-center gap-4"><FaFacebook /> shantshome</span>
                            </a>
                            <a href="#" className="social-links">
                                <span className="mt-2 flex items-center gap-4"><FaInstagram /> shantonspeaceful</span>
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className="mt-5 text-slate-300 font-bold">Email Address</p>
                        <p className="flex items-center gap-4">
                            <MdOutlineMailOutline className="text-sky-500" /> shant.peaceful@shanthome.com
                        </p>
                    </div>
                    <div>
                        <p className="mt-5 text-slate-300 font-bold">Contact Numbers</p>
                        <div className="flex items-center gap-4 text-[16px]">
                            <FaPhoneAlt className="text-sky-500" /> 
                            <p className="flex flex-col">
                                <span>+241 215 885442</span>
                                <span>+233 552 421585</span>
                            </p>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    </>)
}

export default Contacts