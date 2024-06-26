function openClass(){
  const modalContainer = document.querySelector("#modalController")
  const showModal = document.querySelector('#showMensageHeader')
  
  showModal.addEventListener('click', () => {
    modalContainer.showModal()
    
    closeClass()
  })
}
function openClassSecondary(){
  const modalContainer = document.querySelector("#modalController")
  const showModal = document.querySelector('#showMensage')
  
  showModal.addEventListener('click', () => {
    modalContainer.showModal()
    
    closeClass()
  })
}

function closeClass(){
  const closeModalButton = document.querySelector("#closeModal");
  const modalContainer = document.querySelector("#modalController")
  closeModalButton.addEventListener('click', () => {
    modalContainer.close()
  })
  
  
}
openClass()
openClassSecondary()
closeClass()