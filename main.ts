let degré = 0
basic.forever(function () {
    degré = input.compassHeading()
    if (degré < 45) {
        basic.showString("N")
        if (degré < 135) {
            basic.showString("E")
            if (degré < 225) {
                basic.showString("S")
                if (degré < 315) {
                    basic.showString("W")
                } else {
                    basic.showString("N")
                }
            } else {
            	
            }
        } else {
        	
        }
    } else {
    	
    }
})
