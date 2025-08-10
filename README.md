<body>
  <h1>Filter with Modal Window</h1>

  <h2>Description</h2>
  <p>A full-featured filter with the ability to select parameters via a modal window has been implemented. The filter is designed for convenient searching and sorting of data in the application with support for multilingualism and a responsive interface.</p>

  <h2>Main Features</h2>
  <ul>
    <li><strong>Filter modal window</strong> - opens on click, allowing users to select the desired filtering parameters.</li>
    <li><strong>Localization</strong> - uses the i18next library to translate text into different languages.</li>
    <li><strong>Typing</strong> - all code is written in TypeScript with precise types for filters and components.</li>
    <li><strong>State management</strong> - the state of the modal window opening and selected filters is controlled via props and local state.</li>
    <li><strong>Responsive design</strong> - styled with TailwindCSS, supports mobile devices.</li>
    <li><strong>API integration</strong> - logic prepared to send selected filters to the server to fetch data.</li>
    <li><strong>Filter reset</strong> - ability to clear all selected parameters with one click.</li>
    <li><strong>Code optimization and cleanliness</strong> - unused dependencies removed, package.json and node_modules optimized to reduce size.</li>
  </ul>

  <h2>Style and Responsiveness</h2>
  <ul>
    <li>TailwindCSS is used for fast and flexible styling.</li>
    <li>The modal window and filter are adapted for both mobile and desktop screens.</li>
  </ul>

  <h2>Build and Run System</h2>
<p>This project uses modern frontend tooling to build and run the application efficiently.</p>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (version 16 or higher recommended)</li>
  <li>npm or yarn package manager</li>
</ul>

<h3>Installation</h3>
<p>Install all dependencies by running:</p>
<pre><code>npm install
# or
yarn install
</code></pre>

<h3>Development</h3>
<p>To start the development server with hot-reload, run:</p>
<pre><code>npm run dev
# or
yarn dev
</code></pre>
<p>This will launch the app locally, usually accessible at <code>http://localhost:3000</code>.</p>

<h3>Production Build</h3>
<p>To create an optimized production build, run:</p>
<pre><code>npm run build
# or
yarn build
</code></pre>
<p>The output will be in the <code>dist/</code> or <code>build/</code> directory depending on the build tool.</p>

<h3>Preview Production Build</h3>
<p>To preview the production build locally, use:</p>
<pre><code>npm run preview
# or
yarn preview
</code></pre>

<h3>Additional Notes</h3>
<ul>
  <li>TailwindCSS is configured and integrated; any changes to styles should be followed by rebuilding.</li>
  <li>TypeScript checks run automatically during build to ensure type safety.</li>
  <li>Environment variables can be configured in a <code>.env</code> file if needed.</li>
</ul>
</body>
