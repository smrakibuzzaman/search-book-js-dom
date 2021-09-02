const searchBook = () => {
    // search field 
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = "";
    searchField.textContent = "";

    if (searchText.length === "") {
        // no data warning
        document.getElementById("write-something").innerHTML = `<h3 class=" text-danger"> Something went wrong please try again later </h3>`
    }

    else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`



        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.docs));
    }


}

const displaySearchResult = docs => {

    const searchResult = document.getElementById("search-result");

    // result count 
    document.getElementById("book-number").innerHTML = `<h1 class="bg-dark text-warning text-center">Results found ${docs.length} </h1>`

    if (docs.length === 0) {
        // no result 
        document.getElementById("no-results").innerHTML = `<h3 class=" text-danger"> no result found </h3>`
    }
    searchResult.textContent = "";

    docs.forEach(doc => {
        // dynamic div
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h1 class="card-title">Book:  ${doc.title}</h1>
                    <h2 class="card-title">Author: ${doc.author_name[0]}</h2>
                    <h3 class="card-title">Publisher: ${doc.publisher[0]}</h3>
                    <h4 class="card-title">First Publishing: ${doc.first_publish_year}</h4>
                    
                </div>
            </div>
`
        searchResult.appendChild(div)
    })
}