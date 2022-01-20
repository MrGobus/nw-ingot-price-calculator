# New World: Ingot Price Calculator

Project created with use `React` + `Material UI`

## Build

* `git clone https://github.com/MrGobus/nw-ingot-price-calculator`
* `cd nw-ingot-price-calculator`
* `npm install` (execute it once, to install required packages)
* edit `homepage` in `package.json` 
* `npm run build`

or `npm start` to start it in debug mode

* `git clone https://github.com/MrGobus/nw-ingot-price-calculator`
* `cd nw-ingot-price-calculator`
* `npm install` (execute it once, to install required packages)
* `npm start` 

## Usage

Calculations are made on the basis of one ingot. When calculating for mass production, do not forget to take into account the chance of obtaining an additional amount of resource depending on the type of auxiliary materials, equipment, and other factors.

To calculate, you must enter the current market value of the materials. It is not advised to take the minimum value, it can be underestimated by players who want to quickly sell a small amount.

If you want to use your own materials, enter a price value of zero for the material you have.

Calculations are made automatically, confirmation is not required. You immediately see the result.

The entered data is stored on the user side in the browser storage, so that the values you entered will not be lost after a page refresh or reload. Although they will not be displayed if you use a different browser or when you log in from another device.