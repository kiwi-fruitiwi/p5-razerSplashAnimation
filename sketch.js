/**
 *  @author kiwi
 *  @date 2022.03.29
 *
 *  coding plan:
 *
 *  display logo and title; colors don't match in current method
 *    logo+title.png is 4001x932
 *      use image.get() to extract logo and title
 *
 *  start ¾ of the way down the right edge:
 *    incrementally draw a line using a growing list of pixel point → top right
 *    draw lines in this manner for top, left, bottom
 *    use mouseX to choose degree of animation just like in p5-dialogSystem
 *
 *
 *
 */
let font
let instructions

let logo
let title


function preload() {
    font = loadFont('data/consola.ttf')
    logo = loadImage('img/logo.png')
    title = loadImage('img/title.png')
}


function setup() {
    let cnv = createCanvas(600, 400)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch</pre>`)

    rectMode(CENTER)
    imageMode(CENTER)

    /* normally 500x166 */
    title.resize(60, 0)

    /* 2400x2420 */
    logo.resize(80, 0)
}


function draw() {
    background(234, 34, 24)

    displayDebugCorner()
    displayRazerSplashScreen()
}


function displayRazerSplashScreen() {
    const black = color(0, 0, 0, 50)
    fill(black)

    rect(width/2, height/2, 200, 350)
    image(logo, width/2, 150)
    image(title, width/2, 210)

    /* sum up perimeter, hue based on 2x that, rotating through rainbow twice */
}


/** 🧹 shows debugging info using text() 🧹 */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    text(`frameCount: ${frameCount}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}