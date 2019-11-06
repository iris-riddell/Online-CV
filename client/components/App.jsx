import React from 'react'

import Header from './Header'
import Drawer from './Drawer'
import Footer from './Footer'
import NavSidebar from './NavSidebar'

const App = () => (
  <div className='body'>
    <Header />
    <Footer />
    <NavSidebar />
    <Drawer />
  </div>
)

export default App
