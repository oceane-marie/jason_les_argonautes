import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["names", "form"]

  connect() {
    console.log(this.element)
    console.log(this.namesTarget)
    console.log(this.formTarget)
  }

  send(event) {
    event.preventDefault()
    console.log("TODO: send request in AJAX")
    console.log(this.formTarget.action)
    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
    .then(response => response.json())
    .then((data) => {
      if (data.inserted_name) {
        this.namesTarget.insertAdjacentHTML("beforeend", data.inserted_name)
      }
      this.formTarget.outerHTML = data.form
    })
  }
}
