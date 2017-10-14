let fragment = document.createDocumentFragment();
let firstUl = document.createElement('ol');
for(let i = 0; i < 5; i++){
    let firstLi = document.createElement('li');
    let firstLiText = document.createTextNode('test'+i);
    let secondUl = document.createElement('ol');
    firstLi.appendChild(firstLiText);
    for(let j=5; j<9; j++){
        let secondLi = document.createElement('li');    
        let secondLiText = document.createTextNode('test'+j);
        secondLi.appendChild(secondLiText);
        secondUl.appendChild(secondLi);
        firstLi.appendChild(secondUl);
    }
    firstUl.appendChild(firstLi);    
}
fragment.appendChild(firstUl);
document.body.appendChild(fragment);