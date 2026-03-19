# Guia paso a paso: demo limpia para portafolio

## Como llamarlo en tu portafolio

Nombre recomendado (profesional y preciso):

**Catalogo e-commerce conversacional administrable por Google Drive**

Tambien puedes usar:

- **Storefront de camisetas con carrito y checkout por WhatsApp**
- **Catalogo dinamico administrable (Drive + API serverless)**
- **Mini e-commerce sin pasarela de pago (con cierre por WhatsApp)**

> Nota: no es un e-commerce completo tradicional (no hay pasarela ni panel admin clasico), pero si es un **e-commerce ligero/medio** con gestion de catalogo, carrito y conversion por WhatsApp.

---

## Objetivo

Crear una copia profesional del proyecto para mostrarla en portafolio, separada del repo principal, limpia de secretos y lista para desplegar.

---

## Checklist rapido

- [ ] Copiar proyecto a una carpeta nueva
- [ ] Reiniciar historial git (repo nuevo)
- [ ] Limpiar variables y secretos
- [ ] Verificar que `api/products` responde
- [ ] Subir repo demo a GitHub
- [ ] Desplegar en Vercel y cargar variables de entorno
- [ ] Documentar el caso en el `README.md`

---

## 1) Crear repo nuevo y limpio

```zsh
cd /home/zoyeras/programacion
cp -a OSOweb OSOweb-demo
cd OSOweb-demo
rm -rf .git
git init
git add .
git commit -m "init: demo limpia para portafolio"
```

---

## 2) Limpiar secretos y configuracion sensible

1. Asegura que **no** se suba `.env` real.
2. Deja un `.env.example` con placeholders:

```env
GOOGLE_PROJECT_ID=
GOOGLE_PRIVATE_KEY_ID=
GOOGLE_PRIVATE_KEY=
GOOGLE_CLIENT_EMAIL=
GOOGLE_CLIENT_ID=
DRIVE_FOLDER_ID=
```

3. Verifica `.gitignore` (si no existe, crealo):

```gitignore
node_modules/
dist/
.env
.env.*
!.env.example
```

4. En `vercel.json`, deja solo referencias a secrets de Vercel (sin valores reales).

---

## 3) Probar localmente antes de publicar

```zsh
npm install
npm run dev
```

Validaciones minimas:

- La pagina carga sin errores graves en consola.
- `GET /api/products` responde correctamente.
- Productos visibles por categoria.
- Carrito agrega productos y checkout abre WhatsApp con mensaje estructurado.

---

## 4) Subir demo a GitHub

```zsh
git branch -M main
git remote add origin git@github.com:TU_USUARIO/oso-web-demo.git
git push -u origin main
```

---

## 5) Desplegar en Vercel

1. Importa `oso-web-demo` en Vercel.
2. Configura estas variables en Project Settings -> Environment Variables:
   - `GOOGLE_PROJECT_ID`
   - `GOOGLE_PRIVATE_KEY_ID`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_CLIENT_ID`
   - `DRIVE_FOLDER_ID`
3. Confirma que Google Drive API esta habilitada para el proyecto GCP.
4. Redeploy.

Prueba final en produccion:

- `https://TU-DOMINIO/api/products`
- Home con productos cargados
- Filtros por categoria
- Carrito + mensaje de WhatsApp

---

## 6) Dejarlo listo para portafolio (importa mucho)

En `README.md` incluye:

1. Problema que resuelve (venta de camisetas con catalogo dinamico).
2. Solucion tecnica (React + TypeScript + Vite + Vercel + Google Drive API).
3. Features clave:
   - categorias dinamicas por carpetas
   - carga incremental de productos
   - modal de vista previa
   - carrito
   - checkout conversacional por WhatsApp
4. Capturas o GIF.
5. Link del demo en vivo.

---

## 7) Frases listas para usar (CV/LinkedIn/portafolio)

- "Desarrolle un catalogo e-commerce conversacional administrable por Google Drive, con frontend en React + TypeScript y API serverless en Vercel."
- "Implemente carga dinamica por categorias, carrito y flujo de cierre por WhatsApp con mensaje estructurado."
- "Disene una arquitectura ligera sin CMS pesado, permitiendo administracion de productos via carpetas e imagenes en Drive."

---

## Recomendacion de naming final

Si quieres una etiqueta clara y vendible:

**"Demo de catalogo e-commerce conversacional administrable"**

Te posiciona mejor que "medio e-commerce" y refleja exactamente lo que construiste.

