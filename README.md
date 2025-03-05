# Custom Shape Calendar Angular Application

This repository hosts an Angular application that demonstrates a custom calendar component capable of rendering a calendar in various unique shapes. The calendar is configured using a character map that defines pixel patterns for different symbols, and it can highlight specific dates with custom colors and texts.

## Demo


https://github.com/user-attachments/assets/eea2f683-a2f5-4c9c-bb80-77d7a48ed7d8


## Overview

The application is organized into several components that together allow a user to:
- Choose a specific month and year.
- Select a character that determines the shape of the calendar.
- View a calendar where each day is positioned in a custom design.
- Highlight specific dates with markers that can display a custom color and text.

The repo serves as an example implementation that can be extended or customized further for projects requiring non-traditional calendar layouts.

## Components

### App Component
- **Purpose:** Acts as the root component of the application.
- **Functionality:**
  - Maintains the primary state, such as the currently selected year, month, character, and any marked dates.
  - Composes the main structure by integrating the calendar toolbar and the custom-shaped calendar components.
  - Provides helper methods, like determining the first day of the current selection.

### Calendar Toolbar Component
- **Purpose:** Provides a user interface for selecting date options and a character design.
- **Functionality:**
  - Offers dropdowns or selection controls for the year, month, and calendar shape (character).
  - Emits events on changes to update the state in the parent (App) component.
  - Initializes available options for years and months, ensuring that the user can navigate across a range of dates.

### Custom Shape Calendar Component
- **Purpose:** Renders the calendar based on the selected date and a custom character map.
- **Functionality:**
  - Uses a character map (defined in a separate configuration file) to determine which cells in the calendar grid are active.
  - Maps the days of the month onto a grid that follows the design pattern.
  - Applies custom styling to highlight marked dates, including setting colors and displaying additional texts.
  - Re-draws the calendar whenever the selected date or calendar shape is updated.

### Characters Configuration
- **Purpose:** Provides a mapping of characters to pixel or bit-based representations.
- **Functionality:**
  - Each character (e.g., S, A, H, †, +) is associated with a matrix that dictates the shape of the calendar.
  - Serves as the foundation for rendering the custom grid pattern in the calendar component.

## Running the Application

1. **Install Dependencies**  
   Ensure that you have Node.js and npm installed. Then install the project dependencies with:
   ```bash
   npm install
   ```

2. **Run the Development Server**  
   Start the Angular development server by running:
   ```bash
   ng serve
   ```
   The application will typically be available at `http://localhost:4200/`.

3. **Build the Project**  
   To build the project for production, run:
   ```bash
   ng build --prod
   ```

## Customization

- **Updating the Character Map:** You can adjust the appearance of the calendar by modifying the character mapping in the configuration file. Each character is defined by a set of rows representing its pattern.
- **Styling:** Additional CSS modifications are available to further tweak the look and feel of the calendar and toolbar components.
- **Marked Dates:** The application demonstrates how to highlight specific dates. You can extend this feature to integrate with external data or services for richer interactions.

## Conclusion

This repository is a practical example of how Angular components can be combined to build flexible and visually interesting UI components. Whether you need a unique calendar for a project or want to explore custom rendering techniques, this setup provides a solid foundation for further experimentation and customization.
