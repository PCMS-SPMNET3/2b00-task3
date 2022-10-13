let count = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(5)
})
input.onButtonPressed(Button.B, function () {
    count = 9
    basic.showNumber(9)
    basic.showNumber(8)
    basic.showNumber(7)
    basic.showNumber(6)
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
basic.forever(function () {
	
})
