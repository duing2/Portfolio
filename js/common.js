var nav_menu = document.getElementsByClassName("nav_menu");
var menu = document.getElementsByClassName("menu");
var menu_wrap = document.getElementsByClassName("menu_wrap");
var menu2 = document.getElementsByClassName("menu2");
var menu_wrap2 = document.getElementsByClassName("menu_wrap2");


function menu_scroll(e) {
  var scroll_target = document.getElementsByClassName(e);
  var scroll_target_offset = scroll_target[0].offsetTop;
  window.scroll({ top: scroll_target_offset, left:0, behavior: "smooth"});
}
