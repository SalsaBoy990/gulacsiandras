;(function () {
  'use strict'
  // file system module with extended functionality
  const fse = require('fs-extra')
  const path = require('path')
  // use promises to avoid callback hell and simplify code
  const { promisify } = require('util')
  // renders ejs layouts to html
  const ejsRenderFile = promisify(require('ejs').renderFile)

  // search for matching files, returns array of filenames
  const globP = promisify(require('glob'))

  // site configuration properties and blogpost metadata imported from MySQL database in JSON format
  const config = require('../site.config')

  const pathsToPosts = require('../src/data/postUrls.json')
  // console.log(pathsToPosts)

  // source directory
  const srcPath = './src'
  // destination folder to where the static site will be generated
  const distPath = './public'

  // Build subpages (in our example the index, about, book pages)
  // cwd: current working directory
  globP('**/*.ejs', { cwd: `${srcPath}/pages` })
    .then((files) => {
      // console.log(files)
      files.forEach((file) => {
        const fileData = path.parse(file)
        // console.log(fileData)

        const destPath = path.join(distPath, fileData.dir)

        fse.mkdirs(destPath)
          .then(() => {
            // render page
            return ejsRenderFile(`${srcPath}/pages/${file}`, Object.assign({}, config, { pathsToPosts: pathsToPosts }))
          })
          .then((pageContents) => {
            let name = fileData.base
            // console.log(name)
            // render layout with page contents
            switch (name) {
              case 'index.ejs':
                return ejsRenderFile(`${srcPath}/layouts/home.ejs`, Object.assign({}, config, {
                  title: config.site.title,
                  body: pageContents,
                  canonicalUrl: config.site.url,
                  description: config.site.quote,
                  image: 'https://d33wubrfki0l68.cloudfront.net/f2fa5a75dc79f3c1c5e872b7ce49e3257f2ac454/aa565/assets/images/me_smaller_hun.jpg'
                }))
              case 'about.ejs':
                return ejsRenderFile(`${srcPath}/layouts/about.ejs`, Object.assign({}, config, {
                  title: 'Rólam / ' + config.site.title,
                  body: pageContents,
                  canonicalUrl: config.site.url + '/about',
                  description: config.site.description,
                  image: 'https://d33wubrfki0l68.cloudfront.net/f2fa5a75dc79f3c1c5e872b7ce49e3257f2ac454/aa565/assets/images/me_smaller_hun.jpg'
                }))
              case 'book.ejs':
                return ejsRenderFile(`${srcPath}/layouts/book.ejs`, Object.assign({}, config, {
                  title: 'A könyvem / ' + config.site.title,
                  body: pageContents,
                  canonicalUrl: config.site.url + '/book',
                  description: config.site.bookTitle,
                  image: 'https://d33wubrfki0l68.cloudfront.net/f0d3e9575ac2c831b151efd3e374d72859c0cab2/c5dc4/assets/images/book_small.jpg'
                }))
              case 'a_hozzaszolasi_szabalyzat.ejs':
                return ejsRenderFile(`${srcPath}/layouts/comment.ejs`, Object.assign({}, config, {
                  title: 'A hozzászólási szabályzatom',
                  body: pageContents,
                  canonicalUrl: config.site.url + '/' + fileData.name,
                  description: 'A blogom hozzászólási szabályzata. Kötelező érvényű mindenkire!',
                  image: ''
                }))
              default:
                return ejsRenderFile(`${srcPath}/layouts/blogpost.ejs`, Object.assign({}, config, { body: pageContents }))
            }
          })
          .then((layoutContent) => {
            // save the html file
            fse.writeFile(`${destPath}/${fileData.name}.html`, layoutContent)
          })
          .catch(err => { console.error(err) })
      })
    })
    .then(() => {
      console.log('Successful build! Subpages OK.')
    })
    .catch(err => { console.error(err) })
})()
