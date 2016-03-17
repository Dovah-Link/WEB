var go = document.getElementById("go");
var i = 0;

document.cookie = "riri=1";
var listeCookies = document.cookie;

function reload()
{
	location.reload();

}
function HowMany()
{
	console.log(document.cookie)
}

go.addEventListener("click", reload);
window.addEventListener("load", HowMany);