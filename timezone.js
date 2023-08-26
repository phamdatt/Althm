const moment = require('moment')

function utcToTz(date){
    let mm = moment.utc(date).utcOffset(9)
    console.log(mm)
}

utcToTz('2023-08-26T13:22:53.248Z')
