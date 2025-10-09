import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Akmal Saidov",
      role: "Ish beruvchi",
      avatar: "AS",
      rating: 5,
      text: "Juda qulay platforma. Bir kunda yaxshi santexnikni topdim. Ish sifatli bajarildi!",
    },
    {
      name: "Dilshod Olimov",
      role: "Elektrik",
      avatar: "DO",
      rating: 5,
      text: "Bu platforma orqali ko'plab mijozlar topdim. To'lovlar o'z vaqtida, hammasi shaffof.",
    },
    {
      name: "Malika Rahimova",
      role: "Ish beruvchi",
      avatar: "MR",
      rating: 5,
      text: "Uyimni ta'mirlash uchun professional jamoa topdim. Reyting tizimi juda ishonchli!",
    },
  ];
  return (
    <section className="py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
          Foydalanuvchilar fikri
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
