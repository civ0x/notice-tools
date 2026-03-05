# Notice Brand System

Finalized 2026-03-05. Use this as the reference for all Notice visual work (notice.tools landing page, app UI, marketing).

## Mark

Ensō brushstroke — existing artwork at `public/images/enso-transparent.png`. Recolored variants generated in this session stored alongside the exploration files.

## Colors

### Mark / Logo
- **Bright Marigold** `#F0AF32` — the ensō mark, always

### Buttons / CTAs
- **Burnt Marigold** `#B9691E` — all interactive elements, buttons, links on hover

### Backgrounds
- **Light** `#F7F3EE` — warm stone (web, marketing)
- **Dark** `#1A1816` — warm black (Watch, app, dark contexts)

### Surfaces
- Warm: `#EFEBE4`
- Card: `#E8E3DA`
- Subtle: `#DDD7CC`
- Dark mid: `#272420`
- Dark card: `#322E29`

### Text
- Primary: `#2A2520`
- Mid: `#4D453B`
- Light: `#7A7068`
- Muted: `#A69D94`
- Faint: `#C8C0B6`
- Dark context primary: `#E8E3DA`
- Dark context muted: `#8A8078`

### Borders
- Subtle: `rgba(42, 37, 32, 0.10)`
- Mid: `rgba(42, 37, 32, 0.18)`

## Typography

### Lockup (wordmark)
- **Hiragino Kaku Gothic Pro W6** (weight 600)
- Letter-spacing: `0.04em`
- Fallback: `'Shippori Mincho', serif` at weight 500 (Google Fonts, for non-Apple devices)
- Full font stack: `'Hiragino Kaku Gothic Pro', 'Hiragino Kaku Gothic ProN', 'Shippori Mincho', sans-serif`
- Note: Hiragino is bundled on macOS/iOS. Primary audience is iPhone/Apple Watch users, so most visitors see it natively. For the logo specifically, consider converting to SVG outlines for universal rendering.

### Headlines
- **DM Sans** weight 300
- Letter-spacing: `0.01em`
- Google Fonts

### Body
- **DM Sans** weight 300–400
- Google Fonts

### System / UI / Labels
- **JetBrains Mono** weight 300
- Letter-spacing: `0.1–0.2em`, uppercase
- Google Fonts

## Voice

Direct, warm, embodied. Speaks like a skilled somatic teacher.

- Second person ("you"), present tense
- Names what's happening without judging it
- Trusts the user's intelligence — no hand-holding, no gamification
- No emoji, no forced positivity, no streak/badge language

### Examples

Do: "Your heart rate variability dropped 15% this afternoon. What were you doing around 2pm?"
Don't: "Uh oh! Your stress levels are up. Try taking 3 deep breaths! 🧘"

Do: "Notice what's here."
Don't: "Welcome to your daily wellness journey!"

## Positioning

Notice is **interoceptive awareness training** — not meditation, not relaxation, not mood tracking. It's a training tool for the felt sense.

Analogy: a precision instrument made from natural materials. Warm to the touch, built for the body, engineered with care.

## Visual Principles

1. **Warm where others are cool** — no pure whites, no cool grays, no blue tints
2. **Spacious, not empty** — whitespace as held pause, not missing content
3. **Precise, not clinical** — data that means something, not lab readouts
4. **Reveal, don't prescribe** — show what's happening, don't tell users what to do
5. **Embodied motion** — breath-paced transitions, gentle emergence, respect `prefers-reduced-motion`
6. **One thing at a time** — each screen draws attention to one primary element

## Landing Page Structure (notice.tools)

Purpose: beta landing page pointing to TestFlight. Minimal — value prop + single CTA.

### Nav
- Ensō mark (bright marigold, 28px) + "Notice" in Hiragino Kaku Gothic Pro W6
- "Join Beta" button in burnt marigold

### Hero
- Ensō mark centered (72px)
- Headline: DM Sans 300, ~2.6rem
- Body: DM Sans 300, ~1rem
- CTA: "Join the TestFlight Beta" — burnt marigold button, JetBrains Mono uppercase

### Features (3 columns)
- Real-time signals
- Pattern recognition
- Training, not tracking

### Copy
- Headline: "Your body already knows. Learn to listen."
- Body: "Interoceptive awareness training for Apple Watch. Notice what's actually happening — before your mind tells a story about it."

## Asset Inventory

- `public/images/enso-transparent.png` — original gold ensō (1024×1024 RGBA)
- `enso-marigold-bright.png` — bright marigold variant (#F0AF32) for logo use
- `enso-marigold-burnt.png` — burnt marigold variant (#B9691E)
- `enso-marigold.png` — standard marigold (#E49B28, reference only)
- `notice-type-exploration.html` — visual exploration file with final mockups
- `notice-brand-system.html` — earlier brand guide (superseded by this doc)

## Relationship to thbrdy.dev

Visually distinct. Notice is a product brand, not a sub-page of the personal site. No shared accent colors (thbrdy.dev uses dark gold `#B8860B`; Notice uses marigold/burnt marigold). Different typography system. The connection to Thomas as founder lives in content (about section), not visual identity.
