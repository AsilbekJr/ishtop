export default function HowItWorks() {
  return (
    <section id="qanday" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
          Qanday ishlaydi?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              number: "1",
              title: "Ro'yxatdan o'ting",
              description:
                "Bir necha daqiqada bepul ro'yxatdan o'ting va profilingizni to'ldiring",
            },
            {
              number: "2",
              title: "Toping yoki e'lon bering",
              description:
                "Kerakli ishchini toping yoki o'z xizmatingizni e'lon qiling",
            },
            {
              number: "3",
              title: "Ishlang va to'lang",
              description:
                "Xavfsiz to'lov tizimi orqali shartnoma tuzing va ishlang",
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
