// 40. Album: 
// Write a function called make_album() that builds an Object describing a music album. The 
// function should take in an artist name and an album title, and it should return a Object containing 
// these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
// at least one new function call that includes the number of tracks on an album.

function make_album(artist:string, albumtitle : string,numberoftracks? :number ) {    //optional
    return {artist,albumtitle,numberoftracks}
}
let album = make_album("Ali","Rang e muhabbat")
let album2 = make_album ("Atif","Roshni muhbat")
let album3 = make_album ("Sallar","Dewangi")
console.log(album);
console.log(album2);
console.log(album3);

let album4 = make_album("Ali","Range muhbat",55)
let album5 = make_album("Atif","Roshni muhbat",60)
let album6 = make_album("Sallar","Deewangi")
console.log(album4);
console.log(album5);
console.log(album6);