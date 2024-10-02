const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-ibm-plex-sans)", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
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
          hover: "var(--cds-field-hover)",
        },
        text: {
          "on-color": {
            DEFAULT: "var(--cds-text-on-color)",
            disabled: "var(--cds-text-on-color-disabled)",
          },
          inverse: "var(--cds-text-inverse)",
          secondary: "var(--cds-text-secondary)",
        },
        focus: {
          DEFAULT: "var(--cds-focus)",
          inset: "var(--cds-focus-inset)",
          inverse: "var(--cds-focus-inverse)",
        },
        border: {
          strong: "var(--cds-border-strong)",
          tile: "var(--cds-border-tile)",
          subtle: {
            DEFAULT: "var(--cds-border-subtle)",
            selected: "var(--cds-border-subtle-selected)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
