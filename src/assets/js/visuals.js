$(document).ready(function () {
  $('#toggle').click(function () {
    $('#archive').toggle()
    $('#toggle').text(function (i, text) {
      return text === "Korábbi cikkek..."
        ? "Összecsuk"
        : "Korábbi cikkek..."
    })
  })
})
