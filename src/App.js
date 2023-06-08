import { Button,  Col,  Container, Row } from "react-bootstrap";

import Person from "./data";
import Datescount from "./components/Datescount"
import Dateslists from "./components/Dateslists";
import DatesAction from "./components/DatesAction";
import { useState } from "react";
import { useEffect } from "react";


function App() {
const [PersonData, setPersonData] = useState(Person)
 
const OnDelete=()=> {

  setPersonData([])
}
const OnViewData=()=> {

  setPersonData(Person)
}

useEffect(()=>{

  setPersonData([])

},[])
  return (
    <div className="font color-body" >
<Container className="py-5">
  
  <Datescount Person={PersonData}/>
  <Dateslists Person={PersonData}/>
  <DatesAction deleteData={OnDelete} vieweData={OnViewData}/>
 

  </Container>      
    </div>
  );
}

export default App;





