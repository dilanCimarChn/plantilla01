# PIXEL LOGIC — Design System
## Tema: Cafetería artesanal · Modo claro

---

## Intención

Paleta cálida en modo claro. Fondo ivory/pergamino, texto espresso oscuro, acento caramelo/ámbar.
Sensación: artesanal, premium, auténtico — no genérico de IA.

---

## Paleta

```css
--purple:       #5C2E0A;   /* espresso — acento principal */
--purple-light: #8B4513;   /* grano de café */
--purple-pale:  #C4956A;   /* caramelo pálido */
--purple-dim:   rgba(92, 46, 10, 0.10);

--cyan:         #C68642;   /* caramelo/ámbar cálido */
--cyan-dim:     rgba(198, 134, 66, 0.12);

--dark:         #FAF7F2;   /* fondo principal (ivory) */
--dark-2:       #F3EBD9;   /* fondo secundario */
--dark-3:       #EBE0CC;   /* tarjetas / ticker */

--white:        #2B1A0E;   /* texto principal (espresso oscuro) */
--cream:        #FAF7F2;   /* texto sobre superficies de acento oscuras */
--gray:         #8A7055;   /* texto apagado / metadatos */
```

**Regla crítica:** usar `var(--cream)` (no `var(--white)`) en `color:` sobre fondos espresso
→ `.btn-primary`, `.about-badge`, `.testimonial-avatar`, `.form-submit`, `.social-btn:hover`

---

## Profundidad

Estrategia: **sombras suaves + bordes tenues** (no neons, no sombras dramáticas)

```css
--glow-purple: 0 4px 20px rgba(92, 46, 10, 0.18), 0 8px 40px rgba(92, 46, 10, 0.07);
--glow-cyan:   0 4px 16px rgba(198, 134, 66, 0.32);
--glow-card:   0 4px 24px rgba(92, 46, 10, 0.10), 0 1px 4px rgba(92, 46, 10, 0.05);
```

Bordes internos: `rgba(92, 46, 10, 0.12–0.22)` según importancia
Bordes secundarios / separadores: `rgba(92, 46, 10, 0.10)`
Focus ring: `0 0 0 3px rgba(92, 46, 10, 0.10)`

---

## Tipografía

- Serif: `'Playfair Display'` — títulos, marquee, testimonios, CTA
- Sans: `'Outfit'` — cuerpo, etiquetas, botones, navegación
- Títulos hero: `clamp(60px, 8vw, 116px)`, `font-weight: 900`, `letter-spacing: -0.025em`
- Títulos sección: `clamp(38px, 5vw, 64px)`, `font-weight: 900`
- Eyebrow: `11px`, `font-weight: 700`, `letter-spacing: 0.26em`, `text-transform: uppercase`

---

## Espaciado

Base: 8px grid
- Micro (icon gap): 8–12px
- Componente (padding interno): 16–24px
- Tarjeta (padding card): 44–52px
- Sección: `--pad-y: 140px` desktop, `100px` tablet, `80px` mobile
- Padding X: `--pad-x: 60px` desktop, `30px` tablet, `20px` mobile

---

## Animaciones (preservadas del tema original)

- Hero glitch: clip-path CSS en `::before/::after`, colores espresso + caramelo
- Orb hero: `radial-gradient` caramelo, `orbRing` 8s infinite
- Líneas scan: `lineFloat` linear infinite, gradiente espresso → caramelo
- Partículas canvas: opacidad 0.08–0.36 (reducida para fondo claro), alpha líneas 0.09
- Ticker: 28s linear, pausa en hover
- Marquee: doble pista alternada, `22s linear`
- Testimonios: `38s linear`, pausa en hover
- CTA circles: `ctaRotate` 22/32/42s, espirales concéntricas
- GSAP: timeline hero entrance, ScrollTrigger reveals por sección

---

## Íconos

- Todos SVGs Feather-style (`stroke="currentColor"`, `stroke-width="1.5"`)
- Sin Unicode geométrico (&#9672; etc.)
- Separador ticker: `·` (middle dot, &#183;)
- Proceso: lupa, diana, código, envío

---

## Patrones de componentes

**Botón primario:** `background: var(--purple)`, `color: var(--cream)`, slide `linear-gradient(135deg, --purple-light, --cyan)` en hover, `border: 1px solid var(--purple)`

**Botón secundario:** texto puro, `border-bottom: 1px solid rgba(92,46,10,0.30)`, gap animado en hover

**Tarjeta:** `background: var(--dark-3)`, `border: 1px solid rgba(92,46,10,0.12)`, `box-shadow: 0 2px 16px rgba(92,46,10,0.06)`, acento lateral 2px en hover

**Form inputs:** `background: var(--dark-3)`, border-color foco `var(--purple)`, placeholder `rgba(43,26,14,0.30)`

**Avatar:** `linear-gradient(135deg, var(--purple), var(--purple-light))`, texto `var(--cream)`

**Marquee outline:** `-webkit-text-stroke: 1px rgba(92,46,10,0.22)`, hover → `var(--cyan)`
