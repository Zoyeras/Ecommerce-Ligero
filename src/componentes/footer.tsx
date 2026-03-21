// src/componentes/footer.tsx
import { useDarkMode } from "../context/DarkModeContext";

// Datos genéricos de contacto (iguales a los de homePage.tsx)
const contactPhone = "+57 300 000 0000";
const contactEmail = "demo@ejemplo.com";
const contactLocation = "Ciudad, País";

const footerSections = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Catálogo", href: "#coleccion" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Guía de tallas", href: "#" },
      { label: "Envíos", href: "#" },
      { label: "Cambios y devoluciones", href: "#" },
      { label: "Preguntas frecuentes", href: "#" },
    ],
  },
];

const Footer = () => {
  const { darkMode } = useDarkMode();
  const year = new Date().getFullYear();

  return (
      <footer
          className={`relative border-t ${
              darkMode ? "border-white/10 bg-slate-950 text-slate-300" : "border-slate-200 bg-white text-slate-700"
          }`}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src="/imagenes/logo2.png" alt="Demo Store" className="h-11 w-11 rounded-xl object-cover" />
              <div>
                <p className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>Demo Store</p>
                <p className="text-sm">catálogo dinámico</p>
              </div>
            </div>
            <p className={`max-w-md text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Proyecto demo que muestra un catálogo actualizado desde Google Drive. Los datos de contacto son solo para prueba.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Demo", "Catálogo dinámico", "Google Drive API", "WhatsApp integrado",
              ].map((tag) => (
                  <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs ${
                          darkMode ? "border-white/15 bg-white/5" : "border-slate-200 bg-slate-50"
                      }`}
                  >
                {tag}
              </span>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className={`mb-3 text-sm font-semibold uppercase tracking-[0.16em] ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className={`transition ${darkMode ? "hover:text-white" : "hover:text-slate-950"}`}>
                          {link.label}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>

        <div className={`border-t px-4 py-5 text-center text-xs ${darkMode ? "border-white/10 text-slate-500" : "border-slate-200 text-slate-500"}`}>
          <p>© {year} Demo Store. Proyecto de portafolio.</p>
          <p className="mt-1">
            📱 {contactPhone} | ✉ {contactEmail} | 📍 {contactLocation}
          </p>
        </div>
      </footer>
  );
};

export default Footer;