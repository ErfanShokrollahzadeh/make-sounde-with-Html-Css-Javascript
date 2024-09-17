# Xylophone

This project is a simple xylophone application built with HTML, CSS, and JavaScript. Click on the colorful keys to play sounds!

## Project Structure

- `index.html`: The main HTML file that contains the structure of the xylophone.
- `style.css`: The CSS file that styles the xylophone keys.
- `main.js`: The JavaScript file that handles the sound playing functionality.

## CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD). The CI/CD pipeline is defined in the `.github/workflows/ci-cd.yml` file.

### CI/CD Workflow

The CI/CD workflow is triggered on every push and pull request to the `main` branch. It consists of three jobs:

1. **Build**: This job checks out the repository, sets up Node.js, installs dependencies, and builds the project.
2. **Test**: This job checks out the repository, sets up Node.js, installs dependencies, and runs tests.
3. **Deploy**: This job checks out the repository, sets up Node.js, installs dependencies, builds the project, and deploys it to GitHub Pages.

### Triggering the CI/CD Pipeline

To trigger the CI/CD pipeline, simply push your changes to the `main` branch or create a pull request targeting the `main` branch. The pipeline will automatically run and execute the defined jobs.

### GitHub Pages Release

The CD pipeline includes a step to deploy the project to GitHub Pages. The deployment is done using the `peaceiris/actions-gh-pages` action. The built project is published to the `gh-pages` branch, which is then used to serve the GitHub Pages site.

To view the GitHub Pages site, go to the repository settings, navigate to the "Pages" section, and ensure that the source branch is set to `gh-pages`.
