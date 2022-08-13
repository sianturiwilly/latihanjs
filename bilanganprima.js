function checkPrima(angka){
    // Kode disini
    var flag = 0;
    for(var i = 1; i <= angka; i++){
        if(angka % i === 0){
            flag++;
        }
    }

    if(flag === 2){
        return true;
    }else{
        return false;
    }
}

// Bilangan Prima : Faktor hanya 2 faktor
// 5: 1,5
// 7: 1,7
// 10: 1,2,5,10

// Flag
// 5 % 1 = 0
// flag + 1

// Hasil
console.log(checkPrima(5)); // True
console.log(checkPrima(10)); // Prima