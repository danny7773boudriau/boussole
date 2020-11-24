let degré_0_nord = 0
let degré = 0
input.onButtonPressed(Button.A, function () {
    let nord = 0
    if (nord < input.compassHeading()) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MES_DEVICE_ORIENTATION_LANDSCAPE
        )
        control.raiseEvent(
        input.magneticForce(Dimension.Strength),
        input.rotation(Rotation.Pitch)
        )
        input.calibrateCompass()
        degré_0_nord = 0
        degré = 360
        basic.showArrow(ArrowNames.North)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
