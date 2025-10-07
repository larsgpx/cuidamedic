"use client";

import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Cuidamedic" className="w-24 h-20 mt-8" />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 bg-transparent hover:text-yellow-600 transition-colors font-medium">
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-48 bg-white">
                    <div className="space-y-2 bg-white">
                      <NavigationMenuLink className="block p-2 text-gray-700 hover:text-yellow-600 transition-colors">
                        Tratamientos Faciales
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 text-gray-700 hover:text-yellow-600 transition-colors">
                        Medicina Estética
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-2 text-gray-700 hover:text-yellow-600 transition-colors">
                        Consultas
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                  Promociones
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                  Testimonios
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                  Contáctanos
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6 py-2 items-center space-x-2">
            <span>¿Escríbenos!</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {/* Mobile Navigation Links */}
                <a
                  href="#inicio"
                  className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Inicio
                </a>
                
                {/* Services Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>Servicios</span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a
                        href="#tratamientos-faciales"
                        className="block text-gray-600 hover:text-yellow-600 transition-colors py-1"
                        onClick={closeMobileMenu}
                      >
                        Tratamientos Faciales
                      </a>
                      <a
                        href="#medicina-estetica"
                        className="block text-gray-600 hover:text-yellow-600 transition-colors py-1"
                        onClick={closeMobileMenu}
                      >
                        Medicina Estética
                      </a>
                      <a
                        href="#consultas"
                        className="block text-gray-600 hover:text-yellow-600 transition-colors py-1"
                        onClick={closeMobileMenu}
                      >
                        Consultas
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#promociones"
                  className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Promociones
                </a>
                
                <a
                  href="#testimonios"
                  className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Testimonios
                </a>
                
                <a
                  href="#contactanos"
                  className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Contáctanos
                </a>

                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full py-3 flex items-center justify-center space-x-2">
                    <span>¿Escríbenos!</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
