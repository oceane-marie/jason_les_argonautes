import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["names", "form"]

  connect() {
    console.log(this.element)
    console.log(this.namesTarget)
    console.log(this.formTarget)
    console.log(this.formTarget.action)
  }

  send(event) {
    event.preventDefault()
    console.log("TODO: send request in AJAX")
    const url = this.formTarget.action;
    const options = {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    }
    fetch(url, options)
    .then(checkStatus)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      // if (data.inserted_name) {
      //   this.namesTarget.insertAdjacentHTML("beforeend", data.inserted_name)
      // }
      // this.formTarget.outerHTML = data.form
    })
    .catch((error) => {
      console.log('There was an error', error);
    });

    function checkStatus(response) {
      if (response.ok) {
          return response;
      }

      let error = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    }
  }
}
