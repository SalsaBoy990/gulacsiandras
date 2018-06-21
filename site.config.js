const postData = require('./src/data/postdata.json')

let dateFormatted = []
let dateParts = []
let linkParts = []

let yearPosted
let posts2018 = []
let posts2017 = []

for (let i = 0; i < postData.length; i++) {
  // split date string by the '-' delimiter into an array
  dateParts = postData[i].date.split('-')
  linkParts = postData[i].filename.split('-')

  yearPosted = dateParts[0]
  switch (yearPosted) {
    case '2018':
      posts2018.push({
        title: postData[i].title,
        link: `/${linkParts[0]}/${linkParts[1]}/${linkParts[2]}/${linkParts[3]}.html`
      })
      break
    case '2017':
      posts2017.push({
        title: postData[i].title,
        link: `/${linkParts[0]}/${linkParts[1]}/${linkParts[2]}/${linkParts[3]}.html`
      })
      break
    default:
      break
  }

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

// I inserted some dummy text
module.exports = {
  site: {
    url: 'https://www.gulacsiandras.blog',
    title: `Gulácsi András blogja`,
    author: 'Gulácsi András',
    quote: 'Az ideológiai alapú, utópisztikus gondolkodás ellen veszem fel a küzdelmet a tények, a tapasztalatok és a józan ész segítségével, hogy ne váljon pusztító ideológiák martalékává a társadalom.',
    description: 'Webdesigner, UI/UX designer, Frontend Developer, JavaScript, Node.js, SQL, Jekyll, Bootstrap 3, Angular 2+',
    bookTitle: 'Rendezett emberi környezetet a világon!',
    email: 'guland@protonmail.com',
    github: 'SalsaBoy990',
    linkedin: 'andrasgulacsi',
    cv: 'http://docdro.id/GBVHms8',
    mailchimp: 'http://eepurl.com/dneX1D',
    year: new Date().getFullYear(),
    postData,
    dateFormatted: dateFormatted,
    posts2018: posts2018,
    posts2017: posts2017
  }
}
