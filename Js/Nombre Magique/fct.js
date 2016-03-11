

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
	if(NbSecret!=0)
	{
		if(compteur<10)
		{
			if(re.test(Nb.value)==true)
			{
				if(parseInt(Nb.value)>NbSecret)
				{
					resultat="Trop grand !";
					document.getElementById("label1").style.visibility="visible";
					document.getElementById("label1").className="alert alert-warning";
				}
				else if(parseInt(Nb.value)<NbSecret)
				{
					resultat="Trop petit !";
					document.getElementById("label1").style.visibility="visible";
					document.getElementById("label1").className="alert alert-warning";
				}
				else
				{
					resultat="Félicitation vous avez trouvez le nombre magique : "+NbSecret;
					document.getElementById("label1").style.visibility="visible";
					document.getElementById("label1").className="alert alert-success";
					formmask.style.visibility="hidden";
					stock = form.innerHTML='Voulez vous rejouez ?</br><button><clique</button>';
				}
			}
			else
			{
				resultat="Erreur de saisie.";
				document.getElementById("label1").style.visibility="visible";
				document.getElementById("label1").className="alert alert-danger";
			}
			compteur++;
		}
		else
		{
			formmask.style.visibility="hidden";
		}
		label1.innerHTML = resultat;
	}	
}

function clear()
{

	Nb.value="";
}

function retry()
{
	var ret = document.createElement("BUTTON"); 
	ret.className = "glyphicon glyphicon-ok";
	document.form.appendChild(ret); 
}

var stock;
var compteur=0;
var NbSecret;
var resultat;
var formmask = document.getElementById("formmask");
var form = document.getElementById("formulaire");
var btn = document.getElementById("ok");
var label1 = document.getElementById("label1");
var Nb = document.getElementById('Nb');
var re = /[0-9]{1,3}/;

window.addEventListener("load", nombremag);
btn.addEventListener("click", search);
Nb.addEventListener("click", clear);


