function task1() {
    let x = 5;
    alert(x++);
}

function task2() {
    console.log([] + false - null + true);
}

function task3() {
    let y = 1;
    let x = y = 2;
    alert(x);
}

function task4() {
    console.log([] + 1 + 2);
}

function task5() {
    alert("1"[0]);
}

function task6() {
    console.log(2 && 1 && null && 0 && undefined);
}

function task7() {
    let a = true;
    let b = false;
    console.log(!!(a && b));
    console.log((a && b));
}

function task8() {
    alert(null || 2 && 3 || 4);
}

function task9() {
    let a = [1, 2, 3]; 
    let b = [1, 2, 3];
    console.log(a == b);
}

function task10() {
    alert(+"Infinity");
}


function task11() {
    console.log("ёжик" > "яблоко");
}

function task12() {
    console.log(0 || "" || 2 || undefined || true || falsе);
}

function task13(params) {
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        console.log(element);
    }
}

function task14(params) {
    let i = 0;
    while (i <= params.length) {
        console.log(params[i]);
        i++;
    }
}

task1();
task2();
task3();
task4();
task5();
task5();
task7();
task8();
task9();
task10();
task11();
task12();
task13([1, 2, 3]);
task14([1, 2, 3]);