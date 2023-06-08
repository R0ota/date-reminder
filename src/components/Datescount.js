
import React from 'react'

import { Row,Col } from 'react-bootstrap';

export const Datescount = ({Person}) => {
  return (
<Row className="justify-content-center">
<Col  sm="8" className="">
   لديك {Person.length} مواعيد

</Col>
  </Row>  )
}
export default Datescount;