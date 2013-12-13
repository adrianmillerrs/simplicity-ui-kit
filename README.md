# Simplicity UI Kit

## Get Started

### Installation

Install node modules

    npm install

Install bower components

    bower install

### Usage

Run a server and begin watching scss files

    grunt server

## Stylesheet scss structure

http://thesassway.com/beginner/how-to-structure-a-sass-project

    stylesheets/
    |
    |-- modules/              # Common modules
    |   |-- _modules.scss     # Imports all modules
    |   |-- _utilities.scss   # Module name
    |   |-- _colors.scss      # Etc...
    |   ...
    |
    |-- partials/             # Partials
    |   |-- _base.sass        # Imports for all mixins + global project variables
    |   |-- _buttons.scss     # Buttons
    |   |-- _typography.scss  # Etc...
    |   ...
    |
    |-- vendor/               # CSS or Sass from other projects
    |   |-- bourbon
    |   ...
    |
    `-- style.scss            # primary Sass file
