//Блок погода
var modal = document.getElementById('myModal');
var btn = document.getElementById('btn1');
var close = document.getElementById('close1');
btn.onclick = function () {
	modal.style.opacity = "1"; 
};
close.onclick = function () {
	modal.style.opacity = "0";
};
//Выбор города 
var inputl = document.getElementById('input');
var select1 = document.getElementById('select');
select1.onclick = function () {
	inputl.style.display = "block"; 
	select1.style.display = "none";
};
//Событие на Enter
(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
     	inputl.style.display = "none"; 
		select1.style.display = "block";
    }
  });
})();
//Предожить новость
var news1 = document.getElementById('news');
var button = document.getElementById('btn5');
var close3 = document.getElementById('close2');
var button2 = document.getElementById('btn3');
button.onclick = function () {
	news1.style.opacity = "1";
	news1.style.zIndex = "2";
};
close3.onclick = function () {
	news1.style.opacity = "0";
	news1.style.zIndex = "-1";
};
button2.onclick = function () {
	news1.style.opacity = "0";
	news1.style.zIndex = "-1";
};	
