input_task = document.getElementById('input_task')
input_add_button = document.getElementById('input_add_button')
ul = document.getElementById("task_list")

input_add_button.addEventListener("click", function() {
    task = input_task.value
    // console.log(task)

    // Create a new task element
    li = document.createElement('li')
    spanElement = document.createElement('span')
    spanElement.innerHTML = task

    li.appendChild(spanElement)
    // li.innerHTML = task
    // console.log(li);

    delBtn = document.createElement('button')
    delBtn.innerHTML = 'Delete'

    delBtn.addEventListener('click', function() {
        li.remove()
    })

    editBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'

    divElement = document.createElement('div')
    li.appendChild(divElement)
    
    divElement.appendChild(editBtn)
    divElement.appendChild(delBtn)

    // Append the new element to the ul
    ul.appendChild(li)

    // Clear the input field
    input_task.value = ''

    editBtn.addEventListener('click', function() {
        if (editBtn.innerHTML == 'Edit') {
            editBtn.innerHTML = 'Save'
            spanElement.style.display = 'none'

            inputElement = document.createElement('input')
            inputElement.value = spanElement.innerHTML
            li.insertBefore(inputElement, divElement)


            inputElement.style.outline = 'none'
            inputElement.style.border = '1px solid black'
            inputElement.style.width = '60%'
            inputElement.style.height = '30px'
            inputElement.style.borderRadius = '5px'
            inputElement.style.padding = '0 5px'
        } else {
            editBtn.innerHTML = 'Edit'
            spanElement.style.display = 'block'
            inputElement.style.display = 'none'

            spanElement.innerHTML = inputElement.value
        }

    })

    
})
