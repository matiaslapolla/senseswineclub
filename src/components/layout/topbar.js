import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/swc.png'
import { useTheme } from '@emotion/react'

const DefaultTopBar = ({ children }) => {

  const theme = useTheme()

  return (
    <>
      <Grid container justifyContent={'space-between'} border={1}>
        <Grid container border={1} flex={1} justifyContent={"center"}>
          <img src={logo} alt="logo" height={48} />
        </Grid>
        <Grid flex={2}>
          <Grid>
            <Typography variant={"body1"}>Home</Typography>
          </Grid>
          <Grid>
          </Grid>
        </Grid>
        <Grid flex={1} container alignItems={"center"}>
          <Button
            size={'large'}
            variant={"contained"}
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              }
            }}
          >Join today
          </Button>
        </Grid>
      </Grid >
      {children}
    </>
  )
}

export default DefaultTopBar