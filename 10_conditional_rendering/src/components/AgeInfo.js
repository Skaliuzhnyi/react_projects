function PetInfo({ name, age, minAge }) {
  return age - minAge >= 0 
  ? <h1>{`${name}, вы можете забрать свой алкоголь `}</h1> 
  : <h2>{`${name}, ваш возраст меньше ${minAge} и Вам нужно еще подрости`}</h2>;
}

function PetInfo({ name, age, minAge }) {
  return age - minAge >= 0 ? (
    <h1>{name}, вы можете забрать свой алкоголь </h1>
  ) : (
    <h2>
      {name}, ваш возраст меньше {minAge} и Вам нужно еще подрости
    </h2>
  );
}

export default PetInfo;
