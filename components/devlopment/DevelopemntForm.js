import React from 'react'
import { Button, Table, Input, Radio } from 'antd';
import { Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
const DevelopemntForm = () => {
  
    const route =useRouter();

    const handleNextClick = () => {
      route.push('/Overall_Evaluation');
    };
    const handlePrevClick = () => {
      route.push('Training_Program');
    };

  const columns = [
    {
      title: <b>Skill/knowledge</b>,
      dataIndex: 'skillKnowledge',
      width: '20%',
    },
    {
      title: <b>Justification</b>,
      dataIndex: 'justification',
      width: '20%',
    },
    {
      title: <b>HOD's remarks</b>,
      dataIndex: 'hodRemarks',
      width: '20%',
    },
    {
      title:<b>HR's remarks</b> ,
      dataIndex: 'hrRemarks',
      width: '20%',
    },
    {
      title: <b>Director(Concurrence)</b>,
      dataIndex: 'directorConcurrence',
      width: '20%',
    },
  ];

  const data = Array.from({ length: 2 }, (_, index) => ({
    key: index,
    skillKnowledge: '',
    justification: '',
    hodRemarks: '',
    hrRemarks: '',
    directorConcurrence: '',
  }));

  const radioOptions = [
    { label: 'Exceeds', value: 'exceeds' },
    { label: 'Meets', value: 'meets' },
    { label: 'Mostly Meets', value: 'mostly_meets' },
  ];

  const personalActionPlanData = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    srNo: index + 1,
    highlights: '',
  }));
  return (
    <div>
        <Col>
        <div className='mainn dev-section'>
            <br />
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <p>Name:</p>
              <p>EmpNo:</p>
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              <p className='para'>
                <i>
                  <u>
                    DEVELOPMENT PLAN 2022-2023
                  </u>
                </i>
              </p>
              <p className='para'>
                (To be filled jointly by the appraiser and appraisee)
              </p>
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'left',
                marginBottom: '20px',
              }}
            >
              <p>TRAINING NEEDS (Inputs required for better performance in present job and developing for future roles.)</p>
              <p>To ensure that time invested in training reflects in improved performance, it is essential to derive these training needs from the Performance Plan (KRAs),</p>
              <p >Performance. Evaluation and Critical Success Factors. The purpose of this is to enhance performance on required factors.</p>
              <p >Mention Training needs in order of priority and describe in detail the result expected from the input provided.</p>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className='tbl-cst'
            />
            <div style={{ marginBottom: '40px' }}></div>

            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className='tbl-cst'
            />
            <p className='paraaa' style={{paddingBottom:'0px'}}>PERFORMANCE LINKED VARIABLE PAY (Self rating to be filled by the appraisee with Justification)</p>
            <Radio.Group options={radioOptions} />
            <p >Give 5 major highlights to support your self rating:</p>
            <p style={{ textAlign: 'right' }}>PERSONAL ACTION PLAN for improvement in present job :</p>
            <Table
              columns={[
                {
                  title: <b>Sr No</b>,
                  dataIndex: 'srNo',
                  width: '5%',
                },
                {
                  title: <b>Highlights</b> ,
                  dataIndex: 'highlights',
                  width: '60%',
                },
                {
                  dataIndex: '',
                  width: '35%',
                  render: () => null,
                },
              ]}
              dataSource={personalActionPlanData}
              pagination={false}
              className='tbl-cst'
            />
            <p className='paraaa' style={{ textAlign: 'right' }}>Signature of appraisee</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <Button className='but'  onClick={handlePrevClick} style={{ marginRight: '10px', height: '50px', width: '100px' }}>Previous</Button>
              <Button className='but'  onClick={handleNextClick} style={{ marginLeft: '10px', height: '50px', width: '100px' }}>Next</Button>
            </div>
          </div>
        </Col>
       
    </div>
  )
}

export default DevelopemntForm
