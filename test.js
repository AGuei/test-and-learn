let fragment = document.createDocumentFragment();
let firstOl = document.createElement('ol');
for(let i=0; i<5; i++){
    let firstLi = document.createElement('li');
    let firstLiText = document.createTextNode('test'+i);
    let secondOl = document.createElement('ol');
    let rightAns = document.createTextNode('答對了');
    let wrongAns = document.createTextNode('答錯了');
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
    firstLi.childNodes[0].nodeValue = 'add Text '  + firstLi.childNodes[0].nodeValue;
    firstLi.childNodes[1].childNodes[0].childNodes[1].childNodes[0].nodeValue += 'xxx';
    firstOl.appendChild(firstLi);
}
fragment.appendChild(firstOl);
document.body.appendChild(fragment);
document.body.childNodes[4].addEventListener('click',function(event) {
    let e = window.event || event;
    let target = e.srcElement ? e.srcElement : e.target;
    if (target && target.type === 'radio' && target.nodeName === 'INPUT') {
        target.parentNode.childNodes[1].childNodes[0].nodeValue += 'wrong';
        target.disabled = true;
    }
}, false);