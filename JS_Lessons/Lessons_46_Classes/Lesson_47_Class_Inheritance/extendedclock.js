class ExtendedClock extends Clock {

    constructor ({template = 'h:m:s'} = {}, {precision = 1000} = {}){
        super(template);
        this.precision = precision;
    }

    start() {
        super.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new ExtendedClock({template: 'h:m:s'});
clock.start();