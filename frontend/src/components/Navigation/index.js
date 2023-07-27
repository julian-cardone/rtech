import styled from "@emotion/styled";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";

function Navigation() {

  // Create a custom styled Toolbar component
  const CustomToolbar = styled(Toolbar)({
    minHeight: 58,
  });

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        style={{ height: "58px", zIndex: 40 }}
      >
        <CustomToolbar
          style={{ justifyContent: "center", backgroundColor: "#f5f5f5" }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button color="inherit">Login</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">Signup</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button color="inherit">Library</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">Shop</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">Cart</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CustomToolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
