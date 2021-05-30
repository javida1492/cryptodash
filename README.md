## Cryptocurrency Dashboard ##

[Live Demo](https://cryptodash-v1.herokuapp.com/)

### Tech Stack ###
* JavaScript/ES6
* HTML5
* CSS3/CSS-Grids
* [ReactJS](https://reactjs.org/)
* [Lodash](https://lodash.com/)
* [Styled-Components](https://styled-components.com/)
* [MomentJS](https://www.npmjs.com/package/moment)
* [CryptoCompare](https://www.cryptocompare.com/) (Used for fetching crypto data)

### Settings Page with Intro greeting ###
* Greeting the user on first visit, asking them to choose their favorites
* Providing a default 5 coins as favorites (unless otherwise changed) & a complete list of all coins
* Searching for coins with fuzzy search
* Hovering and Selecting coins
* Adding/Removing coins on the list of favorites
* Disabling out chosen coins
* Confirm Favorite Coin
* Remembers those values for the user
* Generates dashboard prices & historical data

### Dashboard ###
* Data initializes from remembered favorites, or forwards to Settings page
* Displays 5 major Cards for first 5 favorites and compact Cards for next 5
* Renders a line chart for the 10 historical points on current favorite symbol
* Select coins changes and re-fetch data, remembers current favorite
* Select to render historical points on Date: Days Weeks Months
* Display name and image of coin next to chart

![Dashboard](https://github.com/javida1492/cryptodash/blob/master/public/dashboard.png)
![Settings](https://github.com/javida1492/cryptodash/blob/master/public/settings.png)
