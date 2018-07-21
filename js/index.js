/*
* @Author: stephen-zm
* @Date:   2018-07-21 21:13:45
* @Last Modified by:   stephen-zm
* @Last Modified time: 2018-07-21 22:09:58
*/

'use strict';
window.onload=function(){
	// zhuti
	let tgp=document.getElementsByClassName("tgp")[0];
	let lis=tgp.getElementsByTagName("li");
	let webox=document.getElementsByClassName("webox");
	console.log(tgp,lis,webox);
	for(let i=0;i<lis.length;i++){
    	lis[i].onmouseenter=function(){
    		for(let j=0;j<lis.length;j++){
    			webox[j].style.display="none";
    		}
    		webox[i].style.display="block";
    	}
    	lis[i].onmouseleave=function(){
    		webox[i].style.display="none";
    	}
    }










}