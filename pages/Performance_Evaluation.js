import React from 'react';
import { useRouter } from 'next/router';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';

const Index = () => {
  const route = useRouter();

  const handleNextClick = () => {
    route.push('/Training_Program');
  };
  const handlePrevClick = () => {
    route.push('');
  };

  const columns = [
    {

      title: 'Sr.No',
      dataIndex: 'srNo',
      key:'srNo',
      render: (text, record, index) => index + 1,
    },
    {
      title: <u>Key Result Area (KRA)</u>,
      
      dataIndex: 'kra',
      key:'kra',
      render: (text, record) => (
        <div style={{ width: '10%' }}>{text}</div>
      ),
    },
    {
      title: <u>Comments/Remark</u>,
      dataIndex: 'comments',
      key: 'comments',
    },

    {
      title: (
        <u>
          Weightage (W)
          <br />
          (The total of this
          <br />
          column should
          <br />
          be 100)
        </u>
      ),
      dataIndex: 'weightage',
      key: 'weightage',

    },
    {
      title: (
        <u>
          Percentage Accomplished (A)
          <br />
          (This value should not exceed 100% even if target is exceeded)
        </u>
      ),
      dataIndex: 'percentageAccomplished',
      key: 'percentageAccomplished',

    },
    {
      title: (
        <u>
          Weighted Avg.(Score)
          <br />
          W/100 x A
        </u>
      ),
      dataIndex: 'weightedAvgScore',
      key: 'weightedAvgScore',
    },
  ];

  const data = Array.from({ length: 6 }, (_, index) => ({
    key: index,
    srNo: index + 1,
    kra: 'KRA',
    comments: '',
    weightage: '',
    percentageAccomplished: '',
    weightedAvgScore: ''
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
            <h2
              className='para'
              style={{ textAlign: 'center', marginBottom: '30px', }}
            ><b><u>PERFORMANCE EVALUATION : APRIL 2022 TO MARCH 2023 <br /></u></b>
            </h2>
            <p className='paraa' style={{ textAlign: 'center' }}>
              The appraisee should transfer the past year's Performance
              objectives (KRAs) into this sheet, and review performance on the
              KRAs that were set in the previous year. For the appraiser
              and appraisee should agree to which the KRA was accomplished and
              specify this is in the form of a percentage.{' '}
            </p>

            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className='tbl-cst'
            />
            <div style={{ textAlign: 'left', marginTop: '10px' }}>

              <p>Total=0</p>         </div>
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              T = 0<br />
              Total KRA Score = 0 (A maximum of 75 points)
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <p>Total KRA Score = T X 3/4</p>

              <Button
                className='but'
                onClick={handlePrevClick}
                style={{ marginRight: '10px' }}
                
              >
                Previous
              </Button>

              <Button className='but' onClick={handleNextClick}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
