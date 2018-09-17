Object.defineProperty(global.window.location, 'href', {
  writable: true,
  value: 'localhost:3000'
});
