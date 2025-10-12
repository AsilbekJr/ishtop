import type { RootState } from "@/redux/store";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { logout } from "@/redux/authSlice";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

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

            {/* Agar user login bo‘lgan bo‘lsa */}
            {user?.extraInfo && isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-semibold text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    {user?.username}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Hisob</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link
                  to={"/auth/login"}
                  className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-gradient-to-br from-blue-600 to-purple-700 hover:text-white transition"
                >
                  Kirish
                </Link>
                <Link
                  to={"/auth/register"}
                  className="px-6 py-2 bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
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

              {user?.extraInfo && isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="font-semibold text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      {user?.username}
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        dispatch(logout());
                        setMobileMenuOpen(false);
                      }}
                      className="text-red-600 cursor-pointer"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
