$(document).ready(function() {
    // alert("welcome");
});

function roundDP(value, places) {
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
}

function randRange(lowLim, highLim) {
    return (Math.random() * (highLim - lowLim)) + lowLim;
}

function solve(a = null, b = null, c = null) {
    // solves a = b * c for missing value
    if (b != null & c != null) {
        return b * c;
    } else if (a != null & b != null) {
        return a / b;
    } else if (a != null & c != null) {
        return a / b;
    } else {
        return null
    }
}

function getVals(AlowLim, AhighLim, BlowLim, BhighLim, ClowLim, ChighLim) {
    var solveFor = Math.floor(randRange(0, 2.99999));

    if (solveFor == 0) {
        return [null, randRange(BlowLim, BhighLim), randRange(ClowLim, ChighLim)];
    } else if (solveFor == 1) {
        return [randRange(AlowLim, AhighLim), null, randRange(ClowLim, ChighLim)];
    } else {
        return [randRange(AlowLim, AhighLim), randRange(BlowLim, BhighLim), null];
    }
}

function pickRound(value) {
    var roundAmmount = Math.floor(randRange(0, 2.99999));
    var roundType = Math.floor(randRange(0, 1.99999));
}

function myFunction() {
    var names = [$("#AName")[0].value, $("#BName")[0].value, $("#CName")[0].value];
    var units = [$("#AUnit")[0].value, $("#BUnit")[0].value, $("#CUnit")[0].value];
    var lowLims = [Number($("#ALowLim")[0].value), Number($("#BLowLim")[0].value), Number($("#CLowLim")[0].value)];
    var highLims = [Number($("#AHighLim")[0].value), Number($("#BHighLim")[0].value), Number($("#CHighLim")[0].value)];

    const index = highLims.indexOf(0);
    highLims[index] = Infinity;

    var output = "";

    if (highLims.indexOf(Infinity) != -1) {
        alert("Error - High limits cannot be 0 or empty");
    } else {

        // var testNum = 264.83;
        // $("#Output")[0].value = +testNum.toPrecision(1)

        numRes = 0;
        while (numRes <= 9) {
            var [a, b, c] = getVals(lowLims[0], highLims[0], lowLims[1], highLims[1], lowLims[2], highLims[2]);
            // a = pickRound(a);
            var valArs = [a, b, c];
            var result = solve(a = a, b = b, c = c);
            const index = valArs.indexOf(null);
            valArs[index] = result;


            if (result >= lowLims[index] & result <= highLims[index]) {
                for (i = 0; i < 3; i++) {
                    output += names[i] + ": " + roundDP(valArs[i], 3) + " " + units[i] + "   ";
                }
                output += "\n\n";
                numRes++;
            }
        }
        $("#Output")[0].value = output;
    }



}
