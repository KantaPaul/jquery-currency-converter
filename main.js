// function convertCurrency() {
//     var myamount = $(".amount").val(),
//         select = $(".currency-lists"),
//         rFrom = $(".currency-lists")[0].value,
//         rTo = $(".currency-lists")[1].value,
//         resultOne = ((myamount * rFrom).toFixed(2)),
//         output = $('.output'),
//         firstValue = ((select[0][0].value)),
//         secondValue = ((select[1][0].value));

//         console.log(select[0].value)
    
//     if (myamount == undefined || rFrom == firstValue || myamount === 0) {
//         output.html("0");
//     } else {
//         output.html(resultOne);
//     }
//     if (myamount == undefined || rTo == secondValue  || myamount === 0) {
//         output.html(resultOne);
//     } else {
//         output.html((resultOne * rTo).toFixed(2));
//     }
// }

function convertCurrency() {
    var myamount = $(".amount").val(),
        select = $(".currency-lists"),
        rFrom = $(".currency-lists")[0].value,
        rTo = $(".currency-lists")[1].value,
        resultOne = ((myamount * rFrom).toFixed(2)),
        output = $('.output');
    
    if (myamount == undefined || myamount === 0) {
        output.html("0");
    } else {
        output.html(resultOne);
    }
    if (myamount == undefined || myamount === 0) {
        output.html(resultOne);
    } else {
        output.html((resultOne * rTo).toFixed(2));
    }
}

$(document).ready(function () {
    var myamount = $(".amount").val(),
        select = $(".currency-lists"),
        output = $('.output');
    $(".amount").on('keyup', function () {
        output.html(($(this).val() * select[0].value).toFixed(2));
    });
})