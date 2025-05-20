let t0ms = document.timeline.currentTime;
let canvas = document.getElementById('c');
let context = canvas.getContext('2d');
context.imageSmoothingEnabled = false

function render(t1ms) {
    const passed = t1ms - t0ms
    const ph = Math.PI / 1000 * passed
    
    context.lineWidth = 1;
    context.strokeStyle = "lightblue"

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath()
    context.moveTo(canvas.width/2, canvas.height/2)
    context.lineTo(canvas.width/2 + 100*Math.cos(ph), canvas.height/2 + 100*Math.sin(ph))
    context.closePath()
    context.stroke()

    window.requestAnimationFrame(render)
}

export {render}
