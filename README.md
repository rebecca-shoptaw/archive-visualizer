# Archive Visualizer
A new way to visualize content from the vast [Internet Archive](https://archive.org/) catalog.

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
- [ ] Adjust unit tests as needed to account for new variable structure
- [ ] Install `React-Router` and restructure components to use URL parameters, incorporating fail safety, and restricting display to only `MovingImage`-type ID's
- [ ] Write tests for a new homepage to live at `/` where users can enter the ID manually and hit a button to go to the relevant URL
- [ ] Build & test the homepage as planned
- [ ] Style the homepage
- [ ] Add & test functionality and new components for more item types, such as audio files, books, etc.

**Phase Three: Add More Content**
- [ ] Add & test functionality to display reviews
- [ ] Add & test functionality to display related works, likely using a carousel plugin
- [ ] Bulk up project README write-up

**Phase Four: Refactor**
- [ ] Clean up component structure as needed, dividing into sub-components and using custom hooks if necessary
- [ ] Improve accessibility where possible

**Phase Five: Bells and Whistles**
- [ ] Add more fun stylistic touches, such as snazzy loading indicators, custom titles for each page via `react-helmet`, animations, etc. as time allows

