import React from 'react';
import { useRouter } from 'next/router';
import { Button, Table, Form, Input, Radio } from 'antd';
import 'antd/dist/antd.css';

const Index = () => {
  const route = useRouter();

  const handleClk = () => {
    router.push('/navigatepg');
  };
  const handlePrevClick = () => {
    route.push('Development_plan');
  };

  const columns = [
    {
      title: '',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Director',
      dataIndex: 'director',
      key: 'director',
    },
    {
      title: 'Functional Head',
      dataIndex: 'functionalHead',
      key: 'functionalHead',
    },
    {
      title: 'HR Head',
      dataIndex: 'hrHead',
      key: 'hrHead',
    },
  ];

  const dataSource = [
    {
      key: '1',
      label: 'Name',
      director: '',
      functionalHead: '',
      hrHead: '',
    },
    {
      key: '2',
      label: 'Designation',
      director: '',
      functionalHead: '',
      hrHead: '',
    },
    {
      key: '3',
      label: 'Comments',
      director: '',
      functionalHead: '',
      hrHead: '',
    },
    {
      key: '4',
      label: '',
      director: '',
      functionalHead: '',
      hrHead: '',
    },
    {
      key: '5',
      label: 'Signature',
      director: '',
      functionalHead: '',
      hrHead: '',
    },
    {
      key: '6',
      label: 'Date',
      director: '',
      functionalHead: '',
      hrHead: '',
    },
  ];


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
                <i>
                  <u>OVERALL EVALUATION</u>
                </i>
              </p>
              <p className='paraa'>(For appraiser's use only)</p>
            </div>

            <div className='row'>
              <Form>
                <Form.Item label='Name' className='mb-3' name='name'>
                  <Input className='ip' />
                </Form.Item>
    
                <Form.Item label='Emp Code' className='mb-3' name='empCode'>
                  <Input className='ipp' />
                </Form.Item>
    
                <Form.Item label='Level' className='mb-3' name='level'>
                  <Input className='ippp' />
                </Form.Item>
              </Form>
            </div>

            <div
              className='column'
              style={{ textAlign: 'left', marginBottom: '50px' }}
            >
              <p>OVERALL EVALUATION COMMENTS (for Appraiser use only) :</p>
              <textarea rows='6' cols='60'></textarea>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
              <b>
                <u>NOT TO BE FILLED DURING APPRAISAL DISCUSSIONS</u>
              </b>
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
                alignItems: 'center',
              }}
            >
              <p style={{ textAlign: 'left' }}>
                Final recommendation by Factory Head/ HOD/ HR:
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Radio.Group name='option' style={{ marginRight: '10px' }}>
                  <Radio value='option1'>Exceeds</Radio>
                  <Radio value='option2'>Meets</Radio>
                  <Radio value='option3'>Mostly Meets</Radio>
                </Radio.Group>
              </div>
            </div>

            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              className='tbl-cst'
            />
            <p>
              <b>
                NOTE : INCASE THE ABOVE IS NOT FILLED UP COMPLETELY & SIGNED,
                THE PERFORMANCE MANAGEMENT PROCESS WILL NOT BE CARRIED FORWARD &
                THE FORM WILL BE RETURNED TO THE APPRAISER
              </b>
            </p>
            <div
              style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
            >
              <Button className='but' onClick={handlePrevClick} style={{ marginRight: '10px', height: '50px', width: '100px' }}>
                Previous
              </Button>
              <Button className='but'  style={{ marginLeft: '10px', height: '50px', width: '100px' }}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
