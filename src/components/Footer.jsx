import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white text-white py-2">
      <div className="container mx-auto px-4 border-t border-gray-200 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Media */}
          <div>
            <div className="flex items-center mb-2 justify-center md:justify-start">
              <Image src="/cuidamedic-logo.png" alt="Cuidamedic" width={180} height={100} />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start md:ml-8 mx-auto space-x-4">
              <a href="#" className="flex items-center justify-center transition-colors">
                <Image src="/icons/facebook.svg" alt="Facebook" width={25} height={25} />
              </a>
              <a href="#" className="flex items-center justify-center transition-colors">
                <Image src="/icons/tiktok.svg" alt="Instagram" width={25} height={25} />
              </a>
              <a href="#" className="flex items-center justify-center transition-colors">
                <Image src="/icons/instagram.svg" alt="Youtube" width={25} height={25} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='text-center md:text-left'>
            <h3 className="text-lg font-semibold mb-4 text-orange-primary">Enlaces</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Libro de Reclamaciones - Miraflores
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Libro de Reclamaciones - Surco
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h3 className="text-lg font-semibold mb-4 text-orange-primary">Contáctanos</h3>
            <div className="space-y-2 text-gray-300">
              <p>Puedes llamarnos al:</p>
              <p>Miraflores: (+51) <a href="tel:+51992802065">992802065</a></p>
              <p>Surco: (+51) <a href="tel:+51951375222">951375222</a></p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-400">
          <p>Todos los Derechos Reservados © 2023 - Diseñado y personalizado por CUIDAMEDIC E.I.R.L.</p>
        </div>
      </div>
    </footer>
  );
}
