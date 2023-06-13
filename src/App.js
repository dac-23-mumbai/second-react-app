// MIXING JS in the HTML
// MIXING JS in JSX
// Data Binding in HTML
// Interpolation:: Data Binding in JSX ::
function App() {
  let str = `Hello World`;

  // JSX :: ViEW :: USER INTERFACE :: HTML
  // HTML + JS
  return (
    <>
      <h1>Hello World</h1>
      <h1>str</h1>
      <h1>{str}</h1>
      <h1>{str.toUpperCase()}</h1>
    </>
  );
}

export default App;
