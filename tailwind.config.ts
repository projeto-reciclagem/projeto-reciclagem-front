/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#F3F6EB",
          100: "#DBE2C1",
          200: "#C9D4A3",
          300: "#B1C178",
          400: "#A1B55E",
          500: "#8AA236",
          600: "#7E9331",
          700: "#627326",
          800: "#4C591E",
          900: "#3A4417",
        },
        "moss-green": {
          50: "#EEF4EA",
          100: "#CADEBF",
          200: "#B0CEA0",
          300: "#8CB775",
          400: "#76A95A",
          500: "#549431",
          600: "#4C872D",
          700: "#3C6923",
          800: "#2E511B",
          900: "#233E15",
        },
        marine: {
          50: "#E9F1EE",
          100: "#BBD3CC",
          200: "#9BBDB3",
          300: "#6D9F90",
          400: "#518D7A",
          500: "#257059",
          600: "#226651",
          700: "#1A503F",
          800: "#143E31",
          900: "#102F25",
        },
        camel: {
          50: "#F8F5EE",
          100: "#EBE0CA",
          200: "#E1D1B0",
          300: "#D3BD8C",
          400: "#CAB076",
          500: "#BD9C54",
          600: "#AC8E4C",
          700: "#866F3C",
          800: "#68562E",
          900: "#4F4223",
        },
      },
      backgroundImage: {
        'carrossel-item1': 'url("./src/assets/img/carrossel-item1.jpg")',
        'carrossel-item2': 'url("./src/assets/img/carrossel-item2.jpg")',
        'carrossel-item3': 'url("./src/assets/img/carrossel-item3.jpg")',
      }
    }
  },
  plugins: [],
}

