const postdata = require('./src/data/postdata.json')

let dateFormatted = []
let dateParts = []

for (let i = 0; i < postdata.length; i++) {
  // split date string by the '-' delimiter into an array
  dateParts = postdata[i].date.split('-')
  // console.log(dateParts)

  // replace month number with month name
  let month = dateParts[1]
  switch (month) {
    case '01':
      dateFormatted.push(dateParts[0] + '. január ' + dateParts[2] + '.')
      break

    case '02':
      dateFormatted.push(dateParts[0] + '. február ' + dateParts[2] + '.')
      break

    case '03':
      dateFormatted.push(dateParts[0] + '. március ' + dateParts[2] + '.')
      break

    case '04':
      dateFormatted.push(dateParts[0] + '. április ' + dateParts[2] + '.')
      break

    case '05':
      dateFormatted.push(dateParts[0] + '. május ' + dateParts[2] + '.')
      break

    case '06':
      dateFormatted.push(dateParts[0] + '. június ' + dateParts[2] + '.')
      break

    case '07':
      dateFormatted.push(dateParts[0] + '. július ' + dateParts[2] + '.')
      break

    case '08':
      dateFormatted.push(dateParts[0] + '. augusztus ' + dateParts[2] + '.')
      break

    case '09':
      dateFormatted.push(dateParts[0] + '. szeptember ' + dateParts[2] + '.')
      break

    case '10':
      dateFormatted.push(dateParts[0] + '. október ' + dateParts[2] + '.')
      break

    case '11':
      dateFormatted.push(dateParts[0] + '. november ' + dateParts[2] + '.')
      break

    case '12':
      dateFormatted.push(dateParts[0] + '. december ' + dateParts[2] + '.')
      break

    default: break
  }
}

// console.log(dateFormatted)

module.exports = {
  site: {
    url: 'https://www.gulacsiandras.blog',
    title: 'Gulácsi András Blogja',
    author: 'Gulácsi András',
    quote: '„Az ideológiai alapú, utópisztikus gondolkodás ellen veszem fel a küzdelmet a tények, a tapasztalatok és a józan ész segítségével, hogy ne váljon pusztító ideológiák martalékává a társadalom.”',
    description: 'Egy full stack webfejlesztőnek készülő természettudós és amatőr táncos.',
    bookTitle: 'A készülő könyvem: Rendezett emberi környezetet a világon!',
    email: 'guland@protonmail.com',
    github: 'SalsaBoy990',
    twitter: 'andrasgulacsi',
    linkedin: 'andrasgulacsi',
    minds: 'GulacsiAndras',
    facebook: 'andras.gulacsi.3',
    mailchimp: 'http://eepurl.com/dneX1D',
    year: new Date().getFullYear(),
    postdata,
    dateFormatted: dateFormatted
  }
}
