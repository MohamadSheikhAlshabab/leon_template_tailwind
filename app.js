let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}
let themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function() {
    // toggle icons inside buttond
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});
$(document).ready(() => {
  let $nav = $(".change");
  let $nav1 = $(".change1");
  let $nav2 = $(".change2");
  let $nav3 = $(".change3");
  let $nav4 = $("#theme-toggle");
  let $nav5 = $(".change5");
  let $nav6 = $(".menu__box");
  let $logo = $("#my-logo");
  let $dark = $("#theme-toggle-dark-icon");
  let $light = $("#theme-toggle-light-icon");
  let $menu =$("#menu_flex")

  
  $dark.click(() => {
    $nav.css("background-color","rgb(30,41,59)");
    $nav.css("color","rgb(255,255,255)");
    $logo.attr("src","./images/image.png");
    $nav1.css("background-color","rgb(44,71,90)");
    $nav1.css("color","rgb(255,255,255)");
    $nav2.css("color","rgb(195,195,195)");
    $nav3.css("background-color","rgb(225,225,225)");
    $nav3.css("color","rgb(40,50,85)");
    $nav3.css("z-index","0");
    $nav5.css("z-index","1");
    $nav4.css("background-color","rgb(225,225,225)");
    $dark.css("fill","rgb(225,225,225)");
    $nav6.css("background-color","rgb(199,202,225)");
    $nav6.css("color","rgb(30,41,85)");
    $menu.hover(()=>{ $(this).css("color","rgb(225,225,225)")})
  });

  $light.click(() => {
    $nav.css("background-color","rgb(255,255,255)");
    $nav.css("color","rgb(30,41,59)");
    $logo.attr("src","./images/mylogo.png");
    $nav1.css("background-color","rgb(243,244,246)");
    $nav1.css("color","rgb(30,41,59)");
    $nav2.css("color","rgb(130,141,159)");
    $nav3.css("background-color","rgb(44,71,85)");
    $nav3.css("color","rgb(240,250,225)");
    $nav4.css("background-color","rgb(30,41,85)")
    $light.css("fill","rgb(30,41,85)");
    $nav6.css("background-color","rgb(30,41,85)");
    $nav6.css("color","rgb(99,102,255)");
  });

});
let mybutton = document.getElementById("myBtn");
window.onscroll = ()=> {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function toTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
$(document).ready(function(){
  let counter = 0
  $('#menu__toggle').click(
    function(){
    $('.menu__box').toggleClass('show');
    $('.menu__span').css('transform', 'rotate(45deg)')  
    document.styleSheets[0].cssRules[5].style.transform = 'rotate(45deg)'
    document.styleSheets[0].cssRules[6].style.top = '0px'    
    document.styleSheets[0].cssRules[6].style.transform = 'rotate(0deg)'
    document.styleSheets[0].cssRules[7].style.top = '0px'    
    document.styleSheets[0].cssRules[7].style.transform = 'rotate(90deg)'
    counter++;
    if(counter % 2 == 0 ){
      $('.menu__span').css('transform', 'rotate(0deg)')
      document.styleSheets[0].cssRules[6].style.top = '-8px'    
      document.styleSheets[0].cssRules[6].style.transform = 'rotate(0deg)'
      document.styleSheets[0].cssRules[7].style.top = '8px'    
      document.styleSheets[0].cssRules[7].style.transform = 'rotate(0deg)'
    }
  });
  $('.menu__box').click(function(){
    $('.menu__box').removeClass('show');
    counter++;
    $('.menu__span').css('transform', 'rotate(0deg)')
    document.styleSheets[0].cssRules[6].style.top = '-8px'    
    document.styleSheets[0].cssRules[6].style.transform = 'rotate(0deg)'
    document.styleSheets[0].cssRules[7].style.top = '8px'    
    document.styleSheets[0].cssRules[7].style.transform = 'rotate(0deg)'
  });
});