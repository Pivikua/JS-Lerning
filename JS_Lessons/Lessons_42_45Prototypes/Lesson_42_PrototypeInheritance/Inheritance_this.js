let animal = {
    high: 10,
    weith: 100,
    _word: "",
    say(){
        alert(this.word);
    },
    set word(value){
      this._word = value;
    },

    get word(){
        this._word;
    }
};

let rabbit = {
  __proto__: animal
};

rabbit.high = 2;
rabbit.weith = 5;
rabbit.word = "Pickr";

// alert("Animal " + animal.high + " " + animal.weith + " ");
// alert("Rabbit " + rabbit.high + " " + rabbit.weith + " ");

animal.say();
// rabbit.say();