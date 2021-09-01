const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.textContent = "";
    if (searchText.length === "") {
        document.getElementById("write-something").innerText = `Please write something`
    }

    else {
        // load data
        const url = `http://openlibrary.org/search.json?q=${searchText}`

        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.docs));
    }


}

const displaySearchResult = docs => {
    console.log(docs.length)
    const searchResult = document.getElementById("search-result");

    // if(docs.length == 0) {

    // }

    docs.forEach(doc => {
        console.log(doc)


        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="loadBookDetail()" class="card">
               
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