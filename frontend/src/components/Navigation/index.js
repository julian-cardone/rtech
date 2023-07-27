import styled from "@emotion/styled";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";

function Navigation() {
  const CustomAppBar = styled(AppBar)({
    position: "fixed",
    color: "default",
    height: "58px",
    zIndex: 40,
    boxShadow: "none",
    backgroundColor: "#f5f5f5",
  });

  // Create a custom styled Toolbar component
  const CustomToolbar = styled(Toolbar)({
    color: '#696969',
    minHeight: "58px !important",
    height: "58px !important",
    padding: '0px 16px !important' 
  });

  const CustomButton = styled(Button)({
    fontSize: '15px', 
    fontFamily: "'Roboto', sans-serif", 
    letterSpacing: "1px",
    textTransform: "uppercase",
    textDecoration: "none !important",
    // textShadow: "0px 0.1px 0px rgba(105, 105, 105, 0.7)",
    // fontStretch: "semi-condensed"
  })

  return (
    <>
      <CustomAppBar>
        <CustomToolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <CustomButton color="inherit">Login</CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton color="inherit">Signup</CustomButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <CustomButton color="inherit">Library</CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton color="inherit">Shop</CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton color="inherit">Cart</CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CustomToolbar>
      </CustomAppBar>
    </>
  );
}

export default Navigation;
