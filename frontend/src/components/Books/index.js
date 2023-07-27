import "./index.css";
import { Grid, Paper, Typography } from "@mui/material";
import image from "../../media/ctci.jpg";

function Books({ books }) {
  if (books === null) {
    return <div> this is a loading div... </div>;
  }

  return (
    <>
      <div className="books-container">
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid
              item
              key={book.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              style={{ maxWidth: "250px" }}
            >
              <img
                src={image}
                alt={book.title}
                style={{ width: "100%" }}
              />
              <Paper elevation={3}>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1">{book.author}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Books;
