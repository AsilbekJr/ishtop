import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-white text-center bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 ">
      <img
        src="/images/happy.png"
        alt="workers"
        className="absolute inset-0 h-full w-full object-cover bg-no-repeat "
      />
      {/* Overlay (qoraroq effekt) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/82 via-blue-900/82 to-purple-900/82"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
