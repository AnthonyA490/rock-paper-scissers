input.onGesture(Gesture.Shake, function () {
    PickShape()
})
function PickShape () {
    my_hand = randint(1, 3)
    if (my_hand == rock_index) {
        Rock_image.showImage(0)
    }
    if (my_hand == paper_index) {
        Paper_image.showImage(0)
    }
    if (my_hand == scissors_index) {
        Scissors_image.showImage(0)
    }
}
let my_hand = 0
let Scissors_image: Image = null
let Paper_image: Image = null
let Rock_image: Image = null
let scissors_index = 0
let paper_index = 0
let rock_index = 0
rock_index = 1
paper_index = 2
scissors_index = 3
Rock_image = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
Paper_image = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
Scissors_image = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
