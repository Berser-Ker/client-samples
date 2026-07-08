# HCM&F Abogados — Sitio web bilingüe (ES/EN)

Sitio web profesional bilingüe para **Hernández Contreras, Martínez & Fitch, Abogados, S.C.**, un despacho jurídico mexicano con más de 50 años de experiencia.

**Live:** https://www.hcmyf.mx
**Stack:** HTML estático + CSS + vanilla JS, sin build step
**Deploy:** Cloudflare Pages
**Año:** 2026

## Features

- **Bilingüe completo** ES/EN con `hreflang` para SEO bilingüe
- **18 abogados** con JSON-LD `Person` schema (visible en Google Knowledge Panel)
- **8 áreas de práctica** con accordion LFPDPPP
- **Form de contacto** con Web3Forms (sin backend)
- **Aviso de Privacidad** LFPDPPP-compliant (10 secciones, Art. 15)
- **SEO avanzado**: OG tags, Twitter Card, geo local, sitemap.xml, JSON-LD LegalService + LocalBusiness + FAQ + Breadcrumb
- **GEO / LLM discovery**: `llms.txt`, robots.txt permisivo con AI bots (GPTBot, ClaudeBot, PerplexityBot, etc.)
- **Responsive** mobile-first
- **Custom 404** page
- **No analytics, no cookies** — solo Google Fonts

## Tech stack

| Capa | Implementación |
|---|---|
| Markup | HTML5 semántico, single-file `index.html` por idioma |
| Styling | CSS custom (no Tailwind), Cormorant Garamond + Outfit desde Google Fonts |
| JS | Vanilla, ~150 líneas (accordion, scroll effects, intersection observer) |
| Forms | Web3Forms (envío a `correo@hcmyf.mx` por email) |
| Host | Cloudflare Pages (CDN edge, custom domain `hcmyf.mx`) |
| SEO | Schema.org JSON-LD manual, sitemap.xml, robots.txt custom |

## Estructura

```
index.html              # ES (primary)
en/index.html           # EN (mirror)
avisoprivacidad.html    # Aviso de Privacidad (LFPDPPP Art. 15)
404.html                # Custom 404
favicon.svg             # HC monogram (placeholder)
apple-touch-icon.png    # 180×180 (HC monogram)
og-image.svg            # 1200×630 social share (HC monogram)
logo-hcmyf.svg          # Hero logo (HC monogram)
biblioteca.svg          # Imagen sección Historia (estantería de libros)
team/*.svg              # 18 avatares de monograma
llms.txt                # Descripción estructurada para LLMs
sitemap.xml             # 3 URLs
robots.txt              # AI bots permitidos
```

## Cómo deployar

```bash
wrangler login
wrangler pages deploy . --project-name=hcmyf
```

## Notas de privacidad (portafolio)

Las fotos reales del equipo y el logo estilizado de la firma se reemplazaron en este repo por versiones sanitizadas (monograma "HC" genérico). El sitio en producción (https://www.hcmyf.mx) sí usa la marca y fotos reales del cliente, dado que el consentimiento cubre el sitio web pero no necesariamente un repositorio público de portafolio.

- **Logo**: el sitio real usa un monograma elegante con iniciales HCM&F estilizadas y el wordmark de la firma. En el repo: versión genérica "HC" dorada sobre fondo oscuro.
- **Fotos del equipo**: 12 abogados tienen foto real en producción. En el repo: 18 SVGs de monograma con iniciales sobre fondo dorado.
- **Imagen de biblioteca**: la foto real de la oficina se reemplazó por un SVG estilizado de una estantería de libros.
