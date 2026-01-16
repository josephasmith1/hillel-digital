export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Gradients/Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-cyan-400 font-semibold rounded-full text-sm backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Our Mission
          </span>
          
          <h2 className="text-3xl md:text-5xl font-heading font-medium leading-tight text-white mb-8 tracking-wide drop-shadow-sm">
            Connecting students with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-ucla-gold drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              Start-Up Nation
            </span>
          </h2>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-left md:text-center font-light">
            <p>
              The Israel Innovation & Entrepreneurship Hub (IHub) at Hillel at UCLA is a dynamic initiative designed to inspire and empower Jewish students by connecting them with the cutting-edge world of Israeli high-tech and start-up culture. As part of UCLA’s vibrant Hillel community, IHub serves as a gateway to explore Israel’s renowned innovation ecosystem through curated workshops, speaker events, networking opportunities, and direct connections with Israeli entrepreneurs and tech leaders. It introduces students to the unique mindset and methodologies that drive Israel’s global reputation as the “Start-Up Nation.”
            </p>
            <p>
              Beyond cultural and educational exposure, IHub supports students’ professional and entrepreneurial aspirations by bridging campus life with real-world opportunities. It collaborates with existing student clubs focused on business, tech, and innovation, while also offering tailored guidance for students interested in launching their own ventures. Through mentorship, internship pipelines, and career exploration resources, IHub helps students navigate their paths—from ideation to execution—within a supportive Jewish and entrepreneurial community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
