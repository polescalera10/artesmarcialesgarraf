# Playbook del blog — instrucciones para el agente programado

> Este archivo es la única fuente de verdad para escribir entradas del blog. El agente que lo ejecuta arranca **sin contexto previo**: todo lo que necesita saber está aquí. Leerlo entero antes de tocar nada.

---

## 1. Qué es este sitio (y qué no es)

`artesmarcialesgarraf.es` es una **guía editorial independiente** sobre artes marciales en la comarca del Garraf (Barcelona): Sitges, Vilanova i la Geltrú, Sant Pere de Ribes, Cubelles y Canyelles.

**No es un gimnasio ni una academia.** No tiene instalaciones, ni instructores, ni alumnos, ni horarios propios. Es un recurso que explica cada disciplina y ayuda a la gente a dar el primer paso, y que mantiene un directorio verificado de los centros reales de la comarca.

El modelo de negocio es alquilar o vender la web a un centro real cuando genere tráfico y leads. Eso hace que la credibilidad del contenido **sea el activo**: un solo dato inventado que alguien detecte destruye lo que se está construyendo.

---

## 2. Reglas innegociables

Estas reglas están por encima de cualquier objetivo de tráfico. Si cumplirlas obliga a escribir un artículo peor, se escribe peor.

1. **Cero datos de negocio inventados.** Nunca inventar ni estimar: precios, cuotas, horarios, direcciones, teléfonos, nombres de instructores, número de alumnos, años de antigüedad, reseñas o testimonios. Si un dato no consta en una fuente pública verificable, no se publica.
2. **Nunca nombrar centros concretos en el cuerpo de un artículo.** Para hablar de la oferta real se enlaza a `/centros/`, que es la única página con verificación y fecha por ficha. Así el contenido no caduca y no se favorece a nadie.
3. **Cero afirmaciones de tráfico, resultados o eficacia.** Nada de "el 80 % de los alumnos", "está demostrado que", "en tres meses conseguirás". Si hay una afirmación general del ámbito, se formula como lo que es: lo habitual, lo típico, lo que suele pasar.
4. **Nada de consejo médico, legal ni terapéutico.** En temas de salud, lesiones, embarazo, TDAH o similares: describir el formato de la práctica y remitir explícitamente al profesional correspondiente.
5. **Neutralidad comercial.** Ningún centro recibe trato preferente. Si algún día alguno paga por aparecer, se declarará en su ficha y su enlace llevará `rel="sponsored"` — pero eso no lo decide este agente.
6. **Todo en español de España**, con la terminología marcial en su forma habitual (kata, randori, sparring, clinch, gi).

---

## 3. Estilo

El estándar es el de los artículos ya publicados. Antes de escribir, **abre `src/data/blog-posts.ts` y lee entero uno de los últimos** (`blog/como-elegir-centro-artes-marciales-garraf` o `blog/a-que-edad-empezar-artes-marciales`) para calibrar el tono.

**Voz.** Directa, de igual a igual, con criterio propio. La guía toma partido cuando hay motivo ("nuestra recomendación es", "si ves esto, vete") pero nunca vende. Trata al lector como alguien con prisa y sin ganas de que le den la turra.

**Qué hace que estos artículos no sean genéricos:**
- Empiezan reconociendo la pregunta real que hay detrás de la búsqueda, que casi nunca es la literal.
- Dan la respuesta corta pronto y luego explican por qué la larga importa más.
- Incluyen el matiz incómodo: qué NO esperar, qué es marketing, dónde desconfiar.
- Aterrizan siempre en el Garraf: distancias reales entre municipios (Sitges–Vilanova, 10-15 min en coche; línea R2 Sud), oferta concentrada en Vilanova y Sitges, municipios pequeños que se desplazan.
- Cierran con una sección local que enlaza al directorio y a las guías de municipio, y un CTA a `/contacto/`.

**Estructura.**
- 1.000-1.400 palabras de cuerpo. Menos se queda corto; más se hace pesado.
- 6-9 secciones `<h2>`. `<h3>` solo si una sección lo pide de verdad.
- Los `<h2>` son frases con contenido, no etiquetas: "La respuesta corta, y por qué la larga importa más", no "Introducción".
- Párrafos de 2-4 frases. Listas `<ul>`/`<ol>` cuando hay enumeración real, no para trocear prosa.
- `<strong>` para la idea que el lector debe llevarse si solo lee en diagonal. Con moderación.
- Tablas solo si comparan de verdad (el CSS ya las hace desplazables en móvil).

