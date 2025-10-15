// import { useState } from "react";

import Actives from "@/components/Actives";
import Categories from "@/components/Categories";
import Cta from "@/components/Cta";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

// const categories = [
//   { name: "Ta’mirlash", icon: "🔧" },
//   { name: "Elektrik", icon: "💡" },
//   { name: "Santexnika", icon: "🚰" },
//   { name: "Mebel yig‘ish", icon: "🪑" },
//   { name: "Bo‘yoqchi", icon: "🎨" },
//   { name: "Qurilish", icon: "🏗️" },
//   { name: "Payvandlash", icon: "⚒️" },
//   { name: "Konditsioner o‘rnatish", icon: "❄️" },
//   { name: "Avto ta’mir", icon: "🚗" },
//   { name: "Uy tozalash", icon: "🧹" },
//   { name: "Kompyuter xizmatlari", icon: "💻" },
//   { name: "Dala ishlari", icon: "🌾" },
//   { name: "Boshqa xizmatlar", icon: "📦" },
// ];

// export default function HomePage() {
//   // const [search, setSearch] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const filtered = categories.filter((cat) =>
//     cat.name.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <section id="sidebar">
//         {/* Sidebar content can go here if needed */}
//       </section>
//       {/* Announcement Bar */}
//       <section>
//         <div className="bg-blue-600 text-white text-center py-2">
//           <p className="text-sm">
//             Yangi! Endi mobil ilovamiz orqali ham xizmatlardan foydalaning.{" "}
//             <a href="#" className="underline font-semibold">
//               Yuklab olish
//             </a>
//           </p>
//         </div>
//       </section>
//       {/* Hero Section */}
//       <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
//         <div className="md:w-1/2">
//           <h2 className="text-4xl font-bold text-gray-800 leading-snug">
//             Sizga kerakli <span className="text-orange-400">ustani</span> topish
//             endi juda <span className="text-blue-600">oson!</span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Elektrik, santexnik, quruvchi yoki boshqa xizmatlar – hammasi bitta
//             platformada.
//           </p>
//           <div className="mt-6 flex gap-3 sm:flex-row flex-col">
//             <div className="relative w-100% md:w-[50%]">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => {
//                   setInputValue(e.target.value);
//                   setIsOpen(true);
//                 }}
//                 placeholder="So‘z kiriting..."
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               {isOpen && inputValue && (
//                 <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
//                   {filtered.length > 0 ? (
//                     filtered.map((word, idx) => (
//                       <div
//                         key={idx}
//                         onClick={() => {
//                           setInputValue(word.name);
//                           setIsOpen(false);
//                         }}
//                         className="px-3 py-2 cursor-pointer hover:bg-gray-100"
//                       >
//                         {word.name}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="px-3 py-2 text-gray-500">
//                       Hech narsa topilmadi
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="h-12 w-[100%] md:w-[50%]">
//               <select className="w-[100%] px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600">
//                 <option value="">Hududni tanlang</option>
//                 <option value="tashkent">Toshkent</option>
//                 <option value="samarkand">Samarqand</option>
//                 <option value="bukhara">Buxoro</option>
//                 <option value="andijan">Andijon</option>
//                 <option value="fergana">Farg‘ona</option>
//                 <option value="namangan">Namangan</option>
//                 <option value="navoiy">Navoiy</option>
//                 <option value="qashqadaryo">Qashqadaryo</option>
//                 <option value="surxondaryo">Surxondaryo</option>
//                 <option value="sirdaryo">Sirdaryo</option>
//                 <option value="jizzakh">Jizzax</option>
//                 <option value="khorezm">Xorazm</option>
//                 <option value="karakalpakstan">Qoraqalpog‘iston</option>
//               </select>
//             </div>
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
//               Qidirish
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <img
//             src="src/assets/images/builder.png"
//             alt="Bulder"
//             className="w-full max-w-md mx-auto"
//           />
//         </div>
//       </section>

//       {/* Kategoriyalar */}
//       <section className="py-12 px-6 md:px-20">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Xizmat turlari
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//           {categories.map((cat) => (
//             <div
//               key={cat.name}
//               className="bg-white shadow rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
//             >
//               <span className="text-4xl">{cat.icon}</span>
//               <p className="mt-3 font-medium text-gray-800">{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Top Ustalar */}
//       <section className="py-12 px-6 md:px-20 bg-orange-400 rounded-t-xl">
//         <h2 className="text-2xl font-bold text-center text-white">
//           Top ustalar
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//           <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
//             <img
//               src={`https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg`}
//               alt="Usta"
//               className="w-24 h-24 rounded-full contain object-cover"
//             />
//             <h3 className="mt-4 text-lg font-semibold text-gray-800">
//               Asad Ubaydullayev
//             </h3>
//             <p className="text-gray-600">Elektrik</p>
//             <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
//             <img
//               src={`https://cdn.prod.website-files.com/5fbb9b89508062592a9731b1/6448c1ce35d6ffe59e4d6f46_GettyImages-1399565382.jpg`}
//               alt="Usta"
//               className="w-24 h-24 rounded-full object-cover"
//             />
//             <h3 className="mt-4 text-lg font-semibold text-gray-800">
//               Davlat Toshev
//             </h3>
//             <p className="text-gray-600">Santexnik</p>
//             <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
//           </div>
//           <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
//             <img
//               src={`https://cdn-icons-png.flaticon.com/512/4975/4975693.png`}
//               alt="Usta"
//               className="w-24 h-24 rounded-full  object-cover"
//             />
//             <h3 className="mt-4 text-lg font-semibold text-gray-800">
//               Alina Mavlonova
//             </h3>
//             <p className="text-gray-600">Uy tozolovchi</p>
//             <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-6 md:px-20 text-center bg-blue-600 text-white rounded-b-xl">
//         <h2 className="text-3xl font-bold">
//           Siz ham usta bo‘lsangiz, platformamizga qo‘shiling!
//         </h2>
//         <p className="mt-3 text-lg">
//           Profil oching va mijozlaringizni ko‘paytiring.
//         </p>
//         <button className="mt-6 bg-orange-400 px-8 py-4 rounded-xl font-medium hover:bg-orange-500 cursor-pointer">
//           Profil yaratish
//         </button>
//       </section>
//     </div>
//   );
// }

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
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Professional ishchilarni toping yoki ish toping
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/95">
                O'zbekistondagi eng ishonchli platforma orqali bir necha
                daqiqada bog'laning
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold">15,000+</div>
                  <div className="text-white/90 text-sm lg:text-base mt-1">
                    Faol ishchi
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold">50,000+</div>
                  <div className="text-white/90 text-sm lg:text-base mt-1">
                    Bajarilgan ish
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold">4.8★</div>
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
