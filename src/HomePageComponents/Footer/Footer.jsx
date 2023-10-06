const Footer = () => {
  return (
    <div style={footer}>
      <p style={{ margin: 0 }}>Resume Builder By Manas</p>
      <p style={{ margin: 0 }}>
        Contact at - manasshrivastava0410@gmail.com or 7007022949
      </p>
      <p style={{ margin: 0 }}>GitHub- manas0410</p>
    </div>
  );
};

const footer = {
  marginTop: "101px",
  fontSize: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "0",
  backgroundColor: "#524949",
  color: "white",
  padding: "4px 25px",
  fontFamily: "sans-serif",
};

export default Footer;
