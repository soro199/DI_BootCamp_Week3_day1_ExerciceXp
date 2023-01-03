//Exercice 1

// 1)  Add the code above, to your HTML file
     // ok


// 2 )Using Javascript:
    // 1- Retrieve the div and console.log it

    let container = document.getElementById("container")

    console.log(container)



    // 2- Change the name “Pete” to “Richard”.

            
        document.querySelector(".list").children[1].texcontent="Richard"



    // 3) Change each first name of the two <ul>'s to your name.
             
    const list = document.querySelectorAll(".list")
    list.forEach(list => list.firstElementChild.textContent="Soro")
            
          
    //  4)  Delete the <li> that contains the text node “Sarah”.
               const s= document.querySelectorAll('.list li');
               s.forEach((li) => {
                if (li.textContent === 'Sarah') {
                  li.remove();
                }
              });
           


    // 3- 
      //Add a class called student_list to both of the <ul>'s
        const ls = document.querySelectorAll('.list');
        ls.forEach((list) => {
        list.classList.add('student_list');
        });

    // Add the classes university and attendance to the first <ul>.

    const ft = document.querySelector('.list');
    ft.classList.add('university', 'attendance');

