arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.map2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            output.push(callback(this[index], index, this));
        }
    }
    return output;
}

var newArr = arr.map2(function(item) {
    return item * 2;
});
// console.log(newArr);

Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var newarr2 = arr.filter2((ele) => {
    return ele > 5;
})

// console.log(newarr2);
Array.prototype.find2 = function(callback) {

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index])) {
                return this[index];
            }
        }
    }
    return output;
}
var newarr3 = arr.find2((ele) => {
    return ele > 5;
})

// console.log(newarr3);


Array.prototype.reduce2 = function(callback, initValue) {
    var output = initValue;
    if (initValue == undefined) {
        output = this[0];

    }
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (initValue == undefined && index == 0) {
                continue;

            }
            output = callback(output, this[index]);
        }

    }
    return output;
}
var newarr4 = arr.reduce2((a, b) => {
    return a + b;
})

// console.log(newarr4);

Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index])) {
                return true;
            }
        }
    }
    return false;
}
var newarr5 = arr.some2((ele) => {
    return ele > 20;
})

// console.log(newarr5);

Array.prototype.forEach2 = function(callback) {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                callback(this[index]);
            }
        }
    }
    // var newarr6 = arr.forEach2((ele) => {
    //     console.log(ele);
    // })

Array.prototype.every2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index])) {
                return false;
            }
        }
    }
    return true;
}

var newarr7 = arr.every2((ele) => {
    return ele > 0;
})
console.log(newarr7);