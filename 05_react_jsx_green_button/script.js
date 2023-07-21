const App = ({ initialButtonText, initialclassesList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialclassesList);

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('green_btn');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
  <App
    initialButtonText="Push me"
    initialclassesList=""
  />
);