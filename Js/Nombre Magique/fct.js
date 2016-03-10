

function nombremag()
{
	NbSecret = Math.floor(Math.random() * 101);
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
		if(re==true)
		{
			if(Nb.value>NbSecret)
			{
				resultat="Trop grand !";
				document.getElementById("label1").style.visibility="visible";
				document.getElementById("label1").style.backgroundColor="#d9edf7";
			}
			else if(Nb.value<NbSecret)
			{
				resultat="Trop petit !";
				document.getElementById("label1").style.visibility="visible";
				document.getElementById("label1").style.backgroundColor="#d9edf7";
			}
			else
			{
				resultat="Félicitation vous avez trouvez le nombre magique : "+NbSecret;
			}
		}
		else
		{
			resultat="Erreur de saisie."
			document.getElementById("label1").style..visibility="visible";
			document.getElementById("label1").style.backgroundColor="#f2dede";
		}
	}
	label1.innerHTML = resultat;
		
}

var NbSecret;
var resultat;
var btn = document.getElementById("ok");
var label1 = document.getElementById("label1");
var Nb = document.getElementById('Nb');
var re = /[0-9]{1,3}/

window.addEventListener("load", nombremag);
btn.addEventListener("click", search);


