---
name: svg-1flow-en
description: Input document content, output a Miliastra Sandbox "one-image" SVG infographic. Converts editor feature documentation into structured visual tutorial SVGs.
---

# SVG One-Image Flow Generation Skill

Converts Miliastra Sandbox editor feature/concept/tutorial documentation into single-page visual infographic SVGs in English.

## Design Style: Apple HIG × Miliastra

### Core Visual Language
Blends Apple Human Interface Guidelines minimalist layout style. Minimal, clean, ample whitespace, blue as the primary accent color, warm background. Flat design, subtle shadows, soft rounded corners. No outlines/hard borders. No search boxes or irrelevant decorations. No yellow/gold as the primary color scheme.

### Overall Principles
- Page background warm white `#F9F7F2`, cards pure white `#FFFFFF`
- Ample whitespace but no large empty areas (viewBox height fits actual content bottom)
- No emoji, text-first
- Cards with soft shadow, no stroke/hard border
- Strong geometric sense: rounded cards, pill labels, circle numbers
- Primary color is blue tones, avoid yellow/gold as visual main color

### Color System

| Usage | Value | Description |
|-------|-------|-------------|
| Page background | `#F9F7F2` | Warm white |
| Primary | `#2D6BE4` | Blue — used only for section titles, numbered circles, vertical bar, tag backgrounds, source hyperlinks. **Forbidden in body content, card descriptions, table content, etc. to avoid confusion with bottom links** |
| Primary dark | `#1B4FC0` | Deep blue, used for final step circles |
| Top bar gradient | `#2D6BE4` → `#4A3F6B` | Blue to deep purple, top only |
| Dark text | `#1A1B2E` | Deep navy |
| Body | `#4A4B65` | Gray-purple |
| Auxiliary | `#8B8DA0` | Light gray-purple |
| Card background | `#FFFFFF` | Pure white |
| Alternate row | `#F4F1EA` | Warm light gray |
| Divider | `#E8E4DA` | Warm gray |
| Highlight tag blue | `#E8EEFB` | Blue light background |
| Highlight tag orange | `#FFF3E0` | Orange light background (tip/warning) |
| Highlight tag red | `#FDE8E6` | Red light background |
| Highlight tag green | `#E5F2E9` | Green light background |
| Tip bar blue | `#E8EEFB` | Blue light background (replaces gold tips) |
| Tip text | `#2D6BE4` | Blue tip text (inside blue tip boxes only) |
| Warning text | `#D93025` | Red warning text |
| Success | `#34A853` | Green confirmation |
| Error | `#D93025` | Red denial |

### Color Usage Rules

**Blue `#2D6BE4` must not be overused**: Blue matches the bottom source hyperlink color, so heavy use in body text makes it impossible to distinguish content from links. Follow these rules:

- **Where blue is allowed**: Section titles (18px bold), numbered circle fills, title card left vertical bar, pill tag text on `#E8EEFB` background, text inside tip boxes, bottom source hyperlinks
- **Where blue is forbidden**: Card content descriptions, table body text, process step text, parameter descriptions — these must use `#1A1B2E` (for bold) or `#4A4B65` (for body text)
- **Comparison table header row** uses blue background `#2D6BE4` + white text; table content rows use `#1A1B2E` or `#4A4B65`

### Shadows and Rounded Corners

```xml
<defs>
  <linearGradient id="topGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#2D6BE4"/>
    <stop offset="100%" stop-color="#4A3F6B"/>
  </linearGradient>
  <filter id="card">
    <feDropShadow dx="0" dy="1" stdDeviation="4" flood-color="#2D6BE4" flood-opacity="0.06"/>
  </filter>
  <filter id="elevated">
    <feDropShadow dx="0" dy="4" stdDeviation="14" flood-color="#000" flood-opacity="0.07"/>
  </filter>
</defs>
```

- `card`: Normal card, subtle blue shadow
- `elevated`: Title card, more elevated
- Card corner radius: `rx="14"` (large), `rx="10"` (medium), `rx="6"` (small)
- Pill labels: `rx="16"` ~ `rx="20"`
- Step circles: `r="12"` ~ `r="14"`, `fill="#2D6BE4"`; final step uses dark blue `#1B4FC0`
- Four-color tags: blue `#E8EEFB`, orange `#FFF3E0`, red `#FDE8E6`, green `#E5F2E9`

### Typography

```
font-family="'HYWenHei 85W','汉仪文黑 85W','Roboto','Noto Sans','Segoe UI',sans-serif"
```

