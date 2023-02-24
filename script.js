//your code here!
const child1 = document.createElement('li');
const childText1 = document.createTextNode("item 1")
child1.appendChild(childText1);
document.querySelector('ol').appendChild(child1).appendChild(document.createElement('br'))

const child2 = document.createElement('li');
const childText2 = document.createTextNode("item 2")
child2.appendChild(childText2);
child1.after(child2)

const child3 = document.createElement('li');
const childText3 = document.createTextNode("item 3")
child3.appendChild(childText3);
child2.after(child3)

const child4 = document.createElement('li');
const childText4 = document.createTextNode("item 4")
child4.appendChild(childText4);
child3.after(child4)

const child5 = document.createElement('li');
const childText5 = document.createTextNode("item 5")
child5.appendChild(childText5);
child4.after(child5)

const child6 = document.createElement('li');
const childText6 = document.createTextNode("item 6")
child6.appendChild(childText6);
child5.after(child6)

const child7 = document.createElement('li');
const childText7 = document.createTextNode("item 7")
child7.appendChild(childText7);
child6.after(child7)

const child8 = document.createElement('li');
const childText8 = document.createTextNode("item 8")
child8.appendChild(childText8);
child7.after(child8)

const child9 = document.createElement('li');
const childText9 = document.createTextNode("item 9")
child9.appendChild(childText9);
child8.after(child9)

const child10 = document.createElement('li');
const childText10 = document.createTextNode("item 10")
child10.appendChild(childText10);
child9.after(child10)