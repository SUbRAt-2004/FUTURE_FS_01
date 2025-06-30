import { CONTACT } from '../constants';
import { motion } from "framer-motion"; // fixed import
// Note: You had 'motion/react' which should be 'framer-motion'

const Contacts = () => {      
  return (
    <div className='border-b border-neutral-900 pb-20'>
      {/* Contact Heading */}
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-10 text-center text-4xl'
      >
        Get in touch
      </motion.h2>

      {/* Contact Info */}
      <div className='text-center tracking-tighter'>
        <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className='my-4'
        >
          {CONTACT.address}
        </motion.p>

        <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
          className='my-4'
        >
          {CONTACT.phoneNo}
        </motion.p>

        <a href={`mailto:${CONTACT.email}`} className='border-b'>
          {CONTACT.email}
        </a>
      </div>

      {/* Resume Button */}
      <div className="mt-10 flex justify-center">
        <motion.a
          href="https://drive.google.com/file/d/1CURqJHmcdNnLMUMstxkQQUjX3-0CQXau/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#00df9a] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#00c78a] transition duration-300"
        >
          📄 View Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Contacts;
