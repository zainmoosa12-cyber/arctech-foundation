Build a full, production-quality website for a brand called "Raw Cut Collective" — a media company expanding into a broader cultural movement. The site should function as a living cultural hub, not a brochure. It must feel editorial, bold, raw, and alive — the aesthetic intersection of Vice Magazine, Complex, and a community-run creative collective. No corporate polish. No sanitized design. Every pixel should feel intentional and culturally aware.

---

## BRAND BRIEF

**Name:** Raw Cut Collective
**Tagline:** "Unfiltered. Uncompromising. Ours."
**Mission statement (use verbatim in the About section):** "Raw Cut Collective exists at the intersection of culture and community. We document the real, amplify the overlooked, and build spaces where creators don't ask for permission. Music, film, art, fashion, sport, and the streets — we cover it all, uncut."
**Tone:** Direct, bold, honest, irreverent but never careless. The voice is the homie who's also an intellectual. Lowercase is fine in body copy. Headlines should punch.
**Audience:** 18–35 creatives, makers, culture-watchers, community organizers, independent artists, skaters, sneakerheads, music heads, filmmakers, and people who are tired of mainstream media.
**Cultural pillars (use these as content category labels throughout the site):** Music, Film, Art, Fashion, Sport, Community

---

## COLOR PALETTE

Use these exact colors. Dark-mode-first. No light mode needed.

- **Background (deepest):** #0A0A0A — near-black, not pure black, has warmth
- **Surface (cards, panels):** #111111
- **Surface elevated:** #1A1A1A
- **Border / divider:** #222222
- **Foreground (primary text):** #F0EDE8 — off-white, slightly warm
- **Muted text:** #888888
- **Brand Red (primary accent):** #E8183C — a bold, editorial red, think magazine masthead
- **Brand Cream (secondary accent):** #F5F0E8 — warm cream used for contrast moments
- **Brand Yellow (tertiary, used sparingly):** #F0C040 — streetwear-inflected, used for tags, badges, callouts
- **Overlay / gradient base:** rgba(10,10,10,0.85)

Apply these as CSS custom properties: --rcc-black, --rcc-surface, --rcc-surface-elevated, --rcc-border, --rcc-white, --rcc-muted, --rcc-red, --rcc-cream, --rcc-yellow.

---

## TYPOGRAPHY

Import from Google Fonts. Use these exact pairings:

**Display / Headlines:** "Bebas Neue" — all caps, tight tracking, used for section headers, hero text, feature titles. Large and loud.
**Subheadings / Labels:** "Space Grotesk" — weight 600–700, used for navigation, card titles, category labels, eyebrows.
**Body / Editorial copy:** "DM Sans" — weight 400–500, used for article text, descriptions, bios. Readable but modern.
**Accent / Quote text:** "Playfair Display" — italic only, used for pull quotes, editorial callouts, founder statements.

CSS font variables:
- --font-display: 'Bebas Neue', sans-serif
- --font-ui: 'Space Grotesk', sans-serif
- --font-body: 'DM Sans', sans-serif
- --font-quote: 'Playfair Display', serif

---

## NAVIGATION

**Sticky header** that starts fully transparent over the hero and transitions to a solid #0A0A0A background with a bottom border (#222222) on scroll. Height: 64px desktop, 56px mobile.

**Logo:** Left-aligned. The wordmark "RAW CUT" in Bebas Neue at ~28px, bold, white. Below it in Space Grotesk 9px uppercase tracking-widest: "COLLECTIVE" in --rcc-red. No icon needed — the wordmark IS the logo.

**Desktop nav links (center):** STORIES · MUSIC · FILM · ART & FASHION · COMMUNITY · SHOP
Each link in Space Grotesk 13px, uppercase, letter-spacing: 0.1em. On hover: color transitions to --rcc-red. Active link has a 2px bottom border in --rcc-red.

**Right side CTA:** A pill button reading "SUBMIT YOUR WORK" — background --rcc-red, text white, Space Grotesk 12px bold uppercase. Hover: slight scale up + glow.

**Mobile nav:** Hamburger icon (right side). Full-screen overlay menu in #0A0A0A with nav items stacked in Bebas Neue at 48px, staggered fade-in animation. Include a "SUBMIT YOUR WORK" CTA button at the bottom.

---

## HOMEPAGE

