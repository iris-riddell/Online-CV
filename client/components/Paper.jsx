import React from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const NotePaper = () => (
  <MuiThemeProvider>
    <Paper className='paper' zDepth={5}>Here are some words!</Paper>
  </MuiThemeProvider>
)

export default NotePaper