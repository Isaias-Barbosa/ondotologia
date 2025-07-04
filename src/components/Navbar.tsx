import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {Button} from "@/components/ui/button";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-sm font-sans">
      <nav className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-1">
            <div className="flex shrink-0 items-center">
              <Link to="/" className="text-xl font-bold text-blue-700">
                OdontoVida
              </Link>
            </div>
          </div>

          {/* Links (desktop) */}
          <div className="hidden lg:flex lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Início
            </Link>
            <Link to="/procedimentos" className="text-gray-700 hover:text-blue-600 transition">
              Procedimentos
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 transition">
              Profissionais
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 transition">
              Unidades
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 transition">
              Contato
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden lg:flex flex-1 justify-end ">
            <Button>
            <Link to="#" className="text-blue-700 hover:text-blue-900 font-semibold transition">
              Login
            </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-blue-700"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-white border-t border-gray-200 shadow-sm space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">
            Início
          </Link>
          <Link to="/procedimentos" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">
            Procedimentos
          </Link>
          <Link to="#" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">
            Profissionais
          </Link>
          <Link to="#" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">
            Unidades
          </Link>
          <Link to="#" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-blue-600">
            Contato
          </Link>
          <Link to="#" onClick={() => setOpen(false)} className="block text-blue-700 font-semibold">
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavbarComponent;
