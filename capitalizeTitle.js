/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let titleSplit = title.split(" ")
    for (let i = 0; i < titleSplit.length; i++) {
        if (titleSplit[i].length <= 2) {
            titleSplit[i] = titleSplit[i].toLowerCase()
        } else {
            titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].substring(1).toLowerCase()
        }
    }
    return titleSplit.join(" ")
};

console.log(capitalizeTitle("capiTalIze tHe titLe"))