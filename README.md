# 🛍️ EcommerceOSOweb – Catálogo Dinámico con Google Drive y WhatsApp

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Functions-000000?logo=vercel)](https://vercel.com)
[![Node.js](https://img.shields.io/badge/Node.js-Serverless-339933?logo=node.js)](https://nodejs.org)
[![Google Drive API](https://img.shields.io/badge/Google%20Drive-API%20v3-4285F4?logo=google-drive)](https://developers.google.com/drive/api)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Tabla de contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías-utilizadas)
- [Instalación](#-instalación-local)
- [Configuración de Google Drive](#-configuración-de-google-drive)
- [Despliegue](#-despliegue-en-vercel)
- [Gestión de productos](#-gestión-de-productos-en-google-drive)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [API](#-endpoints-api)
- [Variables de entorno](#-variables-de-entorno)
- [Solución de problemas](#-solución-de-problemas)
- [Personalización](#-personalización)

---

## 📝 Descripción

**EcommerceOSOweb** es un e-commerce conversacional y minimalista cuyo catálogo se administra completamente desde **Google Drive**, sin necesidad de CMS, base de datos ni panel administrativo tradicional.

**Cómo funciona:**
- 📁 Cada carpeta dentro de Google Drive es una **categoría**
- 🖼️ Cada imagen dentro de esas carpetas es un **producto**
- 🛒 Los pedidos se envían vía **WhatsApp** en formato estructurado
- ⚡ Todo funciona con APIs serverless (sin servidor backend)

Perfecto para pequeños negocios, emprendimientos de diseño, tiendas de camisetas personalizadas, o cualquier negocio que quiera un catálogo flexible sin complejidad administrativa.

---

## ✨ Características

- 📁 **Catálogo dinámico sincronizado**: Agrega o modifica productos simplemente subiendo imágenes a Google Drive. Los cambios se reflejan al instante.
- 🏷️ **Categorías automáticas**: Cada subcarpeta en Drive se convierte automáticamente en una categoría de filtro.
- 🔍 **Filtrado en tiempo real**: Filtra productos por categoría con transiciones suaves.
- 📱 **Diseño completamente responsive**: Carga progresiva adaptada por dispositivo (12 productos en desktop / 8 en móvil).
- 🛒 **Carrito de compras persistente**: Guardar selecciones en el navegador.
- 💬 **Envío por WhatsApp**: Genera mensajes preformateados con resumen de pedido, cliente y preferencias.
- 🖼️ **Modal de vista previa**: Visualiza productos en alta resolución (hasta 1600px).
- 🌓 **Tema oscuro/claro**: Persistente en localStorage, basado en preferencias del sistema.
- 🔧 **API serverless de Vercel**: Sin necesidad de servidor backend, solo funciones Node.js.
- 🎨 **Logo dinámico desde Drive** (opcional): Personaliza el logo cargando una imagen a Drive.
- ⚡ **Alto rendimiento**: Carga lazy, optimización de imágenes, caché inteligente.

---

## 🛠️ Tecnologías utilizadas

| **Categoría** | **Herramientas** |
|---|---|
| **Frontend** | React 19, TypeScript 5.8, Vite, Tailwind CSS 4.1, React Router DOM 7.7 |
| **Backend/Serverless** | Vercel Functions, Node.js 18+, Google APIs (googleapis 171.4) |
| **Autenticación** | Google Cloud Service Account (servidor-a-servidor, sin OAuth) |
| **Integración** | Google Drive API v3, WhatsApp Web (links de mensaje preformateados) |
| **Build & Dev** | Vite 7.0, ESLint 9.30, PostCSS 8.5, Autoprefixer 10.4 |
| **Lenguajes** | TypeScript, JavaScript, CSS |
| **Despliegue** | Vercel (con soporte para variables de entorno) |
| **Versionado** | Git + GitHub/GitLab |

---

---

## 🔧 Instalación Local

### Requisitos Previos
- **Node.js** 18+ y npm 9+ (o yarn/pnpm)
- **Git**
- **Cuenta de Google Cloud** con acceso a Google Drive API
- **Carpeta compartida en Google Drive** con imágenes de productos
- **Número de WhatsApp** Business (opcional, pero recomendado)

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/EcommerceOSOweb.git
cd EcommerceOSOweb
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

Completa el archivo `.env` con tus credenciales de Google Cloud:

```env
# Google Cloud Service Account
GOOGLE_PROJECT_ID=tu-id-proyecto
GOOGLE_PRIVATE_KEY_ID=tu-private-key-id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTu_clave_privada_aqui\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=tu-correo-servicio@tu-proyecto.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=tu-client-id

# Google Drive
DRIVE_FOLDER_ID=id-de-tu-carpeta-raiz-en-drive
```

⚠️ **Importante**: La `GOOGLE_PRIVATE_KEY` debe incluir literalmente `\n` en lugar de saltos de línea reales. Si la descargaste desde JSON, cópiala tal cual.

### 4️⃣ Ejecutar en desarrollo

**Opción A: Con Vercel CLI (recomendado)**

Instala Vercel CLI:
```bash
npm install -g vercel
```

Levanta el entorno completo:
```bash
vercel dev
```

Esto ejecutará:
- Frontend en `http://localhost:3000` (o el puerto que asigne)
- API serverless en `http://localhost:3000/api`

**Opción B: Frontend y API por separado**

Terminal 1 - Inicia las funciones serverless:
```bash
vercel dev --listen 3001
```

Terminal 2 - Inicia el frontend con Vite (con proxy hacia la API):
```bash
npm run dev
```

El frontend se servirá en `http://localhost:5173` con proxy automático a `/api` en el puerto 3001.

### 5️⃣ Verificar la instalación

- Abre `http://localhost:5173` (o el puerto indicado)
- Deberías ver el catálogo cargándose desde Google Drive
- Si hay error, revisa la consola del navegador y el terminal

---

## 🔐 Configuración de Google Cloud y Google Drive API

### Paso 1: Crear un proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Haz clic en **"Seleccionar un proyecto"** → **"Nuevo proyecto"**
3. Nombre del proyecto: `EcommerceOSOweb` (o el que prefieras)
4. Haz clic en **Crear**
5. Espera a que se cree el proyecto y selecciónalo

### Paso 2: Activar la Google Drive API

1. En el panel de Google Cloud, ve a **APIs y servicios** → **Biblioteca**
2. Busca `"Google Drive API"`
3. Haz clic en ella y presiona el botón **Habilitar**

### Paso 3: Crear una Cuenta de Servicio

1. Ve a **APIs y servicios** → **Credenciales**
2. Haz clic en **+ Crear credenciales** → **Cuenta de servicio**
3. **Nombre**: `ecommerce-app` (o el que prefieras)
4. **Descripción**: `Acceso a Google Drive para catálogo de productos`
5. Haz clic en **Crear y continuar**
6. En el siguiente paso, **deja en blanco** los campos opcionales y haz clic en **Continuar**
7. Haz clic en **Realizado**

### Paso 4: Generar la clave privada JSON

1. En **Credenciales**, busca la cuenta de servicio que creaste en la sección **Cuentas de servicio**
2. Haz clic en el email de la cuenta de servicio
3. Ve a la pestaña **Claves**
4. Haz clic en **Agregar clave** → **Crear clave nueva** → Tipo JSON
5. Se descargará un archivo `nombre-del-proyecto-xxxxx.json`

### Paso 5: Copiar las credenciales al archivo `.env`

Abre el JSON descargado y copia estos valores a tu archivo `.env`:

```env
GOOGLE_PROJECT_ID=value_de_project_id
GOOGLE_PRIVATE_KEY_ID=value_de_private_key_id
GOOGLE_PRIVATE_KEY=value_completo_de_private_key (incluir \n literalmente)
GOOGLE_CLIENT_EMAIL=value_de_client_email
GOOGLE_CLIENT_ID=value_de_client_id
```

### Paso 6: Preparar la carpeta de productos en Google Drive

1. Ve a [Google Drive](https://drive.google.com)
2. Crea una carpeta, ej. `"TiendaProductos"`
3. Dentro de ella, crea subcarpetas con los nombres de tus categorías:
   - `Anime`
   - `Amor y amistad`
   - `Autos`
   - Etc.
4. Sube imágenes a cada subcarpeta
5. **Comparte la carpeta raíz** con el email de tu cuenta de servicio (el email del JSON):
   - Click derecho → **Compartir**
   - Pega el email: `tu-correo-servicio@tu-proyecto.iam.gserviceaccount.com`
   - Dale permisos de **Visor** (sin permiso de edición)
   - Haz clic en **Compartir**

### Paso 7: Obtener el ID de la carpeta raíz

1. Abre la carpeta raíz en Drive
2. Copia el ID de la URL:
   - URL: `https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ`
   - ID: `1aBcDeFgHiJkLmNoPqRsTuVwXyZ`
3. Pégalo en `.env`:
   ```env
   DRIVE_FOLDER_ID=1aBcDeFgHiJkLmNoPqRsTuVwXyZ
   ```

✅ **¡Listo!** Ya puedes correr la app localmente con `npm run dev`

---

---

## 📁 Estructura del Proyecto

```
EcommerceOSOweb/
├── api/                          # Funciones serverless de Vercel
│   ├── products.js              # GET /api/products - Obtiene catálogo desde Drive
│   └── logo.ts                  # GET /api/logo - Obtiene logo desde Drive (opcional)
│
├── public/                       # Assets estáticos (imágenes de fallback)
│   └── imagenes/
│       ├── logo1.png
│       ├── logo2.png
│       └── Mockups camisetas/   # Ejemplos de estructura de Drive
│
├── src/                          # Código fuente del frontend
│   ├── componentes/              # Componentes reutilizables
│   │   ├── header.tsx           # Header con filtros y logo
│   │   └── footer.tsx           # Footer con información de contacto
│   │
│   ├── context/                  # Context API para estado global
│   │   └── DarkModeContext.tsx  # Control de tema oscuro/claro
│   │
│   ├── paginas/                  # Páginas principales
│   │   └── homePage.tsx         # Lógica principal (catálogo, carrito, checkout)
│   │
│   ├── App.tsx                  # Componente raíz con rutas
│   ├── main.tsx                 # Punto de entrada
│   └── index.css                # Estilos globales
│
├── .env.example                 # Plantilla de variables de entorno
├── .env                         # Variables de entorno (ignorado en .gitignore)
├── vite.config.ts              # Configuración de Vite con proxy para API
├── vercel.json                 # Configuración de despliegue en Vercel
├── tsconfig.json               # Configuración de TypeScript
├── eslint.config.js            # Configuración de linting
├── package.json                # Dependencias del proyecto
└── README.md                   # Este archivo
```

---

## 🚀 Despliegue en Vercel

### 1. Sube el código a GitHub

```bash
git add .
git commit -m "Configuración inicial de EcommerceOSOweb"
git push origin main
```

### 2. Conecta Vercel con tu repositorio

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"New Project"**
3. Selecciona **"Import Git Repository"**
4. Elige tu repositorio de GitHub
5. Haz clic en **"Import"**

### 3. Configura las variables de entorno

1. En el panel de Vercel, ve a **"Settings"** → **"Environment Variables"**
2. Agrega cada variable del archivo `.env`:
   - `GOOGLE_PROJECT_ID`
   - `GOOGLE_PRIVATE_KEY_ID`
   - `GOOGLE_PRIVATE_KEY` (con los `\n` literales)
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_CLIENT_ID`
   - `DRIVE_FOLDER_ID`

### 4. Despliega

1. Vercel detectará automáticamente el proyecto Vite
2. Haz clic en **"Deploy"**
3. Espera a que termine (2-5 minutos)
4. Tu app estará disponible en `https://tu-proyecto.vercel.app`

✅ **¡Listo!** La aplicación está en producción.

---

## 📊 Gestión de Productos en Google Drive

### Estructura recomendada

```
TiendaProductos/                    # Carpeta raíz (DRIVE_FOLDER_ID)
├── Anime/
│   ├── Naruto.jpg
│   ├── Dragon Ball.jpg
│   └── One Piece.jpg
├── Amor y amistad/
│   ├── Parejas.jpg
│   ├── Bestfriends.jpg
│   └── Familia.jpg
├── Autos/
│   ├── Ferrari.jpg
│   ├── Lamborghini.jpg
│   └── Mercedes.jpg
└── Religioso/
    ├── Cruz.jpg
    └── Virgen María.jpg
```

### Convenciones importantes

- ✅ **Nombre de archivo = Título del producto**: `Naruto.jpg` → Producto llamado "Naruto"
- ✅ **Formato de imagen**: JPG, PNG (recomendado JPG para optimizar)
- ✅ **Tamaño recomendado**: 800x600px o mayor (se sirven en 1600px en el modal)
- ✅ **Estructura de carpetas**: Carpeta raíz → Subcarpetas (categorías) → Imágenes (productos)
- ❌ **No incluyas archivos que no sean imágenes** en las subcarpetas (pueden causar errores)

### Agregar/Modificar Productos

1. **Agregar producto**: Sube una nueva imagen a la carpeta de la categoría
2. **Modificar nombre**: Renombra el archivo (ej. `Naruto v2.jpg`)
3. **Cambiar imagen**: Reemplaza el archivo (mantén el mismo nombre)
4. **Crear categoría**: Crea una nueva subcarpeta y sube imágenes
5. **Eliminar producto**: Borra la imagen de la carpeta

**Los cambios se reflejan instantáneamente en la web.**

### Asignar "Top Ventas"

Los 3 primeros productos de cada categoría (por orden alfabético) se marcan automáticamente como "Top Ventas". Si quieres cambiar cuál se destaca, renombra los archivos con prefijos numéricos:

```
1. Naruto.jpg       → Mostrado primero (Top Ventas)
2. Dragon Ball.jpg  → Mostrado segundo (Top Ventas)
3. One Piece.jpg    → Mostrado tercero (Top Ventas)
4. Bleach.jpg       → Mostrado cuarto
```

---

## ⚙️ Endpoints API

### GET /api/products

Devuelve el catálogo completo desde Google Drive.

**Respuesta:**
```json
[
  {
    "id": 1,
    "title": "Naruto",
    "category": "Anime",
    "price": "$25.000",
    "badge": "Top ventas",
    "image": "https://drive.google.com/thumbnail?id=...",
    "description": "Camiseta Naruto Uzumaki"
  },
  {
    "id": 2,
    "title": "Dragon Ball",
    "category": "Anime",
    "price": "$25.000",
    "badge": "Top ventas",
    "image": "https://drive.google.com/thumbnail?id=...",
    "description": "Camiseta Goku Super Saiyan"
  }
]
```

### GET /api/logo

Obtiene el logo desde la carpeta raíz de Drive (si existe un archivo llamado "logo").

**Respuesta:**
```json
{
  "logoUrl": "https://drive.google.com/thumbnail?id=..."
}
```

---

## 🔄 Flujo de Trabajo

1. **Usuario accede a la página** → Se carga `homePage.tsx`
2. **Frontend hace fetch** → `GET /api/products`
3. **Función serverless** → Se conecta a Drive con Service Account
4. **API lee estructura** → Subcarpetas (categorías) + imágenes (productos)
5. **Devuelve JSON** → Array de productos con URLs de imágenes
6. **Frontend renderiza** → Grilla de productos con filtros
7. **Usuario interactúa** → Filtra, agrega al carrito, envía WhatsApp
8. **Carrito → WhatsApp** → Genera link preformateado: `https://wa.me/57123456789?text=...`

---

## 🌍 Variables de Entorno

### `.env` (local y Vercel)

```env
# Google Cloud Service Account
GOOGLE_PROJECT_ID=tu-id-proyecto
GOOGLE_PRIVATE_KEY_ID=tu-private-key-id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTu_clave_privada_aqui\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=tu-correo-servicio@tu-proyecto.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=tu-client-id

# Google Drive
DRIVE_FOLDER_ID=id-de-tu-carpeta-raiz-en-drive
```

### Descripción de cada variable

| Variable | Descripción | Origen |
|---|---|---|
| `GOOGLE_PROJECT_ID` | ID del proyecto en Google Cloud | JSON descargado |
| `GOOGLE_PRIVATE_KEY_ID` | ID de la clave privada | JSON descargado |
| `GOOGLE_PRIVATE_KEY` | Clave privada (con `\n` literales) | JSON descargado |
| `GOOGLE_CLIENT_EMAIL` | Email de la cuenta de servicio | JSON descargado |
| `GOOGLE_CLIENT_ID` | ID de cliente de Google | JSON descargado |
| `DRIVE_FOLDER_ID` | ID de la carpeta raíz en Drive | URL de Drive |

---

## 🔧 Solución de Problemas

### ❌ Error: "Variables de entorno faltantes"

**Causa:** Faltan credenciales de Google Cloud.

**Solución:**
1. Verifica que `.env` exista en la raíz del proyecto
2. Completa todas las variables requeridas
3. Reinicia el servidor (`npm run dev` o `vercel dev`)

```bash
# Verifica que el archivo exista
cat .env

# Si no existe, cópialo desde el ejemplo
cp .env.example .env
```

---

### ❌ Error: "Configuración incompleta" (en /api/products)

**Causa:** Variables mal formateadas o incompletas.

**Solución:**
1. Verifica que `GOOGLE_PRIVATE_KEY` tenga la estructura correcta:
   ```
   ✅ Correcto:   "-----BEGIN PRIVATE KEY-----\nContenido\n-----END PRIVATE KEY-----\n"
   ❌ Incorrecto: "-----BEGIN PRIVATE KEY-----" (sin \n)
   ```
2. Si estás en Vercel, revisa las Environment Variables en el dashboard

---

### ❌ Error: "Acceso denegado" o "Permisos insuficientes"

**Causa:** La carpeta de Drive no está compartida con la cuenta de servicio.

**Solución:**
1. Abre la carpeta raíz en Google Drive
2. Haz clic derecho → **"Compartir"**
3. Pega el email de la cuenta de servicio (del JSON): `tu-correo-servicio@tu-proyecto.iam.gserviceaccount.com`
4. Elige permiso **"Visor"** (lectura)
5. Haz clic en **"Compartir"**

---

### ❌ Error: "404 - No products found" o catálogo vacío

**Causa:** `DRIVE_FOLDER_ID` es incorrecto o la carpeta no tiene subcarpetas.

**Solución:**
1. Verifica el ID desde la URL de Drive:
   ```
   https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ
                                        ↑ Este es el ID
   ```
2. Crea al menos una subcarpeta (categoría) con imágenes dentro
3. Las imágenes deben tener extensión `.jpg`, `.png`, etc.

---

### ❌ Imágenes no cargan o son muy lentas

**Causa:** Google Drive limita la descarga directa. Las URLs expiran.

**Solución:**
1. Usa imágenes JPG en lugar de PNG (más pequeñas)
2. Redimensiona las imágenes a 800x600px mínimo
3. Implementa caché en el frontend (ya incluido en `homePage.tsx`)
4. En Vercel, activa **"Serverless Function Cache"** en settings

---

### ❌ WhatsApp no abre o el link está mal formado

**Causa:** El número de WhatsApp o el mensaje tienen caracteres especiales.

**Solución:**
1. En `homePage.tsx`, verifica que `whatsappNumber` sea válido:
   ```typescript
   const whatsappNumber = "573001234567"; // SIN +, SIN espacios, SIN dashes
   ```
2. El enlace debe ser: `https://wa.me/573001234567?text=Hola%20quiero%20comprar...`

---

### ❌ Tema oscuro no se guarda

**Causa:** localStorage está deshabilitado o hay conflicto de contexto.

**Solución:**
1. Verifica que localStorage esté habilitado en el navegador
2. Borra el caché: `Ctrl+Shift+Del` → Cookies y caché de sitios
3. Recarga la página

---

## 🎨 Personalización

### 1. Cambiar colores del tema

Edita `tailwind.config.js` o los archivos CSS:

```css
/* src/index.css */
:root {
  --primary: #007bff;    /* Color primario */
  --secondary: #6c757d;  /* Color secundario */
  --success: #28a745;    /* Color de éxito */
  --danger: #dc3545;     /* Color de peligro */
}
```

### 2. Personalizar información de contacto

En `src/paginas/homePage.tsx`, edita estas variables:

```typescript
const whatsappNumber = "573001234567";  // Tu número de WhatsApp
const contactEmail = "tu@email.com";
const contactPhone = "+57 300 000 0000";
const contactLocation = "Tu Ciudad, Tu País";
```

### 3. Cambiar el nombre de la tienda

Edita `src/componentes/header.tsx`:

```typescript
<h1 className="text-3xl font-bold">Tu Tienda OSO</h1>
```

### 4. Modificar mensajes de WhatsApp

En `homePage.tsx`, busca la función que genera el mensaje:

```typescript
const generateWhatsAppMessage = () => {
  // Personaliza el formato del mensaje aquí
};
```

### 5. Cambiar las diapos del hero (slider)

En `homePage.tsx`, edita el array `heroSlides`:

```typescript
const heroSlides = [
  {
    title: "Tu nuevo título 1",
    subtitle: "Tu nuevo subtítulo 1",
  },
  {
    title: "Tu nuevo título 2",
    subtitle: "Tu nuevo subtítulo 2",
  },
];
```

### 6. Agregar más campos al carrito/checkout

En `homePage.tsx`, agrega propiedades a `checkoutForm`:

```typescript
const [checkoutForm, setCheckoutForm] = useState({
  nombre: "",
  ubicacion: "",
  notas: "",
  telefonoAlterno: "",  // Nuevo campo
  referenciaEntrega: "", // Nuevo campo
});
```

### 7. Cambiar cantidad de productos por página

En `homePage.tsx`, edita estas constantes:

```typescript
const ROWS_PER_BATCH = 3;           // Filas por lote en desktop
const MAX_CARDS_PER_ROW = 4;        // Columnas en desktop
const MOBILE_PRODUCTS_BATCH_SIZE = 8; // Productos por lote en móvil
```

### 8. Agregar filtros personalizados

Por ejemplo, filtrar por rango de precio:

```typescript
const filteredProducts = driveProducts.filter((product) => {
  const price = parsePrice(product.price);
  return price >= minPrice && price <= maxPrice;
});
```

---

## 📚 Documentación adicional

- [React 19 Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Drive API](https://developers.google.com/drive/api)
- [Vercel Functions](https://vercel.com/docs/functions/serverless-functions)

---

## 💡 Mejoras Futuras

- [ ] Caché en Vercel para reducir llamadas a Drive
- [ ] Soporte para vídeos en el modal
- [ ] Sistema de favoritos persistente
- [ ] Paginación con scroll infinito
- [ ] Internacionalización (i18n) - Español, Inglés, Portugués
- [ ] Sistema de reseñas/calificaciones
- [ ] Notificaciones por email automáticas
- [ ] Dashboard administrativo básico
- [ ] Estadísticas de visitas
- [ ] Soporte para múltiples divisas

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia **MIT**. Siéntete libre de usarlo como base para tu propio negocio o portafolio.

```
MIT License

Copyright (c) 2026 EcommerceOSOweb Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👥 Contribuciones

¿Quieres mejorar EcommerceOSOweb? Las contribuciones son bienvenidas.

1. **Fork** el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Soporte

¿Tienes dudas o encontraste un bug?

- 📧 Abre un **Issue** en GitHub
- 💬 Contáctanos en WhatsApp
- 🐛 Reporta bugs con pasos detallados para reproducir

---

## ✍️ Créditos

Desarrollado con ❤️ como solución para pequeños negocios y emprendedores.

**Stack tecnológico:**
- React 19 + TypeScript
- Vite
- Tailwind CSS
- Vercel Functions
- Google Drive API

**Agradecimientos especiales a:**
- [React Team](https://react.dev)
- [Vercel](https://vercel.com)
- [Google Cloud](https://cloud.google.com)
- [Tailwind Labs](https://tailwindcss.com)

---

## 🌟 ¿Te gustó el proyecto?

Si EcommerceOSOweb te fue útil, considera darle una ⭐ en GitHub. ¡Tu apoyo nos motiva a seguir mejorando!

---

**Última actualización:** Marzo 2026
