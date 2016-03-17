var tour = document.getElementById("tour");
var stock;
var compteur = 1;
var NbSecret;
var resultat;
var formmask = document.getElementById("formmask");
var form = document.getElementById("formulaire");
var btn = document.getElementById("ok");
var label1 = document.getElementById("label1");
var Nb = document.getElementById('Nb');
var re = /^[0-9]{1,3}$/;
var ReT = document.getElementById("ReT");
ReT.style.visibility= "hidden";
var form2 = document.getElementById("formulaire2");



window.addEventListener("load", nombremag);
btn.addEventListener("click", search);
Nb.addEventListener("click", clear);
ReT.addEventListener("click", FCretry);

function nombremag()
{
	NbSecret = Math.floor(Math.random() * 101);
	console.log(NbSecret);
}

function search()
{
	
	console.log("click");
	console.log(Nb.value);

	// while(NbSecret==0)
	// {
	// 	NbSecret=nombremag();
	// }
	if(NbSecret>-1)
	{
		if(compteur<10)
		{
			if(re.test(Nb.value)==true)
			{
				if(parseInt(Nb.value)>NbSecret)
				{
					resultat="Trop grand !";
					label1.style.visibility="visible";
					label1.className="alert alert-warning";
				}
				else if(parseInt(Nb.value)<NbSecret)
				{
					resultat="Trop petit !";
					label1.style.visibility="visible";
					label1.className="alert alert-warning";
				}
				else
				{
					resultat="Félicitation vous avez trouvez le nombre magique : "+NbSecret;
					label1.style.visibility="visible";
					label1.className="alert alert-success";
					formmask.style.visibility="hidden";
					ReT.style.visibility="visible";
					form2.style.position = "absolute";
					form2.style.margin = "-15% -65% 0px 26%";
				}
			}
			else
			{
				resultat="Erreur de saisie.";
				label1.style.visibility="visible";
				label1.className="alert alert-danger";
			}

		}
		else
		{
			formmask.style.visibility="hidden";
			resultat="Raté ! Le nombre magique était : "+NbSecret;
			label1.style.visibility="visible";
			label1.className="alert alert-danger";
			ReT.style.visibility = "visible";
			form2.style.position = "absolute";
			form2.style.top = "35%";
			form2.style.left = "30%";
		}
		label1.innerHTML = resultat;
		compteur++;
		tour.innerHTML = "Tour "+compteur+" : ";
	}	
}

function clear()
{
	Nb.value="";
}

function FCretry()
{
	location.reload();
}




