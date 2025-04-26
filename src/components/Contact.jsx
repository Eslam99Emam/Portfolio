// Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.init('aWKVdpqNWynbb2je8')

    console.log(formData);

    emailjs
      .send('service_pn4n49l', 'template_md5gw6o', formData)
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitMessage({
            type: 'success',
            text: 'Your message has been sent successfully! I will get back to you soon.'
          });
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitMessage({
            type: 'failure',
            text: 'Your message has not been sent! Try again later.'
          });
        },
      );

    // Simulate form submission


      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Whether you have a question, want to start a project, or simply want to connect, feel free to reach out.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-green-300 font-medium">Email</h4>
                    <p className="text-gray-300">eslam.emam.hussien@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-700 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-green-300 font-medium">Phone</h4>
                    <p className="text-gray-300">+201119684549</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-green-300 font-medium mb-3">Social Links</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-700 p-2 rounded-md text-green-400 hover:bg-gray-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 p-2 rounded-md text-green-400 hover:bg-gray-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 p-2 rounded-md text-green-400 hover:bg-gray-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 417 512.238">
                      <path d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Send Me a Message</h3>

            {submitMessage && (
              <div className={`p-4 mb-6 rounded-md ${submitMessage.type === 'success' ? 'bg-green-400/20 text-green-300' : 'bg-red-400/20 text-red-300'}`}>
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:border-green-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:border-green-400"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:border-green-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 text-gray-900 font-medium py-3 rounded-md transition flex justify-center items-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;