import { Lightbulb, Target, Sparkles, Globe } from "lucide-react";

export function VisionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Main Vision Text */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-gray-900">
              Innovation & <span className="text-tech-blue">Imagination</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our connection to Israel is not solely about peoplehood or politics. It is a vital way for us to <span className="text-gray-900 font-medium">transcend the political noise</span> and focus on the incredible creativity, innovation, and entrepreneurial energy that has shaped the nation. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              By centering on the "Start-Up Nation", we intentionally focus on what unites us: <span className="text-gray-900 font-medium">bold ideas and future-forward solutions</span>. We aim to capture the vibrancy of Tel Aviv—a place where ideas are rapidly accelerated into global solutions—and bring that energy to UCLA.
            </p>
          </div>

          {/* Strategic Goals Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meeting the Moment</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering students with future-ready skills, building an entrepreneurial community, and strengthening the vital ties between UCLA, Los Angeles, and Israel’s dynamic culture of innovation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ucla-gold/10 border border-ucla-gold/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Sparkles className="w-6 h-6 text-ucla-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundational Creativity</h3>
              <p className="text-gray-600 leading-relaxed">
                Shining a light on innovation and imagination as the foundational creativity that is shaping the next chapter of Jewish life at UCLA.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
