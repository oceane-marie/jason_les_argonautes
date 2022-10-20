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
  }
}
