const url = require("url")

let parsedURL= url.parse("https://www.pluralsight.com/search?query=sanket")
console.log(parsedURL);

let resolvedURL= url.format(parsedURL)
console.log(resolvedURL);
