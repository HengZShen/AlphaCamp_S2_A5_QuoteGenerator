const handlebars = require('handlebars')  // 也會匯出成module的一部分?



const remainCheck = {

  // check first radio button
  checkRadio(target, name) {
    handlebars.registerHelper('checkRadio', function (target, name) {
      if (target === name) {
        return 'checked'
      } else {
        return
      }
    })
  },

  // checkRadio1(selection) {
  //   handlebars.registerHelper('checkRadio1', function (selection) {
  //     if (selection === "engineer") {
  //       return 'checked'
  //     } else {
  //       return
  //     }
  //   })

  // },

  // // check second radio button
  // checkRadio2(selection) {
  //   handlebars.registerHelper('checkRadio2', function (selection) {
  //     if (selection === "designer") {
  //       return 'checked'
  //     } else {
  //       return
  //     }
  //   })

  // },

  // // check third radio button
  // checkRadio3(selection) {
  //   handlebars.registerHelper('checkRadio3', function (selection) {
  //     if (selection === "entrepreneur") {
  //       return 'checked'
  //     } else {
  //       return
  //     }
  //   })
  // },

}


// export as a module
module.exports = remainCheck