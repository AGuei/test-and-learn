let fragment = document.createDocumentFragment();
let firstOl = document.createElement('ol');
for(let i=0; i<5; i++){
    let firstLi = document.createElement('li');
    let firstLiText = document.createTextNode('test'+i);
    let secondOl = document.createElement('ol');
    secondOl.type = 'A';
    firstLi.appendChild(firstLiText);
    for(let j=5; j<9; j++){
        let secondLi = document.createElement('li');    
        let secondLiText = document.createTextNode('test'+j);
        secondLi.appendChild(secondLiText);
        secondOl.appendChild(secondLi);        
        firstLi.appendChild(secondOl);        
    }
    firstOl.appendChild(firstLi);    
}
fragment.appendChild(firstOl);
document.body.appendChild(fragment);