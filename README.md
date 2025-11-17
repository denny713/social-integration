# Social Integration

A comprehensive React.js application that provides seamless social media authentication and authorization for users through multiple popular platforms.

## 🌟 Overview

This project is a robust social login solution built with React.js that enables users to authenticate and authorize their accounts using their existing social media profiles. The application supports authentication through Google, Facebook, Instagram, and Twitter/X, providing a smooth and secure user experience.

## 🎯 Features

- **Multi-Platform Authentication**: Support for Google, Facebook, Instagram, and Twitter/X
- **Secure Authorization Flow**: Implements OAuth 2.0 standards for secure authentication
- **User State Management**: Redux-powered state management for user sessions
- **Responsive Design**: Mobile-friendly interface that works across all devices
- **Modern React Architecture**: Built with React hooks and functional components
- **Clean UI Components**: Modular and reusable social login buttons

## 🚀 Supported Social Platforms

### Google OAuth 2.0
- Secure authentication using Google's OAuth service
- Access to basic user profile information

### Facebook Login
- Facebook Login integration with permissions management
- Profile data retrieval with user consent

### Instagram Basic Display
- Instagram authentication for content access
- User profile and media permissions

### Twitter/X API
- Twitter OAuth integration
- User authentication and profile access

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Package Manager**: Yarn
- **State Management**: Redux
- **Styling**: CSS3 with modern design principles
- **Authentication**: OAuth 2.0 protocols
- **Build Tool**: Create React App

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- Yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/denny713/social-integration.git
   cd social-integration
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory and add your social media app credentials:
   ```env
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id
   REACT_APP_INSTAGRAM_CLIENT_ID=your_instagram_client_id
   REACT_APP_TWITTER_CLIENT_ID=your_twitter_client_id
   REACT_APP_TWITTER_CLIENT_SECRET=your_twitter_client_secret
   ```

4. **Start the development server**
   ```bash
   yarn start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
social-integration/
├── public/                 # Public assets
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── api/               # API integration modules
│   │   └── api.js
│   ├── assets/            # Static assets and styles
│   │   └── styles.css
│   ├── components/        # Reusable React components
│   │   └── SocialButton.js
│   ├── pages/             # Application pages
│   │   ├── AuthCallback.js
│   │   ├── LoginPage.js
│   │   └── MainPage.js
│   ├── redux/             # Redux store and actions
│   │   ├── store.js
│   │   ├── userActions.js
│   │   └── userReducer.js
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   └── routes.js          # Application routing
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🔧 Available Scripts

### Development
```bash
yarn start          # Start development server
yarn test           # Run test suite
yarn build          # Create production build
yarn eject          # Eject from Create React App (one-way operation)
```

### Code Quality
```bash
yarn lint           # Run ESLint for code linting
yarn format         # Format code with Prettier
```

## 🔐 Security Considerations

- All OAuth flows follow industry-standard security practices
- User tokens are securely managed and stored
- HTTPS is required for production deployments
- Environment variables are used for sensitive configuration
- Cross-Site Request Forgery (CSRF) protection implemented

## 🌐 API Integration

The application integrates with the following APIs:

- **Google OAuth 2.0 API**: For Google authentication
- **Facebook Login API**: For Facebook authentication
- **Instagram Basic Display API**: For Instagram authentication
- **Twitter API v2**: For Twitter/X authentication

## 📱 Usage

1. **Navigate to the Login Page**: Users are presented with social login options
2. **Choose Social Platform**: Click on desired social media platform button
3. **Authorize Application**: Complete OAuth flow on the social platform
4. **Access Main Application**: Redirected to main page upon successful authentication
5. **User Session Management**: User state persisted using Redux

## 🤝 Contributing

We welcome contributions to improve the social integration functionality:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Requirements

- Node.js 16.x or higher
- Yarn 1.22.x or higher
- Valid OAuth credentials for each social platform
- HTTPS domain for production deployment

## 🔍 Troubleshooting

### Common Issues

**OAuth Redirect URI Mismatch**
- Ensure redirect URIs are properly configured in each social platform's developer console
- Match the exact URL including protocol (http/https)

**Environment Variables Not Loading**
- Restart the development server after adding new environment variables
- Ensure `.env` file is in the project root directory

**Social Platform Authentication Errors**
- Verify API credentials are correctly set in environment variables
- Check that your application is approved and active on each platform

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Denny Agstin** - [denny713](https://github.com/denny713)

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Social media platforms for providing robust OAuth APIs
- Open source contributors who made this project possible

---

For more detailed information about specific implementation details, please refer to the source code documentation or open an issue for questions.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
