import React from 'react'
import SideMenu from './DashboardComponents/SideMenu'
import Header from './DashboardComponents/Header';
import { styled } from '@mui/system';
import { CssBaseline } from '@mui/material';


const AppMain  = styled('div')({
  paddingLeft: '320px',
  width: '100%',
  margin: '0px'
});

export default function Dashboard() {
  return (
    <>
        <SideMenu/>
        <AppMain>
          <Header/>
        </AppMain>
        <CssBaseline />
    </>
    
  )
}
