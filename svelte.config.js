/** @type {import('@sveltejs/kit').Config} */
const netlify = require('@sveltejs/adapter-netlify');

const config = {
  kit: {
    adapter: netlify(),
    target: '#svelte',
  },
};

export default config;
