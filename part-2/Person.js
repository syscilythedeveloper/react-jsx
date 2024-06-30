const Person = (props) => {
  return (
    <div>
      <p> Learn some information about this person</p>
      <h3> Name: </h3>{" "}
      {props.name.length < 8 ? (
        <h3>{props.name}</h3>
      ) : (
        <h3>{props.name.substring(0, 6)}</h3>
      )}
      <h3> Age: {props.age}</h3>
      <p>
        {props.age > 18 ? <h3>Please go Vote! </h3> : <h3>You must be 18</h3>}
      </p>
    </div>
  );
};
