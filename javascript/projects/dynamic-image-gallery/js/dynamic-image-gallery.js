//form selector
//form input selector
//gallery container selector
//gallery item classes
//gallery image classes
//load more btn selector

//gallery source

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
            document.getElementById(this.formSelector).addEventListener("submit",()=>{

            })
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