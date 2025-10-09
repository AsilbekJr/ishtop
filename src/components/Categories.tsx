export default function Categories() {
  const categories = [
    { icon: "🔧", name: "Santexnika", count: 2340 },
    { icon: "⚡", name: "Elektrik", count: 1890 },
    { icon: "🏗️", name: "Qurilish", count: 3120 },
    { icon: "🚗", name: "Avto xizmat", count: 980 },
    { icon: "🏠", name: "Uy xizmatlari", count: 1560 },
    { icon: "💻", name: "IT xizmatlari", count: 2780 },
    { icon: "👨‍🏫", name: "Ta'lim", count: 1240 },
    { icon: "🎨", name: "Kreativ", count: 890 },
  ];
  return (
    <section id="xizmatlar" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
          Mashhur xizmatlar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border border-slate-100"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-slate-500">
                {category.count.toLocaleString()} ta mutaxassis
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
