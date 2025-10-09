import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Bugun boshlang!</h2>
        <p className="text-xl lg:text-2xl mb-10 text-white/95">
          Minglab professional ishchilar va ish beruvchilar jamoasiga qo'shiling
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 transition transform hover:scale-105 flex items-center justify-center gap-2">
            Ish topish
            <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 transition transform hover:scale-105 flex items-center justify-center gap-2">
            Ishchi topish
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
