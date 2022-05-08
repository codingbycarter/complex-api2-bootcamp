 document.querySelector('button').addEventListener('click', getDrink)

 function getDrink(){
     let drink =document.querySelector('input').value

    // fetch goes  
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data.drinks[0])
              document.querySelector('h2').innerText = data.drinks[0].strIngredient1
              document.querySelector('.relatedBooks').innerText = details=true

let urlBooks = `http://openlibrary.org/subjects/love.json?=${details=true}`

    fetch(urlBooks)
    .then(res => res.json())
    .then(data =>{
        console.log(data.works[0].title)
             document.querySelector('p').innerText = data.works[0].title
    })
})
.catch(err => {
    console.log('errors $(err)')
})
}

