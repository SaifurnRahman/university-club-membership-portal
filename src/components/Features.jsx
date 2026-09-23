import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaPalette, FaMicrophone, FaCalendarAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const items = [
  { 
    icon: <FaCode className="text-indigo-600 text-2xl" />, 
    title: "Programming Club", 
    desc: "Sharpen your software engineering skills, participate in global hackathons, and build production-grade web services.",
    badge: "Tech & Dev",
    buttonText: "Join Club"
  },
  { 
    icon: <FaRobot className="text-violet-600 text-2xl" />, 
    title: "Robotics Society", 
    desc: "Design autonomous hardware systems, code microcontrollers, and engineer mechanical robots for national competitions.",
    badge: "Hardware",
    buttonText: "Explore Lab"
  },
  { 
    icon: <FaPalette className="text-pink-600 text-2xl" />, 
    title: "Design & Arts Circle", 
    desc: "Master modern UI/UX prototyping frameworks, digital layout design, and creative visual branding principles.",
    badge: "Creative",
    buttonText: "View Workshop"
  },
  { 
    icon: <FaMicrophone className="text-amber-600 text-2xl" />, 
    title: "Debate & Cultural Club", 
    desc: "Build public speaking confidence, engage in parliamentary debates, and showcase artistic talent at campus fests.",
    badge: "Culture",
    buttonText: "Join Society"
  },
  { 
    icon: <FaCalendarAlt className="text-emerald-600 text-2xl" />, 
    title: "Annual Tech Fest 2026", 
    desc: "Register for the upcoming flagship inter-university coding competition, gaming tournaments, and project exhibitions.",
    badge: "Event",
    buttonText: "Register Event"
  }
];

const Features = () => {
  return (
    <section id="clubs" className="py-20 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block">UniCircle Hubs & Events</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Explore Campus Organizations</h2>
          <p className="mt-4 text-gray-600 text-base">Select a community or upcoming event tailored to your academic interests and career growth goals.</p>
        </div>

        {/* Cards Grid (5 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{item.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <button className="w-full mt-2 inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-gray-50 text-indigo-600 font-semibold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all cursor-pointer">
                <span>{item.buttonText}</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;