**Formato del cuerpo.** HTML plano en una plantilla de string. Etiquetas permitidas: `<h2> <h3> <p> <ul> <ol> <li> <strong> <em> <a> <table> <thead> <tbody> <tr> <th> <td>`. Sin `<h1>` (lo pone la plantilla), sin clases CSS, sin `<div>`, sin `<img>`.

**Prohibido en la redacción:** emojis; signos de exclamación en prosa; "¡Descubre…!"; preguntas retóricas encadenadas; "en el mundo de las artes marciales"; "no es solo X, es Y"; "sumérgete", "adéntrate", "desata"; cualquier frase que podría estar en la web de cualquier gimnasio de España. Si una frase no aporta información, se borra.

**Enlazado interno.** Entre 6 y 12 enlaces internos por artículo, con anchor descriptivo (nunca "aquí" o "este enlace"). Usa los destinos que trae la entrada de la cola en `enlaces_internos`, más los que pidan el texto. Enlaza al menos a: una guía de disciplina, `/centros/`, un artículo del blog relacionado y `/contacto/` en el cierre.

---

## 4. Mecánica: cómo se añade una entrada

Cuatro archivos, en este orden. Todos bajo `src/`.

### 4.1 `src/data/blog-posts.ts` — el cuerpo

Añadir dentro de `BLOG_BODIES`, con la clave `'blog/<slug>'`:

```ts
  'blog/<slug>': `
<h2>Primer titular</h2>
<p>…</p>
`,
```

Cuidado con las comillas invertidas y con `${` dentro del texto: es una plantilla de string, hay que escaparlos (`\``, `\${`).

### 4.2 `src/data/pages.ts` — la definición de página

Añadir al principio del array `BLOG_PAGES`:

```ts
  {
    slug: 'blog/<slug>',
    type: 'blog',
    meta: {
      title: '…',        // máximo 60 caracteres, sin excepción
      description: '…',  // entre 120 y 158 caracteres
    },
    h1: '…',
    intro: '…',          // 2-3 frases; es el párrafo del hero, no repite el h1
    body: BLOG_BODIES['blog/<slug>'],
    fecha: 'YYYY-MM-DD', // la fecha real de publicación
    phase: 2,
  },
```

El `title` y la `description` se recortan automáticamente si se pasan, pero un recorte automático queda feo: escríbelos ya dentro del límite.

### 4.3 `src/data/blog-posts.ts` — enlazado entrante

En el mapa `BLOG_POR_TEMA`, añadir el nuevo artículo a la clave o claves que le correspondan (slug de disciplina, o `clases-para-ninos` / `clases-para-mujeres` / `clases-para-adultos` / `iniciacion`). Máximo dos artículos por clave: si la clave ya tiene dos, sustituye el menos relevante. **Sin este paso el artículo nace con 1 enlace entrante en lugar de 15-20.**

### 4.4 `scripts/gen-images.mjs` — tarjeta social e ilustración

En el array `BLOG`, añadir una fila:

```js
  ['<slug>', '<Título corto>', '<icono>', '<subtítulo de una línea>'],
```

- `<Título corto>`: cabe en dos líneas de 17 caracteres. No es el `h1` completo.
- `<icono>`: uno de los nombres de `src/components/LineIcon.astro` — los diez slugs de disciplina, o `brujula`, `mapa-pin`, `personas`, `check-circulo`, `sobre`, `balanza`.

Después, ejecutar `npm run images`. Regenera todo y actualiza `src/data/imagenes-generadas.json`.

---

## 5. Procedimiento de cada tanda

1. `npm install` si hace falta.
2. Leer `content/cola-blog.json`. Coger las **4 primeras entradas con `"estado": "pendiente"`**, ordenando por `prioridad` (1 antes que 2 antes que 3) y, dentro de la misma prioridad, por el orden del archivo.
   - **Estacionalidad:** si estamos en agosto o septiembre, adelantar las entradas con `"estacionalidad": "septiembre"`. En diciembre y enero, las de `"enero"`.
   - **Entradas con `requiere_datos`:** leer ese campo y cumplirlo. Si el dato no existe, **saltar la entrada, dejarla pendiente** y coger la siguiente. No inventar nunca para desbloquearla.
