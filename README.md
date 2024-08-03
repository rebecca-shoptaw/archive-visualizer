# Archive Visualizer
A new way to visualize content from the vast [Internet Archive](https://archive.org/) catalog. 🔭✨

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

# install project dependencies
npm install

# begin running locally
npm run dev

# run unit tests
npm run test
```

## Project Outline
An overview of the phases and subtasks that were required to complete the project, checked off here as each one was completed.

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
- [ ] ~~Add & test functionality to display reviews~~
- [x] Add & test functionality to display related works, likely using a carousel plugin
- [x] Build & test the homepage a new homepage to live at `/` where users can enter the ID manually and hit a button to go to the relevant URL
- [x] Style the homepage

**Phase Four: Refactor**
- [x] Clean up component structure as needed, dividing into sub-components and using custom hooks if necessary
- [x] Improve accessibility where possible
- [x] Incorporate more tests
- [x] Add descriptive info to all functions

**Phase Five: Bells and Whistles**
- [x] Bulk up project README write-up
- [ ] Add custom rendering to detect/style license url
- [x] Add custom rendering for array metadata
- [ ] Add snazzy loading indicators
- [x] Add custom titles for each page via `react-helmet`
- [ ] Add animations, etc. as time allows

## Phase One: The Minimum Requirements (Plus Testing)
![Phase One UI](https://github.com/rebecca-shoptaw/archive-visualizer/blob/master/public/visualizer-ui-phase-1.png)

Phase one involved setting up and building the first working version of the site to meet the minimum project requirements. 

**The Setup:**

-  I opted to use `React`/`TypeScript`/`Vite` since it's a stack I use a lot which I thought would be pretty well-suited to this project
- For testing, I went for `vitest` + `testing-library`, basically `jest` but with better `Vite` compatibility

**The First Implementation:**

Nothing crazy here, just:
- Using a simple `fetch` call (now in `useFetchedData`) to the relevant API to get the metadata for the work
- Conditionally rendering an error page (via the `error` state variable)
- Passing the data to a few relevant sub-components:
  - `ContentPlayer` - the `iframe`
  - `ContentDescription` - the work title, top-line credits, and description
  - `ContentMetadata` - a nice little box with the sorted key-value pairs
- Even though it wasn't technically required, I also wrote simple unit tests (in `__tests__`) for each of the components as part of this phase to ensure the data was rendered correctly.

I did end up having to create a slightly messy constant called `INCLUDE_KEYS` to determine which of the keys to render (to avoid an unnecessarily giant metadata box). To do this, I simply listed the keys which were visible on the IA details page for the work, minus any I had already listed in the `ContentDescription`. 

The constant was expanded later on as I added more work types, but there's surely a better way to implement something like this, given a set standard of either includable or excludable keys.

Since I knew I was planning to generalize eventually, I opted to use a constant, `CONTENT_ID`, assigned to `InformationM`, so that it would be easy to sub in the id variable from the URL parameters when the time came.

**The Styling:**

Instead of using any CSS compilers like Tailwind/Bootstrap/Less/Sass/etc., I went a straightforward route with a CSS module structure:
-  1 module for each major component's individual styles (i.e. `Visualizer.module.css`)
- `globals.css` for overall styling/variables
- `utils.module.css` for individual class names reused between components

I combined this with easily legible `BEM`-ish class-names for added clarity, and while each of the modules is pretty short as is, this set up should be easy to expand without losing clarity or organization if the project grows in scale.

As for the styling itself, it remained quite consistent between phases, once the first styles were in place.
The idea for the vibe was a combination of:
- Modern, minimal, easily legible dark mode but with a slightly lighthearted mood
- Fun telescope/space-y vibes, to suggest that perusing the collection is like searching an information galaxy

I incorporated mobile-responsiveness from the get-go, using a single `550px` breakpoint and a few `flex-direction` and `text-align` adjustments in the relevant modules.

**Deploying:**

As with previous side-projects, I decided to deploy on GitHub pages, which just involved adding some deploy scripts to `package.json` and specifying the base URL in relation to my personal site.

Once this was done, the site official went live at [rebeccashoptaw.dev/archive-visualizer](https://rebeccashoptaw.dev/archive-visualizer/), and I moved on to:

## Phase Two: Generalizing the Project
![Phase Two UI](https://github.com/rebecca-shoptaw/archive-visualizer/blob/master/public/visualizer-ui-phase-2.png)

This phase was fairly simple and quite satisfying!

**The URL Parameters:**

To access the URL parameters, I:
- Used `React-Router` to set up the custom paths for the project in a `BrowserRouter`
- Accessed the content identifier inside `Visualizer` using the library's `useParams` function

This worked like a charm locally, and meant that I could now display any item from the archive!

But alas when I did my first deploy at the end of this phase, the site refused to render any content, and just rendered my error page no matter what I put at the end of the URL.

So I did some research and determined that GitHub pages does not support the `BrowserRouter` for security reasons, but that I could use the `HashRouter` instead. This involved switching over all the URLs throughout the app, and including a not particularly pleasant `#` in each one, but it got the job done!

**Generalizing the Content:**

I had expected that I would have to use the media type to generate a separate `iframe` for each type of media, but I soon realized that the initial `iframe` was flexible enough to allow for almost anything: images, books, etc.

The one place it does struggle is with audio files, and one wishlist item for the future of this project would be to build and style a separate audio player, which uses the work image next to the playlist like the IA details page. One day!

I did end up adding fail safety for `collections` (via `useFetchedData`) as one of the final steps, when I realized that they could appear as related works.

## Phase Three: Adding More Content
![Phase Three UI - Homepage](https://github.com/rebecca-shoptaw/archive-visualizer/blob/master/public/visualizer-still.png)
![Phase Three UI - top of work page](https://github.com/rebecca-shoptaw/archive-visualizer/blob/master/public/visualizer-ui-phase-3-part1.png)
![Phase Three UI - related works](https://github.com/rebecca-shoptaw/archive-visualizer/blob/master/public/visualizer-ui-phase-3-part2.png)

This is where the site's UI really started coming together! 
- **Search Form:** I added and tested a new `Homepage` component where users could enter an identifier (`IdentifierSearchForm`) and hit a button to go to the relevant visualizer -- this was a lot of fun, and felt necessary for the site to be truly usable
- **Related Works:** I also added functionality to display related works, adding a second `fetch` call to the `useFetchedData` hook, and styling them as a "blob list" where each one goes to its own visualizer on click -- this was also very fun, and makes the UX more enjoyable, as users are encouraged to click around and hop from page to page
- I opted not to display reviews, as I was eager to move on to the refactoring/finalizing stages, and I like that the UX of this site encourages users to hop around the catalog rather than delve into the reviews for a specific work -- much more of a telescope/exploratory vibe
- **Header:** This was another fun little UX touch, to make the site feel instantly more understandable/usable; it includes two links to the homepage (one on the site name, one on the "New" button), but these links could easily diverge if there's eventually a separate search form or search modal

Once this was all done and deployed, I moved on to:

## Phase Four: Refactoring
The title says it all! A whole lot of tasks went into this, but here is a small sampling:
- Improving unit test coverage
- Adding `alt` attributes to all `img` elements
- Reorganizing the code to make it more modular and legible:
  - Moving reusable functions into the `utils`
  - Moving complex state logic into the `hooks`
  - Reorganizing import statements to have a clear hierarchy
  - Writing descriptive comments for all functions and components


**Determining Next Steps/Project Wishlist:**

There's always more to do on any project, and some ideal steps would be:
- Continuing to improve accessibility (particularly making clear that the "Go" button on the search form is connected to the neighboring input)
- Further improving test coverage, and continuing to DRY up the code
- Building a mini version of the IA search page, which would make the site fully usable to anyone who doesn't have a list of identifiers on hand
- Adding the fun little animations, and everything else I didn't quite get to from the next phase which was:

## Phase Five: Bells and Whistles
Extra things for the project I thought would be neat! As is customary, I didn't have time to implement all of these, but I focused on the most essential/exciting, which were:
1. Rendering metadata array values properly (i.e. `"creator": ["First Author", "Second Author"]`), which I built as `toPunctuatedString` in `utils.ts` and wrote corresponding unit tests for
2. Adding custom titles via `react-helmet`, which is something I've done before and is quite straightforward, but I always feel it makes a site look "real," particularly a site like this with such dynamic content. I ended up moving the relevant code to a separate `CustomHelmet` component to keep the `Visualizer` code as tidy as possible
3. Completing a full, comprehensive README write-up, which as I write this I have just done!!

That's all, folks! 🔭✨