Build the homepage as a sequence of the following sections. Each section should have entrance animations (fade up on scroll using Framer Motion or CSS intersection observer).

---

### SECTION 1 — HERO

Full-viewport-height hero. No static image — instead use a **dark cinematic video loop placeholder** (use a dark abstract gradient animation or a CSS-animated noise texture to simulate the feel of a raw, filmic background).

Overlay: dark gradient from rgba(10,10,10,0.3) at top to rgba(10,10,10,0.9) at bottom.

Centered content:
- Small eyebrow label in Space Grotesk, uppercase, --rcc-red, 11px tracking-widest: "EST. 2024 · CULTURE UNFILTERED"
- Main headline in Bebas Neue, 120px desktop / 72px mobile / 56px on small mobile, white, tight leading: "RAW CUT" on line 1, "COLLECTIVE" on line 2. "COLLECTIVE" should be outlined text (text-stroke: 1px white, fill transparent) creating a contrast effect.
- Sub-headline in DM Sans, 18px, --rcc-muted, max-width 520px centered: "The media platform for real culture. Music, film, art, fashion, sport, and community — all uncut."
- Two CTA buttons side by side:
  - Primary: "EXPLORE STORIES" — filled --rcc-red, white text
  - Secondary: "WATCH THE REEL" — bordered in white, transparent fill, white text. Include a play icon (▶) inline.
- Below the buttons: a horizontally scrolling ticker/marquee of the 6 cultural pillars separated by red diamond separators: MUSIC ◆ FILM ◆ ART ◆ FASHION ◆ SPORT ◆ COMMUNITY ◆ MUSIC ◆ FILM ... (looping, auto-scrolling, no user interaction needed)

---

### SECTION 2 — FEATURED STORY (HERO EDITORIAL)

A large, magazine-style feature block. Full-width. Dark background.

Left side (~60% width on desktop): A large placeholder image with aspect ratio 16:9, overlaid with a gradient, and a red tag badge in the top-left corner reading the category (e.g. "FILM"). Bottom of the image has:
- Large Bebas Neue headline ~56px: "The Underground Directors Who Are Rewriting the Rules"
- DM Sans excerpt 16px --rcc-muted: "Three filmmakers. No studio. No compromise. This is what happens when you stop asking for permission..."
- Author byline: small avatar circle placeholder + "by Marcus Webb · Apr 2026" in Space Grotesk 12px
- "READ MORE →" link in --rcc-red, Space Grotesk 13px bold

Right side (~40% width): A vertical stack of 3 smaller secondary feature cards. Each card: thumbnail placeholder (4:3), category badge, headline in Space Grotesk 15px bold, and a "→" arrow. Hover: the card lifts (translateY -4px) and the thumbnail slightly zooms.

---

### SECTION 3 — CONTENT CATEGORY GRID

Section title: Bebas Neue 64px "WHAT WE COVER" with a thin red underline accent beneath.

