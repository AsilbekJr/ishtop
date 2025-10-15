// import { useState } from "react";

import Actives from "@/components/Actives";
import Categories from "@/components/Categories";
import Cta from "@/components/Cta";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const handleSearch = () => {
    console.log("Qidirilmoqda:", selectedCategory, selectedCity);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Professional ishchilarni toping yoki ish toping
              </h1>
              <p className="text-center lg:text-left text-xl lg:text-2xl mb-8 text-white/95">
                O'zbekistondagi eng ishonchli platforma orqali bir necha
                daqiqada bog'laning
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-1xl md:text-2xl lg:text-4xl font-bold">
                    15,000+
                  </div>
                  <div className="text-white/90 text-sm lg:text-base mt-1">
                    Faol ishchi
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-1xl md:text-2xl lg:text-4xl font-bold">
                    50,000+
                  </div>
                  <div className="text-white/90 text-sm lg:text-base mt-1">
                    Bajarilgan ish
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-1xl md:text-2xl lg:text-4xl font-bold">
                    4.8★
                  </div>
                  <div className="text-white/90 text-sm lg:text-base mt-1">
                    O'rtacha reyting
                  </div>
                </div>
              </div>
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl max-w-full">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center sm:text-left">
                Kerakli xizmatni toping
              </h3>

              <div className="space-y-4">
                {/* Select */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none appearance-none bg-white text-slate-700 text-sm sm:text-base"
                  >
                    <option value="">Xizmat turini tanlang</option>
                    <option value="santexnika">🔧 Santexnika</option>
                    <option value="elektrik">⚡ Elektrik</option>
                    <option value="qurilish">🏗️ Ta'mirlash va qurilish</option>
                    <option value="avto">🚗 Avtoulov xizmatlari</option>
                    <option value="uy">🏠 Uy xizmatlari</option>
                    <option value="it">💻 IT va texnologiya</option>
                  </select>

                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={20}
                  />
                </div>

                {/* Input + Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    placeholder="Shahar yoki tuman"
                    className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none text-sm sm:text-base"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Search size={20} />
                    Qidirish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Actives />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <Cta />
    </>
  );
}
