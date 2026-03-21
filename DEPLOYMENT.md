# 🚀 Guía de Despliegue

Esta guía te ayudará a desplegar tu tienda en **Vercel** en minutos.

---

## 📋 Requisitos

- Código en un repositorio de GitHub
- Cuenta en [Vercel](https://vercel.com) (conectada con GitHub)
- Credenciales de Google Cloud (variables de entorno)

---

## 🔄 Paso 1: Preparar el repositorio

### 1.1 Crear repositorio en GitHub

```bash
git init
git add .
git commit -m "Configuración inicial"
git branch -M main
git remote add origin https://github.com/tu-usuario/EcommerceOSOweb.git
git push -u origin main
```

### 1.2 Verificar estructura

Asegúrate de que el repositorio tenga:
- ✅ `api/products.js`
- ✅ `src/` con todo el código React
- ✅ `package.json`
- ✅ `vercel.json` (ya incluido)
- ✅ `vite.config.ts`

---

## 🌐 Paso 2: Conectar Vercel

### 2.1 Ir a Vercel

1. Abre [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub (si no tienes, crea una)
3. Haz clic en **"New Project"**

### 2.2 Importar repositorio

1. Selecciona **"Import Git Repository"**
2. Busca tu repositorio `EcommerceOSOweb`
3. Haz clic en **"Import"**

### 2.3 Configuración del proyecto

- **Framework Preset**: Vercel detectará Vite automáticamente ✅
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `dist` (automático)

Haz clic en **"Continue"**

---

## 🔑 Paso 3: Configurar variables de entorno

### 3.1 Agregar variables

En la pantalla siguiente, se te pedirá que agregues **Environment Variables**.

Haz clic en **"Add Environment Variable"** para cada una:

| Variable | Valor | Ejemplo |
|---|---|---|
| `GOOGLE_PROJECT_ID` | Tu ID de proyecto | `my-project-12345` |
| `GOOGLE_PRIVATE_KEY_ID` | Tu ID de clave | `abc123def456...` |
| `GOOGLE_PRIVATE_KEY` | Tu clave privada | `-----BEGIN PRIVATE KEY-----\n...` |
| `GOOGLE_CLIENT_EMAIL` | Email de servicio | `app@my-project.iam.gserviceaccount.com` |
| `GOOGLE_CLIENT_ID` | Tu Client ID | `123456789...` |
| `DRIVE_FOLDER_ID` | ID de tu carpeta | `1aBcDeFgHiJkLm...` |

### 3.2 Consejos importantes

- ⚠️ **GOOGLE_PRIVATE_KEY**: Cópiala exactamente como está en el JSON. Debe incluir `\n` literales.
- ℹ️ Puedes pegar directamente el JSON descargado y Vercel lo parseará automáticamente.

---

## ✅ Paso 4: Desplegar

1. Una vez agregadas todas las variables, haz clic en **"Deploy"**
2. Vercel compilará tu proyecto (toma 2-5 minutos)
3. Recibirás un enlace como: `https://tu-proyecto.vercel.app`

🎉 **¡Tu tienda está en vivo!**

---

## 🔍 Verificar que funciona

### En Vercel:

1. Abre el link de tu proyecto
2. Verifica que aparezca el catálogo
3. Prueba los filtros y el carrito

### Si hay error:

1. Ve a **"Deployments"** → último deployment
2. Abre la pestaña **"Functions"**
3. Haz clic en `/api/products` → **"Logs"**
4. Busca el error en los logs

---

## 🔄 Actualizar después del despliegue

### Si cambias el código:

```bash
git add .
git commit -m "Tu mensaje de cambio"
git push origin main
```

✅ Vercel detectará el cambio y redeployará automáticamente.

### Si cambias solo las variables de entorno:

1. Ve a Vercel → tu proyecto
2. **Settings** → **Environment Variables**
3. Haz los cambios necesarios
4. El proyecto se redeployará automáticamente

### Si cambias solo los productos en Drive:

✅ **No necesitas hacer nada.** Los cambios se reflejan al instante en tu tienda.

---

## 💡 Tips de productividad

### Alias de dominio personalizado

1. En Vercel, ve a **Settings** → **Domains**
2. Agrega tu dominio personalizado (ej. `tienda.com`)
3. Sigue las instrucciones para actualizar DNS

### Revisar logs

En Vercel → **Deployments** → Selecciona un deployment → **Functions** → Abre `/api/products` → **Logs**

### Environment Variables por ambiente

Puedes tener variables diferentes para:
- **Production** (lo que ven los clientes)
- **Preview** (para probar cambios)
- **Development** (local)

---

## 🆘 Troubleshooting de despliegue

### ❌ "Deployment failed"

**Verificar:**
1. `package.json` existe y tiene `"build": "tsc -b && vite build"`
2. No hay errores de TypeScript: `npm run build` localmente
3. Todas las dependencias están en `package.json`

### ❌ "Variables de entorno faltantes"

**Verificar:**
1. Las variables están en Vercel → Settings → Environment Variables
2. Se deletrearon exactamente como se esperaba (case-sensitive)
3. `GOOGLE_PRIVATE_KEY` tiene los `\n` literales

### ❌ "API retorna 500 error"

**Verificar:**
1. Logs en Vercel → Deployments → Functions → `/api/products`
2. `DRIVE_FOLDER_ID` es correcto
3. La carpeta de Drive está compartida con `GOOGLE_CLIENT_EMAIL`

### ❌ "Catálogo vacío"

**Causas posibles:**
1. No hay subcarpetas en la carpeta raíz
2. Las subcarpetas no tienen imágenes
3. Las imágenes tienen formato no soportado (debe ser `.jpg`, `.png`, etc.)

---

## 📚 Recursos

- [Documentación de Vercel](https://vercel.com/docs)
- [Guía completa del README](./README.md)
- [Inicio rápido](./QUICK_START.md)

---

## ✨ Siguiente: Personalización

Una vez desplegado, puedes:

1. **Cambiar colores**: Edita `tailwind.config.js` y haz push
2. **Agregar campos**: Modifica `homePage.tsx`
3. **Cambiar texto**: Edita componentes en `src/componentes/`

Lee la sección de [Personalización](./README.md#-personalización) en el README.

---

¡Felicidades! 🎉 Tu tienda está en vivo en Vercel.

