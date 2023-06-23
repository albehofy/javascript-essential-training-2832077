class Book {
  constructor(name, about, price, size, color, bookDescription, page) {
    this.name = name;
    this.about = about;
    this.price = price;
    this.size = size;
    this.color = color;
    this.bookDescription = bookDescription;
    this.numPage = page;
  }

  bookDescription(newDescription) {
    this.bookDescription = newDescription;
  }

  currentPage(cPage) {
    this.numPage = cPage;
  }
}

export default Book;
