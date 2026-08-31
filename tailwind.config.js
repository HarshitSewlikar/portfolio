/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream / cafe base
        base: {
          bg: "#FFF8EC",          // warm cream
          surface: "#FFFDF6",     // lighter cream
          elevated: "#FFFFFF",    // pure white cards
          border: "#F1E6CF",      // soft tan border
          line: "#EADFC4",
          ink: "#1A2238",         // deep navy ink for text
          "ink-soft": "#4A5577",  // muted navy
          "ink-mute": "#7A8499",  // even softer
        },
        // Blue + Yellow + Pink — K-pop cafe
        accent: {
          // coffee blue — primary
          blue: "#2F6BFF",
          "blue-deep": "#1F4BD8",
          "blue-soft": "#7AA0FF",
          "blue-tint": "#E1ECFF",
          // butter yellow — secondary
          yellow: "#FFD93D",
          "yellow-deep": "#F5C518",
          "yellow-soft": "#FFE889",
          "yellow-tint": "#FFF6CC",
          // cotton candy pink — playful accent
          pink: "#FFB4C8",
          "pink-deep": "#FF7BA0",
          "pink-tint": "#FFE3EC",
          // soft mint highlight (used sparingly)
          mint: "#A8E6CF",
          "mint-tint": "#E6F8EF",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'Fredoka'", "'Plus Jakarta Sans'", "'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        // handwriting feel for sticker accents
        hand: ["'Caveat'", "'Plus Jakarta Sans'", "cursive"],
      },
      boxShadow: {
        // soft cafe shadow
        soft: "0 10px 30px -10px rgba(47, 107, 255, 0.18)",
        // chunky pop sticker shadow
        pop: "6px 6px 0 0 rgba(26, 34, 56, 0.95)",
        "pop-blue": "6px 6px 0 0 #2F6BFF",
        "pop-yellow": "6px 6px 0 0 #FFD93D",
        "pop-pink": "6px 6px 0 0 #FF7BA0",
        glow: "0 0 40px -8px rgba(47, 107, 255, 0.35)",
        glowYellow: "0 0 40px -8px rgba(255, 217, 61, 0.55)",
        glowPink: "0 0 40px -8px rgba(255, 180, 200, 0.55)",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(26,34,56,0.05) 1px, transparent 1px)",
        "dotted-blue":
          "radial-gradient(rgba(47,107,255,0.18) 1.4px, transparent 1.4px)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        wobble: "wobble 1.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "spin-slow": "spin 22s linear infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "pop-in": "popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        wiggle: "wiggle 1.6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
}
