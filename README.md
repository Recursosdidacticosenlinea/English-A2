# CAA English A2

Sitio web de práctica autónoma de inglés, nivel A2, del CAA Virtual (BUAP).
50 unidades organizadas en 10 módulos según los descriptores A2 del Marco Común Europeo de Referencia para las Lenguas (MCER / CEFR).
Todo el contenido para alumnos está en inglés. Usa el mismo motor que *CAA English A1*.

## Temario

| Módulo | Descriptor MCER A2 | Unidades |
| --- | --- | --- |
| 1 · Me and My World | Rutinas, intereses y planes; mantener una conversación | 1 Getting to Know You · 2 Talking About Personal Objects · 3 A Typical Week · 4 My Plans for the Weekend · 5 What Are You Into? |
| 2 · Looking Back | Hechos y hábitos del pasado; contar una historia | 6 My Last Vacation · 7 What Were You Doing? · 8 When I Was Young · 9 A Funny Thing Happened… · 10 Famous Lives |
| 3 · Experiences | Experiencias, noticias recientes, duración (presente perfecto) | 11 Have You Ever…? · 12 Have You Done It Yet? · 13 How Long Have You Lived Here? · 14 The Best Day Ever · 15 What's New? |
| 4 · Places and Comparisons | Comparar lugares y cosas; moverse por la ciudad | 16 City or Country? · 17 The Biggest in the World · 18 My Dream House · 19 Getting Around Town · 20 A Weekend Away |
| 5 · Health and Lifestyle | Salud, consejos y hábitos saludables | 21 Are You OK? · 22 A Healthy Lifestyle · 23 At the Doctor's · 24 Sports and Fitness · 25 Stress-Free |
| 6 · Food and Shopping | Restaurantes, compras, dinero, problemas sencillos | 26 Let's Get Cooking! · 27 Shopping for Clothes · 28 Eating Out · 29 Money, Money, Money · 30 Shopping Online |
| 7 · Work and Study | Trabajo, reglas, estudios, entrevistas, teléfono | 31 Rules at Work · 32 A Job Interview · 33 Learning Languages · 34 My Future Career · 35 On the Phone |
| 8 · People and Relationships | Describir personas, amistad, ofrecer y pedir | 36 The One Who… · 37 Best Friends · 38 Make or Do? · 39 Something Special · 40 A Good Neighbor |
| 9 · The World Around Us | Noticias, clima, instrucciones, medio ambiente | 41 Wild Weather · 42 Go Green · 43 How It's Made · 44 In the News · 45 Gadgets |
| 10 · Plans and Dreams | Planes, posibilidades, condiciones y proyecto final | 46 Future Plans · 47 If It Rains… · 48 It Might Happen · 49 At the Airport · 50 My A2 Journey |

Las unidades 2, 4, 6, 7, 11, 21, 26 y 27 vienen del sitio *CAA English Practice* (con el speaking actualizado); las otras 42 son nuevas.

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal: 10 módulos, buscador, filtro por módulo y barra de progreso. |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Ajustes del sitio: dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad (50) | Cada unidad completa: `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

## 1. Publicar en GitHub Pages (en dos partes)

GitHub solo deja subir 100 archivos a la vez desde el navegador, por eso el sitio viene en dos partes.

1. Crea un repositorio público en github.com, por ejemplo `caa-english-a2`.
2. Descomprime **parte 1** y sube todo su contenido (no la carpeta en sí): **Add file → Upload files → Commit changes**.
3. Descomprime **parte 2** y sube su contenido al mismo repositorio, de la misma forma.
4. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
5. En 1–2 minutos el sitio queda en `https://TU-USUARIO.github.io/caa-english-a2/`.
6. En Google Sites: **Insertar → Insertar → Por URL**, y pega esa dirección.

## 2. Recibir los textos de writing

Sin configurar nada, el alumno descarga su texto y lo entrega al asesor.
Para recibirlos automáticamente en una hoja de Google, sigue los pasos al inicio de `tools/writing-collector.gs` y pega la URL en `assets/config.js`.

## 3. Speaking

Cada unidad tiene dos actividades de speaking:

1. **Listen and repeat (pronunciación):** 6 frases de la unidad. El alumno escucha la frase (normal o lenta), la dice y la página le da un porcentaje. Las palabras que se entendieron salen en verde y las que no, en rojo. Necesita 70 % para aprobar cada frase. Usa el reconocimiento de voz del navegador:
   - Funciona en **Google Chrome, Microsoft Edge y Safari** (también en celular). En Firefox no hay calificación: el alumno puede escuchar, repetir y grabarse.
   - Necesita internet y permiso del micrófono. Chrome y Edge mandan la voz a un servicio en línea (Google / Microsoft) para reconocerla.
   - Es una aproximación: mide si el navegador **entendió** las palabras, no evalúa sonidos uno por uno. Sirve como práctica, no como examen.
   - Para cambiar las frases de una unidad, edita la lista `items` de la actividad `type: "repeat"` en su `data.js`.
2. **Grabación individual (evidencia):** el alumno graba en la página y descarga su audio para subirlo a la plataforma del curso.

En `assets/config.js` escribe el nombre y el enlace de la plataforma (`speakingPlatformName`, `speakingPlatformUrl`).

## 4. Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon su `number` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html` con su módulo (`mod`).

## Notas

- El progreso se guarda en el navegador con la clave `a2:` (distinta de `a1:` y `caa:`), así que no se mezcla aunque los sitios estén en la misma cuenta de GitHub.
- Los audios usan las voces del navegador. Cada personaje tiene voz de mujer u hombre en `speakers` dentro de su `data.js`. Las voces más naturales están en Microsoft Edge y Google Chrome.
- La grabación de voz necesita `https://` (GitHub Pages lo tiene) y que el alumno permita el micrófono.
