let fragment = document.createDocumentFragment();
let firstOl = document.createElement('ol');
for(let i=0; i<5; i++){
    let firstLi = document.createElement('li');
    let firstLiText = document.createTextNode('test'+i);
    let secondOl = document.createElement('ol');    
    firstLi.appendChild(firstLiText);
    for(let j=5; j<9; j++){
        let secondLi = document.createElement('li');
        let secondLiText = document.createTextNode('test'+j);
        let radioButton = document.createElement('input');
        let label = document.createElement('label');
        let br = document.createElement('br');
        radioButton.type = 'radio';
        radioButton.name = 'radio' + '_' + i;        
        secondLi.appendChild(secondLiText);
        label.appendChild(radioButton);
        label.appendChild(secondLi);
        label.appendChild(br);
        secondOl.appendChild(label);
        firstLi.appendChild(secondOl);
    }
    firstOl.appendChild(firstLi);
}
fragment.appendChild(firstOl);
document.body.appendChild(fragment);