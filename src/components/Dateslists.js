import React from 'react'
import { Row,Col } from 'react-bootstrap'

export const Dateslists = ({Person}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col  sm="8" className="">
      
    <div className="rectangle p-2">
    { Person.length ? (Person.map((item) => {

    
    return(
    <div key={item.id} className="d-flex border-bottom mx-3 my-2">
      {console.log(item)}
      <img  className="img-avatar"  src={item.img} alt="hhh"/>
    <div className="mx-3">
    
      <p className="d-inline fs-5">{item.name}</p>
      <p className="fs-6"> {item.date}  </p>
    </div>
    
    </div>
    )
    
    
    }) ) : <h2 className="p-5 text-center">  There are no appointments today </h2>}
    
    
    
       
    </div>
    </Col>
      </Row>
  )
}


export default Dateslists;