A responsive grid of 6 category cards, 3 columns × 2 rows on desktop, 2×3 on tablet, 1×6 on mobile. Each category card:
- Bold background color or gradient (each unique — use dark, gritty textures via CSS or gradient):
  - Music: dark purple gradient (#1A0A2E → #0A0A0A)
  - Film: dark green-black (#0A1A0E → #0A0A0A)
  - Art: dark rust (#1A0A08 → #0A0A0A)
  - Fashion: dark slate (#0A0E1A → #0A0A0A)
  - Sport: dark blue-black (#080A1A → #0A0A0A)
  - Community: deep red (#1A0808 → #0A0A0A)
- A large relevant emoji or SVG icon, 64px, centered
- Category name in Bebas Neue 48px white
- Short descriptor in DM Sans 13px --rcc-muted: 1 sentence
- "EXPLORE →" in Space Grotesk 12px --rcc-red on hover (hidden by default, slides up on card hover)
- Card hover: border changes from #222222 to --rcc-red, subtle scale 1.02

---

### SECTION 4 — LATEST STORIES GRID

Section header row: Left-aligned "LATEST STORIES" in Bebas Neue 48px. Right-aligned "VIEW ALL →" in Space Grotesk 13px --rcc-red.

A 3-column card grid (2 on tablet, 1 on mobile) with 6 story cards. Each story card:
- Thumbnail placeholder image (16:9), with category badge (pill, --rcc-red background) overlaid top-left
- Card body on --rcc-surface (#111111):
  - Headline: Space Grotesk 17px bold, white, 2-line clamp
  - Excerpt: DM Sans 14px --rcc-muted, 3-line clamp
  - Footer row: author avatar placeholder + name + date · read time (e.g. "5 min read")
- Hover: card border highlights in --rcc-red, image zooms slightly inside its container

---

### SECTION 5 — FEATURED MUSIC PLAYER

A full-width dark section with --rcc-surface background.

Left side: Album/release artwork placeholder (square, ~300px), with a thin red border frame and a "NEW RELEASE" badge in --rcc-yellow (uppercase, Space Grotesk 10px).

Center/right:
- "NOW PLAYING" eyebrow in --rcc-red, Space Grotesk 11px
- Track title: Bebas Neue 52px "FREQUENCY SHIFT"
- Artist name: Space Grotesk 18px, --rcc-muted "Kxng Levi feat. Nova Black"
- A custom audio player UI — NOT a standard browser player. Design a sleek custom player bar:
  - Play/Pause button (large circle, --rcc-red fill, white icon)
  - Prev / Next buttons flanking it
  - A waveform progress bar (simulated with stacked bars of varying heights, colored --rcc-red for played portion, --rcc-border for unplayed)
  - Time stamps (current / total) in Space Grotesk 12px
  - Volume slider minimal (line + circle handle)
- Below the player: horizontal scrolling list of 4 recent tracks as mini rows (artwork + title + artist + duration)

Note: make the player visually functional but the actual audio can be stubbed out — this is a UI demo. Wire up basic play/pause toggle state so the button visually switches.

---

### SECTION 6 — COMMUNITY VOICES

Section header: Bebas Neue 64px "THE COLLECTIVE SPEAKS"

A masonry-style (or equal-height 3-col) grid of 4 community quote cards. Each card:
- --rcc-surface-elevated background (#1A1A1A)
- A large opening quote mark in Bebas Neue 80px --rcc-red (decorative, not functional)
- Quote text in Playfair Display italic 18px --rcc-white, 3-5 sentences
- Attribution below: circular avatar placeholder, name in Space Grotesk 14px bold, role/location in DM Sans 12px --rcc-muted (e.g. "Photographer · Detroit")
- Thin --rcc-red left border on each card

---

### SECTION 7 — VIDEO SERIES

Section header: Bebas Neue 64px "RAW CUT TV" + small red badge reading "SERIES" in Space Grotesk 10px uppercase.

A horizontal scrollable carousel (snapping) on mobile, 3-column grid on desktop. Each series card:
- 16:9 thumbnail placeholder with a play button overlay (semi-transparent dark circle + white triangle icon)
- Below thumbnail: series name in Space Grotesk 16px bold, episode count in DM Sans 13px --rcc-muted (e.g. "S1 · 6 Episodes"), short description 2-line clamp
- A "WATCH SERIES →" CTA below each in --rcc-red Space Grotesk 12px
- Hover: play button becomes fully visible and thumbnail darkens slightly

Featured series placeholder names: "UNCUT SESSIONS", "STREET LEVEL", "MADE FROM SCRATCH"

---

### SECTION 8 — EVENTS

Section header: Left-aligned Bebas Neue 48px "UPCOMING EVENTS". Right: "FULL CALENDAR →" in Space Grotesk --rcc-red.

A list-style layout (not cards) showing 4 upcoming events. Each event row:
- Left: Date block — month in Space Grotesk 11px uppercase --rcc-red, day number in Bebas Neue 40px white
- Center: Event name in Space Grotesk 18px bold, then venue + city in DM Sans 14px --rcc-muted
- Right: Category pill badge + "GET TICKETS →" or "FREE ENTRY" status tag
- Thin bottom border between rows
- Hover: the row background shifts to --rcc-surface-elevated and a red left border appears (2px)

Placeholder events:
1. "RAW CUT CYPHER NIGHT" — The Joint, Atlanta, GA
2. "OPEN LENS EXHIBITION" — Studio 7, Brooklyn, NY
3. "FREQUENCY SHIFT LISTENING PARTY" — Somewhere Dark, Chicago, IL
4. "COLLECTIVE MARKET" — The Lot, Los Angeles, CA

---

### SECTION 9 — NEWSLETTER / JOIN THE MOVEMENT

Full-width section with a subtle noise texture overlay on --rcc-black background.

Centered layout:
- Bebas Neue 72px: "DON'T MISS" on one line, "A THING" on the next (second line in outlined/stroke style)
- DM Sans 16px --rcc-muted below: "Drop your email. We send the real ones. No spam. No corporate nonsense. Just culture."
- Email input + submit button in a row:
  - Input: full dark (#0A0A0A) background, --rcc-border border, placeholder "your@email.com" in DM Sans, --rcc-white text on focus border changes to --rcc-red
  - Button: "JOIN THE COLLECTIVE" — --rcc-red background, white text, Space Grotesk bold uppercase. On hover: slight pulse animation.
- Below the form: small DM Sans 12px --rcc-muted text "We respect your privacy. Unsubscribe anytime."
- To the right of the form (desktop only): a vertical list of 4 short bullet points in DM Sans 13px: "✓ Weekly editorial drops", "✓ Exclusive event access", "✓ Artist spotlights first", "✓ Community calls & collabs"

Implement basic form validation: email field required, valid email format. Show a success state (replace form with a confirmation message) using useState.

---

### SECTION 10 — MERCH / SHOP TEASER

Section header: Bebas Neue 64px "WEAR THE CULTURE"

A 4-column grid (2 on mobile) of product teaser cards. Each card:
- Square product image placeholder with --rcc-surface background
- Product name in Space Grotesk 15px bold
- Price in Bebas Neue 24px --rcc-red
- "ADD TO CART" button — small, --rcc-surface-elevated, bordered in --rcc-border, on hover changes to --rcc-red filled
- A "SOLD OUT" or "NEW" badge overlaid on the image corner where relevant, in --rcc-yellow

Placeholder products: "RAW CUT HOODIE", "COLLECTIVE CREWNECK", "UNFILTERED TEE", "MEMBER CAP"

Below the grid: centered "SHOP ALL MERCH →" large CTA button, --rcc-red background, white text, Bebas Neue 20px, rounded corners 4px.

---

### SECTION 11 — COMMUNITY SUBMISSION CTA

A bold full-width block. Background: a diagonal split — left half --rcc-red, right half --rcc-black.

Left content (on red):
- Bebas Neue 56px white: "GOT A STORY?"
- DM Sans 16px white/80%: "We want your perspective. Submit your work, pitch a story, or tell us what the scene is doing."
- "SUBMIT YOUR WORK →" button in white, black text, bordered

Right content (on black):
- Bebas Neue 56px --rcc-red: "COMMUNITY OPEN"
- DM Sans 16px --rcc-muted: "Join the Collective Discord. Connect with creators. Find collaborators. Show up."
- "JOIN THE DISCORD →" button in --rcc-red, white text

---

## INNER PAGES

Build the following inner pages with placeholder content:

---

### PAGE: /stories — STORIES ARCHIVE

Header: Bebas Neue 80px "STORIES" with a subtitle "All the content. None of the filters."

- Horizontal tab filter row: ALL · MUSIC · FILM · ART · FASHION · SPORT · COMMUNITY (Space Grotesk tabs, active tab has --rcc-red underline)
- A masonry or uniform grid of 9+ article cards (same design as homepage grid cards)
- Pagination or "LOAD MORE" button at the bottom

---

### PAGE: /community — COMMUNITY

Header: Bebas Neue 80px "THE COLLECTIVE"

Three sections:
1. **About the Community** — two-column text + image block explaining the mission of community
2. **Member Spotlights** — 3-column grid of 6 member cards: photo placeholder, name, role, city, short bio, links (Instagram / website icons)
3. **Submit Your Work** — a full submission form with fields:
   - Name (text input)
   - Email (email input)
   - Category (select: Music / Film / Art / Fashion / Sport / Community Story)
   - Your Pitch or Description (textarea, min 4 rows)
   - Link to your work (url input)
   - "SUBMIT →" button (--rcc-red, white text, bold)

   Form built with React state, all fields required, email validation, success/error toast using sonner.

---

### PAGE: /about — ABOUT

Header: Bebas Neue 80px "WHO WE ARE"

Four sections:
1. **Mission block** — the full mission statement in Playfair Display italic 24px on a dark background, like a magazine opener page
2. **Origin story** — two-column layout, large text left, editorial image placeholder right. Body in DM Sans.
3. **The Team** — 3-column grid of founder/team cards: photo placeholder, name in Space Grotesk bold, title in DM Sans --rcc-muted, short bio, social icons
4. **Values** — 3 horizontal value cards in --rcc-surface, each with a large Bebas Neue number (01, 02, 03), a value title, and a short description

---

### PAGE: /events — EVENTS

Header: Bebas Neue 80px "EVENTS"

- Full events calendar list — same row-style design as homepage but showing 8+ events
- Each event expandable (accordion or inline expand) to show full description, address, time, ticket link
- An "ADD YOUR EVENT" CTA section at the bottom: small form (event name, date, location, contact email, submit button)

---

## FOOTER

Dark (#0A0A0A) background with a top border (#222222). Four-column layout on desktop.

**Column 1 — Brand:**
- RAW CUT COLLECTIVE wordmark (same as nav logo style)
- DM Sans 13px --rcc-muted: one-line description "Real culture. Real voices. No filters."
- Social icons row: Instagram, Twitter/X, YouTube, TikTok, Spotify (use Lucide icons or simple SVG circles with platform letters if icons unavailable). Each icon: 32x32 circle, --rcc-surface-elevated background, --rcc-muted icon, hover --rcc-red background white icon.

**Column 2 — Explore:**
Header "EXPLORE" in Space Grotesk 11px uppercase --rcc-red tracking-widest.
Links: Stories, Music, Film, Art & Fashion, Sport, Community

**Column 3 — Company:**
Header "COMPANY" same style.
Links: About, Events, Shop, Submit Your Work, Contact, Press Kit

**Column 4 — Stay Connected:**
Header "STAY CONNECTED" same style.
Mini newsletter form: email input + "→" icon button (compact version of the main newsletter form)
Below: "Follow us for daily culture" in DM Sans 12px --rcc-muted

**Bottom bar:** Thin top border.
- Left: "© 2024 Raw Cut Collective. All Rights Reserved." in DM Sans 12px --rcc-muted
- Right: "Privacy Policy · Terms of Use · Cookie Policy" links in same style

---

## GLOBAL COMPONENTS & INTERACTIONS

**Scroll animations:** Every section uses fade-up entrance (opacity 0 → 1, translateY 20px → 0, 0.6s ease-out) triggered by intersection observer. Stagger child elements by 80ms delay.

**Page transitions:** Subtle fade between route changes.

**Toast notifications:** Use sonner for form submission feedback. Dark theme toasts matching the brand.

**Loading skeleton:** On content grids, show skeleton placeholder cards (--rcc-surface with shimmer animation) while "loading."

**Scrollbar:** Custom styled: thin, --rcc-border track, --rcc-red thumb.

**Selection highlight:** CSS ::selection with --rcc-red background and white text.

**Image handling:** All images use object-fit: cover inside fixed-ratio containers. Placeholder images can use a dark gradient with a subtle noise or grain texture to simulate editorial photography style.

---

## TECHNICAL REQUIREMENTS

- React + TypeScript
- TailwindCSS v4 for styling with the CSS custom properties defined above
- Framer Motion for animations
- React Hook Form + Zod for form validation
- Sonner for toasts
- Lucide React for icons
- TanStack Router for routing with pages: / , /stories, /community, /about, /events, /shop (placeholder page)
- Fully responsive: mobile-first, breakpoints at sm:640px md:768px lg:1024px xl:1280px
- Semantic HTML throughout (header, main, section, article, nav, footer)
- ARIA labels on all interactive elements
- Google Fonts loaded via link tags in the document head: Bebas Neue, Space Grotesk, DM Sans, Playfair Display

---

## ADDITIONAL DESIGN NOTES

- Use grain/noise texture overlays (CSS background-image with SVG filter or repeating noise pattern) on hero and key sections to add a tactile, film-like quality
- Red accents should feel like editorial red — used for emphasis, not decoration. Use sparingly.
- Whitespace is intentional — sections should breathe. Do not pack content wall-to-wall.
- The site should feel like it was built by the community it serves — not by a corporate agency.
- Every hover state should be intentional and feel satisfying — scale, color, border, or glow.
- Mobile experience must be first-class. The ticker, music player, and event list should all be fully functional on mobile.
