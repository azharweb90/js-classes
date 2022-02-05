//form selector
//form input selector
//gallery container selector
//gallery item classes
//gallery image classes
//load more btn selector

//gallery source

//Module Pattern: Module pattern is a way to encapsulate logic in a file both public and private methods.
var DIG = (function(){
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