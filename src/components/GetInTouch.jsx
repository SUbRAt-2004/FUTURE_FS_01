import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/message', formData);
      setStatus('✅ Message sent successfully!');
      setFormData({ name: '', contact: '', address: '', email: '', message: '' });
    } catch (error) {
      console.error('❌ Error sending message:', error);
      setStatus('❌ Something went wrong. Try again later.');
    }
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-10 text-center text-4xl'>
        Let's Connect 💬
      </motion.h2>

      <motion.form 
        whileInView={{opacity: 1, scale: 1}}
        initial={{opacity: 0, scale: 0.95}}
        transition={{duration: 0.5}}
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-6 rounded-md bg-neutral-900 p-8 shadow-lg"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="flex-1 rounded-md bg-neutral-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input 
            type="text" 
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="flex-1 rounded-md bg-neutral-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <input 
          type="text" 
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full rounded-md bg-neutral-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input 
          type="email" 
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md bg-neutral-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <textarea 
          name="message" 
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full rounded-md bg-neutral-800 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button 
          type="submit"
          className="w-full rounded-md bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          Send Message 🚀
        </button>

        {status && (
          <p className="text-center text-sm text-cyan-300">{status}</p>
        )}
      </motion.form>
    </div>
  );
};

export default GetInTouch;
