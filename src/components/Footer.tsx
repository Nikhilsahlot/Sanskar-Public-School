import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Centered 2-column grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-center">
          
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="max-w-xs">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg text-white">Sanskar Public School</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Committed to excellence in education and nurturing young minds for a brighter future.
              </p>
              <div className="flex gap-3 justify-center">
                <motion.a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="max-w-xs">
              <h4 className="text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#academics" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#fee-payment" className="hover:text-white transition-colors">Fee Payment</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Bottom copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>&copy; {currentYear} Sanskar Public School. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
