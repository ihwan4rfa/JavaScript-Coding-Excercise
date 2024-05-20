/**
 * i = 0    => 0 (i)
 * i = 1    => 1 (i)
 * i = 2    => 1 i(0) + i(1))
 * i = 3    => 2 (i(1) + i(2))
 * i = 4    => 3 (i(2) + i(3))
 * i = 5    => 5 (i(3) + i(4))
 */

function fibonacci(n) {
    let a = 0, b = 0;
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            a = i;
            console.log(a);
        } else if (i === 1) {
            b = i;
            console.log(b);
        } else {
            let c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    }
}

fibonacci(20);