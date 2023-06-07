# Webpack Demo

This is a simple demonstration of how to use Webpack with `css-loader` and `style-loader`.

## Project Structure

- `src/index.js`: The entry point for the Webpack bundle. This file imports a CSS file.
- `src/styles.css`: A CSS file that gets bundled into the JavaScript bundle by Webpack.
- `public/index.html`: The HTML template for the `dist/index.html` file generated by `HtmlWebpackPlugin`.
- `webpack.config.js`: The configuration file for Webpack.

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Open dist/index.html in a web browser.