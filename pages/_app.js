import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Development_plan'
import './Overall_Evaluation'
import './Performance_Evaluation'
import './Training_Program'
import { useRouter } from 'next/router';
import './custom_PE.css'
import 'antd/dist/antd.css';
const app = ({Component,pageProps}) => {
  
  const route=useRouter()
  console.log('route',route.query.id)
  return (
    <div>
        <Component{...pageProps}/>
    </div>
  )
}

export default app