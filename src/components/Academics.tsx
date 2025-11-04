import { BookOpen, Microscope, Calculator, Globe, Music, Palette } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Academics() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const subjects = [
    {
      icon: BookOpen,
      title: 'Languages',
      description: 'English, Hindi, and Sanskrit with focus on literature and communication skills'
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Comprehensive math curriculum from basic arithmetic to advanced calculus'
    },
    {
      icon: Microscope,
      title: 'Sciences',
      description: 'Physics, Chemistry, Biology with well-equipped laboratories'
    },
    {
      icon: Globe,
      title: 'Social Studies',
      description: 'History, Geography, Civics, and Economics for global awareness'
    },
    {
      icon: Music,
      title: 'Music & Dance',
      description: 'Indian classical and western music, various dance forms'
    },
    {
      icon: Palette,
      title: 'Arts & Crafts',
      description: 'Drawing, painting, sculpture, and creative expression'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="academics" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity }}
        >
          <motion.h2 
            className="text-4xl mb-4 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Academic Excellence
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive curriculum designed to challenge and inspire students at every level
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="bg-blue-100 p-3 rounded-lg flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-6 w-6 text-blue-600" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl mb-2 text-gray-900">{subject.title}</h3>
                          <p className="text-gray-600">{subject.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 bg-blue-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl mb-6 text-center text-gray-900">Educational Boards</h3>
          <div className="grid md:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl mb-2 text-blue-600">CBSE</div>
              <p className="text-gray-600">Affiliated to Central Board of Secondary Education</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl mb-2 text-blue-600">Classes</div>
              <p className="text-gray-600">Nursery to Class VIII</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
