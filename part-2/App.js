const App = () => {
  return (
    <div>
      <Tweet
        username="sys_capone"
        name="Syscily"
        date="August 17, 2024"
        message="30 Won. Fine. Paid. SWE"
      />

      <Tweet
        username="saucily"
        name="Nicole"
        date="Today, 3:42 PM"
        message="I want pizza"
      />

      <Tweet
        username="clubShay_Shay"
        name="Shannon"
        date="Yesterday, 11:43 AM"
        message="SKIIIIIIP!"
      />
      <Person age={19} name="Jordy" />
      <Person age={31} name="Leroy the Lobster" />
      <Person age={17} name="Gucci Mane" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
