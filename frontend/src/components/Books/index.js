import { Grid, Paper, Typography } from "@mui/material";
import image from "../../media/ctci.jpg";

/* 
this is the display page for the books
the grid maps out each book item

--- a bit about material ui gridding ---
The grid system is based on a 12-column layout, where you can divide the available width of the container into 12 equal parts. 
You can then use the xs, sm, md, lg, and xl props to define how many columns a grid item should occupy at different screen sizes.
The Grid component acts as a container that holds grid items. It uses a flexbox-based layout to arrange its child grid items horizontally.
*/

// note: on line 56 and line 57, the variant="outline" property and the elevation={1} property does not work in tangent

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
