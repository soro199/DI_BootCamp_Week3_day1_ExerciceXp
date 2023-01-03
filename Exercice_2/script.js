    //Exercice 2
    //1) Add the code above, to your HTML file
    //ok

    // 2) Add a “light blue” background color and some padding to the <div>.
    const baldiv = document.querySelector('div');
    baldiv.style.backgroundColor = 'lightblue';
    baldiv.style.padding = 'x-large';

    // 3) Do not display the <li> that contains the text node “John”.

    const pre = document.querySelector('li');
    pre.style.display = 'none';

    //4) Add a border to the <li> that contains the text node “Pete”.

    const deu = document.querySelectorAll('li')[1];
    deu.style.border = '1px solid black';

    // 5) Change the font size of the whole body.

    document.body.style.fontSize = '40px';

    // 6) Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


    if (baldiv.style.backgroundColor === 'lightblue') {
        alert(`Bonjour ${pre.textContent} et ${deu.textContent}`);
      }