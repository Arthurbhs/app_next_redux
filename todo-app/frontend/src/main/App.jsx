import React from 'react'
import Routes from './Routes'
import Menu from '../template/Menu'

require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')


const App = props => (
    <div className="container">
        <Menu/>
       <Routes/>
    </div>
)
export default App