# Rutas CDMX — paquete para celu 📱

Solo celu, nada de compu. Esto NO es el código original de Muse: esa app es fullstack y **no se puede exportar** (`artifact.export` lo rechaza). Esto es una **reconstrucción estática real** que sí funciona y sí puedes subir tú desde el teléfono.

## Qué trae
- `index.html` + `styles.css` + `app.js` + `data.js` — la app completa, abre en el navegador del celu.
- Catálogo verificado nov 2026: Metro 12 líneas ($5), Metrobús 7 ($6, aeropuerto $30), Trolebús 0–14, Cablebús 1–3 ($7), Tren Ligero ($3), El Insurgente ($15–$100), RTP 34-A, 34-B, 47-A, 57-A, 165-A. Con fuentes en `data.js`.
- Buscador origen/destino con calle y número (Nominatim, gratis, sin clave), GPS con triángulo azul, mapa OpenStreetMap, caminata con OSRM, Casa/Trabajo guardados, Comunidad (solo en tu celu), En vivo con 2 alertas reales de Iztapalapa del 12 nov 2026.
- `capacitor.config.json` + `package.json` + `vercel.json` + `netlify.toml` para subirlo y hacer el APK.

## Qué NO trae (vs la app original)
- No trae la base de datos compartida, ni reportes en vivo de otros usuarios, ni la IA del servidor, ni el radar que se actualiza solo. En esta versión los datos de Comunidad y las alertas son solo locales.
- No trae claves ni contraseñas. No subas ninguna clave a GitHub.

## Paso 1 — pruébala en el celu
1. Baja este ZIP, descomprímelo con la app Archivos de tu OPPO.
2. Abre `index.html` en Chrome. Debe abrir el catálogo y el mapa.
3. Prueba: origen “Santa Martha”, destino “Constitución de 1917” → Buscar ruta.

## Paso 2 — súbela (desde el celu, app GitHub)
1. En la app de GitHub crea un repo nuevo, por ejemplo `rutas-cdmx`.
2. Sube toda esta carpeta (en GitHub app: + → Subir archivos, o desde Acode con Git).
3. En la app de **Vercel** (o Netlify) conecta ese repo → Deploy. Te da un enlace `https://…` — esa ya es tu URL pública.

## Paso 3 — haz el APK (desde el celu, Termux)
1. Instala **Termux** de F-Droid, ábrelo y escribe:
   `pkg install nodejs git openjdk-17 -y`
   `npm i -g @capacitor/cli`
2. En Termux entra a la carpeta del proyecto y escribe:
   `npm install`
   `npx cap add android`
   `npx cap sync`
   `cd android && ./gradlew assembleDebug`
3. El APK queda en `android/app/build/outputs/apk/debug/app-debug.apk`. Pásalo a Descargas e instálalo (permite “instalar apps desconocidas” solo para ese archivo).

> Si Termux te pide mucho espacio o tarda, alternativa: sube el repo a un builder online de Capacitor (desde Chrome del celu) y descarga el APK ahí. No subas la app a Play Store sin leer `../PLAN-DESCARGA-PRIVADA.md`.

## Si algo falla
- Mapa en blanco: revisa que tengas internet (el mapa y Nominatim lo necesitan; el catálogo no).
- “No ubiqué ese lugar”: escribe calle + número + colonia, ej. “Av. Ermita Iztapalapa 123, Iztapalapa”.
- El ZIP se verifica con: `unzip -l rutas-cdmx-celu.zip`
