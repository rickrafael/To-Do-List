//obtendo referências
const form = document.querySelector('.form-add-todo')
const inputSearch = document.querySelector('.form-search input')
const ul = document.querySelector('ul')

//adicionando listener de evento
//adicionando todo com evento submit
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

//adicionando evento á ul
//removendo lis através do evento click
ul.addEventListener('click', event => {
  const clickedElement = event.target
  
 if(Array.from(clickedElement.classList).includes('delete')){
  clickedElement.parentNode.remove()
 }
})

//adicionando evento input
//buscando por Todos da lista 
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

 


