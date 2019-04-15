var params = {
    lines: [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [
                {
                    background: '#00F',
                    width: 25
                },
                {
                    background: '#00F',
                    width: 50
                },
                {
                    background: '#00F',
                    width: 25
                }
            ]
        },
        {
            background: '#00F',
            updateTime: 2000,
            elements: [
                {
                    background: '#00F',
                    width: 25
                },
                {
                    background: '#00F',
                    width: 50
                },
                {
                    background: '#00F',
                    width: 25
                }
            ]
        },
        {
            background: '#00F',
            updateTime: 3000,
            elements: [
                {
                    background: '#00F',
                    width: 25
                },
                {
                    background: '#00F',
                    width: 50
                },
                {
                    background: '#00F',
                    width: 25
                }
            ]
        },
        {
            background: '#00F',
            updateTime: 4000,
            elements: [
                {
                    background: '#00F',
                    width: 25
                },
                {
                    background: '#00F',
                    width: 50
                },
                {
                    background: '#00F',
                    width: 25
                }
            ]
        }
        //...
    ]
};

var func = function () {
    let body = document.querySelector("body");
    body.innerHTML = "";
    body.style.margin = "0px";
    let wHeight = window.innerHeight;

    let numberOfLines = params.lines.length;

    params.lines.forEach(function (line) {
        let lineBlock = document.createElement("div");
        lineBlock.classList.add("lines");
        lineBlock.style.backgroundColor = line.background;
        lineBlock.style.height = wHeight / numberOfLines + "px";
        
        line.elements.forEach(function (item, id) {
            let lineEl = document.createElement("div");
            lineEl.classList.add("elements");
            lineEl.style.width = item.width + "%";
            console.log(wHeight, numberOfLines, (wHeight / numberOfLines) + "px");
            lineEl.style.height = wHeight / numberOfLines + "px";
            // lineEl.style.backgroundColor = item.background; // if set - not color change for lines 

            //to show elements of lines via style.opacity
            // lineEl.style.borderStyle = "dotted";
            // lineEl.style.borderColor = "#FFF";
            // let n = 2; // factor can accept 1, 2, 3
            // lineEl.style.opacity = "0." + String(n * (id + 1) );

            lineBlock.appendChild(lineEl);
        });
        
        setInterval(() => {
            lineBlock.style.backgroundColor = getRandomColor();
        }, line.updateTime);

        //to show color changing for elements of lines
        // setInterval(()=>{
        //     lineBlock.childNodes.forEach(function(item){
        //         item.style.backgroundColor = getRandomColor();
        //     });            
        // }, line.updateTime);

        body.appendChild(lineBlock);
    });
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.addEventListener('DOMContentLoaded', func); // do on load
window.addEventListener('resize', func); // do on resize

