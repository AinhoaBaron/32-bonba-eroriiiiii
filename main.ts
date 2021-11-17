input.onButtonPressed(Button.A, function () {
    Bonba.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        Bonba.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    Bonba.move(1)
})
let Bonba: game.LedSprite = null
Bonba = game.createSprite(2, 0)
basic.forever(function () {
    if (Bonba.get(LedSpriteProperty.Y) == 4) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
