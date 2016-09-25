//Counter code

var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE) {  
            //Take some action
            if (request.status === 200) {
                 //Make a request to the server and send the name
        
        //Capture a list of names and render it as a list
        var names = ['name1', 'name2', 'name3', 'name4'];
        var list = '';
        for (var i=0; i< names.length; i++) {
            list += '<li>' + names[i] + '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
            }
    } 
    //Not done yet
   };
   
   //Make the request
   request.open('GET', 'http://abhinandan-raju.imad.hasura-app.io/counter', true);
   request.send(null);
};

//Submit name
var submit = document.getElementById('submit_btn');
button.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE) {  
            //Take some action
            if (request.status === 200) {
                 //Make a request to the server and send the name
        
        //Capture a list of names and render it as a list
        var names = request.responseText;
        names = JSON.parse(names);
        var list = '';
        for (var i=0; i< names.length; i++) {
            list += '<li>' + names[i] + '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
            }
    } 
    //Not done yet
   };
        var nameInput = document.getElementById('name');
        var name = nameInput.value;
      request.open('GET', 'http://abhinandan-raju.imad.hasura-app.io/submit-name?name=' + name, true);
   request.send(null);
    
};
