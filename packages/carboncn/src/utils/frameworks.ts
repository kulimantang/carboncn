export const FRAMEWORKS = {
  "next-app": {
    name: "next-app",
    label: "Next.js",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/next",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  "next-pages": {
    name: "next-pages",
    label: "Next.js",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/next",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  remix: {
    name: "remix",
    label: "Remix",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/remix",
      tailwind: "https://tailwindcss.com/docs/guides/remix",
    },
  },
  vite: {
    name: "vite",
    label: "Vite",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/vite",
      tailwind: "https://tailwindcss.com/docs/guides/vite",
    },
  },
  astro: {
    name: "astro",
    label: "Astro",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/astro",
      tailwind: "https://tailwindcss.com/docs/guides/astro",
    },
  },
  laravel: {
    name: "laravel",
    label: "Laravel",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/laravel",
      tailwind: "https://tailwindcss.com/docs/guides/laravel",
    },
  },
  gatsby: {
    name: "gatsby",
    label: "Gatsby",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/gatsby",
      tailwind: "https://tailwindcss.com/docs/guides/gatsby",
    },
  },
  manual: {
    name: "manual",
    label: "Manual",
    links: {
      installation: "https://carboncn.vercel.app/docs/installation/manual",
      tailwind: "https://tailwindcss.com/docs/installation",
    },
  },
} as const

export type Framework = (typeof FRAMEWORKS)[keyof typeof FRAMEWORKS]
