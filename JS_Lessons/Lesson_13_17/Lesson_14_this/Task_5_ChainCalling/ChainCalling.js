let ladder = {
    step: 0,
    up() {
        ladder.step++;
        return this;
    },
    down() {
        ladder.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( ladder.step );
        return this;
    }
};

/*ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1*/

ladder.up().up().down().up().down().showStep();