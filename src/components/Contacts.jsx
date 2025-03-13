import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md";
import React from "react"
import Form from 'react-bootstrap/Form';
import { FormInput } from "lucide-react";
import { Button, FloatingLabel, FormLabel } from "react-bootstrap";

const Contacts = () => {
    return (<>
        <div id="contact_us" className="pt-20 pb-20 px-10 bg-slate-800 text-slate-400 text-center">
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
                        <p className="flex items-center gap-4 text-[16px]">
                            <FaPhoneAlt className="text-sky-500" /> 
                            <section className="flex flex-col">
                                <p>+241 215 885442</p>
                                <p>+233 552 421585</p>
                            </section>
                        </p>
                    </div>
                </div>
                <div className="text-left text-[18px]">
                    <p className="text-slate-300 font-bold text-[20px]">Send us a message</p>
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="fullname" placeholder="Full name here..." />
                            <label htmlFor="fullname">Full Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="email" id="email_address" placeholder="Email here..." />
                            <label htmlFor="email_address">Email Address</label>
                        </Form.Floating>
                        <FloatingLabel controlId="user_message" label="Message" className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave your message here..." style={{ height: '150px' }} />
                        </FloatingLabel>
                        <Button variant="primary" size="md" className="w-full lg:w-1/2">Send Message</Button>
                    </Form>
                </div>
            </div>
        </div>
    </>)
}

export default Contacts