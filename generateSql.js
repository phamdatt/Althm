function generateSql() {
    let arr = [];
    let columnNames = ['name', 'age', 'address', 'gender']
    for (let i = 0; i < 1000; i++) {
        let columnNameValue = String(i + 1).padStart(6, 0) + ', '
        let prefix = 1234567890 + i;
        let columnAgeValue = prefix.toString() + ', '
        let columnValue = columnNameValue + columnAgeValue;
        for (let j = 2; j < columnNames.length; j++) {
            columnValue += `'${columnNames[j]}'`
            if (j < columnNames.length - 1) {
                columnValue += ', ';
            }
        }
        let sql = `Insert into user(${columnNames.join(', ')}) values (${columnValue})`
        console.log(sql)
        arr.push(sql);
    }
    return arr.length;
}

console.log(generateSql())
