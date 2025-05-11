import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Server, Database, Braces, Globe, Smartphone } from 'lucide-react';
import justravel from './images/justravel.png';
import recipe from './images/recipe.png';
import vana from './images/vana.png';
import flower from './images/flower.png';
import { iframe, image } from 'framer-motion/client';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      scale: [0.8, 1],
      transition: { duration: 1.5, ease: "easeOut" }
    });
  }, [controls]);

  const skills = [
    { icon: <Code2 className="w-8 h-8" />, name: 'Frontend Development', desc: 'React, Vue, TypeScript, Angular, Three.js, Webpack, Babel' },
    { icon: <Server className="w-8 h-8" />, name: 'Backend Development', desc: 'Node.js, Python, Java, Express, next.js, RESTful API' },
    { icon: <Database className="w-8 h-8" />, name: 'Database', desc: 'PostgreSQL, MongoDB, MySQL' },
    { icon: <Braces className="w-8 h-8" />, name: 'API Development', desc: 'REST, GraphQL' },
    { icon: <Globe className="w-8 h-8" />, name: 'Web Services', desc: 'AWS, Docker, CI/CD, Github' },
    { icon: <Smartphone className="w-8 h-8" />, name: 'Mobile Development', desc: 'React Native, Flutter' },
  ];

  const projects = [
  {
    title: 'VanaSetu-Tree Adoption Platform',
    description: 'Full-stack application for tree adoption and management using MERN stack',
    image: vana,
    repoLink: 'https://github.com/khushi-jain123/VanaSetu-App',  // Add GitHub repo link here
  },
  {
    title: 'Recipe Finder-App',
    description: 'Real-time recipe finder app using React and Material UI',
    image: recipe,
    repoLink: 'https://github.com/khushi-jain123/recipefinder',  // Add GitHub repo link here
  },
  {
    title: 'Artify-AI',
    description: 'AI-based art generation platform using React and goole cloud vision API',
    image: flower,
    repoLink: 'https://github.com/khushi-jain123/Artify-AI',  // Add GitHub repo link here
  }
];



  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.header 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,rgba(59,130,246,0)_100%)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
          <motion.h1
  className="text-6xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
  animate={{
    backgroundPosition: ['0%', '100%'],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse",
  }}
>
  Khushi Jain<br />
  Full Stack Developer
</motion.h1>

          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building digital experiences that matter
          </motion.p>
          <motion.div 
  className="flex justify-center gap-8"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  {[
    { Icon: Github, link: "https://github.com/khushi-jain123" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/khushi-jain-539259259/" },
    { Icon: Mail, link: "mailto:ktjain1456@gmail.com" }
  ].map(({ Icon, link }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank"  // Opens link in a new tab
      rel="noopener noreferrer"  // Security best practice
      className="text-gray-300 hover:text-blue-400 transition-colors"
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Icon className="w-8 h-8" />
    </motion.a>
  ))}
</motion.div>

        </div>
      </motion.header>

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-blue-400 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-300">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Projects Section */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <motion.h2 
      className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Featured Projects
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Wrap each project with an anchor tag to open the repo link on hover */}
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <motion.div 
              className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-blue-500/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            I'm always open to new opportunities and interesting projects.
          </motion.p>
          <motion.a
            href="mailto:ktjain1456@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default App;