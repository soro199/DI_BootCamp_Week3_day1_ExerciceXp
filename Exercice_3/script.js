// Exercice 3
// 1) Add the code above, to your HTML file

  //ok

// 2) In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

const div = document.querySelector('#navBar');
div.setAttribute('id', 'socialNetworkNavigation');
console.log(div)

// 3) We are going to add a new <li> to the <ul>.
    // 1- First, create a new <li> tag (use the createElement method).
     const newLi = document.createElement('li');
    // 2- Create a new text node with “Logout” as its specified text.
    const newNode = document.createTextNode('Déconnexion');
    // 4- Append the text node to the newly created list node (<li>).
    newLi.appendChild(newNode);


    //5-  Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
    const ul = document.querySelector('ul');
    ul.appendChild(newLi);

// 4) Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


const premierLi = ul.firstElementChild;
const finLi = ul.lastElementChild;
console.log(premierLi.textContent); // resultat "Profile"
console.log(finLi.textContent); // resultat "Déconnexion"