import { Users, Rocket, Lightbulb, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Israel Tech Student Groups",
    body: "Collaborating with TAMID and Tikkun Olam Makers (TOM) to amplify reach and facilitate cross-pollination of ideas.",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Hosting Israeli Start Ups",
    body: "A landing pad for Israeli founders expanding to Los Angeles, creating unique opportunities for student engagement and mentorship.",
    icon: Rocket,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Entrepreneurship Programs",
    body: "Hands-on guidance in entrepreneurship, focusing on transforming early-stage ideas into viable start-ups through workshops and mentorship.",
    icon: Lightbulb,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Promoting Investments",
    body: "Deepening ties to the start-up ecosystem to encourage students to see Israel as a hub of opportunity and a partner for collaboration.",
    icon: TrendingUp,
    color: "bg-emerald-50 text-emerald-600",
    fullTitle: "Promoting Investments in Israel"
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 px-4 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-purple-600">
            Our Core Pillars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering students through connection, innovation, and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  feature.color
                )}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.fullTitle || feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
