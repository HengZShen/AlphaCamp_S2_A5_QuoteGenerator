function chatGenerator(target) {

  // if user not click radio buttons
  if (target === undefined) {
    return "請選擇一位導師說幹話"
  }

  // user click radio buttons
  const nameTarget = {
    engineer: "工程師",
    designer: "設計師",
    entrepreneur: "創業家"
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // random Index
  const randomIndex1 = Math.floor(Math.random() * 4)
  const randomIndex2 = Math.floor(Math.random() * 4)

  let quote = nameTarget[target] + task[target][randomIndex1] + phrase[randomIndex2]

  // return quote
  return quote

}



// export as module

module.exports = chatGenerator