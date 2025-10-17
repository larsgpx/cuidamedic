import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl md:text-5xl title-orange my-10">
              Política de <span>Privacidad</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">1. Información General</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En CUIDAMEDIC E.I.R.L., nos comprometemos a proteger la privacidad y seguridad de la información personal de nuestros pacientes y usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios de medicina estética y nutrición.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política. Si no está de acuerdo con alguna parte de esta política, le recomendamos que no utilice nuestros servicios.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">2. Información que Recopilamos</h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Información Personal</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Recopilamos información personal que usted nos proporciona voluntariamente, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Nombre completo y datos de identificación</li>
                <li>Información de contacto (teléfono, correo electrónico, dirección)</li>
                <li>Información médica relevante para los tratamientos</li>
                <li>Historial médico y estético</li>
                <li>Información de facturación y pago</li>
                <li>Preferencias de comunicación</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Información Técnica</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Automáticamente recopilamos cierta información técnica cuando visita nuestro sitio web:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Dirección IP y ubicación geográfica</li>
                <li>Tipo de navegador y sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Información de cookies y tecnologías similares</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">3. Uso de la Información</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Proporcionar servicios médicos estéticos y de nutrición</li>
                <li>Programar y gestionar citas médicas</li>
                <li>Realizar seguimiento post-tratamiento</li>
                <li>Comunicarnos con usted sobre sus tratamientos</li>
                <li>Procesar pagos y facturación</li>
                <li>Mejorar nuestros servicios y experiencia del paciente</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Enviar comunicaciones promocionales (con su consentimiento)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">4. Compartir Información</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (bajo acuerdos de confidencialidad)</li>
                <li>En caso de emergencia médica</li>
                <li>Para proteger nuestros derechos legales</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">5. Seguridad de la Información</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información personal contra:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Acceso no autorizado</li>
                <li>Alteración, divulgación o destrucción</li>
                <li>Pérdida accidental</li>
                <li>Uso indebido</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por proteger su información, no podemos garantizar la seguridad absoluta.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">6. Retención de Datos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, incluyendo:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Duración de la relación médico-paciente</li>
                <li>Períodos de retención requeridos por ley</li>
                <li>Necesidades de seguimiento médico</li>
                <li>Resolución de disputas</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">7. Sus Derechos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usted tiene los siguientes derechos respecto a su información personal:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Acceso:</strong> Solicitar una copia de su información personal</li>
                <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de su información personal</li>
                <li><strong>Limitación:</strong> Restringir el procesamiento de su información</li>
                <li><strong>Portabilidad:</strong> Recibir su información en un formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al procesamiento de su información</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Para ejercer estos derechos, puede contactarnos utilizando la información proporcionada en la sección de contacto.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">8. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Puede configurar su navegador para rechazar las cookies o para que le avise cuando se envíen. Sin embargo, algunas funciones del sitio pueden no funcionar correctamente sin cookies.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">9. Menores de Edad</h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información personal de menores de edad sin el consentimiento de sus padres o tutores legales.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">10. Cambios en esta Política</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios significativos serán notificados a través de:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Notificación en nuestro sitio web</li>
                <li>Correo electrónico a nuestros pacientes registrados</li>
                <li>Aviso en nuestras instalaciones</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Le recomendamos revisar esta política periódicamente para mantenerse informado sobre cómo protegemos su información.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">11. Contacto</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el manejo de su información personal, puede contactarnos:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">CUIDAMEDIC E.I.R.L.</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Correo electrónico:</strong> info@cuidamedic.pe</p>
                  <p><strong>Teléfono Miraflores:</strong> (+51) 992802065</p>
                  <p><strong>Teléfono Surco:</strong> (+51) 951375222</p>
                  <p><strong>Dirección Miraflores:</strong> Calle Enrique Palacios 360, Of. 508</p>
                  <p><strong>Dirección Surco:</strong> Calle Monte Rosa 284, Of. 403, Chacarilla</p>
                </div>
              </div>
            </div>

            <div className="text-center py-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Esta Política de Privacidad es efectiva a partir del 1 de diciembre de 2024.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
