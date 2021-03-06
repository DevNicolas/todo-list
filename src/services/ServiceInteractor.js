class ServiceInteractor {
  getUsers() {
    let url = "https://api.mocki.io/v1/dcfffd99";

    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default ServiceInteractor;
