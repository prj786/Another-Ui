import { Tools } from './easey-ui/easy-ui';
const c = new Tools(document.getElementById('root'));

const userInputReadOnly = c.userInput('text', true, 'Hello World!!'),
    userInput = c.userInput('text', false),
    headerDiv = c.create('div'),
    divContainer = c.create('h1', 'another simple ui tool', { color: 'red', fontSize: '12px' });

c.addEvent(userInput, 'keyup', ()=>{
    let updatedText = c.create('p', userInput.value);
    c.updateContext(headerDiv, [updatedText], true);
});

c.convertApp('div', [userInputReadOnly, divContainer, userInput, headerDiv]);
