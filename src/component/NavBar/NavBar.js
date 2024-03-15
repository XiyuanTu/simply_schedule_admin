import { Box, Button, Divider, Link } from '@mui/material'
import React from 'react'
import { useCreateSlotsMutation, useGetSlotsQuery } from '../../api/openHourApiSlice'
// import { SlotAction } from './SlotAction'
import Logo from './Logo'
import { Profile } from './Profile'
import LogOut from './LogOut'
import Grid from '@mui/material/Unstable_Grid2'

export const NavBar = () => {
    return <Box sx={{ height: '100%' }}>
        <Grid sx={{ height: '100%', paddingX: 10, alignItems: 'center' }} container>
            <Grid xs={7}>
                <Logo />
            </Grid>
            <Grid xs={4}>
                <Link sx={{ mr: 4, color: 'black', fontSize: 20 }} href="/open_hour" underline="hover">Open Hour</Link>
                <Link sx={{ color: 'black', fontSize: 20 }} href="/schedule" underline="hover">Schedule</Link>
            </Grid>
            <Grid xs={1}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Profile />
                    <LogOut />
                </Box>
            </Grid>
        </Grid>

        <Divider />
    </Box>

}
