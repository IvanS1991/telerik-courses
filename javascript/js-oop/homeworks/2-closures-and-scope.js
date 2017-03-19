//++++++++++++++++++++++++++++++++
// 1 - Task 1
//++++++++++++++++++++++++++++++++
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];
		
		function listBooks(option) {
			var result = [];
			if (typeof option !== "undefined") {
				for (var i = 0, len = books.length; i < len; i += 1) {
					if (option.hasOwnProperty("category")) {
						if (books[i].category === option.category) {
							result.push(books[i]);
						}
					} else if (option.hasOwnProperty("author")) {
						if (books[i].author === option.author) {
							result.push(books[i]);
						}
					}
				}
				return result;
			} else {
				return books;
			}
		}

		function addBook(book) {
			var categoryExists = false;
			if (book.isbn.length !== 10 && book.isbn.length !== 13) {
				throw "Invalid ISBN";
			}
			if (book.title.length < 2 || book.title.length > 100) {
				throw "Invalid title";
			}
			if (book.author === "" || typeof book.author !== "string") {
				throw "Invalid author";
			}
			for (var i = 0, len = books.length; i < len; i += 1) {
				if (books[i].title === book.title || books[i].isbn === book.isbn) {
					throw `This book already exists`;
				}
			}
			for (var i = 0, len = categories.length; i < len; i += 1) {
				if (typeof categories[i] !== "undefined" && categories[i] === book.category) {
					categoryExists = true;
				}
			}
			if (!categoryExists) {
				categories.push(book.category)
			}
			book.ID = books.length + 1;
			books.push(book);
			return book;
		}

		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}