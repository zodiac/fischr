# Baduk

An easy-to-use online Go gaming platform. Currently hosted at https://www.baduk.ca.

Currently in the pre-alpha stage. Expected Alpha release date is April 29th, 2016. This release will be a minimum viable product, and will have full functionality for players facing each other anonymously.

## Installation

First install Node.js v5.9.1. You can do this on OS X with:

```
brew install wget
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

Next, clone the repository and install dependencies:

```
git clone https://www.github.com/19x19/Baduk && cd Baduk
npm install && bower install
```

Run Baduk at localhost:3001:

```
sudo node app.js
```
