Basic tooling and creating UI in javascript like jQueryUi or react, its more like Elm. functional programming

  <strong>1. no virtual-dom
  2. fully customizable
  3. function-based
  4. static
  5. no renderer
  6. for ui beginners and enthusiasts</strong>
  
this is actually basic init functions now. done in a day.

  updates every monday morning working only weekends
  
  goals for the neext week:
    
    1) createTable - function
    2) createGrid - function
    3) createFlexBox - function
    4) betterUserInputs
    5) updated - hteml management
  
  further aims
  
    1) animation - function
    2) better error handling


Basic Methods

<strong>convertApp</strong> - <code>(el: string, contexts: Array<HTMLElement>, parent?: HTMLElement, id?: string, className?: string)</code> returns void and creates htmlElement in dom tree
  
<strong>create</strong> - <code>(el: string, context?: string, style?: object, id?: string, className?: string)</code> returns html element

<strong>updateStyle</strong> - <code>(el: HTMLElement, styleObj: object, replaceOld: boolean)</code> returns void updates current style of html element

<strong>createList</strong> - <code>(container: string, child: string, innerValues: Array<string>, parent?: HTMLElement, parentStyle?: object, childStyle?: object)</code> return html element as list

<strong>createAppend</strong> - <code>(element: HTMLElement, contexts: Array<HTMLElement>, parent?: HTMLElement, id?: string, className?: string)</code> appends html elements in html element

Styles 

everytime you create element you set class or id to as optional also you can add style object so:

<strong>
  <code>
    headerStyle = {
      backgroundColor: 'red',
      padding: '10px',
      fontSize: '24px'
    }
  </code>
</strong>

is basic styling here




check <a href="https://github.com/prj786/Another-Ui/tree/master/src/easey-ui">easey-ui.ts</a>

