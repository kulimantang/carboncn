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
                    actions:
                      "var(--cds-ai-popover-caret-bottom-background-actions)",
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
                active:
                  "var(--cds-notification-action-tertiary-inverse-active)",
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
