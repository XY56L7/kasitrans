module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep Blue
        secondary: '#F59E0B', // Orange
        accent: '#10B981', // Green
        dark: '#111827', // Dark Gray
        light: '#F3F4F6', // Light Gray
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(30,58,138,0.8) 0%, rgba(17,24,39,0.9) 100%)',
      },
    },
  },
  plugins: [],
};