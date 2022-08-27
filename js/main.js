const menuToggle = document.querySelector('.menu_toggle');
    menuToggle.onclick = function() {
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        let video_lyrics = document.querySelector('.video_lyrics');
        let tags = document.querySelector('.tags');
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
        main.classList.toggle('active');
        video_lyrics.classList.toggle('active');
        tags.classList.toggle('active');
        if ($('.navigation.active')) {
            $('.dashboard').slideToggle();
            $('.info').slideToggle();
        }
}

var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var todayFormat = year + '-' + month + '-' + day;
const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
}
// const fromDoorStepping = getDateDiff(todayFormat, "2022-07-25");
const inauguration = getDateDiff(todayFormat, "2022-05-10") + 1;
const resignation = getDateDiff(todayFormat, "2027-05-09") - 1;
// document.getElementById("date").innerHTML = "7월 25일, " + fromDoorStepping + "일 전";
document.getElementById("inauguration").innerHTML = "취임 D+" + inauguration;
document.getElementById("resignation").innerHTML = "퇴임까지 D-" + resignation;