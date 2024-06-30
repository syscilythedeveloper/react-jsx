const Tweet = (props) => {
  return (
    <div>
      <ul>
        <li>{props.username}</li>
        <li>{props.name}</li>
        <li>{props.date}</li>
        <li>{props.message}</li>
      </ul>
    </div>
  );
};
