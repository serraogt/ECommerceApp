NOTLARIM: COOKIELER 1BY1 BASTIRILMIYOR. hep son hali bastırılıyordu. biraz daha önce konuştuğumuz zaman konularına benziyordu ama düzeltemedim. try catch denedim olmadı. await ya da sleep mi denemeliyim? şuan setState ile denedim ama şöyle bir hata alıyorum =>

Too many re-renders. React limits the number of renders to prevent an infinite loop.

chatgpt setstateleri bir useeffect içinde toplamayı önerdi ama neye göre useeffecte geçtiğini anlamadım, ayrıca o da çalışmıyordu :/

## Storage spaces and their lifecycles:

### Redux Store
  *Created only once when the application executed.
  *Lifecycle: Does not gets cleared neighter when page is refreshed nor browser is closed
  *Usage: Stores application-wise data between components
### State
  *Created for components and variables 
  *Lifecycle: Exists with components, disappears when component gets cleared or page gets refreshed
  *Usage: Temporary occasions and interactions, for only one component.

  
### Cookies
  *Store small datasets in **** browser and server. 
  *Lifecycle: Stored for specifically limited time, user can also delete the cookies
  *Usage: user logs, preferences, personalized experience
  **no good for highly confidential data
### Local Storage
  *Big capacity data on browser
  *Lifecycle: Stays until user deletes
  *Usage: Permanent storage
  **no good for highly confidential data
Any window inside their browser

### Session Storage
  * For one tab in browser.
  * When you close the tab it disappears.

  
/* 

Eğer key olmazsa Warning: Each child in a list should have a unique "key" prop.

Key olur unique olmazsa

9react-dom.development.js:86 Warning: Encountered two children with the same key, `[object Object]`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupdported and could change in a future version.
    at div
    at div
    at Home (http://localhost:3000/main.181d7920c195571c3c68.hot-update.js:45:84)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:63546:5)
    at Routes (http://localhost:3000/static/js/bundle.js:64178:5)
    at div
    at App
    at Provider (http://localhost:3000/static/js/bundle.js:59428:3)
    at Router (http://localhost:3000/static/js/bundle.js:64116:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:62219:5) */

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
