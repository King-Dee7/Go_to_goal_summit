const fs = require('fs');

let cssContent = fs.readFileSync('app/globals.css', 'utf8');

// Step 1: Update the CSS variables in :root
cssContent = cssContent.replace(/:root\s*{([^}]+)}/, (match, group) => {
  return `:root {
  /* Primary palette - Light Theme */
  --brand-dark: #FAFAF7; /* formerly dark */
  --brand-deep: #F5F0E8; /* formerly deep */
  --brand-charcoal: #EAE5DB; /* formerly charcoal */
  --brand-surface: #DFD9CF; /* formerly surface */
  --brand-gold: #C8A44E;
  --brand-gold-light: #B49040;
  --brand-gold-dim: rgba(200, 164, 78, 0.15);
  --brand-cream: #1C201E; /* formerly cream (now dark for quotes) */
  --brand-white: #0C0E0D; /* formerly white (now dark text) */
  --brand-muted: #666A68;
  --brand-light-muted: #444745;

  /* Typography */
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Spacing */
  --section-pad: clamp(60px, 10vw, 120px);
  --container-max: 1140px;
  --container-pad: clamp(20px, 5vw, 40px);
}`;
});

// Step 2: Swap absolute alpha colors that expect a dark background
// rgba(255, 255, 255, x) -> rgba(12, 14, 13, x)
cssContent = cssContent.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,/g, 'rgba(12, 14, 13,');

// Step 3: Some specific adjustments
// .nav.scrolled needs a light background
cssContent = cssContent.replace(/background:\s*rgba\(\s*12\s*,\s*14\s*,\s*13\s*,\s*0\.92\s*\)/g, 'background: rgba(250, 250, 247, 0.92)');

// .nav-links.mobile-open background
cssContent = cssContent.replace(/background:\s*rgba\(\s*12\s*,\s*14\s*,\s*13\s*,\s*0\.97\s*\)/g, 'background: rgba(250, 250, 247, 0.97)');

// .btn-secondary border adjustment wasn't entirely fixed by the rgba swap if it was written compactly, but my regex covers rgba(255,255,255,
// Wait, the regex had optional spaces, so it shouldn't be an issue: /rgba\(\s*255\s*,\s*255\s*,\s*255\s*,/g
// Let's ensure no spaces breaks are handled:
cssContent = cssContent.replace(/rgba\(255,255,255,/g, 'rgba(12, 14, 13,');

// The nav-cta currently has color: var(--brand-dark) !important;
// Since --brand-dark is now very light (#FAFAF7), it will have poor contrast on the gold button (#C8A44E). 
// So we need to change button text colors to var(--brand-white) because --brand-white is now our dark text color.
cssContent = cssContent.replace(/\.nav-cta\s*{[^}]+}/, (match) => match.replace(/color:\s*var\(--brand-dark\)/, 'color: var(--brand-white)'));

cssContent = cssContent.replace(/\.btn-primary\s*{[^}]+}/, (match) => {
  return match.replace(/color:\s*var\(--brand-dark\)/, 'color: var(--brand-white)');
});

// The hero text currently uses --brand-white, which we flipped to dark (#0C0E0D). This is fine.
// But some places might explicitly override, like .hero-question with rgba(255, 255, 255, 0.25). My regex handles it.

fs.writeFileSync('app/globals.css', cssContent);
console.log('Light theme applied successfully');
