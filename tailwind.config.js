module.exports = {
  content: ["./public/*.html"], // Adjust path based on your project structure
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  // variants: {}, // Remove if not using custom variants
  // plugins: [], // Remove if not using custom plugins
};
