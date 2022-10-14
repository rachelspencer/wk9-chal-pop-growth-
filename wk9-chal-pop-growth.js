// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be: 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nbYear should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nbYear(1500, 5, 100, 5000) --> 15

// nbYear(1500000, 2.5, 10000, 2000000) --> 10

const p0Example1 = 1500
const percentageExample1 = 5
const augExample1 = 100
const pExample1 = 5000

const p0Example2 = 1500000
const percentageExample2 = 2.5
const augExample2 = 10000
const pExample2 = 2000000


function nbYear (p0, percentage, aug, p) {
    let y = 0;
    for (y; p0 < p; y++) {
        p0 += p0 * (percentage / 100) + aug;
    }
    return y;    
}

const example1 = nbYear(p0Example1, percentageExample1, augExample1, pExample1)
const example2 = nbYear(p0Example2, percentageExample2, augExample2, pExample2)
console.log(example1)
console.log(example2)