import React from 'react';
import Navigation from '.components/Navigation';
import Footer from '.components/Footer';
const ContactUs = () => {
    return (
        <div>
            <Navigation/>
            <div className="bg-gray-200 p-4">
                <h1 className="text-2xl font-bold">Start Your Journey  with us now</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur consequuntur corporis delectus doloremque dolorum eos expedita facilis fugit harum impedit ipsam itaque, iusto laudantium maiores maxime molestiae nobis nulla, nihil numquam obcaecati quasi quidem quisquam quod repellend</p>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name *</label>
                        <input type="text" placeholder="Enter Name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                        <input type="email" placeholder="your@gmail.com" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">How can we help?</label>
                        <textarea placeholder="Tell us about your requirement" className="mt-1 p-2 border border-gray-300 rounded-md w-full h-24"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
                </form>
                <div className="mt-4">
                    <p>Unicare Fire Safety (India) Pvt. Ltd.</p>
                    <p>C-34, Sector 65, Noida-201301, Delhi (NCR), (U.P).</p>
                    <p>Phone: +44 16 8765 1098</p>
                    <p>Email: dummycompany@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;

