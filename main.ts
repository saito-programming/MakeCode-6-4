input.onButtonPressed(Button.A, function () {
    radio.setGroup(2)
    radio.sendValue("taro", 1)
    radio.setGroup(わたしのむせんグループ)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(5)
    radio.sendValue("hanako", 8)
    radio.setGroup(わたしのむせんグループ)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.pause(100)
    basic.showNumber(value)
})
let わたしのむせんグループ = 0
わたしのむせんグループ = 1
radio.setGroup(わたしのむせんグループ)
