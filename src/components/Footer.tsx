export default function Footer() {
  const footerSections = [
    {
      title: "Kompaniya",
      links: ["Biz haqimizda", "Qanday ishlaydi", "Blog", "Hamkorlik"],
    },
    {
      title: "Yordam",
      links: ["FAQ", "Qo'llab-quvvatlash", "Xavfsizlik", "Shartlar"],
    },
    {
      title: "Aloqa",
      links: ["+998 90 123 45 67", "info@ishtop.uz", "Toshkent, O'zbekiston"],
    },
  ];
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">⚡</span>
              <span className="text-2xl font-bold">IshTop.uz</span>
            </div>
            <p className="text-slate-400">
              Professional ishchilar va ish beruvchilarni bog'laydigan ishonchli
              platforma
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; 2025 IshTop.uz. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
