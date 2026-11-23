# Portafolio de Alejandra Blanco

Sitio estático en HTML, CSS y JavaScript. No necesita instalar nada para verlo ni para publicarlo.

## Estructura

```
portafolio/
├── index.html   contenido de la página
├── styles.css   colores, tipografías y diseño (tema claro y oscuro)
├── script.js    botón de copiar correo
└── README.md
```

## Verlo en VS Code

1. Abre la carpeta `portafolio` en VS Code (Archivo > Abrir carpeta).
2. Instala la extensión **Live Server** (de Ritwick Dey).
3. Clic derecho en `index.html` > **Open with Live Server**. La página se recarga sola cuando guardas cambios.

## Qué editar

- **Textos y proyectos:** `index.html`. Cada proyecto es un bloque `<article class="card">`; copia uno para añadir otro.
- **Colores:** bloque `:root` al inicio de `styles.css`. Hay una paleta clara y otra oscura.
- **Contacto:** sección `id="contacto"` en `index.html`.

## Publicarlo (elige una opción)

### Opción A: Vercel (recomendada)

1. Sube la carpeta a un repositorio nuevo en GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/AlejandraWhite/portafolio.git
   git push -u origin main
   ```
2. Entra a [vercel.com/new](https://vercel.com/new), importa el repositorio y pulsa **Deploy**. No cambies ninguna configuración: es un sitio estático.
3. Cada `git push` a `main` publica los cambios automáticamente.

### Opción B: GitHub Pages

1. Sube el repositorio como en la opción A.
2. En GitHub: **Settings > Pages > Build and deployment**, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
3. Tu sitio queda en `https://alejandrawhite.github.io/portafolio/`.

## Dominio propio

Un dominio como `alejandrablanco.dev` o `alejandrablanco.com` se ve más profesional que la dirección gratuita. En Vercel: **Settings > Domains > Add**, y sigue las instrucciones para apuntar el dominio. Los dominios se compran aparte (por ejemplo en Namecheap, Porkbun o Cloudflare).

## Antes de publicar

- Revisa que las descripciones de los proyectos sean correctas.
- Las imágenes de Globix están en la carpeta `img/` (formato WebP, ya optimizadas). Para añadir capturas de otros proyectos, guárdalas ahí y enlázalas con `<img src="img/archivo.webp" alt="descripción">`.
- Cuando tengas la URL pública de Globix, descomenta el enlace "Ver Globix en vivo" en la tarjeta de Globix de `index.html` y cambia la dirección.
