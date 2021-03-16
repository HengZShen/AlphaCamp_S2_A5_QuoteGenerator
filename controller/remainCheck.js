const handlebars = require('handlebars')

const remainCheck = {


  checkRadio1(selection) {
    handlebars.registerHelper('checkRadio1', function (selection) {
      if (selection === "engineer") {
        console.log('true')
        return 'checked'
      } else {
        console.log('false')
        return
      }
    })

  },
  checkRadio2(selection) {
    handlebars.registerHelper('checkRadio2', function (selection) {
      if (selection === "designer") {
        console.log('true')
        return 'checked'
      } else {
        console.log('false')
        return
      }
    })

  },
  checkRadio3(selection) {
    handlebars.registerHelper('checkRadio3', function (selection) {
      if (selection === "entrepreneur") {
        console.log('true')
        return 'checked'
      } else {
        console.log('false')
        return
      }
    })

  },


}




module.exports = remainCheck