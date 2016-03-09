function exo1( texte)
{
	document.write(texte);
}
function bjr()
{
	var start = 'Bonjour ', name, end = ' !', result;
	name   = prompt('Quel est votre prénom ?');
	result = start + name + end;
	alert(result);
}
function fctAge()
{
	var res = document.getElementById('age');
	console.log(res);
	if(res.value>=18)
	{
		document.write("Vous êtes majeur !");
	}
	else
	{
		document.write("Vous êtes mineur !");
	}
}