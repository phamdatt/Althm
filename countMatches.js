/**
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

    The ith item is said to match the rule if one of the following is true:

    ruleKey == "type" and ruleValue == typei.
    ruleKey == "color" and ruleValue == colori.
    ruleKey == "name" and ruleValue == namei.
    Return the number of items that match the given rule.
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    // approach one
    // let count = 0
    // let obj = {
    //     type: 0,
    //     color: 1,
    //     name: 2
    // }
    // for (item of items) {
    //     if (item[obj[ruleKey]] == ruleValue) {
    //         count++
    //     }
    // }
    // return count

    // approach two
    let ruleKeys = ["type", "color", "name"];

    return items.filter(e => {
        e[ruleKeys.indexOf(ruleKey)] === ruleValue
    }).length;
};

countMatches([["ii", "iiiiiii", "ii"], ["iiiiiii", "iiiiiii", "ii"], ["ii", "iiiiiii", "iiiiiii"]], "color", "ii")