const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      // sans: ["var(--font-ibm-plex-sans)", ...fontFamily.sans],
      sans: ["IBM Plex Sans", ...fontFamily.sans],
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
          disabled: "var(--cds-button-disabled)",
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
          "01": "var(--cds-layer-01)",
          "02": "var(--cds-layer-02)",
          "03": "var(--cds-layer-03)",
          accent: {
            "01": "var(--cds-layer-accent-01)",
            "02": "var(--cds-layer-accent-02)",
            "03": "var(--cds-layer-accent-03)",
            active: {
              "01": "var(--cds-layer-accent-active-01)",
              "02": "var(--cds-layer-accent-active-02)",
              "03": "var(--cds-layer-accent-active-03)",
            },
            hover: {
              "01": "var(--cds-layer-accent-hover-01)",
              "02": "var(--cds-layer-accent-hover-02)",
              "03": "var(--cds-layer-accent-hover-03)",
            },
          },
          active: {
            "01": "var(--cds-layer-active-01)",
            "02": "var(--cds-layer-active-02)",
            "03": "var(--cds-layer-active-03)",
          },
          hover: {
            "01": "var(--cds-layer-hover-01)",
            "02": "var(--cds-layer-hover-02)",
            "03": "var(--cds-layer-hover-03)",
          },
          selected: {
            "01": "var(--cds-layer-selected-01)",
            "02": "var(--cds-layer-selected-02)",
            "03": "var(--cds-layer-selected-03)",
            disabled: "var(--cds-layer-selected-disabled)",
            hover: {
              "01": "var(--cds-layer-selected-hover-01)",
              "02": "var(--cds-layer-selected-hover-02)",
              "03": "var(--cds-layer-selected-hover-03)",
            },
            inverse: "var(--cds-layer-selected-inverse)",
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
