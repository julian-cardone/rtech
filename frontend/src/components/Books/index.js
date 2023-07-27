import { Grid, Paper, Typography } from "@mui/material";
import image from "../../media/ctci.jpg";

function Books({ books }) {
  if (books === null) {
    return <div> this is a loading div... </div>;
  }

  const typographyTwo = {
      fontFamily: "Rubik, sans-serif",
      fontWeight: "300",
      fontSize: "12px",
      color: "#646464", 
      lineHeight: "1.57",
      letterSpacing: "0.02em"
  }

  return (
    <>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid
            item
            key={book.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            style={{ maxWidth: "275px", minWidth: "250px" }}
          >
            <Paper
              elevation={1}
              variant="outlined"
              sx={{ borderRadius: "8px" }}
            >
              <div
                style={{
                  height: "330px",
                  overflow: "hidden",
                  borderRadius: "8px 8px 0 0",
                }}
              >
                <img
                  src={image}
                  alt={book.title}
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <Grid container direction="column" sx={{ padding: "16px" }}>
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Sofia-Pro, sans-serif",
                      fontWeight: "600",
                      fontSize: "15px",
                      color: "#646464", 
                      lineHeight: "1.2",
                      letterSpacing: "-0.5px"
                    }}
                  >
                    {book.title}
                  </Typography>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Typography variant="subtitle1" sx={typographyTwo}>{book.school.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{...typographyTwo, marginLeft: "8px"}}>
                      ${book.price}.00
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Books;
