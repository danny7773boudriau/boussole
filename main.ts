let direction_boussole = 0
input.onButtonPressed(Button.A, function () {
    if (true) {
        input.calibrateCompass()
        direction_boussole = input.compassHeading()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
	
})
