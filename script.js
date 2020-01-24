$( document ).ready(function() {
    var currentDate = moment().format('dddd' + ',' + ' MMMM DD');
    var currentTime = moment().format('HH');

    // var textarea = $("<textarea>");

    // const time = $(textarea).attr("data-time").val();

    $("#currentDate").text(currentDate);

    var planner = function () {

       

    };

$(".9amsave").on('click', function(){
    var amText = $(".9am").val();
    localStorage.setItem("9amSlot", amText);
});
$(".10amsave").on('click', function(){
    var amText = $(".10am").val();
    localStorage.setItem("10amSlot", amText);
});
$(".11amsave").on('click', function(){
    var amText = $(".11am").val();
    localStorage.setItem("11amSlot", amText);
});
$(".12pmsave").on('click', function(){
    var pmText = $(".12pm").val();
    localStorage.setItem("12pmSlot", pmText);
});
$(".1pmsave").on('click', function(){
    var pmText = $(".1pm").val();
    localStorage.setItem("1pmSlot", pmText);
});
$(".2pmsave").on('click', function(){
    var pmText = $(".2pm").val();
    localStorage.setItem("2pmSlot", pmText);
});
$(".3pmsave").on('click', function(){
    var pmText = $(".3pm").val();
    localStorage.setItem("3pmSlot", pmText);
});
$(".4pmsave").on('click', function(){
    var pmText = $(".4pm").val();
    localStorage.setItem("4pmSlot", pmText);
});
$(".5pmsave").on('click', function(){
    var pmText = $(".5pm").val();
    localStorage.setItem("5pmSlot", pmText);
});



$('textarea').each(function(){
    const time = $(this).attr("data-time");
    console.log($(this).removeClass("present"));
    console.log($(this).addClass("future"));
    if(time > currentTime) {
         $(this).removeClass("present");
         $(this).addClass("future");
    } else if(time < currentTime) {
        $(this).removeClass("present");
        $(this).addClass("past");
    }
});

});

// var firstParagraph = document.querySelector("#displayMoment");
// var dateSection = document.querySelector("#displayJsDate");



// var renderDate = function () {
//     var NowMoment = moment().format('dddd MMMM DD');
//     var NowDate = newDate();
//     var eDisplayMoment = document.getElementById('displayMoment');
//     eDisplayMoment.innerHTML = NowMoment;

//     var eDisplayDate = document.getElementById('displayJsDate');
//     eDisplayDate.innerHTML = NowDate;
// };

// renderDate();

// var renderDate = function () {

//     // var p = document.createElement("p");
//     // p.setAttribute("id", "#sentence");

//     // var dateParagraph = document.createElement("p");
//     // dateParagraph.setAttribute("id", "currentDay");
//     // dateParagraph = moment().format('dddd, MMMM DD')
//     // dateParagraph.append(p);
//     moment().format('dddd MMMM DD');

// }
// renderDate();

    // var arrTime = [
    //     {
    //         hour: 9,
    //         notes: " "
    //     },
    //     {
    //         hour: 10,
    //         notes: " "
    //     },
    //     {
    //         hour: 11,
    //         notes: " "
    //     },
    //     {
    //         hour: 12,
    //         notes: " "
    //     },
    //     {
    //         hour: 13,
    //         notes: " "
    //     },
    //     {
    //         hour: 14,
    //         notes: " "
    //     },
    //     {
    //         hour: 15,
    //         notes: " "
    //     },
    //     {
    //         hour: 16,
    //         notes: " "
    //     },
    //     {
    //         hour: 17,
    //         notes: " "
    //     },
    // ];
