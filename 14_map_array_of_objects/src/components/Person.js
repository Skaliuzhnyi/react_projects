function Person(props) {
  const { firstName, lastName, email, img } = props;  

  return <div className="card">
    <h3>{firstName} {lastName}</h3>
    <h4>{email}</h4>
    <img src={img} alt="фото працівника" />
  </div>;
}

export default Person;
