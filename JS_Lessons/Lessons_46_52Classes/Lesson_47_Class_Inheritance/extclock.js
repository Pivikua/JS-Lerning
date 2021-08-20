class Extclock extends Clock {

    constructor(options) {
        super(options);
        let {precision = 1000} = options;
        this.precision = precision;
    }

    start() {
        super.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let extclock = new Extclock({
    template: 'h:m:s',
    precision: 10000
});
extclock.start();