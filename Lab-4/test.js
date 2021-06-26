function sumValues(num1, num2, add) {
    if(add) {
        const result = 0;
        result = num1 + num2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}

// sumValues(10,10,true);

function discountPrices(prices, discount) {
    const discounted = [];
    const finalPrice = 0;
    const length = prices.length;

    for(let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1-discount);
        // finalPrice = Math.round(discountedPrice * 100) / 100;
        // discounted.push(finalPrice);
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(length);
    // console.log(discountedPrice);
    // console.log(finalPrice);

    return discounted;
}
// var x = discountPrices([100,200,300], 0.5);
// console.log(x);

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

// console.log(student["Grad Year"])
// student.greeting();

function print(input) {
    console.log(input);
}

// print(true === Boolean(2))

function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}
function doSomething(num) {
    return num * 2;
}

// print(modifyArray([1, 2, 3], doSomething));

function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

// printNums();

