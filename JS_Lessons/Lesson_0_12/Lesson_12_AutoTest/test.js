/*
describe("pow", function () {

    describe("Возводит x в степень y", function () {

        function makeTest(x, y) {
            let expected = 1;
            for (let i = 1; i <= y; i++) {
                expected *= x;
            }
            it(`${x} expected ${y} result ${expected}`, function () {
                assert.equal(pow(x, y), expected);
            });
        }

        for (let y = 1; y <= 5; y++) {
            for (let x = 1; x <= 5; x++) {
                makeTest(x, y);
            }
        }
    });

    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });
});*/

describe("pow", function () {

    it("Возводит 5 в степень 1", function () {
        assert.equal(pow(5, 1), 5);
    });

    it.only("Возводит 5 в степень 2", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("Возводит 5 в степень 3", function () {
        assert.equal(pow(5, 3), 125);
    });
});