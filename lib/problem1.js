function showPrimes(n) {
    primeNumber = []
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        primeNumber.push(i)
        //alert(i);
    }
    alert("For n = " + n + " prime numbers are " + primeNumber); // a prime
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}