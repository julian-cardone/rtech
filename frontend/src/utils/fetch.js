// custom rTechFetch statement

export function rTechFetch(endpoint, params) {
  fetch(params)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
