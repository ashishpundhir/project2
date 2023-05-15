Readme file for Terribly Tiny Tales Application
link:- https://gorgeous-lollipop-28a643.netlify.app/
This project is a web application that fetches a text file from an API and generates a bar chart of the 20 most frequently used words in the text file using the React library and ApexCharts component.

Components
The project has three main components:

Welcome Component
Data Component
ApexChart Component
Welcome Component
This is the entry point of the application that renders the Submit button. When clicked, this button triggers the Data component to fetch data from the API and display the bar chart.

Data Component
This component fetches data from the https://www.terriblytinytales.com/test.txt API and generates a bar chart of the 20 most frequently used words in the text file. This component uses the useState and useEffect hooks to manage state and effect respectively. It also renders the ApexChart component, which generates the bar chart using the data fetched from the API.

ApexChart Component
This is a reusable functional component that generates a bar chart using the ReactApexChart component. It takes in an array of data as props and generates a chart with the 20 most frequently used words.

Libraries and Plugins
The following libraries and plugins were used in this project:

React - A JavaScript library for building user interfaces.
ReactApexChart - A React component for ApexCharts, which is a JavaScript charting library.
Animate.css - A CSS animation library for animating HTML elements.
Available Scripts
In the project directory, you can run:

npm run dev
Runs the app in the development mode.

npm run build
Builds the app for production to the dist folder.

npm run lint
Lints the code to ensure there are no errors.

npm run preview
Runs the built app in preview mode.

Note: The project is built using Vite - a build tool that aims to provide a faster and leaner development experience.

