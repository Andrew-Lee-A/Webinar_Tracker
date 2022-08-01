import React from 'react'
import {Box, styled, Grid, Typography} from '@mui/material';
import { flexbox } from '@mui/system';
import PageHeader from './PageHeader';

const StyledBox  = styled(Box)({
  display: flexbox,
  flexDirection: 'column',
  position: 'absolute',
  left: '0px',
  width: '320px',
  height: '100%',
  backgroundColor: '#253053'
});

export default function SideMenu() {
  return (
      <>
        <StyledBox>
          <Grid container>
            <Grid ite m >

            Side menu
            </Grid>
          </Grid>
        </StyledBox>
      </>
  )
}
