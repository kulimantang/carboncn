export const UTILS = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`

export const UTILS_JS = `import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
`

export const TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
  ],
  prefix: "<%- prefix %>",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`

export const TAILWIND_CONFIG_WITH_VARIABLES = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
  ],
  prefix: "<%- prefix %>",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`

export const TAILWIND_CONFIG_TS = `import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
  ],
  prefix: "<%- prefix %>",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`

export const TAILWIND_CONFIG_TS_WITH_VARIABLES = `import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{<%- extension %>,<%- extension %>x}',
    './components/**/*.{<%- extension %>,<%- extension %>x}',
    './app/**/*.{<%- extension %>,<%- extension %>x}',
    './src/**/*.{<%- extension %>,<%- extension %>x}',
	],
  prefix: "<%- prefix %>",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`

export const CARBON_TAILWIND_COLORS = {
  cds: {
    background: {
      DEFAULT: "var(--cds-background)",
      active: "var(--cds-background-active)",
      brand: "var(--cds-background-brand)",
      hover: "var(--cds-background-hover)",
      inverse: {
        DEFAULT: "var(--cds-background-inverse)",
        hover: "var(--cds-background-inverse-hover)",
      },
      selected: {
        DEFAULT: "var(--cds-background-selected)",
        hover: "var(--cds-background-selected-hover)",
      },
    },
    button: {
      primary: {
        DEFAULT: "var(--cds-button-primary)",
        hover: "var(--cds-button-primary-hover)",
        active: "var(--cds-button-primary-active)",
      },
      secondary: {
        DEFAULT: "var(--cds-button-secondary)",
        hover: "var(--cds-button-secondary-hover)",
        active: "var(--cds-button-secondary-active)",
      },
      danger: {
        DEFAULT: "var(--cds-button-danger-primary)",
        hover: "var(--cds-button-danger-hover)",
        active: "var(--cds-button-danger-active)",
        secondary: "var(--cds-button-danger-secondary)",
      },
      tertiary: {
        DEFAULT: "var(--cds-button-tertiary)",
        hover: "var(--cds-button-tertiary-hover)",
        active: "var(--cds-button-tertiary-active)",
      },
      disabled: "var(--cds-button-disabled)",
      separator: "var(--cds-button-separator)",
    },
    link: {
      primary: {
        DEFAULT: "var(--cds-link-primary)",
        hover: "var(--cds-link-primary-hover)",
      },
      secondary: "var(--cds-link-secondary)",
      visited: "var(--cds-link-visited)",
      inverse: {
        DEFAULT: "var(--cds-link-inverse)",
        hover: "var(--cds-link-inverse-hover)",
        active: "var(--cds-link-inverse-active)",
        visited: "var(--cds-link-inverse-visited)",
      },
    },
    field: {
      DEFAULT: "var(--cds-field)",
      hover: {
        DEFAULT: "var(--cds-field-hover)",
        "01": "var(--cds-field-hover-01)",
        "02": "var(--cds-field-hover-02)",
        "03": "var(--cds-field-hover-03)",
      },
      "01": "var(--cds-field-01)",
      "02": "var(--cds-field-02)",
      "03": "var(--cds-field-03)",
    },
    text: {
      "on-color": {
        DEFAULT: "var(--cds-text-on-color)",
        disabled: "var(--cds-text-on-color-disabled)",
      },
      inverse: "var(--cds-text-inverse)",
      primary: "var(--cds-text-primary)",
      secondary: "var(--cds-text-secondary)",
      disabled: "var(--cds-text-disabled)",
      error: "var(--cds-text-error)",
      helper: "var(--cds-text-helper)",
      placeholder: "var(--cds-text-placeholder)",
    },
    focus: {
      DEFAULT: "var(--cds-focus)",
      inset: "var(--cds-focus-inset)",
      inverse: "var(--cds-focus-inverse)",
    },
    border: {
      strong: {
        "01": "var(--cds-border-strong-01)",
        "02": "var(--cds-border-strong-02)",
        "03": "var(--cds-border-strong-03)",
        DEFAULT: "var(--cds-border-strong)",
      },
      tile: {
        "01": "var(--cds-border-tile-01)",
        "02": "var(--cds-border-tile-02)",
        "03": "var(--cds-border-tile-03)",
        DEFAULT: "var(--cds-border-tile)",
      },
      subtle: {
        "00": "var(--cds-border-subtle-00)",
        "01": "var(--cds-border-subtle-01)",
        "02": "var(--cds-border-subtle-02)",
        "03": "var(--cds-border-subtle-03)",
        DEFAULT: "var(--cds-border-subtle)",
        selected: {
          "01": "var(--cds-border-subtle-selected-01)",
          "02": "var(--cds-border-subtle-selected-02)",
          "03": "var(--cds-border-subtle-selected-03)",
          DEFAULT: "var(--cds-border-subtle-selected)",
        },
      },
      disabled: "var(--cds-border-disabled)",
      interactive: "var(--cds-border-interactive)",
      inverse: "var(--cds-border-inverse)",
    },
    layer: {
      DEFAULT: "var(--cds-layer)",
      "01": "var(--cds-layer-01)",
      "02": "var(--cds-layer-02)",
      "03": "var(--cds-layer-03)",
      accent: {
        DEFAULT: "var(--cds-layer-accent)",
        "01": "var(--cds-layer-accent-01)",
        "02": "var(--cds-layer-accent-02)",
        "03": "var(--cds-layer-accent-03)",
        active: {
          DEFAULT: "var(--cds-layer-accent-active)",
          "01": "var(--cds-layer-accent-active-01)",
          "02": "var(--cds-layer-accent-active-02)",
          "03": "var(--cds-layer-accent-active-03)",
        },
        hover: {
          DEFAULT: "var(--cds-layer-accent-hover)",
          "01": "var(--cds-layer-accent-hover-01)",
          "02": "var(--cds-layer-accent-hover-02)",
          "03": "var(--cds-layer-accent-hover-03)",
        },
      },
      active: {
        DEFAULT: "var(--cds-layer-active)",
        "01": "var(--cds-layer-active-01)",
        "02": "var(--cds-layer-active-02)",
        "03": "var(--cds-layer-active-03)",
      },
      hover: {
        DEFAULT: "var(--cds-layer-hover)",
        "01": "var(--cds-layer-hover-01)",
        "02": "var(--cds-layer-hover-02)",
        "03": "var(--cds-layer-hover-03)",
      },
      selected: {
        DEFAULT: "var(--cds-layer-selected)",
        "01": "var(--cds-layer-selected-01)",
        "02": "var(--cds-layer-selected-02)",
        "03": "var(--cds-layer-selected-03)",
        disabled: "var(--cds-layer-selected-disabled)",
        hover: {
          DEFAULT: "var(--cds-layer-selected-hover)",
          "01": "var(--cds-layer-selected-hover-01)",
          "02": "var(--cds-layer-selected-hover-02)",
          "03": "var(--cds-layer-selected-hover-03)",
        },
        inverse: "var(--cds-layer-selected-inverse)",
      },
    },
    ai: {
      aura: {
        start: "var(--cds-ai-aura-start)",
        startSm: "var(--cds-ai-aura-start-sm)",
        end: "var(--cds-ai-aura-end)",
        hover: {
          background: "var(--cds-ai-aura-hover-background)",
          start: "var(--cds-ai-aura-hover-start)",
          end: "var(--cds-ai-aura-hover-end)",
        },
      },
      border: {
        strong: "var(--cds-ai-border-strong)",
        start: "var(--cds-ai-border-start)",
        end: "var(--cds-ai-border-end)",
      },
      "drop-shadow": "var(--cds-ai-drop-shadow)",
      "inner-shadow": "var(--cds-ai-inner-shadow)",
      overlay: "var(--cds-ai-overlay)",
      popover: {
        background: "var(--cds-ai-popover-background)",
        caret: {
          bottom: {
            DEFAULT: "var(--cds-ai-popover-caret-bottom)",
            background: {
              DEFAULT: "var(--cds-ai-popover-caret-bottom-background)",
              actions: "var(--cds-ai-popover-caret-bottom-background-actions)",
            },
          },
          center: "var(--cds-ai-popover-caret-center)",
        },
        shadow: {
          outer: {
            "01": "var(--cds-ai-popover-shadow-outer-01)",
            "02": "var(--cds-ai-popover-shadow-outer-02)",
          },
        },
      },
      skeleton: {
        background: "var(--cds-ai-skeleton-background)",
        "element-background": "var(--cds-ai-skeleton-element-background)",
      },
    },
    chat: {
      avatar: {
        agent: "var(--cds-chat-avatar-agent)",
        bot: "var(--cds-chat-avatar-bot)",
        user: "var(--cds-chat-avatar-user)",
      },
      bubble: {
        agent: "var(--cds-chat-bubble-agent)",
        border: "var(--cds-chat-bubble-border)",
        user: "var(--cds-chat-bubble-user)",
      },
      button: {
        DEFAULT: "var(--cds-chat-button)",
        active: "var(--cds-chat-button-active)",
        hover: "var(--cds-chat-button-hover)",
        selected: "var(--cds-chat-button-selected)",
        "text-hover": "var(--cds-chat-button-text-hover)",
        "text-selected": "var(--cds-chat-button-text-selected)",
      },
      header: "var(--cds-chat-header-background)",
      prompt: {
        background: "var(--cds-chat-prompt-background)",
        border: {
          end: "var(--cds-chat-prompt-border-end)",
          start: "var(--cds-chat-prompt-border-start)",
        },
      },
      shell: "var(--cds-chat-shell-background)",
    },
    highlight: "var(--cds-highlight)",
    icon: {
      DEFAULT: "var(--cds-icon-primary)",
      secondary: "var(--cds-icon-secondary)",
      interactive: "var(--cds-icon-interactive)",
      disabled: "var(--cds-icon-disabled)",
      inverse: "var(--cds-icon-inverse)",
      "on-color": {
        DEFAULT: "var(--cds-icon-on-color)",
        disabled: "var(--cds-icon-on-color-disabled)",
      },
      primary: "var(--cds-icon-primary)",
    },
    interactive: "var(--cds-interactive)",
    overlay: "var(--cds-overlay)",
    shadow: "var(--cds-shadow)",
    skeleton: {
      background: "var(--cds-skeleton-background)",
      element: "var(--cds-skeleton-element)",
    },
    support: {
      caution: {
        major: "var(--cds-support-caution-major)",
        minor: "var(--cds-support-caution-minor)",
        undefined: "var(--cds-support-caution-undefined)",
      },
      error: {
        DEFAULT: "var(--cds-support-error)",
        inverse: "var(--cds-support-error-inverse)",
      },
      info: {
        DEFAULT: "var(--cds-support-info)",
        inverse: "var(--cds-support-info-inverse)",
      },
      success: {
        DEFAULT: "var(--cds-support-success)",
        inverse: "var(--cds-support-success-inverse)",
      },
      warning: {
        DEFAULT: "var(--cds-support-warning)",
        inverse: "var(--cds-support-warning-inverse)",
      },
    },
    toggle: {
      off: "var(--cds-toggle-off)",
    },
    notification: {
      background: {
        error: "var(--cds-notification-background-error)",
        success: "var(--cds-notification-background-success)",
        info: "var(--cds-notification-background-info)",
        warning: "var(--cds-notification-background-warning)",
      },
      action: {
        hover: "var(--cds-notification-action-hover)",
        "tertiary-inverse": {
          DEFAULT: "var(--cds-notification-action-tertiary-inverse)",
          active: "var(--cds-notification-action-tertiary-inverse-active)",
          hover: "var(--cds-notification-action-tertiary-inverse-hover)",
          text: "var(--cds-notification-action-tertiary-inverse-text)",
          "text-on-color-disabled":
            "var(--cds-notification-action-tertiary-inverse-text-on-color-disabled)",
        },
      },
    },
    tag: {
      background: {
        red: "var(--cds-tag-background-red)",
        magenta: "var(--cds-tag-background-magenta)",
        purple: "var(--cds-tag-background-purple)",
        blue: "var(--cds-tag-background-blue)",
        cyan: "var(--cds-tag-background-cyan)",
        teal: "var(--cds-tag-background-teal)",
        green: "var(--cds-tag-background-green)",
        gray: "var(--cds-tag-background-gray)",
        "cool-gray": "var(--cds-tag-background-cool-gray)",
        "warm-gray": "var(--cds-tag-background-warm-gray)",
      },
      color: {
        red: "var(--cds-tag-color-red)",
        magenta: "var(--cds-tag-color-magenta)",
        purple: "var(--cds-tag-color-purple)",
        blue: "var(--cds-tag-color-blue)",
        cyan: "var(--cds-tag-color-cyan)",
        teal: "var(--cds-tag-color-teal)",
        green: "var(--cds-tag-color-green)",
        gray: "var(--cds-tag-color-gray)",
        "cool-gray": "var(--cds-tag-color-cool-gray)",
        "warm-gray": "var(--cds-tag-color-warm-gray)",
      },
      hover: {
        red: "var(--cds-tag-hover-red)",
        magenta: "var(--cds-tag-hover-magenta)",
        purple: "var(--cds-tag-hover-purple)",
        blue: "var(--cds-tag-hover-blue)",
        cyan: "var(--cds-tag-hover-cyan)",
        teal: "var(--cds-tag-hover-teal)",
        green: "var(--cds-tag-hover-green)",
        gray: "var(--cds-tag-hover-gray)",
        "cool-gray": "var(--cds-tag-hover-cool-gray)",
        "warm-gray": "var(--cds-tag-hover-warm-gray)",
      },
      border: {
        red: "var(--cds-tag-border-red)",
        magenta: "var(--cds-tag-border-magenta)",
        purple: "var(--cds-tag-border-purple)",
        blue: "var(--cds-tag-border-blue)",
        cyan: "var(--cds-tag-border-cyan)",
        teal: "var(--cds-tag-border-teal)",
        green: "var(--cds-tag-border-green)",
        gray: "var(--cds-tag-border-gray)",
        "cool-gray": "var(--cds-tag-border-cool-gray)",
        "warm-gray": "var(--cds-tag-border-warm-gray)",
      },
    },
    yellow: {
      10: "#fcf4d6",
      20: "#fddc69",
      30: "#f1c21b",
      40: "#d2a106",
      50: "#b28600",
      60: "#8e6a00",
      70: "#684e00",
      80: "#483700",
      90: "#302400",
      100: "#1c1500",
      hover: {
        10: "#f8e6a0",
        20: "#fccd27",
        30: "#ddb00e",
        40: "#bc9005",
        50: "#9e7700",
        60: "#755800",
        70: "#806000",
        80: "#5c4600",
        90: "#3d2e00",
        100: "#332600",
      },
    },
    orange: {
      10: "#fff2e8",
      20: "#ffd9be",
      30: "#ffb784",
      40: "#ff832b",
      50: "#eb6200",
      60: "#ba4e00",
      70: "#8a3800",
      80: "#5e2900",
      90: "#3e1a00",
      100: "#231000",
      hover: {
        10: "#ffe2cc",
        20: "#ffc69e",
        30: "#ff9d57",
        40: "#fa6800",
        50: "#cc5500",
        60: "#9e4200",
        70: "#a84400",
        80: "#753300",
        90: "#522200",
        100: "#421e00",
      },
    },
    red: {
      10: "#fff1f1",
      20: "#ffd7d9",
      30: "#ffb3b8",
      40: "#ff8389",
      50: "#fa4d56",
      60: "#da1e28",
      70: "#a2191f",
      80: "#750e13",
      90: "#520408",
      100: "#2d0709",
      hover: {
        10: "#ffe0e0",
        20: "#ffc2c5",
        30: "#ff99a0",
        40: "#ff6168",
        50: "#ee0713",
        60: "#b81922",
        70: "#c21e25",
        80: "#921118",
        90: "#66050a",
        100: "#540d11",
      },
    },
    magenta: {
      10: "#fff0f7",
      20: "#ffd6e8",
      30: "#ffafd2",
      40: "#ff7eb6",
      50: "#ee5396",
      60: "#d02670",
      70: "#9f1853",
      80: "#740937",
      90: "#510224",
      100: "#2a0a18",
      hover: {
        10: "#ffe0ef",
        20: "#ffbdda",
        30: "#ff94c3",
        40: "#ff57a0",
        50: "#e3176f",
        60: "#b0215f",
        70: "#bf1d63",
        80: "#8e0b43",
        90: "#68032e",
        100: "#53142f",
      },
    },
    purple: {
      10: "#f6f2ff",
      20: "#e8daff",
      30: "#d4bbff",
      40: "#be95ff",
      50: "#a56eff",
      60: "#8a3ffc",
      70: "#6929c4",
      80: "#491d8b",
      90: "#31135e",
      100: "#1c0f30",
      hover: {
        10: "#ede5ff",
        20: "#dcc7ff",
        30: "#c5a3ff",
        40: "#ae7aff",
        50: "#9352ff",
        60: "#7822fb",
        70: "#7c3dd6",
        80: "#5b24ad",
        90: "#40197b",
        100: "#341c59",
      },
    },
    blue: {
      10: "#edf5ff",
      20: "#d0e2ff",
      30: "#a6c8ff",
      40: "#78a9ff",
      50: "#4589ff",
      60: "#0f62fe",
      70: "#0043ce",
      80: "#002d9c",
      90: "#001d6c",
      100: "#001141",
      hover: {
        10: "#dbebff",
        20: "#b8d3ff",
        30: "#8ab6ff",
        40: "#5c97ff",
        50: "#1f70ff",
        60: "#0050e6",
        70: "#0053ff",
        80: "#0039c7",
        90: "#00258a",
        100: "#001f75",
      },
    },
    cyan: {
      10: "#e5f6ff",
      20: "#bae6ff",
      30: "#82cfff",
      40: "#33b1ff",
      50: "#1192e8",
      60: "#0072c3",
      70: "#00539a",
      80: "#003a6d",
      90: "#012749",
      100: "#061727",
      hover: {
        10: "#cceeff",
        20: "#99daff",
        30: "#57beff",
        40: "#059fff",
        50: "#0f7ec8",
        60: "#005fa3",
        70: "#0066bd",
        80: "#00498a",
        90: "#013360",
        100: "#0b2947",
      },
    },
    teal: {
      10: "#d9fbfb",
      20: "#9ef0f0",
      30: "#3ddbd9",
      40: "#08bdba",
      50: "#009d9a",
      60: "#007d79",
      70: "#005d5d",
      80: "#004144",
      90: "#022b30",
      100: "#081a1c",
      hover: {
        10: "#acf6f6",
        20: "#57e5e5",
        30: "#25cac8",
        40: "#07aba9",
        50: "#008a87",
        60: "#006b68",
        70: "#007070",
        80: "#005357",
        90: "#033940",
        100: "#0f3034",
      },
    },
    green: {
      10: "#defbe6",
      20: "#a7f0ba",
      30: "#6fdc8c",
      40: "#42be65",
      50: "#24a148",
      60: "#198038",
      70: "#0e6027",
      80: "#044317",
      90: "#022d0d",
      100: "#071908",
      hover: {
        10: "#b6f6c8",
        20: "#74e792",
        30: "#36ce5e",
        40: "#3bab5a",
        50: "#208e3f",
        60: "#166f31",
        70: "#11742f",
        80: "#05521c",
        90: "#033b11",
        100: "#0d300f",
      },
    },
    coolGray: {
      10: "#f2f4f8",
      20: "#dde1e6",
      30: "#c1c7cd",
      40: "#a2a9b0",
      50: "#878d96",
      60: "#697077",
      70: "#4d5358",
      80: "#343a3f",
      90: "#21272a",
      100: "#121619",
      hover: {
        10: "#e4e9f1",
        20: "#cdd3da",
        30: "#adb5bd",
        40: "#9199a1",
        50: "#757b85",
        60: "#585e64",
        70: "#5d646a",
        80: "#434a51",
        90: "#2b3236",
        100: "#222a2f",
      },
    },
    gray: {
      10: "#f4f4f4",
      20: "#e0e0e0",
      30: "#c6c6c6",
      40: "#a8a8a8",
      50: "#8d8d8d",
      60: "#6f6f6f",
      70: "#525252",
      80: "#393939",
      90: "#262626",
      100: "#161616",
      hover: {
        10: "#e8e8e8",
        20: "#d1d1d1",
        30: "#b5b5b5",
        40: "#999999",
        50: "#7a7a7a",
        60: "#5e5e5e",
        70: "#636363",
        80: "#474747",
        90: "#333333",
        100: "#292929",
      },
    },
    warmGray: {
      10: "#f7f3f2",
      20: "#e5e0df",
      30: "#cac5c4",
      40: "#ada8a8",
      50: "#8f8b8b",
      60: "#726e6e",
      70: "#565151",
      80: "#3c3838",
      90: "#272525",
      100: "#171414",
      hover: {
        10: "#f0e8e6",
        20: "#d8d0cf",
        30: "#b9b3b1",
        40: "#9c9696",
        50: "#7f7b7b",
        60: "#605d5d",
        70: "#696363",
        80: "#4c4848",
        90: "#343232",
        100: "#2c2626",
      },
    },
    black: {
      DEFAULT: "#000000",
      hover: "#212121",
    },
    white: {
      DEFAULT: "#ffffff",
      hover: "#e8e8e8",
    },
  },
}
export const CARBON_CSS_VARS_LIGHT_STR = `
    background-color: var(--cds-background);
    color: var(--cds-text-primary);
    --cds-ai-aura-end: rgba(255, 255, 255, 0);
    --cds-ai-aura-hover-background: #edf5ff;
    --cds-ai-aura-hover-end: rgba(255, 255, 255, 0);
    --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.32);
    --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
    --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
    --cds-ai-border-end: #78a9ff;
    --cds-ai-border-start: rgba(166, 200, 255, 0.64);
    --cds-ai-border-strong: #4589ff;
    --cds-ai-drop-shadow: rgba(15, 98, 254, 0.1);
    --cds-ai-inner-shadow: rgba(69, 137, 255, 0.1);
    --cds-ai-overlay: rgba(0, 17, 65, 0.5);
    --cds-ai-popover-background: #ffffff;
    --cds-ai-popover-caret-bottom: #78a9ff;
    --cds-ai-popover-caret-bottom-background: #eaf1ff;
    --cds-ai-popover-caret-bottom-background-actions: #e9effa;
    --cds-ai-popover-caret-center: #a0c3ff;
    --cds-ai-popover-shadow-outer-01: rgba(0, 67, 206, 0.06);
    --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.04);
    --cds-ai-skeleton-background: #d0e2ff;
    --cds-ai-skeleton-element-background: #4589ff;
    --cds-background: #ffffff;
    --cds-background-active: rgba(141, 141, 141, 0.5);
    --cds-background-brand: #0f62fe;
    --cds-background-hover: rgba(141, 141, 141, 0.12);
    --cds-background-inverse: #393939;
    --cds-background-inverse-hover: #474747;
    --cds-background-selected: rgba(141, 141, 141, 0.2);
    --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
    --cds-border-disabled: #c6c6c6;
    --cds-border-interactive: #0f62fe;
    --cds-border-inverse: #161616;
    --cds-border-strong-01: #8d8d8d;
    --cds-border-strong-02: #8d8d8d;
    --cds-border-strong-03: #8d8d8d;
    --cds-border-subtle-00: #e0e0e0;
    --cds-border-subtle-01: #c6c6c6;
    --cds-border-subtle-02: #e0e0e0;
    --cds-border-subtle-03: #c6c6c6;
    --cds-border-subtle-selected-01: #c6c6c6;
    --cds-border-subtle-selected-02: #c6c6c6;
    --cds-border-subtle-selected-03: #c6c6c6;
    --cds-border-tile-01: #c6c6c6;
    --cds-border-tile-02: #a8a8a8;
    --cds-border-tile-03: #c6c6c6;
    --cds-chat-avatar-agent: #393939;
    --cds-chat-avatar-bot: #6f6f6f;
    --cds-chat-avatar-user: #0f62fe;
    --cds-chat-bubble-agent: #ffffff;
    --cds-chat-bubble-border: #e0e0e0;
    --cds-chat-bubble-user: #e0e0e0;
    --cds-chat-button: #0f62fe;
    --cds-chat-button-active: rgba(141, 141, 141, 0.5);
    --cds-chat-button-hover: rgba(141, 141, 141, 0.12);
    --cds-chat-button-selected: rgba(141, 141, 141, 0.2);
    --cds-chat-button-text-hover: #0043ce;
    --cds-chat-button-text-selected: #525252;
    --cds-chat-header-background: #ffffff;
    --cds-chat-prompt-background: #ffffff;
    --cds-chat-prompt-border-end: rgba(244, 244, 244, 0);
    --cds-chat-prompt-border-start: #f4f4f4;
    --cds-chat-shell-background: #ffffff;
    --cds-field-01: #f4f4f4;
    --cds-field-02: #ffffff;
    --cds-field-03: #f4f4f4;
    --cds-field-hover-01: #e8e8e8;
    --cds-field-hover-02: #e8e8e8;
    --cds-field-hover-03: #e8e8e8;
    --cds-focus: #0f62fe;
    --cds-focus-inset: #ffffff;
    --cds-focus-inverse: #ffffff;
    --cds-highlight: #d0e2ff;
    --cds-icon-disabled: rgba(22, 22, 22, 0.25);
    --cds-icon-interactive: #0f62fe;
    --cds-icon-inverse: #ffffff;
    --cds-icon-on-color: #ffffff;
    --cds-icon-on-color-disabled: #8d8d8d;
    --cds-icon-primary: #161616;
    --cds-icon-secondary: #525252;
    --cds-interactive: #0f62fe;
    --cds-layer-01: #f4f4f4;
    --cds-layer-02: #ffffff;
    --cds-layer-03: #f4f4f4;
    --cds-layer-accent-01: #e0e0e0;
    --cds-layer-accent-02: #e0e0e0;
    --cds-layer-accent-03: #e0e0e0;
    --cds-layer-accent-active-01: #a8a8a8;
    --cds-layer-accent-active-02: #a8a8a8;
    --cds-layer-accent-active-03: #a8a8a8;
    --cds-layer-accent-hover-01: #d1d1d1;
    --cds-layer-accent-hover-02: #d1d1d1;
    --cds-layer-accent-hover-03: #d1d1d1;
    --cds-layer-active-01: #c6c6c6;
    --cds-layer-active-02: #c6c6c6;
    --cds-layer-active-03: #c6c6c6;
    --cds-layer-hover-01: #e8e8e8;
    --cds-layer-hover-02: #e8e8e8;
    --cds-layer-hover-03: #e8e8e8;
    --cds-layer-selected-01: #e0e0e0;
    --cds-layer-selected-02: #e0e0e0;
    --cds-layer-selected-03: #e0e0e0;
    --cds-layer-selected-disabled: #8d8d8d;
    --cds-layer-selected-hover-01: #d1d1d1;
    --cds-layer-selected-hover-02: #d1d1d1;
    --cds-layer-selected-hover-03: #d1d1d1;
    --cds-layer-selected-inverse: #161616;
    --cds-link-inverse: #78a9ff;
    --cds-link-inverse-active: #f4f4f4;
    --cds-link-inverse-hover: #a6c8ff;
    --cds-link-inverse-visited: #be95ff;
    --cds-link-primary: #0f62fe;
    --cds-link-primary-hover: #0043ce;
    --cds-link-secondary: #0043ce;
    --cds-link-visited: #8a3ffc;
    --cds-overlay: rgba(22, 22, 22, 0.5);
    --cds-shadow: rgba(0, 0, 0, 0.3);
    --cds-skeleton-background: #e8e8e8;
    --cds-skeleton-element: #c6c6c6;
    --cds-support-caution-major: #ff832b;
    --cds-support-caution-minor: #f1c21b;
    --cds-support-caution-undefined: #8a3ffc;
    --cds-support-error: #da1e28;
    --cds-support-error-inverse: #fa4d56;
    --cds-support-info: #0043ce;
    --cds-support-info-inverse: #4589ff;
    --cds-support-success: #24a148;
    --cds-support-success-inverse: #42be65;
    --cds-support-warning: #f1c21b;
    --cds-support-warning-inverse: #f1c21b;
    --cds-text-disabled: rgba(22, 22, 22, 0.25);
    --cds-text-error: #da1e28;
    --cds-text-helper: #6f6f6f;
    --cds-text-inverse: #ffffff;
    --cds-text-on-color: #ffffff;
    --cds-text-on-color-disabled: #8d8d8d;
    --cds-text-placeholder: rgba(22, 22, 22, 0.4);
    --cds-text-primary: #161616;
    --cds-text-secondary: #525252;
    --cds-toggle-off: #8d8d8d;
    --cds-layer: var(--cds-layer-01, #f4f4f4);
    --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
    --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
    --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
    --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
    --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
    --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
    --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
    --cds-field: var(--cds-field-01, #f4f4f4);
    --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
    --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
    --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
    --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
    --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
    --cds-button-separator: #e0e0e0;
    --cds-button-primary: #0f62fe;
    --cds-button-secondary: #393939;
    --cds-button-tertiary: #0f62fe;
    --cds-button-danger-primary: #da1e28;
    --cds-button-danger-secondary: #da1e28;
    --cds-button-danger-active: #750e13;
    --cds-button-primary-active: #002d9c;
    --cds-button-secondary-active: #6f6f6f;
    --cds-button-tertiary-active: #002d9c;
    --cds-button-danger-hover: #b81921;
    --cds-button-primary-hover: #0050e6;
    --cds-button-secondary-hover: #474747;
    --cds-button-tertiary-hover: #0050e6;
    --cds-button-disabled: #c6c6c6;
    --cds-notification-background-error: #fff1f1;
    --cds-notification-background-success: #defbe6;
    --cds-notification-background-info: #edf5ff;
    --cds-notification-background-warning: rgb(252.9, 245.85, 220.8);
    --cds-notification-action-hover: #ffffff;
    --cds-notification-action-tertiary-inverse: #ffffff;
    --cds-notification-action-tertiary-inverse-active: #c6c6c6;
    --cds-notification-action-tertiary-inverse-hover: #f4f4f4;
    --cds-notification-action-tertiary-inverse-text: #161616;
    --cds-notification-action-tertiary-inverse-text-on-color-disabled: rgba(255, 255, 255, 0.25);
    --cds-tag-background-red: #ffd7d9;
    --cds-tag-color-red: #750e13;
    --cds-tag-hover-red: #ffc2c5;
    --cds-tag-background-magenta: #ffd6e8;
    --cds-tag-color-magenta: #740937;
    --cds-tag-hover-magenta: #ffbdda;
    --cds-tag-background-purple: #e8daff;
    --cds-tag-color-purple: #491d8b;
    --cds-tag-hover-purple: #dcc7ff;
    --cds-tag-background-blue: #d0e2ff;
    --cds-tag-color-blue: #002d9c;
    --cds-tag-hover-blue: #b8d3ff;
    --cds-tag-background-cyan: #bae6ff;
    --cds-tag-color-cyan: #003a6d;
    --cds-tag-hover-cyan: #99daff;
    --cds-tag-background-teal: #9ef0f0;
    --cds-tag-color-teal: #004144;
    --cds-tag-hover-teal: #57e5e5;
    --cds-tag-background-green: #a7f0ba;
    --cds-tag-color-green: #044317;
    --cds-tag-hover-green: #74e792;
    --cds-tag-background-gray: #e0e0e0;
    --cds-tag-color-gray: #161616;
    --cds-tag-hover-gray: #d1d1d1;
    --cds-tag-border-red: #ff8389;
    --cds-tag-border-blue: #78a9ff;
    --cds-tag-border-cyan: #33b1ff;
    --cds-tag-border-teal: #08bdba;
    --cds-tag-border-green: #42be65;
    --cds-tag-border-magenta: #ff7eb6;
    --cds-tag-border-purple: #be95ff;
    --cds-tag-border-gray: #a8a8a8;
    --cds-tag-border-cool-gray: #a2a9b0;
    --cds-tag-border-warm-gray: #ada8a8;
    --cds-tag-background-cool-gray: #dde1e6;
    --cds-tag-color-cool-gray: #121619;
    --cds-tag-hover-cool-gray: #cdd3da;
    --cds-tag-background-warm-gray: #e5e0df;
    --cds-tag-color-warm-gray: #171414;
    --cds-tag-hover-warm-gray: #d8d0cf;
  `

export const CARBON_CSS_VARS_DARK_STR = `
    background-color: var(--cds-background);
    color: var(--cds-text-primary);
    --cds-ai-aura-end: rgba(0, 0, 0, 0);
    --cds-ai-aura-hover-background: #474747;
    --cds-ai-aura-hover-end: rgba(0, 0, 0, 0);
    --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.4);
    --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
    --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
    --cds-ai-border-end: #4589ff;
    --cds-ai-border-start: rgba(166, 200, 255, 0.36);
    --cds-ai-border-strong: #78a9ff;
    --cds-ai-drop-shadow: rgba(0, 0, 0, 0.28);
    --cds-ai-inner-shadow: rgba(69, 137, 255, 0.16);
    --cds-ai-overlay: rgba(0, 0, 0, 0.5);
    --cds-ai-popover-background: #161616;
    --cds-ai-popover-caret-bottom: #4589ff;
    --cds-ai-popover-caret-bottom-background: #202d45;
    --cds-ai-popover-caret-bottom-background-actions: #1e283a;
    --cds-ai-popover-caret-center: #4870b5;
    --cds-ai-popover-shadow-outer-01: rgba(0, 0, 0, 0.12);
    --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.08);
    --cds-ai-skeleton-background: rgba(120, 169, 255, 0.5);
    --cds-ai-skeleton-element-background: rgba(120, 169, 255, 0.3);
    --cds-background: #262626;
    --cds-background-active: rgba(141, 141, 141, 0.4);
    --cds-background-brand: #0f62fe;
    --cds-background-hover: rgba(141, 141, 141, 0.16);
    --cds-background-inverse: #f4f4f4;
    --cds-background-inverse-hover: #e8e8e8;
    --cds-background-selected: rgba(141, 141, 141, 0.24);
    --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
    --cds-border-disabled: rgba(141, 141, 141, 0.5);
    --cds-border-interactive: #4589ff;
    --cds-border-inverse: #f4f4f4;
    --cds-border-strong-01: #8d8d8d;
    --cds-border-strong-02: #a8a8a8;
    --cds-border-strong-03: #c6c6c6;
    --cds-border-subtle-00: #525252;
    --cds-border-subtle-01: #6f6f6f;
    --cds-border-subtle-02: #8d8d8d;
    --cds-border-subtle-03: #8d8d8d;
    --cds-border-subtle-selected-01: #8d8d8d;
    --cds-border-subtle-selected-02: #a8a8a8;
    --cds-border-subtle-selected-03: #a8a8a8;
    --cds-border-tile-01: #6f6f6f;
    --cds-border-tile-02: #8d8d8d;
    --cds-border-tile-03: #a8a8a8;
    --cds-chat-avatar-agent: #c6c6c6;
    --cds-chat-avatar-bot: #8d8d8d;
    --cds-chat-avatar-user: #4589ff;
    --cds-chat-bubble-agent: #262626;
    --cds-chat-bubble-border: #525252;
    --cds-chat-bubble-user: #393939;
    --cds-chat-button: #78a9ff;
    --cds-chat-button-active: rgba(141, 141, 141, 0.4);
    --cds-chat-button-hover: rgba(141, 141, 141, 0.16);
    --cds-chat-button-selected: rgba(141, 141, 141, 0.24);
    --cds-chat-button-text-hover: #a6c8ff;
    --cds-chat-button-text-selected: #c6c6c6;
    --cds-chat-header-background: #262626;
    --cds-chat-prompt-background: #161616;
    --cds-chat-prompt-border-end: rgba(38, 38, 38, 0);
    --cds-chat-prompt-border-start: #262626;
    --cds-chat-shell-background: #262626;
    --cds-field-01: #393939;
    --cds-field-02: #525252;
    --cds-field-03: #6f6f6f;
    --cds-field-hover-01: #474747;
    --cds-field-hover-02: #636363;
    --cds-field-hover-03: #5e5e5e;
    --cds-focus: #ffffff;
    --cds-focus-inset: #161616;
    --cds-focus-inverse: #0f62fe;
    --cds-highlight: #002d9c;
    --cds-icon-disabled: rgba(244, 244, 244, 0.25);
    --cds-icon-interactive: #ffffff;
    --cds-icon-inverse: #161616;
    --cds-icon-on-color: #ffffff;
    --cds-icon-on-color-disabled: rgba(255, 255, 255, 0.25);
    --cds-icon-primary: #f4f4f4;
    --cds-icon-secondary: #c6c6c6;
    --cds-interactive: #4589ff;
    --cds-layer-01: #393939;
    --cds-layer-02: #525252;
    --cds-layer-03: #6f6f6f;
    --cds-layer-accent-01: #525252;
    --cds-layer-accent-02: #6f6f6f;
    --cds-layer-accent-03: #8d8d8d;
    --cds-layer-accent-active-01: #8d8d8d;
    --cds-layer-accent-active-02: #393939;
    --cds-layer-accent-active-03: #525252;
    --cds-layer-accent-hover-01: #636363;
    --cds-layer-accent-hover-02: #5e5e5e;
    --cds-layer-accent-hover-03: #7a7a7a;
    --cds-layer-active-01: #6f6f6f;
    --cds-layer-active-02: #8d8d8d;
    --cds-layer-active-03: #393939;
    --cds-layer-hover-01: #474747;
    --cds-layer-hover-02: #636363;
    --cds-layer-hover-03: #5e5e5e;
    --cds-layer-selected-01: #525252;
    --cds-layer-selected-02: #6f6f6f;
    --cds-layer-selected-03: #525252;
    --cds-layer-selected-disabled: #a8a8a8;
    --cds-layer-selected-hover-01: #636363;
    --cds-layer-selected-hover-02: #5e5e5e;
    --cds-layer-selected-hover-03: #636363;
    --cds-layer-selected-inverse: #f4f4f4;
    --cds-link-inverse: #0f62fe;
    --cds-link-inverse-active: #161616;
    --cds-link-inverse-hover: #0043ce;
    --cds-link-inverse-visited: #8a3ffc;
    --cds-link-primary: #78a9ff;
    --cds-link-primary-hover: #a6c8ff;
    --cds-link-secondary: #a6c8ff;
    --cds-link-visited: #be95ff;
    --cds-overlay: rgba(0, 0, 0, 0.65);
    --cds-shadow: rgba(0, 0, 0, 0.8);
    --cds-skeleton-background: #333333;
    --cds-skeleton-element: #525252;
    --cds-support-caution-major: #ff832b;
    --cds-support-caution-minor: #f1c21b;
    --cds-support-caution-undefined: #a56eff;
    --cds-support-error: #ff8389;
    --cds-support-error-inverse: #da1e28;
    --cds-support-info: #4589ff;
    --cds-support-info-inverse: #0043ce;
    --cds-support-success: #42be65;
    --cds-support-success-inverse: #24a148;
    --cds-support-warning: #f1c21b;
    --cds-support-warning-inverse: #f1c21b;
    --cds-text-disabled: rgba(244, 244, 244, 0.25);
    --cds-text-error: #ffb3b8;
    --cds-text-helper: #c6c6c6;
    --cds-text-inverse: #161616;
    --cds-text-on-color: #ffffff;
    --cds-text-on-color-disabled: rgba(255, 255, 255, 0.25);
    --cds-text-placeholder: rgba(244, 244, 244, 0.4);
    --cds-text-primary: #f4f4f4;
    --cds-text-secondary: #c6c6c6;
    --cds-toggle-off: #8d8d8d;
    --cds-layer: var(--cds-layer-01, #f4f4f4);
    --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
    --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
    --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
    --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
    --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
    --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
    --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
    --cds-field: var(--cds-field-01, #f4f4f4);
    --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
    --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
    --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
    --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
    --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
    --cds-button-separator: #161616;
    --cds-button-primary: #0f62fe;
    --cds-button-secondary: #6f6f6f;
    --cds-button-tertiary: #ffffff;
    --cds-button-danger-primary: #da1e28;
    --cds-button-danger-secondary: #ff8389;
    --cds-button-danger-active: #750e13;
    --cds-button-primary-active: #002d9c;
    --cds-button-secondary-active: #393939;
    --cds-button-tertiary-active: #c6c6c6;
    --cds-button-danger-hover: #b81921;
    --cds-button-primary-hover: #0050e6;
    --cds-button-secondary-hover: #5e5e5e;
    --cds-button-tertiary-hover: #f4f4f4;
    --cds-button-disabled: rgba(141, 141, 141, 0.3);
    --cds-notification-background-error: #393939;
    --cds-notification-background-success: #393939;
    --cds-notification-background-info: #393939;
    --cds-notification-background-warning: #393939;
    --cds-notification-action-tertiary-inverse: #0f62fe;
    --cds-notification-action-tertiary-inverse-active: #002d9c;
    --cds-notification-action-tertiary-inverse-hover: #0050e6;
    --cds-notification-action-tertiary-inverse-text: #ffffff;
    --cds-notification-action-tertiary-inverse-text-on-color-disabled: #8d8d8d;
    --cds-tag-background-red: #a2191f;
    --cds-tag-color-red: #ffd7d9;
    --cds-tag-hover-red: #c21e25;
    --cds-tag-background-magenta: #9f1853;
    --cds-tag-color-magenta: #ffd6e8;
    --cds-tag-hover-magenta: #bf1d63;
    --cds-tag-background-purple: #6929c4;
    --cds-tag-color-purple: #e8daff;
    --cds-tag-hover-purple: #7c3dd6;
    --cds-tag-background-blue: #0043ce;
    --cds-tag-color-blue: #d0e2ff;
    --cds-tag-hover-blue: #0053ff;
    --cds-tag-background-cyan: #00539a;
    --cds-tag-color-cyan: #bae6ff;
    --cds-tag-hover-cyan: #0066bd;
    --cds-tag-background-teal: #005d5d;
    --cds-tag-color-teal: #9ef0f0;
    --cds-tag-hover-teal: #007070;
    --cds-tag-background-green: #0e6027;
    --cds-tag-color-green: #a7f0ba;
    --cds-tag-hover-green: #11742f;
    --cds-tag-background-gray: #525252;
    --cds-tag-color-gray: #f4f4f4;
    --cds-tag-hover-gray: #636363;
    --cds-tag-border-red: #fa4d56;
    --cds-tag-border-blue: #4589ff;
    --cds-tag-border-cyan: #1192e8;
    --cds-tag-border-teal: #009d9a;
    --cds-tag-border-green: #24a148;
    --cds-tag-border-magenta: #ee5396;
    --cds-tag-border-purple: #a56eff;
    --cds-tag-border-gray: #8d8d8d;
    --cds-tag-border-cool-gray: #878d96;
    --cds-tag-border-warm-gray: #8f8b8b;
    --cds-tag-background-cool-gray: #4d5358;
    --cds-tag-color-cool-gray: #f2f4f8;
    --cds-tag-hover-cool-gray: #5d646a;
    --cds-tag-background-warm-gray: #565151;
    --cds-tag-color-warm-gray: #f7f3f2;
    --cds-tag-hover-warm-gray: #696363;
    `

export const PREFLIGHT_CSS = `
/*
 * Custom Preflight CSS
 *
 * Purpose:
 * - Resets default HTML element styles
 * - Provides base for Tailwind CSS
 *
 * Note: Carbon Design System components (classes starting with "cds--") are excluded
 * to prevent styling conflicts and maintain their intended appearance.
 *
 * This custom implementation allows Tailwind and Carbon to coexist without issues.
 *
 * Ref: https://tailwindcss.com/docs/preflight
 */



:where(*:not([class^="cds--"])),
:where(*:not([class^="cds--"])::before),
:where(*:not([class^="cds--"])::after) {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentcolor;
}

:where(html) {
    line-height: 1.5;
    text-size-adjust: 100%;
    tab-size: 4;
}

:where(body) {
    margin: 0;
    line-height: inherit;
}

:where(hr:not([class^="cds--"])) {
    height: 0;
    color: inherit;
    border-top-width: 1px;
}

:where(abbr:where([title]):not([class^="cds--"])) {
    text-decoration: underline dotted;
}

:where(h1:not([class^="cds--"])),
:where(h2:not([class^="cds--"])),
:where(h3:not([class^="cds--"])),
:where(h4:not([class^="cds--"])),
:where(h5:not([class^="cds--"])),
:where(h6:not([class^="cds--"])) {
    font-size: inherit;
    font-weight: inherit;
}

:where(a:not([class^="cds--"])) {
    color: inherit;
    text-decoration: inherit;
}

:where(b:not([class^="cds--"])),
:where(strong:not([class^="cds--"])) {
    font-weight: bolder;
}

:where(code:not([class^="cds--"])),
:where(kbd:not([class^="cds--"])),
:where(samp:not([class^="cds--"])),
:where(pre:not([class^="cds--"])) {
    font-family:
        "fontFamily.mono",
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        "Liberation Mono",
        "Courier New",
        monospace;
    font-size: 1em;
}

:where(small:not([class^="cds--"])) {
    font-size: 80%;
}

:where(sub:not([class^="cds--"])),
:where(sup:not([class^="cds--"])) {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

:where(sub:not([class^="cds--"])) {
    bottom: -0.25em;
}

:where(sup:not([class^="cds--"])) {
    top: -0.5em;
}

:where(table:not([class^="cds--"])) {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
}

:where(button:not([class^="cds--"])),
:where(input:not([class^="cds--"])),
:where(optgroup:not([class^="cds--"])),
:where(select:not([class^="cds--"])),
:where(textarea:not([class^="cds--"])) {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}

:where(button:not([class^="cds--"])),
:where(select:not([class^="cds--"])) {
    text-transform: none;
}

:where(button:not([class^="cds--"])),
:where([type="button"]:not([class^="cds--"])),
:where([type="reset"]:not([class^="cds--"])),
:where([type="submit"]:not([class^="cds--"])) {
    appearance: button;
    background-color: transparent;
    background-image: none;
}

:where(:-moz-focusring:not([class^="cds--"])) {
    outline: auto;
}

:where(:-moz-ui-invalid:not([class^="cds--"])) {
    box-shadow: none;
}

:where(progress:not([class^="cds--"])) {
    vertical-align: baseline;
}

:where(::-webkit-inner-spin-button:not([class^="cds--"])),
:where(::-webkit-outer-spin-button:not([class^="cds--"])) {
    height: auto;
}

:where([type="search"]:not([class^="cds--"])) {
    appearance: textfield;
    outline-offset: -2px;
}

:where(::-webkit-search-decoration:not([class^="cds--"])) {
    appearance: none;
}

:where(::-webkit-file-upload-button:not([class^="cds--"])) {
    appearance: button;
    font: inherit;
}

:where(summary:not([class^="cds--"])) {
    display: list-item;
}

:where(blockquote:not([class^="cds--"])),
:where(dl:not([class^="cds--"])),
:where(dd:not([class^="cds--"])),
:where(h1:not([class^="cds--"])),
:where(h2:not([class^="cds--"])),
:where(h3:not([class^="cds--"])),
:where(h4:not([class^="cds--"])),
:where(h5:not([class^="cds--"])),
:where(h6:not([class^="cds--"])),
:where(hr:not([class^="cds--"])),
:where(figure:not([class^="cds--"])),
:where(p:not([class^="cds--"])),
:where(pre:not([class^="cds--"])) {
    margin: 0;
}

:where(fieldset:not([class^="cds--"])) {
    margin: 0;
    padding: 0;
}

:where(legend:not([class^="cds--"])) {
    padding: 0;
}

:where(ol:not([class^="cds--"])),
:where(ul:not([class^="cds--"])),
:where(menu:not([class^="cds--"])) {
    list-style: none;
    margin: 0;
    padding: 0;
}

:where(textarea:not([class^="cds--"])) {
    resize: vertical;
}

:where(input::placeholder:not([class^="cds--"])),
:where(textarea::placeholder:not([class^="cds--"])) {
    opacity: 1;
    color: #9ca3af;
}

:where(button:not([class^="cds--"])),
:where([role="button"]:not([class^="cds--"])) {
    cursor: pointer;
}

:where(:disabled:not([class^="cds--"])) {
    cursor: default;
}

:where(img:not([class^="cds--"])),
:where(svg:not([class^="cds--"])),
:where(video:not([class^="cds--"])),
:where(canvas:not([class^="cds--"])),
:where(audio:not([class^="cds--"])),
:where(iframe:not([class^="cds--"])),
:where(embed:not([class^="cds--"])),
:where(object:not([class^="cds--"])) {
    display: block;
    vertical-align: middle;
}

:where(img:not([class^="cds--"])),
:where(video:not([class^="cds--"])) {
    max-width: 100%;
    height: auto;
}
`
