function Consol() {
    this.method = {

    };

    this.print = function (str) {
        
        return this.method[quote](str);
    };

    this.addMethod = function (quote, str) {
        this.method[quote] = str;
    };
}

let consol = new Consol();
consol.addMethod("*", (quote, str) => quote + str + quote);
consol.print("Print");

let result = Consol.calculate("* Any thing");
Console.log(result);