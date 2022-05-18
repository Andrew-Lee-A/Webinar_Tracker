import {
    AppBar,
    Badge,
    Grid,
    IconButton, 
    InputBase,
    styled,
    Toolbar,
} from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'


const AppBarStyle  = styled(AppBar)({
    backgroundColor: 'white',
  });

const InputBaseStyle  = styled(InputBase)({
    opacity: '0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    width: '100%',
    '&:hover': {
        backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
        marginRight: '8px'
    }
  });

export default function Header() {
  return (
    <>
        <AppBarStyle position='static'>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBaseStyle
                            placeholder='Search Webinars'
                            startAdornment={<SearchIcon fontSize='medium'/>}
                            />
                            
                    </Grid>
                    <Grid item sm>

                    </Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent = {4} color = "primary">
                                <NotificationsNoneIcon fontSize='medium'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent = {3} color = 'primary'>
                                <CalendarTodayIcon fontSize='medium'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <PowerSettingsNewIcon fontSize='medium'/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBarStyle>
    </>
  )
}
