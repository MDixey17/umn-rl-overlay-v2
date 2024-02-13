# Rocket League Broadcast Overlay

> Created by Matthew "TitanHawk17" Dixey
> **Tech Stack:** TypeScript, React, styled-components, Web Sockets

This is a custom Rocket League broadcast overlay designed specifically for the University of Minnesota, but can be applied to any Collegiate Rocket League broadcast.

## Requirements

Each step after this section assumes you have the following installed. Make sure you have all successfully installed before proceeding.

- Node Version 20 or higher (20.9.0 is confirmed to work with this project). You can check this by running `node -v` in a terminal window.
- OBS is installed

## Installation

Please view the appropriate section depending how you received the source code for this project.

### Cloning From GitHub

1. Clone this repository to your local machine. Make sure this is cloned to an easy-to-access location as you will need to run this from the terminal.
2. Open a terminal and navigate to the directory where you cloned the project.
3. Run the command `npm install` to install all the necessary dependencies to run the project. This may take some time.

### Extracting From .zip

1. Download the .zip folder onto your local machine.
2. Extract the contents of the .zip folder to an easy-to-access location on your machine.
3. Open a terminal and navigate to the directory where you saved the project.
4. Run the command `npm install` to install all the necessary dependencies to run the project. This may take some time.

## Running The Overlay

1. Open OBS, navigate to the Rocket League game scene, and add a new "Browser Source".
2. Enter the following settings:
   URL: http://localhost:3000
   Width: 1920
   Height: 1080
3. From a terminal window in the directory where you saved the project, run the command `npm start`. This will run both the relay server and the overlay itself.
4. Launch Rocket League and Bakkesmod.
5. Inside of Rocket League, press `F6` to open the in-game terminal, and enter the command `plugin load sos`.
6. Go back to the overlay, which should now be connected to the game.
7. Enter all the configuration settings. Once you click `Submit`, the overlay will be ready.
