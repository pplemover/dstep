const menuToggle = document.querySelector('.menu_toggle');
menuToggle.onclick = function() {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    // let video_lyrics = document.querySelector('.video_lyrics');
    // let tags = document.querySelector('.tags');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    // video_lyrics.classList.toggle('active');
    // tags.classList.toggle('active');
    if ($('.navigation.active')) {
        $('.statistics').slideToggle();
        $('.info').slideToggle(); 
    }
};
const video_title = document.querySelector('.video_title');
var isOne = false;
menuToggle.addEventListener('click', function() {
    isOne = !isOne;
    if(isOne) {
        video_title.classList.add('one_line');
    } else {
        video_title.classList.remove('one_line');
    }
});

/* 하나 클릭시 하나의 div만 작동되게 */
var arrowDirection = false;
var hideDiv = false;
function hideList(id) {
    var list = document.getElementById(id);
    hideDiv = !hideDiv;
    if(hideDiv) {
        list.classList.add('hide');
    } else {
        list.classList.remove('hide');
    }
}
function arrowChange(id) {
    var arrow = document.getElementById(id);
    arrowDirection = !arrowDirection;
    if(arrowDirection) {
        arrow.classList.add('arrow_change');
    } else {
        arrow.classList.remove('arrow_change');
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
document.getElementById("today").innerHTML = month + "월 " + day + "일";

// Swiper
new Swiper('.today_section .swiper', {
    direction: 'vertical',
    autoplay: { 
        delay: 5000 
    },
    loop: true
});

// change screen
const playlist_btn = document.querySelector('.playlist');
const fulltext_btn = document.querySelector('.fulltext');
const statistics_btn = document.querySelector('.stats');
const info_btn = document.querySelector('.playList_Menu .information');

const Playlist = document.querySelector('#Playlist');
const Fulltext = document.querySelector('#Fulltext');
const Statistics = document.querySelector('#Statistics');
const Info = document.querySelector('#Info');

function moveto_playlist() {
    Playlist.style.display = "flex";
    Fulltext.style.display = "none";
    Statistics.style.display = "none";
    Info.style.display = "none";
    document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "#9f2f34";
    $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'bold');
    document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "black";
    $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "black";
    $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "black";
    $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'normal');
}
function moveto_fulltext() {
    Playlist.style.display = "none";
    Fulltext.style.display = "flex";
    Statistics.style.display = "none";
    Info.style.display = "none";
    document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "black";
    $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "#9f2f34";
    $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'bold');
    document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "black";
    $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "black";
    $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'normal');
}
function moveto_statistics() {
    Playlist.style.display = "none";
    Fulltext.style.display = "none";
    Statistics.style.display = "flex";
    Info.style.display = "none";
    document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "black";
    $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "black";
    $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "#9f2f34";
    $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'bold');
    document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "black";
    $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'normal');
}
function moveto_info() {
    Playlist.style.display = "none";
    Fulltext.style.display = "none";
    Statistics.style.display = "none";
    Info.style.display = "flex";
    document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "black";
    $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "black";
    $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "black";
    $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'normal');
    document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "#9f2f34";
    $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'bold');
}

playlist_btn.onclick = function() {
    moveto_playlist();
}
fulltext_btn.onclick = function() {
    moveto_fulltext();
}
statistics_btn.onclick = function() {
    moveto_statistics();
}
info_btn.onclick = function() {
    moveto_info();
}

const home = document.querySelector('.home');
home.onclick = function() {
    moveto_playlist();
}
const look_lyrics = document.querySelector('.look_lyrics');
look_lyrics.onclick = function() {
    moveto_fulltext();
}
const statistics = document.querySelector('.statistics');
statistics.onclick = function() {
    moveto_statistics();
}
const info = document.querySelector('.info');
info.onclick = function() {
    moveto_info();
}