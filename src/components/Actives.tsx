import {
  Briefcase,
  ChevronRight,
  Clock,
  Filter,
  MapPin,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function Actives() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Barchasi", icon: "📋", count: 15800 },
    { id: "santexnika", name: "Santexnika", icon: "🔧", count: 2340 },
    { id: "elektrik", name: "Elektrik", icon: "⚡", count: 1890 },
    { id: "qurilish", name: "Qurilish", icon: "🏗️", count: 3120 },
    { id: "avto", name: "Avto xizmat", icon: "🚗", count: 980 },
    { id: "uy", name: "Uy xizmatlari", icon: "🏠", count: 1560 },
    { id: "it", name: "IT xizmatlari", icon: "💻", count: 2780 },
    { id: "talim", name: "Ta'lim", icon: "👨‍🏫", count: 1240 },
    { id: "kreativ", name: "Kreativ", icon: "🎨", count: 890 },
  ];

  const jobs = [
    {
      id: 1,
      title: "Tajribali Santexnik",
      company: "ProRemont Service",
      location: "Toshkent, Chilonzor",
      salary: "3-5 mln",
      type: "Toʻliq vaqt",
      posted: "1 soat oldin",
      skills: ["Quvurlar", "Suv ta'minoti", "Kanalizatsiya"],
      verified: true,
      applications: 8,
    },
    {
      id: 2,
      title: "Elektrik Usta",
      company: "ElektroServis UZ",
      location: "Toshkent, Yunusobod",
      salary: "4-6 mln",
      type: "Toʻliq vaqt",
      posted: "3 soat oldin",
      skills: ["Elektr montaj", "Ta'mirlash", "Avtomat sozlash"],
      verified: true,
      applications: 12,
    },
    {
      id: 3,
      title: "Qurilish Brigadiri",
      company: "BuildMaster",
      location: "Toshkent, Sergeli",
      salary: "8-12 mln",
      type: "Toʻliq vaqt",
      posted: "5 soat oldin",
      skills: ["G'isht terish", "Beton ishlari", "Brigadani boshqarish"],
      verified: true,
      applications: 15,
    },
    {
      id: 4,
      title: "Avtomobil Diagnostika Mutaxassisi",
      company: "AutoExpert",
      location: "Toshkent, Yakkasaroy",
      salary: "5-8 mln",
      type: "Toʻliq vaqt",
      posted: "1 kun oldin",
      skills: ["Diagnostika", "Elektrika", "Kompyuter"],
      verified: false,
      applications: 6,
    },
    {
      id: 5,
      title: "Frontend Dasturchi",
      company: "TechCorp UZ",
      location: "Toshkent, Mirzo Ulug'bek",
      salary: "6-10 mln",
      type: "Masofaviy",
      posted: "2 soat oldin",
      skills: ["React", "JavaScript", "Tailwind"],
      verified: true,
      applications: 24,
    },
    {
      id: 6,
      title: "Ingliz Tili O'qituvchisi",
      company: "Smart Education",
      location: "Toshkent, Shayxontohur",
      salary: "4-7 mln",
      type: "Part-time",
      posted: "6 soat oldin",
      skills: ["IELTS", "CEFR", "Online ta'lim"],
      verified: true,
      applications: 18,
    },
    {
      id: 7,
      title: "Grafik Dizayner",
      company: "Creative Studio UZ",
      location: "Toshkent, Chilonzor",
      salary: "5-8 mln",
      type: "Toʻliq vaqt",
      posted: "4 soat oldin",
      skills: ["Photoshop", "Illustrator", "Figma"],
      verified: true,
      applications: 21,
    },
    {
      id: 8,
      title: "Tozalash Xizmati Xodimi",
      company: "CleanHome",
      location: "Toshkent, Olmazor",
      salary: "2.5-4 mln",
      type: "Toʻliq vaqt",
      posted: "2 soat oldin",
      skills: ["Uy tozalash", "Oyna yuvish", "Gigiena"],
      verified: false,
      applications: 9,
    },
  ];

  const workers = [
    {
      id: 1,
      name: "Alisher Karimov",
      profession: "Full Stack Dasturchi",
      experience: "5 yil",
      location: "Toshkent",
      rate: "50,000 so'm/soat",
      rating: 4.9,
      reviews: 28,
      skills: ["React", "Node.js", "MongoDB"],
      available: true,
    },
    {
      id: 2,
      name: "Madina Rashidova",
      profession: "UX/UI Dizayner",
      experience: "3 yil",
      location: "Toshkent",
      rate: "40,000 so'm/soat",
      rating: 4.8,
      reviews: 19,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      available: true,
    },
    {
      id: 3,
      name: "Sardor Xolmatov",
      profession: "Tarjimon (Rus/Ingliz)",
      experience: "4 yil",
      location: "Samarqand",
      rate: "35,000 so'm/soat",
      rating: 5.0,
      reviews: 42,
      skills: ["Tarjima", "Tahrirlash", "Sinxron"],
      available: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 max-[400px]:px-2">
      {/* Tabs */}
      <div className="flex space-x-2 mb-6 border-b overflow-x-auto">
        <button
          onClick={() => setActiveTab("jobs")}
          className={`px-4 py-2 font-semibold transition max-[400px]:text-sm ${
            activeTab === "jobs"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          <Briefcase className="w-4 h-4 inline mr-1" />
          Ish E'lonlari
        </button>
        <button
          onClick={() => setActiveTab("workers")}
          className={`px-4 py-2 font-semibold transition max-[400px]:text-sm ${
            activeTab === "workers"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          <Users className="w-4 h-4 inline mr-1" />
          Ishchilar
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Categories */}
        <div className="lg:col-span-1 order-last lg:order-none">
          <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24 max-[400px]:p-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 max-[400px]:text-sm">
                Kategoriyalar
              </h3>
              <Filter className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition max-[400px]:text-sm ${
                    selectedCategory === cat.id
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-xs text-gray-500">{cat.count}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          {activeTab === "jobs"
            ? jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 max-[400px]:p-3"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900 max-[400px]:text-base">
                          {job.title}
                        </h3>
                        {job.verified && (
                          <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full font-medium">
                            Tasdiqlangan
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-medium max-[400px]:text-sm">
                        {job.company}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center font-semibold text-green-600">
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-xs text-gray-500">
                      {job.posted} • {job.applications} ariza
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs md:text-sm lg:text-sm hover:bg-blue-700 transition">
                      Ariza Topshirish
                    </button>
                  </div>
                </div>
              ))
            : workers.map((worker) => (
                <div
                  key={worker.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 max-[400px]:p-3"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                        {worker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-0.5 max-[400px]:text-base">
                          {worker.name}
                        </h3>
                        <p className="text-gray-600 font-medium max-[400px]:text-sm">
                          {worker.profession}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                          <span>{worker.experience} tajriba</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {worker.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    {worker.available && (
                      <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-medium">
                        Mavjud
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {worker.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-yellow-500 text-sm">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="font-semibold text-gray-900">
                          {worker.rating}
                        </span>
                        <span className="text-gray-500 ml-1 text-[11px] lg:text-1xl">
                          ({worker.reviews} sharh)
                        </span>
                      </div>
                      <span className="text-green-600 font-semibold text-xs md:text-sm lg:text-sm">
                        {worker.rate}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded-lg text-xs md:text-sm lg:text-sm hover:bg-blue-50 transition">
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Xabar
                      </button>
                      <button className="bg-blue-600 text-white px-4 py-1 rounded-lg text-xs md:text-sm lg:text-sm hover:bg-blue-700 transition">
                        Yollash
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
