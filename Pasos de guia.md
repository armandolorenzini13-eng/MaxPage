# Mi Proyecto Personal

Plantilla inicial para armar tu propio sitio real, escrita **mobile-first**
y comentada paso a paso, en línea con lo trabajado en Arquitecto Web.

## Qué incluye

- `index.html` — estructura semántica: header con nav, hero, sobre mí,
  proyectos (grid), formulario de contacto y footer.
- `style.css` — todo el CSS base pensado primero para celular, y después
  los breakpoints (`@media`) para tablet (600px) y escritorio (1024px).
- `script.js` — el menú hamburguesa y el año automático del footer.
- Este `README.md`.

## Cómo personalizarlo

1. **Contenido primero.** Abrí `index.html` y reemplazá los textos de
   ejemplo ("Tu Nombre", las descripciones de proyectos, etc.) por los
   tuyos. Reemplazá los `<div class="tarjeta-imagen">` por `<img>` reales
   cuando tengas tus imágenes, con su `alt` descriptivo.
2. **Colores y tipografía.** En `style.css`, arriba de todo, están las
   variables (`:root { --color-primario: ...; }`). Cambiando esos valores
   cambia todo el sitio de una.
3. **Más secciones.** Si agregás una sección nueva en el HTML, copiá el
   patrón de las que ya existen (un `<section>` con su `id`, dentro un
   `.container`) y sumale un link en el `<nav>`.
4. **Breakpoints.** Al final de `style.css` están los dos `@media
   (min-width: ...)`. Si algo se ve mal en tablet o escritorio, es ahí
   donde hay que ajustar — nunca toques el CSS base de mobile para
   "arreglar" el escritorio.

## Cómo probarlo mientras lo editás

Simplemente abrí `index.html` con doble clic — no hace falta servidor.
Para revisar el diseño responsivo:

- Achicá y agrandá la ventana del navegador.
- O abrí las DevTools (`F12`) y usá el ícono de celular/tablet para
  simular distintos dispositivos y orientaciones.

## Cómo publicarlo en internet

La forma más simple y gratuita es **GitHub Pages**:

1. Subí esta carpeta a un repositorio en GitHub (con `index.html` en la
   raíz del repo, no dentro de otra carpeta).
2. En el repositorio: `Settings` → `Pages` → en "Source" elegí la rama
   principal (`main`) y guardá.
3. GitHub te va a dar un link (algo como
   `https://tu-usuario.github.io/tu-repo/`) que podés compartir. Puede
   tardar uno o dos minutos en activarse la primera vez.

Alternativas igual de simples: **Netlify** o **Vercel** — en ambas podés
arrastrar la carpeta directamente a su web y te dan un link al toque.

## Checklist antes de publicarlo

- [ ] Reemplacé todo el contenido de ejemplo por contenido propio
- [ ] Todas las imágenes tienen `alt` descriptivo
- [ ] Probé el sitio en mobile, tablet y escritorio (o simulándolos)
- [ ] Probé el menú hamburguesa en mobile
- [ ] Probé que se pueda navegar todo con el teclado (Tab)
- [ ] El formulario tiene un `<label>` conectado a cada campo
