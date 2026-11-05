async function getBooks(){
    try {
        const response = await fetch("https://upadhayay.github.io/db.json");
        const data = await response.json();

        const books_div = document.querySelector(".books");
        const bookImage={
            1:"images/The Universe and Dr. Einstein.jpg",
            2:"images/Einstein on politics.jpg",
            3:"images/Einstein versus the physical review.jpg",
            4:"images/Einstein on peace.jpg",
            6:"images/Book of Knowledge.jpg",
        }

        for(let book of data.books){
            console.log(book);

            const single_book_li= document.createElement("li");
            single_book_li.classList.add("single-book");

            const imgSrc= bookImage[book.id];
            single_book_li.innerHTML=`
            <div class="book-icon">
                 <img src="${imgSrc}" alt="Book Image">
            </div>

            <div class="book-info">
                <h3>Title: ${book.title}</h3>
                <p>Book ID: ${book.id}</p>
                <p>Year: ${book.year}</p>
                <p>Published: ${book.published}</p>
            </div>
            `;

            books_div.append(single_book_li);
        }
        
    } catch (error) {
        console.log("Error in fecth: ",error);
    }
}
getBooks();

//Hambuger menu//
const hamburger = document.getElementById("hamburger");
const nav_link = document.getElementById("nav-link");

hamburger.addEventListener("click", () => {
    if(nav_link.classList.contains("open")){
        nav_link.classList.remove("open");
    }else{
        nav_link.classList.add("open");
    }
});

//Blog link//
const blog1=document.getElementById("blog1");
blog1.addEventListener("click",() => {
    window.open("https://history.aip.org/exhibits/einstein/essay_text.htm","_blank");

});

const blog2=document.getElementById("blog2");
blog2.addEventListener("click",() => {
    window.open("https://www.silene.ong/wp-content/uploads/2019/11/AEinstein-Religion-and-Science_1930.pdf","_blank");

});

//Gallery photos//
const photos = [
    "images/Gallery1.jpg",
    "images/Gallery2.jpg",
    "images/Gallery3.jpg"
];

let currentIndex = 0;

const gallery_img = document.getElementById("gallery-img");
const gallery_btn = document.getElementById("gallery-btn");

gallery_btn.addEventListener("click", ()=> {
    currentIndex++;

    if (currentIndex >= photos.length) {
        currentIndex = 0;
    }

    gallery_img.src=photos[currentIndex];
});