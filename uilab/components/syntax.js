/* Defining a custom element @MDN */
class WordCount extends HTMLParagraphElement {

    constructor() {

        /* Always call super first in constructor */
        super();
        // Element functionality defined here. 
    }
}

/* Autonomous custom elements. */

// Define a class that extends HTML.
class PopUpInfo extends HTMLElement {

    /* Required for attributeChangedCallback. Returns an array of the names of observed attributes. */
    static get observedAttributes() {
        return []
    }


    constructor() {
        // Creates a shadow root.
        this.attachShadow({ mode: 'open' }); // Sets and returns this shadow root.

        /* Create (nested) span elements */
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', wrapper);

        const icon = wrapper.appendChild(document.createElement('span'));
        icon.setAttribute('tabindex', 0);

        // Insert icon from defined attribute. or default icon.
        const img = icon.appendChild(document.createElement('img'));
        img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'path/to/img'

        const info = wrapper.appendChild(document.createElement('span'));
        info.setAttribute('class', 'info');

        // Take attribute content and put it inside the info span
        info.textContent = this.getAttribute('data-text');

        // Create some CSS to apply the shadow DOM.
        const style = document.createElement('style');
        style.textContent = '.wrapper {' + // Generated CSS

            // Attach the created elements to the shadow DOM.
            this.shadowRoot.appendChild(style, wrapper);


        //Finally we register our custom element on the customElementsRegistry using the define() method. In the params we specify the el name and then the class name that defines its functionality.
        customElements.define('popup-info', PopUpInfo);

        /* Define callbacks for the element which fire at different points in the el's lifecycle.
        
        ~connectedCallback
        ~disconnectedCallback
        ~adoptedCallback
        ~attributeChangedCallback
        */

        function updateStyle(el) {
            const shadow = el.shadowRoot;

            shadow.querySelector('style').textContent = `CSS styling set by getAttribute() JS in CSS injection`;

        }
    }
}

/* Customized built-in elements extends the native HTML elements instead of being stand alone.
The 'is' attribute is used to specify the extending class
*/
customElements.define('word-count')