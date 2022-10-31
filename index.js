var arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
var n = arr.length;
var unqArr = [];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {

        if (arr[i] == arr[j])
            arr.splice(j, 1);

    }
    unqArr.push(arr[i]);
}
console.log(unqArr);






