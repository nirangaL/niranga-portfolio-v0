"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Briefcase,
  GraduationCap,
  User,
  Home,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "hero", title: "Home", icon: Home },
  { id: "about", title: "About", icon: User },
  { id: "skills", title: "Skills", icon: Code },
  { id: "experience", title: "Experience", icon: Briefcase },
  { id: "projects", title: "Projects", icon: Database },
  { id: "education", title: "Education", icon: GraduationCap },
  { id: "contact", title: "Contact", icon: Mail },
];

const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Node.js", "PHP"],
  "Frameworks & Libraries": [
    "NestJS",
    "Angular",
    "React",
    "Laravel",
    "CodeIgniter",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore"],
  "UI Frameworks": ["PrimeNg", "Tailwind CSS", "Bootstrap", "Chakra UI"],
  "Cloud & DevOps": ["AWS (EC2, S3, CloudFront)", "Docker", "CI/CD"],
  Tools: ["Git", "JIRA", "Postman", "Draw.io"],
};

const experiences = [
  {
    company: "Orel IT",
    position: "Software Engineer",
    period: "Feb 2025 – Present",
    description:
      "Recently joined the development team, completing onboarding and training. Familiarizing with internal systems and preparing to contribute to new web application projects.",
  },
  {
    company: "Softcodeit Solutions (Pvt) Ltd",
    position: "Software Engineer (Full-stack)",
    period: "Dec 2021 - Jan 2025",
    description:
      "Designed and developed scalable multi-tenant solutions, admin portals, and interactive web applications using Node.js, NestJS, React, Angular, and AWS services.",
  },
  {
    company: "Original Apparel (Pvt) Ltd",
    position: "IT Executive (Web Developer)",
    period: "Aug 2018 – Nov 2021",
    description:
      "Developed web-based solutions including real-time production monitoring systems and cloud-based ERP systems using PHP, Laravel, and MySQL.",
  },
  {
    company: "QB Lanka PVT LTD",
    position: "Trainee PHP Developer",
    period: "Jan 2018 – Jul 2018",
    description:
      "Worked as a full-stack developer on cloud-based ERP and HR management solutions using PHP, CodeIgniter, JavaScript, and MySQL.",
  },
];

