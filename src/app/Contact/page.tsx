import Image from 'next/image';
import contactImage from '@/assets/bg.png';  // Change the image path to your image

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <Image src={contactImage} alt="Contact" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 border border-purple-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-center text-white mb-6">
            Ready to transform your business with AI?
          </p>

          <form action="#" method="POST" className="space-y-6">
            {/* Contact Information */}
            <div className="text-center text-white mb-6">
              <p>Email: <a href="mailto:contact@agentiaworld.com" className="text-purple-600">contact@agentiaworld.com</a></p>
              <p>Website: <a href="https://www.agentiaworld.com" className="text-purple-600">www.agentiaworld.com</a></p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-white text-sm font-medium">First Name</label>
                <input type="text" id="firstName" name="firstName" className="w-full p-3 mt-1 bg-slate-100 text-black rounded-md" required />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-white text-sm font-medium">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="w-full p-3 mt-1 bg-slate-100 text-black rounded-md" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium">Email Address</label>
                <input type="email" id="email" name="email" className="w-full p-3 mt-1 bg-slate-100 text-black rounded-md" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium">Your Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-4 mt-2 bg-slate-100 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
              </div>
            </div>

            {/* Send Message Button */}
            <div className="text-center">
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-all">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
