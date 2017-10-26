var Book = function(title) {
    this.title = title;
}

var Food = function(name) {
    this.name = name;
}

var ufo = new Book('Harry Potter');
console.log(ufo, ufo.__proto__);

Book.prototype.author = 'author';

// ufo.__proto__ = new Food('noodles');
console.log(ufo, ufo.__proto__, ufo.title, ufo.name, ufo.author);

var realbook = new Book('js');
console.log(realbook, realbook.__proto__, realbook.author);

