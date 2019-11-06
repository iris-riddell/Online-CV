import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
// import Icon from '@material-ui/core/Icon'
import { MuiThemeProvider } from 'material-ui/styles'

class MenuDrawer extends React.Component {

  state = {
    open: false
  }
  
  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})


  
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Open Drawer"
          onClick={this.handleToggle}>
        
        <MenuRoundedIcon />
        </RaisedButton>
          
        
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}

export default MenuDrawer