fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));


  /**
   * Fetch por defecto siempre lanza el metodo GET
   */

  /**
   * 
   * METODO GET
   */
  function sendHTTPRequest(method, url, data) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  }