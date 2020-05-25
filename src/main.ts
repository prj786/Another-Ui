import { Tools } from './easey-ui/easy-ui';
const c = new Tools(document.getElementById('root'));

const headerDiv = c.create('div', 'Hello World!', {width: '100%', textAlign: 'center', display: 'block'}),
    divContainer = c.create('div', '', {width: '100%', backgroundColor: 'green', padding: '30px'}),
    newContext = c.create('h1', 'Hi THERE!!'),
    button = c.create('button', 'click Here for changes', {backgroundColor: 'red', border: 'none', display: 'block', margin: '0 auto'}),
    header = c.createAppend(divContainer, [headerDiv, button]),
    userInput = c.userInput('text', false);

c.addEvent(button, 'click', () => {
    c.updateStyle(headerDiv, {color: 'red', fontSize: '25px'}, false);
    c.updateStyle(divContainer, {width: '400px', height: '500px'}, false);
    c.updateContext(headerDiv, [newContext], true);
})

c.addEvent(userInput, 'keyup', ()=>{
    let updatedText = c.create('p', userInput.value);
    c.updateContext(headerDiv, [updatedText], true);
})

c.convertApp('div', [header, userInput]);
