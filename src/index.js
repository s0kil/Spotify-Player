import App from "./App.svelte"; // Import `App` Component

// Create a `new` instance of the `App` Component
const app = new App({
  // Tell Svelte runtime to mount (render, display) the `App` component on `document.body`
  // Ex: `target` is equal to `<body></body>`;
  target: document.body
});

export default app;
