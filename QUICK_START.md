# ⚡ Inicio Rápido (5 minutos)

## 📌 Antes de empezar

Necesitas:
1. Node.js 18+ instalado
2. Una cuenta de Google Cloud
3. Una carpeta en Google Drive con imágenes

---

## 🚀 5 Pasos para empezar

### 1️⃣ Clonar y instalar

```bash
git clone https://github.com/tu-usuario/EcommerceOSOweb.git
cd EcommerceOSOweb
npm install
```

### 2️⃣ Crear Service Account en Google Cloud

1. Ve a [console.cloud.google.com](https://console.cloud.google.com)
2. Crea un nuevo proyecto
3. Activa **Google Drive API**
4. Ve a **Credenciales** → Crea una **Cuenta de servicio**
5. Agrega una clave JSON y descárgala

### 3️⃣ Configurar `.env`

```bash
cp .env.example .env
```

Abre el JSON descargado y copia los valores a `.env`:

```env
GOOGLE_PROJECT_ID=tu-id
GOOGLE_PRIVATE_KEY_ID=tu-key-id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=tu-email@...gserviceaccount.com
GOOGLE_CLIENT_ID=tu-client-id
DRIVE_FOLDER_ID=tu-carpeta-id
```

### 4️⃣ Preparar carpeta en Drive

1. Ve a [drive.google.com](https://drive.google.com)
2. Crea una carpeta: `TiendaProductos`
3. Dentro, crea subcarpetas: `Anime`, `Autos`, `Amor`, etc.
4. Sube imágenes a cada subcarpeta
5. Comparte la carpeta con el email de tu Service Account (permisos de Visor)

### 5️⃣ Ejecutar

```bash
npm run dev
```

Abre `http://localhost:5173` y ¡listo! 🎉

---

## 🔗 Obtener el ID de tu carpeta Drive

En Drive, abre tu carpeta y copia el ID de la URL:

```
https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ
                                       ↑ Este es el ID
```

---

## ⚠️ Problemas comunes

### ❌ "Variables de entorno faltantes"
→ Verifica que `.env` esté en la raíz y tenga todos los valores

### ❌ "Acceso denegado"
→ Comparte la carpeta de Drive con el email de tu Service Account

### ❌ Catálogo vacío
→ Asegúrate de tener subcarpetas CON imágenes dentro

---

## 📚 Documentación completa

Lee [README.md](./README.md) para más detalles sobre:
- Despliegue en Vercel
- Personalización
- Troubleshooting avanzado
- API endpoints

---

## 💬 ¿Dudas?

Abre un **Issue** en GitHub o revisa la sección de [Solución de problemas](./README.md#-solución-de-problemas).

¡Buena suerte! 🚀

