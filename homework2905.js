var film = {
name: "Batman", 
place: "Apollo",
other: {
    year: "2022" ,
    imdb:"7.9" }
};

languages = [
    {name: "English"},
    {name: "German"},
    {name: "Georgian"}
]

console.log("cinema" + "  " + film.place);
console.log("IMDb" + film.other.imdb);
console.log("Name" + "  " + film.name)





var film = {
    name: "<Moonfall>", 
    place: "Paris cinema",
    other: {
        year: "2022" ,
        imdb:"8.2" }
    },
    languages = [
        {name: "English"},
        {name: "French"},
        {name: "Georgian"}
    ]
    
    console.log("cinema" + "  " + film.place);
    console.log("IMDb" + film.other.imdb);
    console.log("Name" + "  " + film.name)
    
    document.getElementById("demo")