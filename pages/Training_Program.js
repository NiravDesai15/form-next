import React from 'react';
import { useRouter } from 'next/router';
import { Button, Table, Input } from 'antd';
import 'antd/dist/antd.css';

const Index = () => {
  const route = useRouter();

  const handleNextClick = () => {
    route.push('/Development_plan');
  };
  const handlePrevClick = () => {
    route.push('Performance_Evaluation');
  };

  const columns = [
    {
      title: 'BEHAVIOURAL PROGRAMS ATTENDED',
      dataIndex: 'behaviouralPrograms',
      width: '30%',
    },
    {
      title: 'OPAP',
      dataIndex: 'opap',
      width: '20%',
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      width: '20%',
    },
    {
      title: "HOD'S COMMENTS",
      dataIndex: 'hodComments',
      width: '30%',
    },
  ];

  const data = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    behaviouralPrograms: '',
    opap: '',
    status: '',
    hodComments: '',
  }));

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='mainn'>
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
                REVIEW OF THE TRAINING PROGRAMS ATTENDED APRIL 2022 TO MARCH
                2023
              </p>
              <p className='paraa'>
                (To be filled jointly by the appraiser and appraisee)
              </p>
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <Button className='but' onClick={handlePrevClick}  style={{ marginRight: '10px', height: '50px', width: '100px' }}>Previous</Button>
              <Button className='but' onClick={handleNextClick} 
                style={{ marginLeft: '10px', height: '50px', width: '100px' }}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
