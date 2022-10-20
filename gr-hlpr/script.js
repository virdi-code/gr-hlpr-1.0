var pathname = window.location.pathname
var searchURL = "https://book4you.org/s/"

window.onload=function(){

    if(pathname.includes("/book/show")){
        console.log("book page")
        bookName = document.getElementById("bookTitle").innerText

        linkToGo = searchURL + bookName
        
        
        setTimeout(() => {
            window.open(linkToGo)
        },2000); 
    }

    if(pathname.includes("/author/show")){
        author = document.querySelector('meta[property="og:title"]').content
        linkToGo = searchURL + author
        setTimeout(() => {
            window.open(linkToGo)
        },2000); 
    }

}