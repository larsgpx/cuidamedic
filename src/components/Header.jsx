"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useAPI } from "@/hooks/useAPI";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const API_GLOBAL = '/api/global';
  const { data } = useAPI(API_GLOBAL);
  const [dataGlobal, setDataGlobal] = useState(null);
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
        title: "Servicios",
        submenu: [
              {
                title: "Tratamientos Faciales",
                submenu: [
                    { title: "Toxina Botulinica", href: "/tratamientos/esteticos-faciales/toxina" },
                    { title: "Acido Hialurónico", href: "/tratamientos/esteticos-faciales/ah" },
                    { title: "Enzimas Recombinantes", href: "/tratamientos/esteticos-faciales/enzimas" },
                    { title: "Exosomas", href: "/tratamientos/esteticos-faciales/exosomas" },
                    { title: "Bioestimuladores de Colágeno", href: "/tratamientos/esteticos-faciales/biorem-bioest" },
                    { title: "Bioremodeladores de Colágeno PROFHILO", href: "/tratamientos/esteticos-faciales/bioremodelador" },
                    { title: "NCTF", href: "/tratamientos/esteticos-faciales/mesoterapias" },
                    { title: "Aclaramiento Facial", href: "/tratamientos/esteticos-faciales/aclaramiento-facial" },
                    { title: "Hidratacion Profunda", href: "/tratamientos/esteticos-faciales/hidratacion-profunda" },
                ],
            },
            {
                title: "TratamientosCorporales",
                submenu: [
                    { title: "Reducción de Medidas", href: "/tratamientos/esteticos-corporales/enzimas" },
                    { title: "Aclaramiento Corporal", href: "/tratamientos/esteticos-corporales/exosomas" },
                    { title: "Bioestimulador Corporal", href: "/tratamientos/esteticos-corporales/biorem-bioest" },
                    { title: "Radiofrecuencia", href: "/tratamientos/esteticos-corporales/mesoterapias" },
                ],
            },
            {
              title: "Tratamientos Regenerativos",
              href: "/tratamientos/tratamientos-regenerativos",
            },
            {
                title: "Limpiezas faciales",
                href: "/tratamientos/limpiezas-faciales",
            },
            {
              title: "Tecnología Avanzada",
              href: "/tratamientos/tecnologia-avanzada",
            }
        ],
    },
    { title: "Nosotros", href: "/nosotros" },
    { title: "Blog", href: "/blog", isBlog: "true" },
    { title: "Contáctanos", href: "/contactanos" },
];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {
    if (data) {
      setDataGlobal(data?.data);
      console.log('dataGlobal blog', data?.data);
    }
  }, [data]);

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

  const callToACtionWsp = () => {
    if (dataGlobal?.whatsappPopUp) {
      window.open(dataGlobal.whatsappPopUp, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-navbar",
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
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="space-x-8">
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
                      <NavigationMenuContent className="navbar-structure">
                        <div className="p-6 w-[500px] bg-white shadow-4xl rounded-xl">
                          <div className="grid grid-cols-1 gap-8">
                             {/* Columna derecha - Tratamientos estéticos */}
                             <div className="space-y-6">
                              <div className="relative">
                                <h3 className="text-xs font-semibold text-[#DC9F25] uppercase tracking-wider mb-4">TRATAMIENTOS MÉDICOS</h3>
                                
                                {/* Estéticos Faciales */}
                                <div className="group/nested relative mb-2">
                                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                                    <div className="flex items-center space-x-3">
                                      <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">Tratamientos Faciales</h4>
                                        <p className="text-xs text-gray-500">Tratamientos especializados para el rostro</p>
                                      </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </div>
                                  {/* Submenu anidado */}
                                  <div className="hidden group-hover/nested:block absolute left-full top-0 ml-0 z-[100]">
                                    <div className="bg-white rounded-lg shadow-2xl p-4 w-64 border border-gray-100">
                                      <div className="space-y-2">
                                        {item.submenu.find(sub => sub.title === "Tratamientos Faciales")?.submenu?.map((nestedItem, nestedIndex) => (
                                          <Link
                                            key={nestedIndex}
                                            href={nestedItem.href}
                                            className="block p-2 text-gray-700 hover:text-yellow-600 hover:bg-orange-50 transition-colors rounded text-sm"
                                          >
                                            {nestedItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Estéticos Corporales */}
                                <div className="group/nested relative mb-2">
                                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                                    <div className="flex items-center space-x-3">
                                      <div>
                                        <h4 className="font-semibold text-gray-900 text-sm">Tratamientos Corporales</h4>
                                        <p className="text-xs text-gray-500">Tratamientos para el cuerpo</p>
                                      </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </div>
                                  {/* Submenu anidado */}
                                  <div className="hidden group-hover/nested:block absolute left-full top-0 ml-0 z-[100]">
                                    <div className="bg-white rounded-lg shadow-2xl p-4 w-64 border border-gray-100">
                                      <div className="space-y-2">
                                        {item.submenu.find(sub => sub.title === "TratamientosCorporales")?.submenu?.map((nestedItem, nestedIndex) => (
                                          <Link
                                            key={nestedIndex}
                                            href={nestedItem.href}
                                            className="block p-2 text-gray-700 hover:text-yellow-600 hover:bg-orange-50 transition-colors rounded text-sm"
                                          >
                                            {nestedItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <Link
                                    href="/tratamientos/tecnologia-avanzada"
                                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                                  >
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">Tecnología Avanzada</h4>
                                      <p className="text-xs text-gray-500 mt-1">Terapias de radiofrecuencia para la piel</p>
                                    </div>
                                  </Link>
                              </div>
                            </div>
                            {/* Columna izquierda - Tratamientos básicos */}
                            <div className="space-y-6">
                              <div className="relative">
                                <h3 className="text-xs font-semibold text-[#DC9F25] uppercase tracking-wider mb-4">TRATAMIENTOS ESTÉTICOS</h3>
                                <div className="space-y-2">
                                <Link
                                    href="/tratamientos/limpiezas-faciales"
                                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                                  >
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">Limpiezas Faciales</h4>
                                      <p className="text-xs text-gray-500 mt-1">Tratamientos de limpieza profunda para tu piel</p>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/tratamientos/tratamientos-regenerativos"
                                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                                  >
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">Tratamientos Regenerativos</h4>
                                      <p className="text-xs text-gray-500 mt-1">Vitaminas y terapias regenerativas que revitalizan tu piel desde el interior</p>
                                    </div>
                                  </Link>
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
                        isActiveMenuItem(item.href) ? "text-color-orange" : "text-gray-700",
                        item?.isBlog === "true" && !dataGlobal?.Blog ? "hidden" : ""
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
          <Button 
            className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl px-6 py-2 items-center space-x-2"
            onClick={callToACtionWsp}
          >
            ¡Escríbenos!
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
                          {item.title}
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
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full py-3 flex items-center justify-center space-x-2"
                    onClick={callToACtionWsp}
                  >
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
