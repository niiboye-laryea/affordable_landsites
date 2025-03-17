import Form from 'react-bootstrap/Form';
import { Button, FloatingLabel, FormLabel } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const ContactForm = () => {

    const form_ref = useRef()

    const sendEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_92um5a9', 'template_c0jyduk', form_ref.current, {
            publicKey: 'JC_5EQnTnPedD9KQw',
        }).then(
            () => {
                Swal.fire({
                    title: "Success!",
                    text: "Email sent successfully!",
                    icon: "success"
                });
            }, (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...!",
                    text: "Something went wrong!",
                    footer: error
                });
            }
        );

        e.target.reset()
    }

    return (
        <div className="text-left text-[18px]">
            <p className="text-slate-300 font-bold !text-[20px]">Send us a message</p>
            <Form ref={form_ref} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="fullname" className='text-[16px] text-slate-300'>Full Name</label>
                    <input className='form-control w-full' type="text" name="fullname" id="fullname" placeholder="Full name" />
                </div>
                <div className='mt-4'>
                    <label htmlFor="email" className='text-[16px] text-slate-300'>Email Address</label>
                    <input className='form-control w-full' type="text" name="email" id="email" placeholder="Email address" />
                </div>
                <div className='mt-4'>
                    <label htmlFor="message" className='text-[16px] text-slate-300'>Message</label>
                    <textarea name='message' id='message' placeholder='Leave your message here...' className='form-control !resize-none w-full h-[150px]' />
                </div>
                <div className='mt-3'>
                    <Button variant='danger' size='md' className='w-full' type='submit'>Send Message</Button>
                </div>
            </Form>
        </div>
    )
}

export default ContactForm