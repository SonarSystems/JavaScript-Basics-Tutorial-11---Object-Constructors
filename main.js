function superHero(name, location, awesomeness)
{
	this.name = name;
	this.location = location;
	this.awesomeness = awesomeness;
}

var x = new superHero("Batman", "Gotham City", 1000);

alert(x.location);