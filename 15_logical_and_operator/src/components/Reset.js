function Reset({ onClick }) {
  const buttonStyle = { backgroundColor: 'orange' };

  return (
    <div>
      <button style={buttonStyle} onClick={onClick} >RESET</button>
    </div>
  );
}

export default Reset;