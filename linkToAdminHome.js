// ==UserScript==
// @name         Name Link to Admin Home
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds link to Admin Home sitewide
// @author       You
// @match        https://studyaway.uga.edu/*
// @grant        none
// ==/UserScript==

var x = document.getElementsByClassName("navbar-text hidden-xs");
var i = 0;
var bFound = 0;
var sUsrName = '';

while (i<x.length && bFound ===0){
    if (x[i].tagName == 'P'){
        bFound = 1;
        sUsrName = x[i].innerText;
        x[i].innerHTML = "<A class='navbar-text hidden-xs' HREF='https://studyaway.uga.edu/index.cfm?FuseAction=Administration.Home&RequiredProfile=1'>" + sUsrName + "</A>";
    }
    i++;
}
