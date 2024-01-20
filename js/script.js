var slider = document.getElementById("rangeSlider");
var output = document.getElementById("dimensions");
output.innerHTML = slider.value +"x"+ slider.value;
createSketchbook(slider.value); 

slider.oninput = function() {
  output.innerHTML = this.value +"x"+ this.value;
  createSketchbook(this.value); 
}

function createSketchbook(side){
    const sketch = document.querySelector(".sketchbook");
    sketch.innerHTML = "";

    let paint = "gray";

    for(let i=0;i<side*side;i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = 500/side + "px";
        div.style.height = 500/side + "px";
        div.addEventListener("mousedown", function() {
            div.style.backgroundColor = paint;
        });
        div.addEventListener("mouseenter", (event) => {
            if(event.buttons===1){
                div.style.backgroundColor = paint;
            }
        });
        sketch.appendChild(div);
    }
}

var currentYear = new Date().getFullYear();

document.querySelector(".footer").innerHTML += currentYear;