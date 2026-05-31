# Welcome Home Inventory Hub

The project is an inventory management application built to solve storage issues for local church team.


## Screenshots

<img width="1920" height="869" alt="ScreenShot Tool -20260531213057" src="https://github.com/user-attachments/assets/cd831abf-4684-4fc2-a419-1415694eead4" />





## Features

- Feature 1: You can add and edit items. 
- Feature 2: You can delete items and can generate reports.
- Feature 3: All of the items are stored on a deployed database.
- Responsive design
- Cross-browser compatible

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and layout
- **JavaScript** - Interactivity and functionality

## Installation

1. Clone the repository:
```bash
git@github.com:kingcollinsdev/welcome-frontend.git
```

2. Navigate to the project directory:
```bash
cd welcome-frontend
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

## Usage
This updates the items that are stored in the database.
await fetch(`https://welcome-backend-up4w.onrender.com/items/${id}/quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: item.quantity + 1,
      }),
    });

```javascript
// Example code snippet

```

## Project Structure

```
project-name/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # Main JavaScript file
├── images/             # Image assets
└── README.md           # Project documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Contact

Your Name - Collins Wachira - collinswachira2004@gmail.com

Project Link: [https://welcome-frontend-bice.vercel.app//](https://github.com/kingcollinsdev/welcome-frontend.git)


