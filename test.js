let fragment = document.createDocumentFragment();
let firstUl = document.createElement('ol');
let secondUl = document.createElement('ol');
for(let i = 0; i < 5; i++){
    let firstLi = document.createElement('li');
    let secondLi = document.createElement('li');    
    let firstLiText = document.createTextNode('test'+i);
    let secondLiText = document.createTextNode('test'+i);    
    firstLi.appendChild(firstLiText);    
    secondLi.appendChild(secondLiText);
    firstUl.appendChild(firstLi);
    secondUl.appendChild(secondLi);
}
fragment.appendChild(firstUl);
fragment.appendChild(secondUl);
document.body.appendChild(fragment);