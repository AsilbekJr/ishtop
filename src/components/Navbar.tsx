// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "@/redux/store";
// import { logout } from "@/redux/authSlice";
// // import { Button } from "./ui/button";

import type { RootState } from "@/redux/store";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { logout } from "@/redux/authSlice";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { isAuthenticated, user } = useSelector(
//     (state: RootState) => state.auth
//   );
//   const dispatch = useDispatch();
//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
//       {/* Logo */}
//       <div className="text-xl font-bold">
//         <Link to="/">UstaTop</Link>
//       </div>
//       {/* Desktop Menu */}
//       <div className="hidden md:flex space-x-6 items-center">
//         <Link to="/" className="hover:text-gray-200">
//           Bosh sahifa
//         </Link>
//         <Link to="/xizmatlar" className="hover:text-gray-200">
//           Xizmatlar
//         </Link>
//         <Link to="/" className="hover:text-gray-200">
//           Biz haqimizda
//         </Link>
//         <Link to="/" className="hover:text-gray-200">
//           Aloqa
//         </Link>
//         {isAuthenticated ? (
//           <>
//             <h2 className="text-orange-400">{user?.username}</h2>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-2 py-1 rounded"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/auth/login">
//               <button className="bg-white text-blue-600 hover:bg-gray-100 rounded py-1 px-2 cursor-pointer">
//                 Login
//               </button>
//             </Link>
//             <Link to="auth/register">
//               <button className="bg-white text-blue-600 hover:bg-gray-100 rounded py-1 px-2 cursor-pointer">
//                 Ro'yxatdan o'tish
//               </button>
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Mobile Burger */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden p-2 rounded-lg hover:bg-blue-700"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar (Mobile) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-blue-700 text-white transform
//         ${isOpen ? "translate-x-0" : "translate-x-full"}
//         transition-transform duration-300 ease-in-out md:hidden z-50`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-blue-500">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button onClick={() => setIsOpen(false)}>
//             <X size={24} />
//           </button>
//         </div>
//         <ul className="flex flex-col p-4 space-y-4">
//           <li>
//             <Link
//               to="/"
//               className="hover:text-gray-200"
//               onClick={() => setIsOpen(false)}
//             >
//               Bosh sahifa
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/xizmatlar"
//               className="hover:text-gray-200"
//               onClick={() => setIsOpen(false)}
//             >
//               Xizmatlar
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/"
//               className="hover:text-gray-200"
//               onClick={() => setIsOpen(false)}
//             >
//               Biz haqimizda
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/"
//               className="hover:text-gray-200"
//               onClick={() => setIsOpen(false)}
//             >
//               Aloqa
//             </Link>
//           </li>
//         </ul>

//         {isAuthenticated ? (
//           <div className="flex flex-col p-4 gap-2 w-[100%]">
//             <h2 className="text-orange-400">
//               {JSON.parse(localStorage.getItem("user") || "{}")?.user?.login}
//             </h2>
//             <button
//               onClick={handleLogout}
//               className="flex flex-col p-2 gap-2  bg-red-500 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="flex flex-col p-4 gap-2 w-[100%]">
//             <Link to="/auth/login">
//               <button
//                 className="w-[100%]  bg-white text-blue-600 hover:bg-gray-100 rounded py-1 px-2 cursor-pointer"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </button>
//             </Link>
//             <Link to="auth/register">
//               <button
//                 className="w-[100%] bg-white text-blue-600 hover:bg-gray-100 rounded py-1 px-2 cursor-pointer"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Ro'yxatdan o'tish
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    /* Header */
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img
                className="h-10"
                src="../src/assets/images/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#xizmatlar"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              Xizmatlar
            </a>
            <a
              href="#mutaxassislar"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              Mutaxassislar
            </a>
            <a
              href="#qanday"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              Qanday ishlaydi
            </a>
            <a
              href="#narxlar"
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              Narxlar
            </a>
            {user?.extraInfo ? (
              <>
                <div className="mx-1">{user?.username}</div>
                <Button
                  className="bg-red-600 text-white mx-1"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to={"/auth/login"}
                  className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  Kirish
                </Link>
                <Link
                  to={"/auth/register"}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
                >
                  Ro'yxatdan o'tish
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#xizmatlar"
                className="text-slate-600 hover:text-blue-600 font-medium"
              >
                Xizmatlar
              </a>
              <a
                href="#mutaxassislar"
                className="text-slate-600 hover:text-blue-600 font-medium"
              >
                Mutaxassislar
              </a>
              <a
                href="#qanday"
                className="text-slate-600 hover:text-blue-600 font-medium"
              >
                Qanday ishlaydi
              </a>
              <a
                href="#narxlar"
                className="text-slate-600 hover:text-blue-600 font-medium"
              >
                Narxlar
              </a>
              {user?.extraInfo ? (
                <>
                  {" "}
                  <div className="mx-1">{user?.username}</div>
                  <Button
                    className="bg-red-600 text-white mx-1"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold w-full"
                  >
                    Kirish
                  </Link>
                  <Link
                    to="/auth/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold w-full"
                  >
                    Ro'yxatdan o'tish
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
