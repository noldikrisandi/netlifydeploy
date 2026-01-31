function Greeting(props) {
  return (
    <>
      <h1>Halo, {props.name}!</h1>
      <p>Usia: {props.age} tahun</p>
      <p>Gender: {props.gender}</p>
    </>
  );
}

export default Greeting;
