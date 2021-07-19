var T_F = null;
//messageeBox
function messageeBox(text,type){
	const MBbox = document.querySelector('#messageBox') 
	const MBtext = document.querySelector('#MBtext');
	const MBtrue = document.querySelector('#MBtrue');
	const MBfalse = document.querySelector('#MBfalse');
	MBtext.innerHTML = text;
	if(type == 1){
		MBfalse.style.display = 'none';
	}else if(type == 0){
		MBfalse.style.display = 'inline';
	}
	MBbox.style.display = 'flex';
	MBtrue.addEventListener('click',() => {
		MBbox.style.display = 'none';
		T_F = true;
		return true;
	});
	MBfalse.addEventListener('click', () => {
		MBbox.style.display = 'none';
		T_F = false;
		return false;
	});
}
function closeJianYa(){
	if(confirm("真的离开我吗？TxT")){
		var browserName=navigator.appName;
		if (browserName=="Netscape"){
			window.open('', '_self', '');
			window.close();
		}
		if (browserName=="Microsoft Internet Explorer") { 
			window.parent.opener = "whocares"; 
			window.parent.close(); 
		}
	}
}


//main
window.addEventListener('load', () => {
	//init
	const header = document.querySelector('#head');
	const headerer = document.querySelector('#header');
	const searchBox = document.querySelector('#searchBox');
	const searchInput = document.querySelector('#searchInput');
	const search = document.querySelector('#search');
	const Swindow = document.querySelector('#Swindow');
	const shoutcuts = document.querySelector('#shoutcuts');
	const leave = document.querySelector('#leave');
	let SE = 'BD';

	//search
	function runSearch(value){
		if(SE == 'BD'){
			Swindow.width = window.outerWidth + 'px';
			Swindow.height = window.outerHeight + 'px';
			Swindow.src = 'http://www.baidu.com/from=844b/s?ms=1&word=' + value;
			/* Swindow.addEventListener('load', () => {
				Swindow.contentWindow.document.getElementsByClassName('searchboxtop').style.display = 'none';
			}); */
		}	
	}
	searchInput.addEventListener('focus', () => {
		if (header.style.height != '0px') {
			header.style.height = '0px';
			searchBox.style.margin = '.25rem auto';
			shoutcuts.style.display = 'none';
		}
	});
	search.addEventListener('click', () => {
		if(searchInput.value != ''){
			runSearch(searchInput.value);
		}
	});
	
	//leave
	leave.addEventListener('click', () => {
		closeJianYa();
	});
});


//clock/data
function startClock() {
	var today = new Date();
	//time
	function checkTime(nuber) {
		if (nuber < 10) {
			nuber = '0' + nuber;
		}
		return nuber;
	}
	var tH = today.getHours();
	var tMin = today.getMinutes();
	hMin = checkTime(tMin);
	const clock = document.querySelector('#time');
	clock.innerHTML = tH + ':' + tMin;

	//data
	var year = today.getYear();
	var mouth = today.getMonth();
	var day = today.getDay();
	const data = document.querySelector('#data');
	data.innerHTML = year + '年' + mouth + '月' + day + '日';
	var t = setTimeout(function() {startClock()}, 1000)
}

window.addEventListener('load', () => {
	startClock();
});
