# Archive Visualizer
A new way to visualize content from the vast [Internet Archive](https://archive.org/) catalog.

![UI preview gif](https://github.com/rebecca-shoptaw/archive-visualizer/blob/master/public/visualizer-video.gif)

## Getting Started Guide
To get this repository up and running locally, you can simply run the following commands:
```
# navigate to the folder where you'd like to save the code
cd path/to/your/folder

# clone the repository
git clone https://github.com/rebecca-shoptaw/archive-visualizer.git

# enter the project directory
cd archive-visualizer

# install project dependecies
npm install

# begin running locally
npm run dev

# run unit tests
npm run test
```

## Project Outline
An overview of the phases and subtasks that will be required to complete the project.

**Phase One: Initial Project Implementation**
- [x] Assemble basic project component structure and settings
- [x] Write simple unit tests for initial `InformationM`-only implementation
- [x] Build the `InformationM`-only implementation
- [x] Add initial styles
- [x] Write up installation instructions for README
- [x] Prep for and implement first deployment to `rebeccashoptaw.dev/archive-visualizer`

**Phase Two: Generalize the Project**
- [x] Adjust unit tests as needed to account for new variable structure
- [x] Install `React-Router` and restructure components to use URL parameters
- [x] Incorporate fail safety
- [x] Add & test functionality and new components for more item types, such as audio files, books, etc.
- [x] Add fail safety for un-renderable item types (if needed)

**Phase Three: Add More Content**
- [ ] Add & test functionality to display reviews
- [x] Add & test functionality to display related works, likely using a carousel plugin
- [x] Build & test the homepage a new homepage to live at `/` where users can enter the ID manually and hit a button to go to the relevant URL
- [x] Style the homepage

**Phase Four: Refactor**
- [x] Clean up component structure as needed, dividing into sub-components and using custom hooks if necessary
- [x] Improve accessibility where possible
- [x] Incorporate more tests

**Phase Five: Bells and Whistles**
- [ ] Bulk up project README write-up
- [ ] Add custom rendering to detect/style license url
- [x] Add custom rendering for array metadata
- [ ] Add snazzy loading indicators
- [x] Add custom titles for each page via `react-helmet`
- [ ] Add animations, etc. as time allows

**Last few desired add-ons:**
- ~~Include GIF in README~~
- Write up features and wish list in README
- ~~Description / still for site preview~~
- ~~Add alts to all images~~
- Fade in result and home screen if easy
