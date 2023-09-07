import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/custom.css'
import './login'
import './per'
import './pmf'
import '../pages/logincustom.css'
import '../pages/percustom.css'
import '../pages/pmfcustom.css'


const app = ({Component,pageProps}) => {
  return (
    <div>
        <Component{...pageProps}/>
    </div>
  )
}

export default app