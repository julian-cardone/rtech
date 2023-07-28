import { Grid, Paper, Typography } from "@mui/material";
import image from "../../media/ctci.jpg";

function Books({ books }) {
  if (books === null) {
    return (
      <div style={{ fontSize: "175px", height: "2000px", paddingTop: "100px" }}>
        {" "}
        I am loading...{" "}
      </div>
    );
  }

  const typographyTwo = {
    fontFamily: "Rubik, sans-serif",
    fontWeight: "300",
    fontSize: "12px",
    color: "#646464",
    lineHeight: "1.57",
    letterSpacing: "0.02em",
  };

  const gridItemStyles = {
    maxWidth: "275px",
    minWidth: "250px",
    cursor: "pointer",
  };

  return (
    <>
      <Grid container spacing={4} style={{ paddingTop: "110px" }}>
        {books.map((book) => (
          <Grid
            item
            key={book.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            style={gridItemStyles}
          >
            <Paper
              elevation={1}
              variant="outlined"
              sx={{ borderRadius: "6px" }}
            >
              <div
                style={{
                  height: "330px",
                  overflow: "hidden",
                  borderRadius: "6px 6px 0 0",
                }}
              >
                <img
                  src={image}
                  alt={book.title}
                  style={{ width: "100%", height: "100%" }}
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
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {book.title}
                  </Typography>
                </Grid>
                <Grid
                  container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography variant="subtitle1" sx={typographyTwo}>
                      {book.school.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      sx={{ ...typographyTwo, marginLeft: "8px" }}
                    >
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
