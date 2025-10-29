"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const pathname = usePathname();

  // Función para determinar si un elemento específico del menú debe tener la clase naranja
  const isActiveMenuItem = (href) => {
    if (!href) return false;
    
    // Si es la ruta exacta o si la ruta actual empieza con esta ruta
    return pathname === href || pathname.startsWith(href + '/');
  };

  const menuItems = [
    { title: "Inicio", href: "/" },
    {
        title: "Tratamientos",
        submenu: [
            {
                title: "Limpiezas faciales",
                href: "/tratamientos/limpiezas-faciales",
            },
            {
              title: "Mesoterapia & Cocktails",
              href: "/tratamientos/mesoterapia-cocktails",
            },
            {
                title: "Estéticos - Faciales",
                submenu: [
                    { title: "Toxina", href: "/tratamientos/esteticos-faciales/toxina" },
                    { title: "AH", href: "/tratamientos/esteticos-faciales/ah" },
                    { title: "Enzimas", href: "/tratamientos/esteticos-faciales/enzimas" },
                    { title: "Exosomas", href: "/tratamientos/esteticos-faciales/exosomas" },
                    { title: "Biorem + Bioest.", href: "/tratamientos/esteticos-faciales/biorem-bioest" },
                    { title: "Mesoterapias", href: "/tratamientos/esteticos-faciales/mesoterapias" },
                    { title: "Bioremodelador", href: "/tratamientos/esteticos-faciales/bioremodelador" },
                ],
            },
            {
                title: "Estéticos - Corporales",
                submenu: [
                    { title: "Enzimas", href: "/tratamientos/esteticos-corporales/enzimas" },
                    { title: "Biorem + Bioest.", href: "/tratamientos/esteticos-corporales/biorem-bioest" },
                    { title: "Exosomas", href: "/tratamientos/esteticos-corporales/exosomas" },
                    { title: "Mesoterapias", href: "/tratamientos/esteticos-corporales/mesoterapias" },
                ],
            },
        ],
    },
    { title: "Nosotros", href: "/nosotros" },
    { title: "Blog", href: "/blog" },
    { title: "Contáctanos", href: "/contactanos" },
];


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
    setOpenMobileMenus({});
  };

  const toggleMobileSubmenu = (menuKey) => {
    setOpenMobileMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="cursor-pointer"
            >
            <img src="/logo.png" alt="Cuidamedic" className="w-24 h-20 mt-8" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block overflow-visible">
            <NavigationMenuList className="space-x-5 overflow-visible">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        "navbar-btn bg-transparent hover:text-yellow-600 transition-colors font-light text-md",
                        "text-gray-700"
                      )}>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="overflow-visible navbar-structure">
                        <div className="p-6 w-[500px] bg-white shadow-4xl rounded-xl overflow-visible">
                          <div className="grid grid-cols-1 gap-8 overflow-visible">
                            {/* Columna izquierda - Tratamientos básicos */}
                            <div className="space-y-6 overflow-visible">
                              <div className="relative overflow-visible">
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">TRATAMIENTOS BÁSICOS</h3>
                                <div className="space-y-2">
                                  <Link
                                    href="/tratamientos/limpiezas-faciales"
                                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                                      
                                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.9998 10.5004C15.9998 11.3288 15.5521 12.0004 14.9998 12.0004C14.4475 12.0004 13.9998 11.3288 13.9998 10.5004C13.9998 9.67196 14.4475 9.00039 14.9998 9.00039C15.5521 9.00039 15.9998 9.67196 15.9998 10.5004Z" fill="#1C274C"/>
                                        <path d="M9.99982 10.5004C9.99982 11.3288 9.5521 12.0004 8.99982 12.0004C8.44753 12.0004 7.99982 11.3288 7.99982 10.5004C7.99982 9.67196 8.44753 9.00039 8.99982 9.00039C9.5521 9.00039 9.99982 9.67196 9.99982 10.5004Z" fill="#1C274C"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.2648 2.05116C13.3472 1.64522 13.7431 1.38294 14.149 1.46533C18.3625 2.32056 21.6797 5.63763 22.535 9.85114C22.6173 10.2571 22.3551 10.6529 21.9491 10.7353C21.5432 10.8177 21.1473 10.5555 21.0649 10.1495C20.3295 6.52642 17.4738 3.67075 13.8506 2.93535C13.4447 2.85296 13.1824 2.45709 13.2648 2.05116ZM10.735 2.05121C10.8174 2.45714 10.5551 2.85301 10.1492 2.93541C6.52602 3.6708 3.67032 6.52647 2.93486 10.1496C2.85246 10.5555 2.45659 10.8178 2.05065 10.7354C1.64472 10.653 1.38244 10.2571 1.46484 9.85119C2.32014 5.63769 5.63726 2.32061 9.85079 1.46538C10.2567 1.38299 10.6526 1.64527 10.735 2.05121ZM2.05081 13.2654C2.45675 13.183 2.85262 13.4453 2.93502 13.8512C3.67048 17.4743 6.52618 20.33 10.1493 21.0654C10.5553 21.1478 10.8175 21.5436 10.7351 21.9496C10.6528 22.3555 10.2569 22.6178 9.85095 22.5354C5.63742 21.6802 2.3203 18.3631 1.465 14.1496C1.3826 13.7437 1.64488 13.3478 2.05081 13.2654ZM21.9491 13.2654C22.3551 13.3478 22.6173 13.7437 22.535 14.1496C21.6797 18.3631 18.3625 21.6802 14.149 22.5354C13.7431 22.6178 13.3472 22.3555 13.2648 21.9496C13.1824 21.5436 13.4447 21.1478 13.8506 21.0654C17.4738 20.33 20.3295 17.4743 21.0649 13.8512C21.1473 13.4453 21.5432 13.183 21.9491 13.2654ZM8.39729 15.5538C8.64395 15.221 9.11366 15.1512 9.44643 15.3979C10.1748 15.9377 11.0539 16.2504 11.9998 16.2504C12.9457 16.2504 13.8249 15.9377 14.5532 15.3979C14.886 15.1512 15.3557 15.221 15.6023 15.5538C15.849 15.8865 15.7792 16.3563 15.4464 16.6029C14.474 17.3237 13.2848 17.7504 11.9998 17.7504C10.7148 17.7504 9.52562 17.3237 8.55321 16.6029C8.22044 16.3563 8.15063 15.8865 8.39729 15.5538Z" fill="#1C274C"/>
                                      </svg>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">Limpiezas Faciales</h4>
                                      <p className="text-xs text-gray-500 mt-1">Tratamientos de limpieza profunda para tu piel</p>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/tratamientos/mesoterapia-cocktails"
                                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mt-1">
                                      <img src="/icons/mesoterapia.svg" alt="Mesoterapia & Cocktails" width={20} height={20} />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">Mesoterapia & Cocktails</h4>
                                      <p className="text-xs text-gray-500 mt-1">Vitaminas y terapias regenerativas que revitalizan tu piel desde el interior</p>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Columna derecha - Tratamientos estéticos */}
                            <div className="space-y-6 overflow-visible">
                              <div className="relative overflow-visible">
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">TRATAMIENTOS ESTÉTICOS</h3>
                                
                                {/* Estéticos Faciales */}
                                <div className="group/nested overflow-visible mb-4">
                                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <img src="/icons/injection.svg" alt="Estéticos - Faciales" width={20} height={20} />
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">Estéticos - Faciales</h4>
                                        <p className="text-xs text-gray-500">Tratamientos especializados para el rostro</p>
                                      </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </div>
                                  {/* Submenu anidado */}
                                  <div className="hidden group-hover/nested:block absolute left-full top-0 ml-2 z-[100]">
                                    <div className="bg-white rounded-lg shadow-2xl p-4 w-64">
                                      <div className="space-y-2">
                                        {item.submenu.find(sub => sub.title === "Estéticos - Faciales")?.submenu?.map((nestedItem, nestedIndex) => (
                                          <Link
                                            key={nestedIndex}
                                            href={nestedItem.href}
                                            className="block p-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors rounded text-sm"
                                          >
                                            {nestedItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Estéticos Corporales */}
                                <div className="group/nested overflow-visible">
                                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                      <img src="/icons/corporal.svg" alt="Estéticos - Corporales" width={20} height={20} />
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">Estéticos - Corporales</h4>
                                        <p className="text-xs text-gray-500">Tratamientos para el cuerpo</p>
                                      </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </div>
                                  {/* Submenu anidado */}
                                  <div className="hidden group-hover/nested:block absolute left-full top-0 ml-2 z-[100]">
                                    <div className="bg-white rounded-lg shadow-2xl p-4 w-64">
                                      <div className="space-y-2">
                                        {item.submenu.find(sub => sub.title === "Estéticos - Corporales")?.submenu?.map((nestedItem, nestedIndex) => (
                                          <Link
                                            key={nestedIndex}
                                            href={nestedItem.href}
                                            className="block p-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors rounded text-sm"
                                          >
                                            {nestedItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink 
                      href={item.href}
                      className={cn(
                        "hover:text-yellow-600 transition-colors font-medium text-md cursor-pointer",
                        isActiveMenuItem(item.href) ? "text-color-orange" : "text-gray-700"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl px-6 py-2 items-center space-x-2">
            ¿Escríbenos!
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
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {/* Mobile Navigation Links */}
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-gray-700 hover:text-yellow-600 transition-colors font-medium text-md py-2"
                          onClick={() => toggleMobileSubmenu(`menu-${index}`)}
                        >
                          <span>{item.title}</span>
                          <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileMenus[`menu-${index}`] && "rotate-180")} />
                        </button>
                        
                        {openMobileMenus[`menu-${index}`] && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.submenu.map((subItem, subIndex) => (
                              <div key={subIndex}>
                                {subItem.submenu ? (
                                  <div>
                                    <button
                                      className="flex items-center justify-between w-full text-gray-600 hover:text-yellow-600 transition-colors py-1"
                                      onClick={() => toggleMobileSubmenu(`menu-${index}-${subIndex}`)}
                                    >
                                      <span>{subItem.title}</span>
                                      <ChevronDown className={cn("h-3 w-3 transition-transform", openMobileMenus[`menu-${index}-${subIndex}`] && "rotate-180")} />
                                    </button>
                                    
                                    {openMobileMenus[`menu-${index}-${subIndex}`] && (
                                      <div className="ml-4 mt-1 space-y-1">
                                        {subItem.submenu.map((nestedItem, nestedIndex) => (
                                          <Link
                                            key={nestedIndex}
                                            href={nestedItem.href}
                                            className="block text-gray-500 hover:text-yellow-600 transition-colors py-1 text-sm"
                                            onClick={closeMobileMenu}
                                          >
                                            {nestedItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block hover:text-yellow-600 transition-colors py-1",
                                      isActiveMenuItem(subItem.href) ? "text-color-orange" : "text-gray-600"
                                    )}
                                    onClick={closeMobileMenu}
                                  >
                                    {subItem.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block hover:text-yellow-600 transition-colors font-medium text-md py-2",
                          isActiveMenuItem(item.href) ? "text-color-orange" : "text-gray-700"
                        )}
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}

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
