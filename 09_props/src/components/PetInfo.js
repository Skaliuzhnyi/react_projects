//! props - обьект свойст которые передаются компоненту (значение свойст этого обьекта - строка (string))

/* function PetInfo(props) {
  return (
    <h1>
      My {props.animal} is {props.age} years old
    </h1>
  );
}

export default PetInfo; */

// диструктуризация props

/* function PetInfo(props) {
  const { animal, age} = props;
  return (
    <h1>
      My {animal} is {age} years old
    </h1>
  );
} */


// диструктуризация props в функции

function PetInfo({ animal, age, children, chiAge }) {
  return (
    <>
      <h1>
        My {animal} is {age} years old
      </h1>

      <ul>
        <li>
          {animal}: {age}
        </li>
        <li>
          {children}: {chiAge}
        </li>
        <li>
          {animal}: {chiAge}
        </li>
      </ul>
    </>
  );
}

export default PetInfo;