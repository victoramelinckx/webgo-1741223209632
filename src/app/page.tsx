
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Maximiza tus Ventas Online con Webgo"
              subheadline="Transformamos tu presencia en línea con páginas web modernas, prácticas y optimizadas con IA. Olvídate de los diseños obsoletos y la pérdida de dinero en ads sin retorno. Con Webgo, tu negocio lucirá profesional, atractivo y será más rentable."
              cta1="¿No tienes página web? Empieza ahora con una GRATIS. Haz clic aquí para comenzar tu emprendimiento."
              cta2="¿Quieres mejorar tu página web existente? Obtén un rediseño profesional y optimizado. Haz clic aquí para empezar la transformación."
            />

            <How
              step1Title="Selecciona tu Plantilla Ideal"
              step1Desc="Encuentra la plantilla perfecta que se ajuste a tu negocio. Todas nuestras plantillas son modernas y optimizadas para la conversión."
              step2Title="Personaliza tu Página"
              step2Desc="Añade tu toque personal. Cambia colores, textos, imágenes. Todo es editable para que refleje la identidad de tu marca."
              step3Title="Lanza tu Página al Mundo"
              step3Desc="¡Publica tu página en un solo clic! Tu sitio web estará optimizado para SEO y listo para atraer a tu público objetivo."
            />

            <Aboutus
              headline="Acerca de nosotros"
              subheadline="Descripción"
              beneficio1="Beneficio 1"
              beneficio2="Descripción beneficio 1"
              beneficiotitulo1="Beneficio 2"
              beneficiotitulo2="Descripción beneficio 2"
            />

            <Services
              heading="Maximice su inversión en publicidad online con las soluciones que Webgo ofrece"
              description="En Webgo, entendemos los retos que enfrentan las empresas con presencia online. Ya sea que su sitio web esté desactualizado, poco práctico, o simplemente no esté optimizado para las ventas, estamos aquí para ayudar. Ofrecemos paginas webs gratis para emprendedores que están empezando, y también creamos sitios web profesionales para empresas establecidas. Nuestro enfoque se centra en las ventas y la tecnología, no solo en el diseño. Incorporamos la última tecnología y la inteligencia artificial para mejorar y optimizar su sistema."
              services={[{"name":"Diseño web optimizado para SEO","icon":"seo","description":"Diseñamos su sitio web para atraer más tráfico."},{"name":"Integración de Inteligencia Artificial","icon":"ai","description":"Hacemos que su sitio web sea más inteligente."},{"name":"Optimización de ventas","icon":"sales","description":"Transformamos su sitio web en una máquina de ventas."},{"name":"Actualización de sitios web antiguos","icon":"update","description":"Damos nueva vida a su sitio web existente."},{"name":"Creación de sitios web gratuitos","icon":"free","description":"Ayudamos a los emprendedores a lanzar su negocio online."}]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Por qué necesito una página web si ya tengo presencia en las redes sociales?","respuesta":"Las redes sociales son una excelente herramienta de marketing, pero no reemplazan a un sitio web profesional. Tu sitio web es el núcleo de tu presencia online, donde tienes control total y puedes presentar tu [companyName] de la manera que desees. Además, un sitio web bien diseñado y optimizado puede ayudarte a atraer más tráfico de motores de búsqueda como Google."},{"pregunta":"Tengo una página web antigua, ¿realmente necesito actualizarla?","respuesta":"Sí, definitivamente. Un sitio web desactualizado puede dar la impresión de que tu [companyName] no está a la altura de la competencia. Además, las tecnologías web han avanzado mucho en los últimos años, y un sitio antiguo puede no ser compatible con los nuevos estándares, lo que dificulta su visualización y uso en dispositivos modernos."},{"pregunta":"¿Es realmente necesario gastar dinero en un diseño web profesional?","respuesta":"Un diseño web profesional no es solo una cuestión de estética. Un buen diseño facilita la navegación de tus visitantes, mejora la experiencia de usuario y ayuda a convertir a esos visitantes en clientes. Además, un diseño web de calidad puede ayudarte a mejorar tu clasificación en los motores de búsqueda y atraer más tráfico a tu sitio."},{"pregunta":"¿Por qué debería invertir en tecnología y optimización de sistemas?","respuesta":"La tecnología y la optimización de sistemas pueden ayudarte a mejorar la eficiencia de tu sitio web, haciendo que las páginas se carguen más rápido y sean más fáciles de usar. Esto puede mejorar la experiencia de usuario, lo que a su vez puede aumentar las tasas de conversión y ayudarte a generar más ventas. Además, los motores de búsqueda premian a los sitios que ofrecen una buena experiencia de usuario con rankings más altos."},{"pregunta":"¿Cómo puede la inteligencia artificial (IA) ayudar a mi negocio en línea?","respuesta":"La IA puede ayudarte a automatizar tareas, analizar grandes cantidades de datos y personalizar la experiencia de tus clientes. Por ejemplo, puedes usar la IA para automatizar el servicio al cliente, analizar el comportamiento de los visitantes y ofrecer recomendaciones personalizadas de productos. Esto puede ayudarte a ahorrar tiempo, mejorar la eficiencia y aumentar las ventas."}]}
            />

            <BookAppointment
              heading="¿Eres una empresa que vende en línea y gasta en publicidad en línea? ¡No dejes que tu antiguo diseño web, la falta de tecnología y la mala presentación te detengan! Actúa ahora con Webgo."
              description="En Webgo, no solo creamos páginas web gratuitas para aquellos que están comenzando su negocio, sino que también nos especializamos en la creación de sitios web profesionales. Nos enfocamos en la utilización de tecnologías avanzadas, como la inteligencia artificial, para optimizar y mejorar tu sistema. Tu inversión en publicidad en línea no debería ir a la basura debido a un diseño web poco práctico y desactualizado. Permítenos ayudarte a optimizar tu presencia en línea y maximizar tus beneficios."
            />
<Footer />
    </main>
  );
}
    