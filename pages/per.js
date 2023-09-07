import React from 'react'
import { useRouter } from 'next/router';
import  Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const per = () => {

    const router = useRouter();

    const handleclk = () => {
        router.push('/navigatepg')
    }
  return (
    <div className='container'>
      <div className="row">
        <div  className="col-md-12">
        <div >
             <br/> <br/>
    <Table className='tbl-aaa' style={{width:'100%',borderCollapse:'collapse',height:'50%',border:'1px solid black',borderRadius:'10px',padding:'10px',overflow:'hidden',backgroundColor:'beige'}}><br/>
          <br/>
       <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
      <p>Name:</p>
      <p>EmpNo:</p>
    </div>
<div>
  <h2> <p className='head' style={{ textAlign: 'center' , marginBottom: '20px',backgroundColor:'beige'}}>
    <u> PERFORMANCE PLAN FOR APRIL 2022 TO MARCH 2023</u> 
            </p></h2>
 
 
            <p style={{textAlign:'center'}}>(To be filled by the appraiser and appraisee at the beginning of the review period)						
</p>
      <Table className='tbl-cst' style={{width:'100%',borderCollapse:'collapse',borderRadius:'15px',borderSpacing:'5px'}}>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th colSpan={2}><u>KRAs ( in order of priority)</u></th>
            <th><u>Time line</u></th>
            <th><u>Measure of achievement</u></th>
            <th style={{width:'10%'}}><u>Weightage for each KRA (Total should be 100)</u></th>
            <th><u>Support Required</u></th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td rowSpan={5}>1</td>
            <td style={{backgroundColor:'#808080',width:'10%'}}>KRA</td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}> </td>
            <td rowSpan={5}></td>
            <td style={{backgroundColor:'#808080'}}></td>
          </tr>
          <tr>
            <td>Activity</td>
            <td  ></td>
            <td ></td>
            <td ></td>
            <td ></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td rowSpan={5}>2</td>
            <td style={{backgroundColor:'#808080'}}>KRA</td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td  rowSpan={5} ></td>
            <td style={{backgroundColor:'#808080'}}></td>
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
          
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td rowSpan={5}>3</td>
            <td style={{backgroundColor:'#808080'}}>KRA</td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td  rowSpan={5}></td>
            <td style={{backgroundColor:'#808080'}}></td>
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td rowSpan={5}>4</td>
            <td style={{backgroundColor:'#808080'}}>KRA</td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td  rowSpan={5}></td>
            <td style={{backgroundColor:'#808080'}}></td>
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td rowSpan={5}>5</td>
            <td style={{backgroundColor:'#808080'}}>KRA</td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td rowSpan={5} ></td>
            <td style={{backgroundColor:'#808080'}}></td>
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td rowSpan={5}>6</td>
            <td style={{backgroundColor:'#808080'}}>KRA</td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td style={{backgroundColor:'#808080'}}></td>
            <td   rowSpan={5}></td>
            <td style={{backgroundColor:'#808080'}}></td>
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <td>Activity</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
          </tr>
        </tbody>
        
       
      </Table></div>
  
    
      <div style={{ textAlign: 'center', marginTop: '10px' }}><p>TOTAL</p></div>
    <div style={{display:'flex',justifyContent:'space-between',marginLeft:'50px',marginRight:'50px'}}>
      <p>Signature of Appraisee:</p>
      <p>Signature of Appraiser:</p>
    </div></Table>
   
    
   

      <div style={{ textAlign: 'center', marginTop: '10px' }}>



<Button style={{marginRight:'10px',height:'50',width:'100px'}}  >Previous</Button>
<Button style={{marginLeft:'10px',height:'50',width:'100px'}}  >Next</Button>


</div>
      

   
      </div>
        </div>
      </div>
    </div>
   
  


  )
}

export default per
