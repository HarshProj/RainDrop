# Tetris Rain App

![image](https://github.com/user-attachments/assets/e41dcfc6-bdb4-49d5-b9d9-0c5be5e64348)


A fun and interactive Tetris Rain app, inspired by the iconic Tetris game, where falling blocks form patterns as they cascade down the screen. The app showcases a unique twist on the classic gameplay mechanics with a visually appealing design and engaging user interaction.

## Features

- **Dynamic Tetris Blocks**: Falling blocks that simulate the classic Tetris experience.
- **Customizable Speed**: Adjust the falling speed of the blocks for different difficulty levels.
- **Interactive UI**: Click or tap to rotate and move blocks left or right.
- **Responsive Design**: The app adapts to various screen sizes for a seamless experience across devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Libraries/Frameworks**: React (if applicable), Tailwind CSS (for styling), Webpack (for bundling)
- **Game Logic**: JavaScript (handling the block falling and user interactions)

## Approach

### 1. **Game Engine Setup**

The core logic of the Tetris Rain app is based on simulating falling blocks. I created a simple grid system to track block positions and checked for collisions with other blocks or the boundaries of the screen. The game state (such as active blocks and game over conditions) is dynamically updated in the app’s state.

### 2. **Block Movement and Rotation**

The blocks fall at a predefined speed but can be controlled by the user. Using simple key press events, users can rotate the blocks or move them horizontally. The rotation logic is based on a 2D array transformation.

### 3. **Randomized Block Generation**

Each block is randomly selected from a set of predefined shapes (tetrominoes), and the blocks fall one after the other. I used JavaScript’s `Math.random()` to generate random shapes and positions for each block.

### 4. **Collision Detection**

The game ensures that blocks stop falling when they hit the bottom or collide with other blocks. For this, I used basic bounding box collision detection to determine if the block's current position is valid.

### 5. **Scoring and Game Over Logic**

The app tracks completed lines, awarding points as lines are filled. Once a line is full, it is cleared, and all blocks above it fall one row down. The game ends when new blocks can no longer fit at the top of the grid.

### 6. **Visual Design**

The falling blocks are styled to resemble traditional Tetris shapes. The app uses CSS animations to smoothly animate the blocks as they fall. Tailwind CSS helps with responsiveness and the overall design of the interface.

## How to Play

1. **Start the game**: Open the app to begin the Tetris Rain experience.
2. **Move and Rotate**: Use arrow keys to move the blocks left, right, or rotate.
3. **Objective**: Clear as many lines as possible before the blocks stack up to the top.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tetris-rain.git
