# Color Grado

Color Grado is a web application that matches the color scheme of one image to another. It utilizes the ColorThief library to extract a color palette from a primary image and applies those colors to a secondary image. Users can view the modified image and download it in its new color scheme.

## Features

- Upload a primary image to extract a color palette.
- Upload a secondary image to apply the extracted color scheme.
- View the modified image and the extracted color palette.
- Download the color-matched image.

## Technologies Used

- HTML5
- CSS3 (Bootstrap for styling)
- JavaScript (ColorThief library for color extraction)
- Canvas API (for image manipulation)

## Getting Started

### Prerequisites

- A modern web browser with JavaScript support.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/color-grado.git
    ```

2. Navigate to the project directory:
    ```bash
    cd color-grado
    ```

3. Open `index.html` in your web browser.

### Usage

1. **Select Images:**
   - Upload a primary image to extract the color palette.
   - Upload a secondary image to which the color palette will be applied.

2. **Match Colors:**
   - Click the "Match Colors" button to process the images.
   - The modified secondary image will be displayed along with the color palette extracted from the primary image.

3. **Download Image:**
   - Click the "Download Image" button to save the color-matched image.

## Code Explanation

- **`index.html`**: Provides the structure for the web application, including file inputs, a canvas for image display, and interaction buttons.
- **`script.js`**: Handles image uploads, color extraction, image manipulation, and UI updates.
- **`style.css`**: Manages the styling of the webpage, including layout and visual effects.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a Pull Request.

## Acknowledgments

- [ColorThief](https://github.com/lokesh/color-thief) for the color extraction library.
- [Bootstrap](https://getbootstrap.com) for the responsive design framework.

## Contact

For questions or issues, please contact me at [meharshal1703@gmail.com](mailto:meharshal1703@gmail.com).

Connect with me on [LinkedIn](https://www.linkedin.com/in/your-linkedin-profile).