Primary font is HYWenHei 85W (汉仪文黑 85W), with Roboto retained as the Latin fallback.

| Level | Size | Weight | Color |
|-------|------|--------|-------|
| Page title | 34px | bold | `#1A1B2E` |
| Section title | 18px | 700 | `#2D6BE4` |
| Card title | 16px | 500 | `#1A1B2E` |
| Body | 14px | normal | `#4A4B65` |
| Body bold | 14px | 500 | `#1A1B2E` |
| Auxiliary | 12px | normal | `#8B8DA0` |

### Page Structure

```
1. Top color bar (6px, blue→deep purple gradient)
2. Title card (white background shadow, 4px blue left vertical bar)
3. Section title (18px blue bold) + optional gray subtitle
4. Content cards (white background shadow, rx=14)
5. Source links (page bottom, above footer, blue clickable text)
6. Footer text (#8B8DA0, 12px)
7. White background end (no bottom color bar)
```

### Title Card Format

```xml
<rect x="48" y="32" width="1104" height="80" rx="14" fill="#fff" filter="url(#elevated)"/>
<rect x="48" y="32" width="4" height="80" rx="2" fill="#2D6BE4"/>
<text x="72" y="72" fill="#1A1B2E" font-size="34" font-weight="bold">Main Title</text>
<text x="X2" y="72" fill="#4A4B65" font-size="16">Subtitle</text>
```

### Source Link Format

Source links are placed at the very bottom of the page, above the footer:

```xml
<!-- Single link -->
<a xlink:href="URL" target="_blank">
  <text x="48" y="Y" fill="#2D6BE4" font-size="12" text-decoration="underline">Miliastra Academy Documentation: Page Title</text>
</a>

<!-- Multiple links, arranged horizontally with 24px spacing -->
<a xlink:href="URL1" ...><text ...>Guide</text></a>
<text ... fill="#8B8DA0">|</text>
<a xlink:href="URL2" ...><text ...>Tutorial</text></a>
```

### Section Title Format

```xml
<text x="48" y="Y" fill="#2D6BE4" font-size="18" font-weight="700">I. Section Name</text>
<text x="X2" y="Y" fill="#8B8DA0" font-size="13">Supplementary note</text>
```

No divider lines used; card spacing provides natural separation.

### Step Flow Format

Pill buttons:
```xml
<rect x="X" y="Y" width="W" height="48" rx="24" fill="#2D6BE4"/>
<text ... fill="#fff" font-weight="500">Step Name</text>
<text ... fill="#8B8DA0" font-size="16">›</text>
```

Numbered circles:
```xml
<circle cx="CX" cy="CY" r="16" fill="#2D6BE4"/>
<text ... fill="#fff" font-size="13" text-anchor="middle" font-weight="500">N</text>
```
Final step uses dark blue fill: `fill="#1B4FC0"`

### Comparison Tables

```xml
<rect x="X" y="Y" width="W" height="44" rx="14" fill="#2D6BE4"/>
<rect x="X" y="Y+32" width="W" height="12" fill="#2D6BE4"/>
<text ... fill="#fff" font-size="15" text-anchor="middle" font-weight="500">Column Name</text>
<line ... stroke="#E8E4DA"/>
<text ... fill="#1A1B2E">Content</text>
```

### Tip Boxes
- Blue tip: `fill="#E8EEFB"` background + `#2D6BE4` 4px left vertical bar + `#4A4B65` text
- Red warning: `fill="#FDE8E6"` background + `#D93025` 4px left vertical bar + `#D93025` text

### Spacing Guidelines
- Page width: 1200px
- Left/right margin: 48px, card inner padding 24px
- Card gap: 12–16px
- **viewBox height must tightly fit content, page ends with white background, no bottom color bar. Bottom page structure from bottom up: footer text → source link row → "Related Documentation:" label row → last content card bottom margin. Footer text leaves 12–16px gap from SVG bottom, footer text and source links leave 6px gap**

## Content Extraction Rules

1. Extract core knowledge points from documentation, removing redundant descriptions. Aimed at beginners — do not omit details, be comprehensive. **Be as thorough as possible synthesizing all information: every parameter, configuration option, operation step, constraint, and note must be represented. Prefer high information density over omission. Compare differences item by item, list complete process steps, parameter tables must cover all fields.**
2. Structured display: flow → step cards + arrows, parameters → key-value pairs/tables, comparisons → comparison tables
3. Important tips highlighted in tip boxes
4. Each SVG has appropriate information density, not overly crowded
5. Section titles use Roman numerals: "I.", "II.", "III.", etc.
6. No emoji
7. **Content completeness: every independent subtopic in the source document must have at least one independent row, never merged into just a header with details lost**
8. **Key constraints or notes in FAQ/common issues must be presented in tip boxes**

