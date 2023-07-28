import { Grid } from "@mui/material";
import { CustomAppBar, CustomButton, CustomToolbar } from "./customButton";

function Navigation() {


  return (
    <>
      <CustomAppBar>
        <CustomToolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container>
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
