var movies = [1,2,3,4,5];
var crime = 1;
var crimeMovies = [3,4,5];

function findImage(){

var randomNumber = Math.floor(Math.random()*movies.length) ;
selected = movies[randomNumber];

if(selected == 2){ //alien
document.getElementById('movie').src='movies/11alien.png';
document.getElementById('titletext').innerHTML="Alien (1979)";
document.getElementById('genre').innerHTML="<b> Horror | Sci-fi </b>";
document.getElementById('plot').innerHTML="After a space merchant vessel perceives an unknown transmission as distress call, their landing on the source moon finds one of the crew attacked by a mysterious life-form, and soon realize that its life cycle has merely begun.";
} 

if(selected == 1){
document.getElementById('movie').src='movies/02cabin.png';
document.getElementById('titletext').innerHTML="The Cabin in the Woods (2012)";
document.getElementById('genre').innerHTML="<b> Horror </b>";
document.getElementById('plot').innerHTML="Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.";
} 

if(selected == 3){ //filth
document.getElementById('movie').src='movies/04filth2.png';
document.getElementById('titletext').innerHTML="Filth (2013)";
document.getElementById('genre').innerHTML="<b> Comedy | Crime | Drama </b>";
document.getElementById('plot').innerHTML="A corrupt, junkie cop with Borderline Personality Disorder attempts to manipulate his way through a promotion in order to win back his wife and daughter while also fighting his own borderline-fueled inner demons.";
} 

if(selected == 4){ //fargo
document.getElementById('movie').src='movies/07fargo.png';
document.getElementById('titletext').innerHTML="Fargo (1996)";
document.getElementById('genre').innerHTML="<b> Thriller | Drama | Crime </b>";
document.getElementById('plot').innerHTML="Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.";
} 

if(selected == 5){ //capote
document.getElementById('movie').src='movies/06capote.png';
document.getElementById('titletext').innerHTML="Capote (2005)";
document.getElementById('genre').innerHTML="<b> Biography | Drama | Crime </b>";
document.getElementById('plot').innerHTML="In 1959, Truman Capote learns of the murder of a Kansas family and decides to write a book about the case. While researching for his novel In Cold Blood, Capote forms a relationship with one of the killers, Perry Smith, who is on death row.";
} 


}


function crimeMovie(){
if(crime == 0){
crime = 1;
for(i = 0; i < movies.length; i++){
	if(movies.indexOf(crimeMovies[i]) == -1){	
		movies.push(crimeMovies[i]);
	}
}
}
else{
	crime=0;
	for(i = 0; i < movies.length; i++){
	if(movies.indexOf(crimeMovies[i]) != -1){	
		movies.slice(indexOf(crimeMovies[i]));
	}
}
}

}





