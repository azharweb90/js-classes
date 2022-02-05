//form selector
//form input selector
//gallery container selector
//gallery item classes
//gallery image classes
//load more btn selector

//gallery source

//Q: What is Module Pattern ? 
//A: Module pattern is a way to encapsulate logic in a file both public and private methods and variables. It helps in protecting pieces from leaking into the global scope and accidentally collliding with another developer's interface.With this pattern, only a public API is returned, keeping everything else within the closure private.

// The Module Pattern approach is not only incredibly powerful, but incredibly simple. With very little code, you can effectively namespace related methods and properties, organizing entire modules of code in a way that both minimizes global scope pollution and creates privacy


var DIG = (function(){

    //dig variable is the private variable
    const dig = {
        formSelector:'',
        formInputSelector:'',
        galleryContainerSelector:'',
        galleryItemClasses:'',
        galleryImageClasses:'',
        loadMoreBtnSelector:'',
        source:[],
        initForm(){
            document.getElementById(this.formSelector).addEventListener("submit", this.formSubmit)
        },
        formSubmit(ev) {
            ev.preventDefault();
                const inputValue = this.formInputSelector.value;
        },
        init(formSelector,
            formInputSelector,
            galleryContainerSelector,
            galleryItemClasses,
            galleryImageClasses,
            loadMoreBtnSelector,
            source){
                this.formSelector=formSelector;
                this.formInputSelector=formInputSelector;
                this.galleryContainerSelector=galleryContainerSelector;
                this.galleryItemClasses=galleryItemClasses;
                this.galleryImageClasses=galleryImageClasses;
                this.loadMoreBtnSelector = loadMoreBtnSelector;
                this.source = source;
        }
    };

    return function({
        formSelector='',
        formInputSelector='',
        galleryContainerSelector='',
        galleryItemClasses='',
        galleryImageClasses='',
        loadMoreBtnSelector='',
        source=[]
    }){
        dig.init(formSelector,
        formInputSelector,
        galleryContainerSelector,
        galleryItemClasses,
        galleryImageClasses,
        loadMoreBtnSelector,
        source);
    };
})();

