export const host = Object.freeze({
    dev: "http://localhost:8080/api/v1",
    prod: "https://backend.fountain.ng/api/v1",
  });
  
  // change this to use dev or prod host
  export const currentHost = host.dev;