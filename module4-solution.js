var names = ["John","joule","Khaing","juliet","Chanyeol"];
for(var i = 0;i< names.length;i++)
{
	if(names[i][0] == "J" || names[i][0] == "j")
	{
		console.log("Goodbye "+names[i])
	}
	else
		console.log("Hello "+names[i]);
}