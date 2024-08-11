import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'


export default function Contact() {
  const EMAILJS_SERVICE_ID = 'karenzindars';
  const EMAILJS_TEMPLATE_ID = '20240811_contact_form';
  const EMAILJS_PUBLIC_KEY = 'f1ENO60B_F4KPdXBu';
  const RECAPTCHA_PUBLIC_KEY = '6LeOLyQqAAAAAP823L-NtEjTvlZ8-mrlb-eLGzJX';

  const DEFAULT_BUTTON_TEXT = 'Send message';

  const recaptcha = useRef();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitText, setSubmitText] = useState(DEFAULT_BUTTON_TEXT);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert('Please solve the captcha')
      return;
    }
    const params = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      'g-recaptcha-response': captchaValue,
    };
    setLoading(true);
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        {
          publicKey: EMAILJS_PUBLIC_KEY
        },
      )
      .then(
        () => {
          setSubmitText('Message sent!');
          setTimeout(() => {
            // Clears the form after sending the email
            e.target.reset();
            setLoading(false);
            setSubmitText(DEFAULT_BUTTON_TEXT);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.error('error submitting contact form', error);
          alert('an error occurred submitting the form try again in a few minutes or email my mom if you know her email!');
          setTimeout(() => {
            setLoading(false);
            setSubmitText(DEFAULT_BUTTON_TEXT);
          }, 5000); // hide message after 5 seconds
        }
      );
  };
  return (
    <section >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please leave your information below and I will be in touch by email.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input disabled={loading} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input disabled={loading} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea disabled={loading} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className='my-5'>
            <ReCAPTCHA ref={recaptcha} sitekey={RECAPTCHA_PUBLIC_KEY} />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {submitText}
            </button>
        </form>
      </div>
    </section>
  );
};
