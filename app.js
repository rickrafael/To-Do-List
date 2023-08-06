//obtendo referências
const form = document.querySelector('.form-add-todo')
const ul = document.querySelector('ul')

//adicionando listener de evento
form.addEventListener('submit', event=> {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  if(inputValue.length){
  ul.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
  `
  }
  
  event.target.reset()
})

ul.addEventListener('click', event => {
  const clickedElement = event.target
  
 if(Array.from(clickedElement.classList).includes('delete')){
  clickedElement.parentNode.remove()
 }


})