3. Escribir los 4 artículos siguiendo las secciones 2, 3 y 4.
4. `npm run images` y `npm run build`. **El build tiene que quedar en verde.**
5. Verificar sobre `dist/`, y no dar por bueno nada que falle:
   - las 4 páginas nuevas existen en `dist/blog/<slug>/index.html`;
   - `<title>` ≤ 60 caracteres y `meta description` ≤ 160 en las 4;
   - exactamente un `<h1>` por página;
   - el `og:image` de cada una apunta a `/og/blog-<slug>.png` y ese archivo existe;
   - todos los enlaces internos del cuerpo resuelven a una página que existe en `dist/`;
   - `sitemap.xml` incluye las 4 URLs nuevas.
6. Marcar en `content/cola-blog.json` cada entrada publicada: `"estado": "publicado"` y `"publicado_en": "YYYY-MM-DD"`. Añadir su slug al array `publicados`.
7. Actualizar `SITE.ultimaRevision` en `src/data/site.ts` a la fecha de hoy.
8. Un solo commit con los 4 artículos y `git push origin main`. Vercel despliega solo.

**Mensaje de commit:**

```
Blog: <título 1>, <título 2>, <título 3> y <título 4>

Tanda programada de la cola editorial (content/cola-blog.json).
<Una línea por artículo: a qué búsqueda responde.>

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Si algo falla** (build en rojo, verificación que no pasa, una entrada que no se puede escribir sin inventar datos): **no publicar esa entrada**. Publicar las que sí estén bien, dejar la otra pendiente y decirlo con claridad en el resumen final. Es preferible una tanda de tres que un artículo con datos inventados.

---

## 6. La revisión de la cola (rutina de cada 20 días)

Objetivo: que la cola no se agote y que no se repita lo ya publicado.

1. Leer `content/cola-blog.json` entero y listar `src/data/pages.ts` para ver qué hay publicado de verdad.
2. Revisar también las 62 páginas de disciplina, municipio y perfil (`ALL_PAGES` en `src/data/pages.ts`): una entrada de blog **no puede duplicar la intención** de una money page.
3. Proponer **20 entradas nuevas** y añadirlas al final de `cola`, con `"estado": "pendiente"` y el mismo esquema de campos que las existentes (`id` correlativo, `slug`, `h1`, `keyword_principal`, `keywords_secundarias`, `cluster`, `prioridad`, `angulo`, `enlaces_internos`; `estacionalidad` y `requiere_datos` si aplican).
   - Criterio: intención **informacional**, cola larga, con ángulo local del Garraf, y que no canibalice ni un artículo publicado ni una money page.
   - Fuentes de ideas: preguntas que aparecen en los `faq` de `src/data/disciplines.ts` y en los `localFaq` de `src/data/local-content.ts` que aún no tengan artículo; huecos de cobertura conocidos (fitboxing, kung fu, aikido, grappling); estacionalidad del calendario; y variantes de las entradas que mejor encajen con lo ya publicado.
4. Marcar como `"estado": "descartada"` (con `"motivo"`) cualquier entrada pendiente que haya quedado obsoleta o que se solape con algo publicado desde entonces. No borrarlas: el histórico importa.
5. Commit y push solo de `content/cola-blog.json`, con un resumen de qué se ha añadido y por qué.

Esta rutina **no escribe artículos**. Solo mantiene la cola.

---

## 7. Contexto técnico mínimo

- Astro 4 + Tailwind + TypeScript, salida estática, desplegado en Vercel con auto-deploy desde `main`.
- El contenido vive en `src/data/*.ts`; las páginas se generan en `src/pages/[...slug].astro`.
- `npm run build` genera `dist/`. `npm run images` regenera la imaginería.
- No instalar dependencias nuevas. No tocar la maquetación, los componentes ni la configuración: este agente escribe contenido.
- No reintroducir el plugin `@astrojs/sitemap` (dio problemas de compatibilidad; el sitemap es propio, en `src/pages/sitemap.xml.ts`).
