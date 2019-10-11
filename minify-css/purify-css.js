const purify = require('purify-css')

var content = ['**/public/assets/js/*.js', '**/public/*.html']
var css = ['**/main.css']

var options = {
  output: './src/assets/stylesheet/main.css',
  // Will minify CSS code in addition to purify.
  minify: true,
  // Logs out removed selectors.
  rejected: true,

  whitelist: [
    '*custom-form*',
    '*ws-success*',
    '*ws-errorbox*',
    '*ws-errorbox p*',
    'select.form-control:focus::-ms-value'
  ]
}

purify(content, css, options)
