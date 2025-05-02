// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindcss_postcss from '@tailwindcss/postcss'; // Import the new package
 
export default {
  plugins: [
    tailwindcss,
    tailwindcss_postcss, // Add it to your plugins
    autoprefixer,
  ],
};