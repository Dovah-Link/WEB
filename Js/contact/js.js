/*------------------------------------------------------------- Variables HTML ------------------------------------------------------------*/

var contenu = document.getElementById("contenu");
var go = document.getElementById("go");
var label1 = document.getElementById("label1");
var soci = document.getElementById("soci");
var cont = document.getElementById("cont");
var adrs = document.getElementById("adrs");
var dd = document.querySelectorAll(".dropdown-menu  a");
var riri = document.getElementById("riri");
var cp = document.getElementById("cp");
var ville = document.getElementById("ville");
var mail = document.getElementById("mail")

/*------------------------------------------------------------- Variables RegEx ------------------------------------------------------------*/

var RepSoci = /^[A-Za-z0-9 ']{2,}$/;
var RepCont = /^[A-Za-z '-]{2,}$/;
var RepAdrs = /^([0-9]{1,4}){1}([ ]{1}[A-Za-z0-9]+){1,}/;
var RepCp = /^[0-9]{5}$/;
var RepVille = /^[A-Za-z0-9\ éèàçâêûîôäëüïö-]{2,}$/;
var RepMail = /^([A-Za-z0-9 -_]+(.))$/;

/*------------------------------------------------------------- Affichage dans dropdown ------------------------------------------------------------*/

for(var x=0; x<dd.length; x++)
{
	dd[x].addEventListener("click", dropdown);
}

/*------------------------------------------------------------- Fonctions  ------------------------------------------------------------------------*/

function display()
{
	contenu.style.visibility="visible";
}

function dropdown()
{
	riri.innerHTML = this.innerHTML;
	riri.style.color = "green";
}

function verifSoci()
{
	console.log(soci);
	if(RepSoci.test(soci.value)==true )
	{
		console.log("ok");
		soci.style.borderColor="green";

	}
	else
	{
		soci.style.borderColor="red";
		console.log("nop");
	}
}

function verifCont()
{
	if(RepCont.test(cont.value)==true)
	{
		console.log("ok");
		cont.style.borderColor="green";
	}
	else
	{
		cont.style.borderColor="red";
		console.log("nop");
	}
}

function verifAdrs()
{
	if(RepAdrs.test(adrs.value)==true)
	{
		console.log("ok");
		adrs.style.borderColor="green";
	}
	else
	{
		adrs.style.borderColor="red";
		console.log("nop");
	}
}

function verifCP()
{
	if(RepCp.test(cp.value)==true)
	{
		console.log("ok");
		cp.style.borderColor="green";
	}
	else
	{
		cp.style.borderColor="red";
		console.log("nop");
	}
}

function verifVille()
{
	if(RepVille.test(ville.value)==true)
	{
		console.log("ok");
		ville.style.borderColor="green";
	}
	else
	{
		ville.style.borderColor="red";
		console.log("nop");
	}
}
function verifMail()
{
	if(RepMail.test(mail.value)==true)
	{
		console.log("ok");
		mail.style.borderColor="green";
	}
	else
	{
		mail.style.borderColor="red";
		console.log("nop");
	}
}

/*------------------------------------------------------------- Evenements  ------------------------------------------------------------------------*/

soci.addEventListener("input",verifSoci);
cont.addEventListener("input",verifCont);
adrs.addEventListener("input",verifAdrs);
cp.addEventListener("input", verifCP);
ville.addEventListener("input", verifVille);
mail.addEventListener("input", verifMail);


go.addEventListener("click", display);