## Source Link Specification

Every SVG page bottom (above footer) must include source links:
- **"Related Documentation" label on its own line**: Above links, first write a gray small text row labeling "Related Documentation:", e.g. `<text x="48" y="Y" fill="#8B8DA0" font-size="12">Related Documentation:</text>`
- **Link text on a separate line below**: Below the label, one or more lines of blue clickable `<a>` hyperlinks, each link on its own line (not on same line as label)
- Link text format: `Miliastra Academy Documentation: Page Title` or `Miliastra Academy Documentation: Guide | Tutorial`
- Multiple sources arranged in multiple lines, one link per line
- SVG uses `xlink:href` and `target="_blank"`
- Links at the very bottom of the page, above footer, immediately below content card margin

Known document URL mapping (obtained from document frontmatter `url` field):
- Each English guide document's frontmatter contains `url:` pointing to the canonical `act.hoyoverse.com` URL
- Use the `url` field from the source document's frontmatter directly

### Translation Documents

Some topics are only available in Chinese and have not been officially published in English by HoyoVerse. Community-translated English versions are stored in `official/translation/`. These files have the **same frontmatter format** as regular guide files and can be used as source material for SVG generation in exactly the same way.

Currently translated (CN-only) documents:

| File | Topic | CN Source ID |
|------|-------|-------------|
| `official/translation/mhls9miyjwjg_Custom_Mini-Map_Controls.md` | Custom Mini-Map Controls | `mhls9miyjwjg` |
| `official/translation/mh496c08hooo_Rich_Text_Input_Controls.md` | Rich Text Input Controls | `mh496c08hooo` |
| `official/translation/mh4ve00q4j14_Status_Display_Area_Controls.md` | Status Display Area Controls | `mh4ve00q4j14` |
| `official/translation/mhs1f7ibtc6c_Message_Queue_Controls.md` | Notification Queue Controls | `mhs1f7ibtc6c` |
| `official/translation/mhwylormozcm_Asset_Library.md` | Asset Library | `mhwylormozcm` |

When generating SVGs from translation files, use the `url:` field from their frontmatter (which points to the CN source page) for the source link. The source link text should use the English title.

## Footer Specification

Footer text at the bottom of each SVG:

```
AI Generated, based on Craftspeople Academy. Version: Luna 7
```

Format: `fill="#8B8DA0" font-size="11" text-anchor="middle"`, centered at x=600.

Source links are directly above the footer. Footer text leaves 12–16px gap from SVG bottom (white background).

**Bottom page structure (from bottom up):**
1. SVG bottom (12–16px white background margin)
2. Footer text ("Generated by AI...")
3. Source link row (blue clickable hyperlinks, one per line, 6px gap from footer)
4. "Related Documentation:" label row (gray small text #8B8DA0, 6px gap from links)
5. Last content card bottom margin

## Output Rules

1. Output complete SVG file (`<svg` to `</svg>`)
2. `viewBox` width fixed at 1200, height must tightly fit content with no large blank area at bottom
3. English character width ≈ font-size × 0.55–0.65, used to estimate text width to prevent overflow
4. Output files to `derived/svg/` directory, filename is the English topic name + `.svg`
5. SVG root element must declare `xmlns:xlink="http://www.w3.org/1999/xlink"` for hyperlinks

## Self-Check Checklist

- [ ] Page background `#F9F7F2`, cards `#FFFFFF`
- [ ] No emoji
- [ ] Primary color `#2D6BE4`, no yellow/gold as visual main color
- [ ] Title card left 4px blue vertical bar
- [ ] Cards use shadow, no stroke
- [ ] Source links at page bottom (above footer), blue clickable (`<a xlink:href>`)
- [ ] "Related Documentation:" label on its own line (gray #8B8DA0), link text on separate line (blue #2D6BE4), never on the same line
- [ ] Footer at bottom: "AI Generated, based on Craftspeople Academy. Version: Luna 7"
- [ ] viewBox height fits content, no large blank area at bottom
- [ ] Top color bar (6px, blue→deep purple gradient), no bottom color bar
- [ ] Every independent subtopic from source document has at least one independent row
- [ ] Font uses `HYWenHei 85W` / `汉仪文黑 85W` as primary, with `Roboto` as fallback
- [ ] Body content does not use blue text; blue is only for: section titles, numbered circles, title vertical bar, pill tag text, tip box text, bottom hyperlinks
