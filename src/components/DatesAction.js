import React from 'react'
import { Col, Row} from 'react-bootstrap'

export const DatesAction = ({deleteData,vieweData}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col  sm="8" className="d-flex  justify-content-between ">
    <button onClick={deleteData} className="btn-style"> Delete All  </button>
    <button onClick={vieweData} className="btn-style"> Show data </button>
    
    
    </Col>
      </Row>
  )
}

export default DatesAction;