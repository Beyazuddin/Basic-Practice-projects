const inventors = [
    { first: "Raja", last: "khan", year: "1930", passed: "1992" },
    { first: "komal", last: "shreyas", year: "1860", passed: "1930" },
    { first: "Mohan", last: "kumar", year: "1940", passed: "2020" },
    { first: "Rakesh", last: "ranjan", year: "1960", passed: "2021" },
    { first: "Rohan", last: "raj", year: "1930", passed: "2022" },
    { first: "Kamal", last: "kumar", year: "1870", passed: "1990" },
    { first: "Rajesh", last: "jha", year: "1810", passed: "1952" },
    { first: "Muskan", last: "zabi", year: "1840", passed: "1972" },
    { first: "Kamlesh", last: "singh", year: "1810", passed: "1900" },
];

const people = [
    "Rohan, Raj",
    "Max, Well",
    "Rohit, raj",
    "sanjay, kumar",
    "Chetan, sharma",
    "Harry, potter",
    "Soniya, raj",
    "Mohan, kumar",
    "Ankita, Raj",
    "Joe, Well",
    "Sunil, sharma",
    "alpana, kumari",
    "Gourav, kumar",
    "lila, walker",
    "Chintu, raj",
    "sanjay, kumar",
    "Rohani, Rani",
    "juli, Wolf",
    "somya, pulkit",
    "sandhya, darshan",
    "Ronak, samrat",
    "Asfan, yar",
    "Zami, zubair",
    "Khalid, mirza",
    "Firoz, hashmi",
    "Tabish, masood",
    "Amir, jolha",
    "Chotu, suman",
    "Abdul, kalam",
];

// array.prototype.filter()
//1. filter the list of investors for those who born in the 1930's

// soln

const born = inventors.filter(function (investor) {
    if (investor.year >= 1930 && investor.year < 2000) {
        return true; //keep it
    }
});
console.table(born);
