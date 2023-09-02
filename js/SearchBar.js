'use strict'


const searchIssue = () =>{
    let searchList = document.getElementById("searchList");
    searchList.innerHTML =`
    <ul id="myUl" type="none">
    <li><a href="#">Water</a></li>
    <li><a href="#">Waste</a></li>
    <li><a href="#">Hygiene</a></li>
    <li><a href="#">Treatment</a></li>
    <li><a href="#">How to dump waste</a></li>
    <li><a href="#">How to clean water</a></li>
    <li><a href="#">How to reuse waste materials </a></li>
</ul>
    `;
    searchList.classList.remove('activeSearch');
   
    let filter = document.getElementById("myInput").value.toUpperCase();

 
    let ul = document.getElementById("myUl");
    let li = ul.getElementsByTagName('li');

    for (var i=0; i< li.length; i++){
        let a =li[i].getElementsByTagName('a')[0];

        let textValue = a.textContent;

        if(textValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.display ='';

        }else{
        li[i].style.display ='none';
}

}
}