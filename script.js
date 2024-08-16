document.getElementById('matchColors').addEventListener('click', matchColors);

function matchColors() {
    const primaryImage = document.getElementById('primaryImage').files[0];
    const secondaryImage = document.getElementById('secondaryImage').files[0];

    if (!primaryImage || !secondaryImage) {
        alert("Please select both images.");
        return;
    }

    const primaryImgElement = new Image();
    const secondaryImgElement = new Image();
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');
    const colorThief = new ColorThief();

    const primaryReader = new FileReader();
    primaryReader.onload = function(e) {
        primaryImgElement.src = e.target.result;
    };
    primaryReader.readAsDataURL(primaryImage);

    primaryImgElement.onload = function() {
        const colors = colorThief.getPalette(primaryImgElement, 5);
        displayColors(colors);

        const secondaryReader = new FileReader();
        secondaryReader.onload = function(e) {
            secondaryImgElement.src = e.target.result;
        };
        secondaryReader.readAsDataURL(secondaryImage);

        secondaryImgElement.onload = function() {
            // Set canvas size to the dimensions of the secondary image
            canvas.width = secondaryImgElement.width;
            canvas.height = secondaryImgElement.height;
            ctx.drawImage(secondaryImgElement, 0, 0, canvas.width, canvas.height);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                const closestColor = getClosestColor([r, g, b], colors);
                data[i] = closestColor[0];
                data[i + 1] = closestColor[1];
                data[i + 2] = closestColor[2];
            }

            ctx.putImageData(imageData, 0, 0);

            // Update the download link to point to the canvas image data
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = canvas.toDataURL('image/png');
            downloadLink.style.display = 'inline';
        };
    };
}

function getClosestColor(color, palette) {
    let closest = palette[0];
    let minDistance = getColorDistance(color, palette[0]);

    for (const paletteColor of palette) {
        const distance = getColorDistance(color, paletteColor);
        if (distance < minDistance) {
            closest = paletteColor;
            minDistance = distance;
        }
    }

    return closest;
}

function getColorDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1[0] - c2[0], 2) +
        Math.pow(c1[1] - c2[1], 2) +
        Math.pow(c1[2] - c2[2], 2)
    );
}

function displayColors(colors) {
    const paletteDiv = document.getElementById('colorPalette');
    paletteDiv.innerHTML = '';
    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        const hexColor = rgbToHex(color[0], color[1], color[2]);
        colorBox.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        colorBox.setAttribute('data-hex', hexColor);
        paletteDiv.appendChild(colorBox);
    });
}

function rgbToHex(r, g, b) {
    return `#${[r, g, b].map(x =>
        x.toString(16).padStart(2, '0')
    ).join('').toUpperCase()}`;
}
