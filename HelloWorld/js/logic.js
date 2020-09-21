var calcRun = {
    input = "",
    inClean = "",
    output = 0,
    refresh = function() {input = ""; inClean = ""; output = 0;},
    clean = function() {
        this.input.trim();
        for (c of this.input) {
            if (c == "0" || c == "1" || c == "2" || c == "3" || c == "4" 
                    || c == "5" || c = "6" || c == "7" || c == "8" || c == "9"
                    || c == "+" || c == "-" || c == "x" || c == "/"
                    || c == "%" || c == "^") { inClean += c };
        }
    }
    addInput = function(n) {
        this.input += n;
    }
    process = function() {
        alert("You're getting somewhere!");
    }
};

