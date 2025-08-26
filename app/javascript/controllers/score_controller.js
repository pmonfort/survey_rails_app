import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="score"
export default class extends Controller {
  static targets = ["button", "input"]
  
  connect() {
    console.log("Score controller connected")
    console.log("Button targets:", this.buttonTargets.length)
    console.log("Input targets:", this.inputTargets.length)
  }

  selectScore(event) {
    console.log("Score button clicked")
    const clickedButton = event.currentTarget
    const score = clickedButton.textContent.trim()
    
    // Remove selected state from all buttons
    this.buttonTargets.forEach(button => {
      button.classList.remove("bg-indigo-600", "text-white", "border-indigo-600", "hover:bg-indigo-700")
      button.classList.add("border-gray-300", "hover:bg-gray-50")
    })
    
    // Add selected state to clicked button
    clickedButton.classList.remove("border-gray-300", "hover:bg-gray-50")
    clickedButton.classList.add("bg-indigo-600", "text-white", "border-indigo-600", "hover:bg-indigo-700")
    
    // Set the hidden input value
    this.inputTarget.value = score
    
    console.log(`Score selected: ${score}`)
  }
}