const projects = [
  {
    name: "Impact Housing",
    description:
      "Multi-tenant admin management and student tracking solution with customized plans and global search functionality.",
    tech: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    name: "Ocean Flow",
    description:
      "Contracting workflow optimization platform for boat brokers with streamlined closing documentation process.",
    tech: ["NestJS", "Angular", "TypeORM", "AWS"],
  },
  {
    name: "ProductM",
    description:
      "Real-time production monitoring system for the apparel industry with optimized tracking and reporting.",
    tech: ["Node.js", "React", "MongoDB", "Docker"],
  },
  {
    name: "GoYachtify.com",
    description:
      "Listing platform for yacht brokers to efficiently sell new and used yachts with enhanced user experience.",
    tech: ["Angular", "PrimeNg", "PostgreSQL", "Stripe"],
  },
];

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSection();
      if (e.key === "ArrowLeft") prevSection();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    let isSwiping = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isSwiping) return;

      touchEndY = e.changedTouches[0].screenY;
      const swipeDistance = Math.abs(touchStartY - touchEndY);

      // Only trigger if swipe distance is significant (more than 50px)
      if (swipeDistance > 50) {
        isSwiping = true;

        if (touchStartY > touchEndY) {
          // Swiped up - go to next section
          nextSection();
        } else {
          // Swiped down - go to previous section
          prevSection();
        }

        // Reset swiping flag
        setTimeout(() => {
          isSwiping = false;
        }, 800);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const sectionVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const renderSection = () => {
    const section = sections[currentSection];

    switch (section.id) {
      case "hero":
        return (
          <div className="flex flex-col items-center justify-center min-h-screen text-center px-8 mt-20">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                NL
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Niranga Lakshan
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-4xl"
            >
              Full-Stack Software Engineer
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-xl text-gray-500 mb-12 max-w-3xl leading-relaxed"
            >
              5+ years of expertise in web development, specializing in scalable
              solutions with Node.js, NestJS, Angular, and AWS
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex gap-6"
            >
              <a href="mailto:nirangawh@hotmail.com">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </a>
              <a
                href="https://github.com/nirangaL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 bg-transparent"
                >
                  <ArrowDown className="mr-2 h-5 w-5" />
                  View Work
                </Button>
              </a>
            </motion.div>
          </div>
        );

      case "about":
        return (
          <div className="flex flex-col justify-center min-h-screen px-8 py-16 mt-20">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-12 text-center"
            >
              About Me
            </motion.h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-8xl font-bold">
                  NL
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-2xl leading-relaxed text-gray-700">
                  Experienced software engineer with over 5 years of expertise
                  in web development, specializing in full-stack development,
                  DevOps practices, and cloud infrastructure management.
                </p>

                <p className="text-xl leading-relaxed text-gray-600">
                  Passionate about leveraging cutting-edge technologies to
                  create innovative and scalable solutions. Demonstrated success
                  in delivering high-impact projects while excelling in dynamic
                  and agile environments.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="text-lg">Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <span className="text-lg">5+ Years Experience</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="flex flex-col justify-center min-h-screen px-8 py-16 mt-20">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-16 text-center"
            >
              Technical Skills
            </motion.h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-blue-600">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {skillList.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: index * 0.2 + skillIndex * 0.1,
                              duration: 0.3,
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-sm py-2 px-4"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="flex flex-col justify-center min-h-screen px-8 py-16 mt-20">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-16 text-center"
            >
              Professional Experience
            </motion.h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-blue-600">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl font-semibold text-gray-700">
                            {exp.company}
                          </h4>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-lg py-2 px-4 mt-2 md:mt-0"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="flex flex-col justify-center min-h-screen px-8 py-16 mt-20">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-16 text-center"
            >
              Key Projects
            </motion.h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-blue-600">
                        {project.name}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} className="text-sm py-1 px-3">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "education":
        return (
          <div className="flex flex-col justify-center min-h-screen px-8 py-16 mt-20">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-16 text-center"
            >
              Education & Certifications
            </motion.h2>

            <div className="max-w-5xl mx-auto space-y-8">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="text-2xl font-bold">
                          BSc (Hons) Computing
                        </h3>
                        <p className="text-xl text-gray-600">
                          Wrexham University
                        </p>
                      </div>
                      <Badge variant="outline" className="ml-auto">
                        Currently Pursuing
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="text-2xl font-bold">
                          Higher Diploma in IT
                        </h3>
                        <p className="text-xl text-gray-600">
                          Software Development - SLIATE
                        </p>
                      </div>
                      <Badge variant="outline" className="ml-auto">
                        2014-2016
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Professional Certifications
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg">
                          Kore.ai XO Platform Basic & Advanced
                        </span>
                        <Badge>2024</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg">
                          Microsoft MCSA 70-740 (Studied)
                        </span>
                        <Badge variant="outline">2017</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="flex flex-col justify-center min-h-screen px-8 py-16 mt-20">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-16 text-center"
            >
              Get In Touch
            </motion.h2>

            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl text-gray-600 mb-12 leading-relaxed"
              >
                Ready to collaborate on your next project? Let's create
                something amazing together.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-lg text-gray-600">nirangawh@hotmail.com</p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-lg text-gray-600">+94 777 645 060</p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Linkedin className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                  <p className="text-lg text-gray-600">niranga-lakshan</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex justify-center gap-6"
              >
                <a href="mailto:nirangawh@hotmail.com">
                  <Button size="lg" className="text-lg px-8 py-4">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </a>
                <a
                  href="https://github.com/nirangaL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 bg-transparent"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View GitHub
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Section Counter */}
      {/*<div className="fixed top-8 right-8 z-50">*/}
      {/*  <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">*/}
      {/*    <span className="text-lg font-semibold">*/}
      {/*      {currentSection + 1} / {sections.length}*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Navigation Arrows */}
      <button
        onClick={prevSection}
        className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      <button
        onClick={nextSection}
        className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Mobile: Bottom center arrows */}
      <button
        onClick={prevSection}
        className="fixed bottom-4 left-4 z-50 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300 md:hidden"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      {/* Bottom-right button (mobile only) */}
      <button
        onClick={nextSection}
        className="fixed bottom-4 right-4 z-50 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300 md:hidden"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          custom={1}
          variants={sectionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="w-full"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ width: 0 }}
          animate={{
            width: `${((currentSection + 1) / sections.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
