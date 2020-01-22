$( document ).ready(function() {

    var currentDate = moment().format('dddd' + ',' + ' MMMM DD');
    var currentTime = moment().format('HH');

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

    $("#currentDate").text(currentDate);

    var planner = function () {

       

    };

$(".9amSave").on('click', function(){
    var amText = $(".9am").val();
    localStorage.setItem("9amSlot", amText);
});



$(textarea).foreach(function(){
    var time = $(textarea).attr("data-time").val();
    if(time === currentTime) {
        $(textarea).attr("class", "present");
        
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
