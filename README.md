# Vancouver Food Marketplace - Replit Deployment Guide

This is a simplified version of the Vancouver Food Marketplace application, specifically optimized for easy deployment on Replit. This version includes:

1. Fixed path alias configuration to avoid import errors
2. Simplified in-memory database instead of Cloudflare D1
3. Basic authentication system
4. Core UI components for the marketplace

## Getting Started on Replit

1. Create a new Replit project using the Next.js template
2. Upload all these files to your Replit project
3. Make sure to maintain the directory structure:
   - src/app/ - Contains all the Next.js pages
   - src/components/ - UI components
   - src/lib/ - Utility functions and database
   - src/styles/ - CSS styles
   - public/ - Static assets

## Key Features

- User authentication (login/register)
- Different user roles (buyer, seller, transporter)
- Dashboard for each user type
- Product listings and search
- Transportation matching system
- Messaging between users

## File Structure

```
vancouver-food-marketplace/
├── public/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   └── page.js
│   │   ├── dashboard/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   ├── lib/
│   │   ├── auth.js
│   │   └── db.js
│   └── styles/
│       └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Deployment Instructions

1. After uploading all files to Replit, click "Run" to start the development server
2. Replit will automatically install dependencies and start the application
3. Your application will be available at the URL provided by Replit

## Troubleshooting

If you encounter any issues:

1. Check the console for error messages
2. Verify that all files are in the correct directories
3. Make sure the path aliases in next.config.js are correctly configured
4. Try restarting the Replit server

## Next Steps

This is a simplified version of the full application. To expand it:

1. Add more pages and functionality
2. Implement a persistent database
3. Add image upload capabilities
4. Enhance the user interface

## Credits

Created for Vancouver Food Marketplace - connecting buyers with local fishermen and farmers in Vancouver, BC.
