// custom rTechFetch statement

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
