import React from 'react'
import SideMenu from './DashboardComponents/SideMenu'
import Header from './DashboardComponents/Header';
import PageHeader from './DashboardComponents/PageHeader';
import { styled } from '@mui/system';
import { CssBaseline } from '@mui/material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const AppMain  = styled('div')({
  paddingLeft: '320px',
  width: '100%',
});

export default function Dashboard() {
  return (
    <>
        <SideMenu/>
          <AppMain>
            <Header/>
              <PageHeader 
                title='Webinar Schedule'
                subTitle='Welcome Kevin'
                icon={<OndemandVideoIcon/>}
              />
          </AppMain>
        <CssBaseline />
    </>
  )
}
