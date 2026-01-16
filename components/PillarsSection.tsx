import Image from "next/image";
import { Users, Rocket, Lightbulb, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "student-groups",
    title: "Israel Tech Student Groups",
    body: "The IHub actively collaborates with existing student organizations that align with its mission, such as TAMID at UCLA, which connects students with Israeli companies through consulting and investing experiences, and Tikkun Olam Makers (TOM), which fosters social impact through innovation and accessible product design. By partnering with these clubs, IHub amplifies their reach, provides shared programming opportunities, and facilitates cross-pollination of ideas and networks. At the same time, IHub encourages students to take initiative and launch new clubs or ventures related to Israeli innovation, offering mentorship, resources, and a supportive community to turn their ideas into reality.",
    icon: Users,
    imageSrc: "/images/pillar_students_1768583097062.png",
  },
  {
    id: "startups",
    title: "Hosting Israeli Start Ups",
    body: "A key component of the IHub is its role as a landing pad for Israeli founders looking to expand their start-ups into the U.S. market, particularly in the thriving Los Angeles innovation landscape. By hosting these entrepreneurs at UCLA or within the broader L.A. area, IHub creates unique opportunities for students to engage directly with founders who bring firsthand insight into Israel’s start-up ecosystem and the challenges of international growth. These founders serve as valuable resources—offering mentorship, speaking at campus events, and sharing real-world experiences that enrich students’ understanding of global entrepreneurship. Many also open doors to internships or job opportunities within their ventures.",
    icon: Rocket,
    imageSrc: "/images/pillar_startups_1768583110677.png",
  },
  {
    id: "programs",
    title: "Entrepreneurship Programs",
    body: "The Israel Innovation & Entrepreneurship Hub (IHub) at UCLA Hillel offers students hands-on guidance in entrepreneurship, with a particular focus on transforming early-stage ideas into viable start-ups. Through curated workshops, mentorship, and direct connections with Israeli founders, IHub introduces students to the proven methodologies and entrepreneurial mindset that define Israel’s “Start-Up Nation.” Students receive tailored support in key areas of venture creation—such as ideation, business modeling, product development, and go-to-market strategies—while also gaining access to industry leaders and mentors.",
    icon: Lightbulb,
    imageSrc: "/images/pillar_entrepreneurship_1768583126749.png",
  },
  {
    id: "investments",
    title: "Promoting Investments in Israel",
    body: "IHub at UCLA Hillel also fosters active investment in Israel by deepening ties to its start-up ecosystem and academic institutions. Through direct engagement with Israeli founders and exposure to Israel’s unique culture of innovation, IHub encourages students to see Israel as both a hub of opportunity and a partner for collaboration. Beyond business, IHub builds bridges to Israeli universities, tech accelerators, and social-impact ventures, cultivating lasting academic, professional, and cultural connections. In doing so, it inspires students to invest—intellectually, socially, and professionally—in strengthening the dynamic relationship between Israel and the global Jewish community.",
    icon: TrendingUp,
    imageSrc: "/images/pillar_investments_1768583141343.png",
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 space-y-32">
        {pillars.map((pillar, index) => (
          <div 
            key={pillar.id}
            id={pillar.id}
            className={cn(
              "flex flex-col gap-12 items-center",
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row" // ZigZag
            )}
          >
            {/* Visual Side */}
            <div className="flex-1 w-full">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02]">
                <Image
                  src={pillar.imageSrc}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                {/* Label Overlay */}
                <div className="absolute bottom-6 left-6 z-10 max-w-[85%]">
                   <div className="relative inline-flex items-center justify-center px-12 py-6">
                     {/* Brush Stroke Background */}
                     <div 
                       className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
                       style={{ 
                         backgroundImage: "url('/images/brush-stroke.png')",
                         backgroundSize: "100% 100%" 
                       }}
                     />
                     
                     <div className="relative flex items-center gap-3 z-10">
                       <pillar.icon className="w-6 h-6 text-white shrink-0" />
                       <span className="font-semibold text-white tracking-wide leading-tight">{pillar.title}</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                {pillar.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {pillar.body}
              </p>
{/* Learn more button removed as full content is displayed */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
