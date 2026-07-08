import logo from './logo.svg';
import './App.css';
import image from "./image.png"

function App() {
  const heading =<h1> Office Space, at Affordable Range</h1>;
  const img= <img src={image}height={"25%"} width={"25%"} alt="Img not available"/>
  const office={
    Name: "DBS",
    Rent: 5000,
    Address:  "Chennai",
  }
    const colors= (rent)=>{
      if(rent<6000){
        return "red";
      }
      else{
        return "green";
      }
    }
  return (
    <div style={{paddingLeft:400, paddingTop:200}}>
      {heading}
      {img}
      
      <h3>Name: {office.Name}</h3>
      <h4 style={{color: colors(office.Rent)}}>Rent:{office.Rent}</h4>
      <h4>Address:{office.Address}</h4>
    </div>
    
  );
}

export default App;
