# QR Code Based Seating Arrangement

A simple, mobile-friendly web application that helps event guests find their table and seat numbers quickly by scanning a QR code.

## 🌟 Features

- **Quick Search**: Guests can search their name to instantly find their table and seat number
- **Auto-suggestions**: As you type, matching names appear for quick selection
- **View All Tables**: Option to browse all tables and guests
- **Mobile-Friendly**: Designed to work perfectly on smartphones
- **QR Code Generator**: Built-in tool to generate a QR code for your event
- **Free Hosting**: Can be hosted for free on GitHub Pages

## 📁 Project Structure

```
├── index.html          # Main seating search page
├── qr-generator.html   # QR code generator page
├── css/
│   └── style.css       # Styles for the application
├── js/
│   ├── data.js         # Guest seating data
│   └── app.js          # Application logic
└── README.md           # This file
```

## 🚀 Deployment (Free on GitHub Pages)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the **+** icon in the top right and select **New repository**
3. Name it `seating-arrangement` (or any name you prefer)
4. Make sure it's set to **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Website (Easiest)**

1. In your new repository, click **uploading an existing file**
2. Drag and drop all files and folders from this project
3. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/seating-arrangement.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**
6. Wait 2-3 minutes for deployment

### Step 4: Access Your Site

Your site will be available at:

```
https://YOUR_USERNAME.github.io/seating-arrangement/
```

## 📱 Generate QR Code

1. Open `qr-generator.html` (or visit `https://YOUR_USERNAME.github.io/seating-arrangement/qr-generator.html`)
2. Enter your hosted URL
3. Click **Generate QR Code**
4. Download and print the QR code for your event

## ✏️ Customizing Guest Data

Edit the `js/data.js` file to update the guest list:

```javascript
const seatingData = [
  { name: "Guest Name", table: 1, seat: 1 },
  { name: "Another Guest", table: 1, seat: 2 },
  // Add more guests...
];

const totalTables = 7; // Update this number if you have more/fewer tables
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `css/style.css` under `:root`
- **Logo/Icon**: Change the emoji in `index.html` header section
- **Title**: Update the `<title>` tag and header text in `index.html`

## 📋 Requirements

- No server required (static files only)
- Works in any modern web browser
- No dependencies to install

## 🆓 Free Hosting Alternatives

Besides GitHub Pages, you can also use:

- [Netlify](https://netlify.com) - Drag and drop deployment
- [Vercel](https://vercel.com) - Connect to GitHub for auto-deploy
- [Cloudflare Pages](https://pages.cloudflare.com) - Fast global CDN

## 📄 License

This project is open source and available for personal and commercial use.
