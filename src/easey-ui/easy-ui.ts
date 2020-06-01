export class Tools {
    public app: HTMLElement;
    public observerChanges: any = new MutationObserver((m) => {
        m.forEach(record => {
            let element = record.target;
            console.log(element);
        })
    });
    constructor(mainElement: HTMLElement) {
        this.app = mainElement;
    }

    // Classes
    classList(className: string) {
        return document.getElementsByClassName(className);
    }

    classListFirst(className: string) {
        return document.getElementsByClassName(className)[0];
    }

    classListLast(className: string) {
        const indX = this.classList(className).length - 1;
        return document.getElementsByClassName(className)[indX];
    }

    classListIndx(className: string, index: number) {
        return document.getElementsByClassName(className)[index];
    }

    classAdd(item: string, className: string) {
        return document.querySelector(item).classList.add(className);
    }

    addClass(el: HTMLElement, className: string) {
        return el.classList.add(className);
    }

    // Ids
    idSelect(id: string) {
        return document.getElementById(id);
    }


    // querySelector
    querySelect(item: string) {
        return document.querySelector(item);
    }

    // Display None
    hide(elem: HTMLElement) {
        return elem.style.display = "none";
    }

    // Show
    showAs(elem: HTMLElement, style: string) {
        return elem.style.display = style;
    }

    addId(el: HTMLElement, id: string) {
        return el.id = id;
    }

    select(el: string) {
        document.querySelector(el);
    }

    createAppend(element: HTMLElement, contexts: Array<HTMLElement>, parent?: HTMLElement, id?: string, className?: string) {
        contexts.forEach((item) => {
            element.appendChild(item);
        });
        if (className) {
            this.addClass(element, className);
        }
        if (id) {
            this.addId(element, id);
        }
        if (parent) {
            parent.appendChild(element);
        } else {
            this.app.appendChild(element);
        }
        return element;
    }

    convertApp(el: string, contexts: Array<HTMLElement>, parent?: HTMLElement, id?: string, className?: string) {
        const element = document.createElement(el);
        contexts.forEach((item) => {
            element.appendChild(item);
        });
        if (className) {
            this.addClass(element, className);
        }
        if (id) {
            this.addId(element, id);
        }
        if (parent) {
            parent.appendChild(element);
        } else {
            this.app.appendChild(element);
        }
    }

    // CSS
    style(elem: any, styleName: any, style: any) {
        console.log(styleName, style);
        return elem.style[styleName] = style
    }

    // HTML
    innerBox(elem: HTMLElement, value: string) {
        return elem.innerHTML = value;
    }

    // Events
    addEvent(elem: HTMLElement, event: any, action: EventListenerOrEventListenerObject) {
        return elem.addEventListener(event, action);
    }

    // Delay
    delay(fun: Function, time: number) {
        setTimeout(fun, time);
    }

    create(el: string, context?: string, style?: object, id?: string, className?: string) {
        const element: HTMLElement = document.createElement(el);
        element.contentEditable = 'true';
        if (className) {
            this.addClass(element, className);
        }
        if (id) {
            this.addId(element, id);
        }
        if (context) {
            element.innerHTML = context;
        }
        element.contentEditable = 'false';
        element.removeAttribute('contentEditable');
        for (let key in style) {
            if (style.hasOwnProperty(key)) {
                this.style(element, key, style[key]);
            }
        }
        return element;
    }

    updateStyle(el: HTMLElement, styleObj: object, replaceOld: boolean): void {
        if (replaceOld) {
            el.removeAttribute('style');
        }
        for (let key in styleObj) {
            if (styleObj.hasOwnProperty(key)) {
                this.style(el, key, styleObj[key]);
            }
        }
    }

    updateContext(el: HTMLElement, contexts: Array<HTMLElement>, replaceOld: boolean): void {
        if (replaceOld) {
            el.innerHTML = ``;
        }
        contexts.forEach( element => {
            el.appendChild(element);
        })
    }

    createList(container: string, child: string, innerValues: Array<string>, parent?: HTMLElement, parentStyle?: object, childStyle?: object): HTMLElement {
        let item: HTMLElement;
        const main = this.create(container);
        for (let i = 0; i < innerValues.length; i++) {
            item = document.createElement(child);
            item.innerHTML = innerValues[i];
            main.appendChild(item);
            for (let key in childStyle) {
                if (childStyle.hasOwnProperty(key)) {
                    this.style(item, key, childStyle[key]);
                }
            }
        }
        main.removeChild(main.childNodes[0]);
        for (let key in parentStyle) {
            if (parentStyle.hasOwnProperty(key)) {
                this.style(main, key, parentStyle[key]);
            }
        }
        return main;
    }

    //  User Inputs
    userInput(type: string, readonly: boolean, value?: any){
        let element = document.createElement('input');
        element.readOnly = readonly;
        element.type = type;
        if (value) {
            element.value = value;
        }
        return element;
    }
}