var chkbox, checkBoxChecked;
chkbox=document.getElementById('checkbox');
checkboxchecked=document.getElementById('checkBoxChecked');
chkbox.addEventListener('click', checkbox);
function checkbox(){
	if(chkbox.checked){
		checkboxchecked.innerHTML="Checkbox - checked";
	} else {
		checkboxchecked.innerHTML="Checkbox";
	};
};


var radio, radiodiv, radioresult;
radio=document.getElementsByName('radio');
radiodiv=document.getElementById('radiodiv');
radioresult=document.getElementById('radioresult');
radiodiv.addEventListener('click', radiocheck);
function radiocheck() {
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			radioresult.innerHTML=radio[i].value;
		};
	};
};


var selector, selectResult;
selector=document.getElementById('selector');
selectResult=document.getElementById('selectResult');
selector.addEventListener('change', select);
function select() {
	selectResult.innerHTML=selector[selector.selectedIndex].value;
};


var range, rangetext, rangeblock;
range=document.getElementById("range");
range.addEventListener('input', rangeget);
rangetext=document.getElementById("rangetext");
rangeblock=document.getElementById("rangeblock");
rangetext.addEventListener('input', rangeset);
function rangeget() {
	rangetext.value=range.value;
	rangetext.size=range.value*0.6+1;
	rangeblock.style.borderRadius=range.value/2+'px';
}
function rangeset() {
	range.value=rangetext.value;
}

var t1, t2, t3, tc1, tc2, tc3;
t1=document.getElementById("t1");
t2=document.getElementById("t2");
t3=document.getElementById("t3");
tc1=document.getElementById("tc1");
tc2=document.getElementById("tc2");
tc3=document.getElementById("tc3");
t1.addEventListener('click', tc1show);
t2.addEventListener('click', tc2show);
t3.addEventListener('click', tc3show);
function tc1show() {
	tc1.style.display="block";
	tc2.style.display="none";
	tc3.style.display="none";
}
function tc2show() {
	tc1.style.display="none";
	tc2.style.display="block";
	tc3.style.display="none";
}
function tc3show() {
	tc1.style.display="none";
	tc2.style.display="none";
	tc3.style.display="block";
}