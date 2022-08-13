function nilaiMinMax(arrayAngka){
    // Kode disini
    var max = arrayAngka[0];
    var min = arrayAngka[0];

    for(var i = 0; i < arrayAngka.length; i++){
        if(max < arrayAngka[i]){
            max = arrayAngka[i];
        }
        if(min > arrayAngka[i]){
            min = arrayAngka[i];
        }
    }

    return {
        max : max,
        min : min
    }
}

// max
// 10,3,5,12,7
// index ke i dan i+1
// maka index ke i + 1 akan dimasukkan ke dalam max

console.log(nilaiMinMax([10,3,5,12,7]));