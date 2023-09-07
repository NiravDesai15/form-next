import React from 'react'
import { useRouter } from 'next/router';
import  Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const index = () => {

    const router = useRouter();

    const handleclk = () => {
        router.push('/navigatepg')
    }
  return (
    <div className='container'>
      <div className="row">
        <div  className="col-md-146">
          <div>
          <br/> <br/>
             <Table className='tbl-asa' style={{border:'1px solid #ccc' ,height:'50px',width:'100%',borderCollapse:'collapse',borderRadius:'10px',padding:'10px',overflow:'hidden'}}>    <br/><br/>
        <h2 className='head' style={{ textAlign: 'center' , marginBottom: '20px',backgroundColor:'#87CEFA'}}>
PERFORMANCE MANAGEMENT FORM <br/>	
REVIEW PERIOD APRIL 2022 TO MARCH 2023	<br/>
LEVEL GS1-GS4, TT, GT, ET, PGT<br/>
</h2>

<div className='sss'><p style={{textAlign:'center'}}> (To be filled jointly by the appraiser and appraisee)	</p>
<p style={{textAlign:'left' }}>	The objective of the Performance Management System is to provide clarity, help an individual plan his/her performance and to provide regular feedback and 													
evaluation on performance. This system also aims to identify Development opportunities for each individual.													
<br/>	
  
<br/>	This form has the following sections.<br/>	<br/>
<p style={{backgroundColor:'#87CEEB'}}> <u><b >Performance Evaluation</b></u></p> - The appraiser has to assess the performance of the Appraisee with regard to Key Result Areas, amounting to a  maximum score of 75 points.		
<br/>	
<br/>
<p style={{backgroundColor:'#87CEEB'}}><u><b>Critical Success Factors</b> </u></p>- The appraiser has to assess the Appraisee in relation to the factors conducive to good performance on the job assigning 												
each factor a maximum of 5 points, totalling to a maximum score of 25 points.												
<br/>
<br/>
<p style={{backgroundColor:'#87CEEB'}}><u><b>KRA</b></u></p>  - KRAs for the next review period with specific time lines and weightages need to be worked out, in agreement between the appraiser and 												
appraisee.												
<br/>
<br/>
<p style={{backgroundColor:'#87CEEB',fontFamily:'inherit'}}><u><b>Development Plan</b></u></p>  - The appraiser assists in identifying specific opportunities for development and improvement of Appraisee, and helps to arrive 												
at a specific action plan to achieve the set goals.												
<br/>
<br/>
<p style={{backgroundColor:'#87CEEB'}}><u><b>Guidelines</b></u></p><br/>						
Read the performance manual before filling up the form.										
<br/><br/>
Complete the process in one sitting.											
<br/><br/>
The appraisal is required to be carried out by the immediate superior (Appraiser) in discussion with the Appraisee.											
<br/><br/>
The performance plan, outlining KRAs for the review period shall be drawn during the course of the appraisal meeting.											
<br/><br/>
The discussion will also be used to arrive at the developmental needs of the appraisee.											
<br/><br/>
A representative from the HR department will be part of the appraisal discussion and Performance planning for review period facilitator.											
											
											

</p>
   <br/></div>
       </Table>
</div>
   <div style={{ textAlign: 'center', marginTop: '10px' }}>



<Button style={{marginRight:'10px',height:'50',width:'100px'}}  >Continue</Button>



</div>


  	
     </div>
    
        </div>
      </div>
    
   
  


  )
}

export default index