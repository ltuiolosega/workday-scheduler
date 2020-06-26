let d = new Date()

let year = d.getFullYear ()
let month = d.getMonth () +1;
let day = d.getDate ()

let totalDays = new Date(year, month, 0).getDate ()

let output =
(month<10 ? '0' : ' ') + month + '/' +
(day<10 ? '0' : ' ') + day + '/' + year

$(".modal-container").toggle()
$(".modal-container--close").click(function(){
    $(".modal-container").css('display', 'none')
    $(".days" ).click(function(e) {})

    moment().subtract(10, 'days').calendar(); // 06/15/2020
    moment().subtract(6, 'days').calendar();  // Last Friday at 11:37 PM
    moment().subtract(3, 'days').calendar();  // Last Monday at 11:37 PM
    moment().subtract(1, 'days').calendar();  // Yesterday at 11:37 PM
    moment().calendar();                      // Today at 11:37 PM
    moment().add(1, 'days').calendar();       // Tomorrow at 11:37 PM
    moment().add(3, 'days').calendar();       // Sunday at 11:37 PM
    moment().add(10, 'days').calendar();      // 07/05/2020
})

