// --- custom rTechFetch statement ---
/*
sets the method to get if not specified
empty headers if not specified
handles headers and body in the event it is not a get request
note: this app only makes get requests
throws an error if there is critical issue
*/

export async function rTechFetch(url, options = {}) {
  options.method = options.method || "GET";
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== "GET") {
    if (
      !options.headers["Content-Type"] &&
      !(options.body instanceof FormData)
    ) {
      options.headers["Content-Type"] = "application/json";
    }
  }

  const res = await fetch(url, options);

  if (res.status >= 400) throw res;

  return res;
}
