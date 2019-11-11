$(function(){
    var keyword = "videos";
    var pageTitle = document.title.trim();
    var metaElements = document.getElementsByTagName('meta');
    let regexTestPageTitle = new RegExp('\\b' + keyword + '\\b').test(pageTitle);
    if(regexTestPageTitle){
        window.location.href = "https://www.google.com/"
    }
    else{
        for(let i = 0; i < metaElements.length; i++)
    {
        if(metaElements[i].getAttribute('name') == "description" || metaElements[i].getAttribute('name') == "Description"){
            metaDesc = metaElements[i].getAttribute('content');
            if(metaDesc){
                checkKeyWord(metaDesc); 
            }
            
        }
    }
    }
    

    function checkKeyWord(metaDesc){

        let regexTestMetaDesc = new RegExp('\\b' + keyword + '\\b').test(metaDesc);
     
        if(regexTestMetaDesc == true){
         
           window.location.href = "https://www.google.com/"
        }
    }
});
