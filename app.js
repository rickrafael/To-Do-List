//obtendo referências
const form = document.querySelector('.form-add-todo')
const inputSearch = document.querySelector('.form-search input')
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

inputSearch.addEventListener('input',event => {
  const inputValue = event.target.value.trim().toLowerCase()

   Array.from(ul.children)
   .filter(todo =>!todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo =>{ 
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })

    Array.from(ul.children)
   .filter(todo =>todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo =>{ 
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
  })
})

 


