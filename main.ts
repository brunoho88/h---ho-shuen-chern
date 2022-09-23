basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
})
