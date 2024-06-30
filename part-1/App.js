const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Syscily" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
