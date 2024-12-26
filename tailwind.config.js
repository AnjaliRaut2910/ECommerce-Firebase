import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your folder structure
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});