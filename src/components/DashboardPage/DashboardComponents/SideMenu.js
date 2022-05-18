import React from 'react'
import {Box, styled} from '@mui/material';
import { flexbox } from '@mui/system';

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
          Styled Side menu
        </StyledBox>
      </>
  )
}
