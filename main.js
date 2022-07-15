
//console.log(obj);

const btnSus = document.querySelector('.btn-success');
const users =document.getElementById('users');

let request = new XMLHttpRequest();
    
request.open('GET', 'main.json', true);
       
      request.onload = function () {
        
     
      let users = JSON.parse(this.response);
      let output = '';

      for (var i = 0; i < users.length; i++) {
  output += '<h2 class="out">' + users[i].name +
   ' <p> '+'prise: ' + users[i].prise + ' <p> '+'materiale: ' + users[i].materiale +  
   '<p>'+'country:' + users[i].country + '<p>'+ 'size:' + users[i].size + 
   '<p>'+'color:' + users[i].color + `<img src="${users[i].url}" alt="" style="width: 150px;">
   <button class="btn">Вибрати</button> `;     
      }
      document.getElementById('users').innerHTML = output;
     
    }
    request.send();
    var languagesSelect = myForm.language;

const catSelect = myForm.category;
const countrySelect = myForm.country;

const colorSelect  = myForm.color;
const sizeSelect = myForm.size;



const req = new XMLHttpRequest();
req.open('GET', 'main.json', true);

function resultAll(){
  const wbstore = document.querySelector('.wbstore');
  const data = JSON.parse(req.response);
  users.innerHTML = '';
  let out = '';
  
    
  for (var i = 0; i < data.length; i++) {
   if(countrySelect.value == data[i].country){
    out += '<h2 class="out">' + data[i].name +
     ' <p> '+'prise: ' + data[i].prise + ' <p> '+'materiale: ' + data[i].materiale +  
     '<p>'+'country:' + data[i].country + '<p>'+ 'size:' + data[i].size + 
     '<p>'+'color:' + data[i].color + `<img src="${data[i].url}" alt="" style="width: 150px;">
     <button class="btn">Вибрати</button>`;    
        
  }
  if(sizeSelect.value == data[i].size){
    out += '<h2 class="out">' + data[i].name +
    ' <p> '+'prise: ' + data[i].prise + ' <p> '+'materiale: ' + data[i].materiale +  
    '<p>'+'country:' + data[i].country + '<p>'+ 'size:' + data[i].size + 
    '<p>'+'color:' + data[i].color + `<img src="${data[i].url}" alt="" style="width: 150px;">
    <button class="btn">Вибрати</button>`;    
  }
  if(colorSelect.value == data[i].color){
    out += '<h2 class="out">' + data[i].name +
    ' <p> '+'prise: ' + data[i].prise + ' <p> '+'materiale: ' + data[i].materiale +  
    '<p>'+'country:' + data[i].country + '<p>'+ 'size:' + data[i].size + 
    '<p>'+'color:' + data[i].color + `<img src="${data[i].url}" alt="" style="width: 150px;">
    <button class="btn">Вибрати</button>`; 
  }
  document.getElementById('data').innerHTML = out;
  }

    const result = (
      sizeSelect.value,
        catSelect.value,
        countrySelect.value,
        colorSelect.value
    );
    wbstore.innerHTML = '<h3 class="result">' + "Пошук : " + '<p>' + sizeSelect.value +
    '<p>' + catSelect.value + '<p>' + countrySelect.value + '<p>' + colorSelect.value;
    console.log(result);
    console.log(catSelect.value);
    //section.innerHTML  = '';
  
   
 
    
}
req.send();
    
    btnSus.addEventListener("click",resultAll);
    

const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSk_8vtyUu_h9UcJwMHXgZmARiJin3905d6Ou-BffRvOGEBVMvpm0SW4nL4aI9lR127XktogbzRwhrS/pub?gid=0&single=true&output=tsv';

 fetch(URL).then(r => r.text()).then(parseText);

 function parseText(text){
     const dataArr = text.split('\r\n').map(row => row.split('\t'));
     const names = dataArr.shift();
     const data = dataArr.map(row => row.reduce((acc, el, i) => {
         acc[names[i]] = el;
         return acc;
     }, {}));
     console.log(data);
     return data;
 }

 function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', () => {
        const data = JSON.parse(xhttp.responseText);
        console.log(data);
    });
    xhttp.open("GET", URL, true);
    xhttp.send();
}


//parseGoogleSheet(URL, console.log);
function load() {
  var mydata = JSON.parse();
  alert(mydata.length);

  var div = document.getElementById('data');

  for(var i = 0;i < mydata.length; i++)
  {
     div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].name +"</p>" + "<br>";
  }
}

var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
      return new Date(value);
  } else {
      return value;
  }});

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
/*let request = new XMLHttpRequest();
    request.open('GET', 'main.json', true);
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
    console.log(superHeroes);
  }
 
  function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }
  function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }*/
 
   