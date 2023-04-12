// Hàm xử lý sự kiện khi nút "Tính tổng" được click
const btnResultClick = () => {
    let elInpA = document.getElementById('inp_a');
    let elInpB = document.getElementById('inp_b');

    let valInpA = Number(elInpA.value);
    let valInpB = Number(elInpB.value);

    if (isNaN(valInpA) || isNaN(valInpB)) {
        alert('Phải nhập vào số');
    } else if (valInpA >= valInpB) {
        alert('Số A phải nhỏ hơn B')
    } else {
        let sum = 0;
        for (let i = valInpA; i <= valInpB; i++) {
            if (isPrime(i)) {
                sum += i;
            }
        }
        document.getElementById('result').innerHTML = `Tổng các số nguyên từ A đến B là ${sum}`
    }
}

// Định nghĩa hàm kiểm tra số nguyên tố
const isPrime = (num) => {
    // Kiểm tra số nguyên tố
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// Xử lý sự kiện onclick
const resultRs2 = () => {
    let numInpt = Number(document.getElementById('inputNumber').value);
    if (isNaN(numInpt) || numInpt < 1 || numInpt > 10) {
        alert('Vui lòng nhập số nguyên từ 1 đến 10.');
    } else {
        let changeDelta = printDelta(numInpt);
        document.getElementById('ouputRs2').innerHTML = changeDelta;
    }
}

// Function in tam giác
const printDelta = (numDel) => {
    let output = '';
    for (let i = 1; i <= numDel; i++) {
        for (let j = 1; j <= i; j++) {
            output += '*';
        }
        output += '<br>';
    }
    return output;
}