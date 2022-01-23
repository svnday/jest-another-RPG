function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
<<<<<<< HEAD
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
=======
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)]
>>>>>>> a4ef2af299b6f2d354ad5f87dd1fd32ec6e14905

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;