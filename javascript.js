    //Declaring all the variables that will be used
    var enterButton = document.getElementById("enter");
    var input = document.getElementById("user-input");
    var ul = document.querySelector("ul");
    var item = document.getElementsByTagName("li");


    //Need these functions to validate the input, if nothing is entered - nothing will happen
    function inputLength(){
      return input.value.length;
    }

    function listLength(){
      return item.length;
    }


    //This function creates new tasks
    function createListElement() {

          var li = document.createElement("li");
          li.appendChild(document.createTextNode(input.value));
          ul.appendChild(li);
          input.value = "";


          //This function turns the background of a task salmon to show it is done
          function complete() {
            li.classList.toggle("done");
          }

          li.addEventListener("click",complete);

          //Remove Button
          var dBtn = document.createElement("button");
          dBtn.appendChild(document.createTextNode("remove"));
          li.appendChild(dBtn);
          dBtn.addEventListener("click", deleteListItem);

          //This function helps the user remove a task
          function deleteListItem(){
            li.classList.add("delete")
          }
    }

    //Makes sure empty inputs are not in the list
    function addListAfterClick(){
      if (inputLength() > 0) {
        createListElement();
      }
    }
    //event.which === 13 represents the unicode of the enter key
    //This function makes sure the user can enter a task with the enter key too
    function addListAfterKeypress(event) {
      if (inputLength() > 0 && event.which ===13) {
        createListElement();
      }
    }
    //Calling the function - without these two lines nothing will show up in the list.
    enterButton.addEventListener("click",addListAfterClick);

    input.addEventListener("keypress", addListAfterKeypress);
