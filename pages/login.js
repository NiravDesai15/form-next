import React from 'react'
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




const index = () => {

    const router = useRouter();

    const handleclk = () => {
        router.push('/navigatepg')
    }
  return (
    <div className='container'>
      <div className="row">
        <div  className="col-md-12">
        <div >
          
          <h2 className='lll' style={{textAlign:'center'}}>PERFORMANCE MANAGEMENT FORM		<br/>	
(Level GS1 - GS4)			
</h2>
        <div className='ooo'> <Form >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
         Name:
        </Form.Label>
        <Col sm="4">
          <Form.Control type="Text" placeholder="" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
         Emp Code:
        </Form.Label>
        <Col sm="4">
          <Form.Control type="Text" placeholder="" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
         Level:
        </Form.Label>
        <Col sm="4">
          <Form.Control type="Text" placeholder=""  />
        </Col>
      </Form.Group>
    </Form></div>  
         <br/> <br/>
   <div style={{ textAlign: 'center', marginTop: '10px',marginBottom:'10px' }}> 
   <Button type="primary">Primary Button</Button>
 </div>
 
        </div>
        </div>
      </div>
    </div>
   
  


  )
}

export default index