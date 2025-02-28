import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'rss-light-mode':
          "url('https://res.cloudinary.com/dybam16gk/image/upload/v1668335093/blog_images/rss_zp3rq2.png')",
        'rss-dark-mode':
          "url('https://res.cloudinary.com/dybam16gk/image/upload/v1668335093/blog_images/rss-white_eyvvye.png')",
      },
      fontFamily: {
        comic: ['Comic Sans MS', 'Comic Sans', 'cursive'],
        sans: ['Public Sans Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
