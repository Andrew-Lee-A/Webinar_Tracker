import {
    AppBar,
    Badge,
    Grid,
    IconButton, 
    InputBase,
    Toolbar,
} from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import React from 'react'

export default function Header() {
  return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase>

                        </InputBase>
                    </Grid>
                    <Grid item sm>

                    </Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent = {4} color = "secondary">
                                <NotificationsNoneIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent = {3} color = 'primary'>
                                <ChatBubbleOutlineIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <PowerSettingsNewIcon/>
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
  )
}
