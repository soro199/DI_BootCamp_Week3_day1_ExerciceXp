//Exercice 4

// 1) In the body of the HTML page, create an empty div:
    // <div class="listBooks"></div>


// 2) In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
    // title,
    // author,
    // image : a url,
    // alreadyRead : which is a boolean (true or false).

let allBooks = []

// 3) Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

 const Book1 = 
        {
          title: "Tout s'arrange avec des mots ",
          author: 'Marie ANDERSEN',
          image: 'data:image/jpeg;base64,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',
          alreadyRead: true
        }
    const Book2 = 
        {
          title: "Le monde s'effondre ",
          author: 'Chinua Achebe',
          image: 'data:image/jpeg;base64,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',
          alreadyRead: false
        }
     

allBooks.push(Book1,Book2)

console.log(allBooks)
    
//4) Requirements : All the instructions below need to be coded in the js file:
    // Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
    // For each book :
        // You have to display the book’s title and the book’s author.
        // Example: HarryPotter written by JKRolling.
        // The width of the image has to be set to 100px.
        // If the book is already read. Set the color of the book’s details to red.

    const Bdiv = document.querySelector('.listBooks');

    allBooks.forEach((livre) => {
       
        const bookHTML = `
          <div class="book">
            <h2>${livre.title}</h2>
            <p>ecrire par ${livre.author}</p>
            <img src="${livre.image}" width="100" />
            <p>${livre.alreadyRead ? 'Dejà lu' : 'Pas encore'}</p>
          </div>
        `;
      
      
        Bdiv.innerHTML += bookHTML;
      });


      const pE = Bdiv.querySelectorAll('p');

      pE.forEach((p) => {
        if (p.textContent === 'Dejà lu') {
          p.style.color = 'red';
        }
      });