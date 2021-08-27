function readInput() {
    list.push(input)
}

function displayStats(list) {
    const positiveInteger = list.filter((a) => a);
    if (positiveInteger.length > 0) {
        for (i = 0; i < positiveInteger.length; i++) {
            sum += Number(positiveInteger[i]);
        }
        max = Math.max(...positiveInteger);
        min = Math.min(...positiveInteger);
        avrg = sum / positiveInteger.length;
    }
    if (min == undefined) {
        min = 0;
    }
    if (max == undefined) {
        max = 0;
    }
    if (avrg == undefined) {
        avrg = 0;
    }
    alert("For the list " + positiveInteger + " ,the average is " + avrg + ", the minimum is " + min + ", and the maximum is " + max);
    count++;
}

