import { Award, Users, BookOpen, Trophy } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    setDisplayedText('');
    setIsComplete(false);
    
    let currentIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, hasStarted]);

  return (
    <p ref={ref} className="text-gray-700">
      {displayedText}
      {hasStarted && !isComplete && (
        <span className="inline-block w-0.5 h-5 bg-blue-600 ml-1 animate-pulse" />
      )}
    </p>
  );
}

function SectionWithCursor({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            setDisplayedText('');
            setCurrentParagraph(0);
            setIsComplete(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || currentParagraph >= paragraphs.length) {
      if (currentParagraph >= paragraphs.length) {
        setIsComplete(true);
      }
      return;
    }

    const currentText = paragraphs[currentParagraph];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentParagraph(prev => prev + 1);
          setDisplayedText('');
        }, 500);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [hasStarted, currentParagraph, paragraphs]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: title === "Our Mission" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl mb-4 text-gray-900">{title}</h3>
      <div className="space-y-4">
        {paragraphs.map((text, index) => (
          <p key={index} className="text-gray-700">
            {index < currentParagraph ? text : index === currentParagraph ? (
              <>
                {displayedText}
                {hasStarted && !isComplete && (
                  <span className="inline-block w-0.5 h-5 bg-blue-600 ml-1 animate-pulse" />
                )}
              </>
            ) : ''}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const missionParagraphs = [
    "At Sanskar Public School, we are committed to nurturing young minds and empowering them with knowledge, values, and skills necessary to excel in an ever-changing world. Our mission is to create responsible global citizens who contribute positively to society.",
    "We believe in providing a balanced education that encompasses academic excellence, character building, and extracurricular activities, ensuring the all-round development of every student."
  ];

  const visionParagraphs = [
    "To be a leading educational institution that inspires excellence, innovation, and integrity in every student. We envision a learning environment where creativity flourishes, critical thinking is encouraged, and every child discovers their unique potential.",
    "Our vision extends beyond academic achievements to include the development of compassionate, confident, and socially responsible individuals who will shape the future of our nation."
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
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
            About Sanskar Public School
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A premier institution dedicated to providing world-class education and fostering holistic development
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <SectionWithCursor title="Our Mission" paragraphs={missionParagraphs} />
          <SectionWithCursor title="Our Vision" paragraphs={visionParagraphs} />
        </div>
      </div>
    </section>
  );
}
