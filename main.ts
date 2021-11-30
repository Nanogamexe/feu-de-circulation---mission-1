function green () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function white () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function yellow () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function orange () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function red () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function nothing () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
let pedestrian = 0
let timer = 11
let flash = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pedestrian = 1
    }
})
basic.forever(function () {
    basic.pause(5000)
    green()
    basic.pause(8000)
    yellow()
    basic.pause(2000)
    red()
    if (pedestrian == 1) {
        for (let index = 0; index < 6; index++) {
            white()
            timer = timer - 1
            basic.showNumber(timer)
            basic.pause(1000)
        }
        for (let index = 0; index < 5; index++) {
            flash = 1
            basic.showNumber(timer)
            basic.pause(1000)
            timer = timer - 1
        }
    }
    basic.clearScreen()
    timer = 11
    pedestrian = 0
    flash = 0
})
basic.forever(function () {
    if (flash == 1) {
        orange()
        basic.pause(400)
        nothing()
        basic.pause(400)
    }
})
