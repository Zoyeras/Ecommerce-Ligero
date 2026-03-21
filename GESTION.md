# 📦 Gestión del catálogo – Demo Store

Este documento explica cómo **administrar los productos y el logo** de la tienda demo sin necesidad de programar. Todo se hace desde Google Drive.

---

## 📁 Estructura de carpetas en Drive

1. **Carpeta raíz** (https://drive.google.com/drive/folders/1p4Pi1lue-H2rM3Vd_O7scD6EGW5NhTo9?usp=sharing).  
   Dentro de ella, **cada subcarpeta es una categoría** (ejemplo: `Navidad`, `Anime`, `Deportes`).

2. Dentro de cada subcarpeta, **cada imagen es un producto**.
    - El **nombre del archivo** (sin extensión) será el título del producto.
    - Puedes usar `-` o `_` para separar palabras; se convertirán en espacios.
    - La **descripción** es fija y usa el nombre de la categoría.

3. **Badges automáticos**:
    - Los primeros 3 productos de cada categoría tendrán el badge `Top ventas`.
    - Los demás tendrán `Disponible`.

---

## 🖼️ Recomendaciones de imágenes

- **Formato**: JPG o PNG.
- **Calidad**: imágenes nítidas para que se vean bien en la web (tamaño sugerido: mínimo 800x800 px).
- **Orientación**: cuadrada o apaisada (se recortan al mostrar en las tarjetas).
- **Nombre**: usa títulos claros (ej. `Camiseta Navideña.png`).

> ⚠️ No uses espacios en el nombre si quieres que se vea bien (los espacios se conservan, pero es mejor usar guiones o mayúsculas).

---

## 🔄 Actualización automática

- Los cambios (agregar, modificar o eliminar imágenes) se reflejan **inmediatamente** en la web.
- No necesitas reconstruir ni redeployar la aplicación.

---

## 🖼️ Logo personalizado

Si quieres que la tienda use un logo propio:

1. Coloca una imagen (preferiblemente PNG con fondo transparente) en la **carpeta raíz** de Drive.
2. Nómbrala con la palabra **`logo`** (ejemplo: `logo.png`, `mi-logo.png`, `logo-empresa.jpg`).
3. La página detectará automáticamente la primera imagen que contenga "logo" en su nombre y la usará en el encabezado y pie de página.

Si no hay logo, se usará el logo local predeterminado (`/imagenes/logo1.png`).

---

## 📦 Agregar nuevos productos

1. Ve a tu carpeta raíz en Google Drive.
2. Crea una nueva subcarpeta (nueva categoría) o entra a una existente.
3. Sube una o más imágenes (JPG/PNG).
4. Espera unos segundos y recarga la página de la tienda. Los nuevos productos aparecerán automáticamente.

---

## ✏️ Modificar productos

- **Cambiar título**: renombra el archivo en Drive.
- **Cambiar categoría**: mueve la imagen a otra subcarpeta.
- **Eliminar producto**: borra la imagen de Drive.
- **Reordenar badges**: si quieres que otro producto sea "Top ventas", asegúrate de que esté entre los primeros 3 por orden alfabético (puedes renombrar los archivos para controlar el orden).

---

## ❌ Eliminar productos o categorías

- **Eliminar una categoría**: borra la subcarpeta (junto con sus imágenes).
- **Eliminar un producto**: borra solo la imagen.
- **Eliminar logo**: borra la imagen que contiene "logo" en la raíz (el sistema usará el logo por defecto).

---

## 🔒 Permisos

Para que la web pueda leer las imágenes, **la carpeta raíz debe estar compartida** con la cuenta de servicio que configuraste al desplegar.  
Si no sabes cuál es, consulta el archivo de credenciales JSON que usaste (campo `client_email`).  
Asegúrate de que la cuenta tenga al menos rol **Lector**.

---

## 🧪 Probar cambios

Después de hacer cualquier modificación en Drive:

1. Abre la tienda en tu navegador.
2. Presiona `Ctrl + F5` (o `Cmd + Shift + R` en Mac) para forzar la recarga de la página.
3. Los cambios deberían verse inmediatamente.

Si algún producto no aparece, verifica que la imagen esté dentro de una subcarpeta y que la carpeta raíz siga compartida con la cuenta de servicio.

---

¿Necesitas ayuda? Consulta el `README.md` para detalles técnicos o abre un issue en el repositorio.