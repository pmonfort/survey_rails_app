# Survey Rails App

A modern survey application built with Ruby on Rails, featuring a clean Tailwind CSS interface and interactive survey forms with real-time score selection.

## Features

### 🎨 **Modern UI Design**
- **Tailwind CSS** integration with professional styling
- **Responsive design** that works on all devices
- **Clean navigation** with user authentication states
- **Professional color scheme** using indigo palette

### 🔐 **User Authentication**
- **Devise integration** for user registration and login
- **Styled authentication pages** (sign in, sign up, forgot password)
- **User session management** with proper navigation

### 📊 **Survey Responses**
- **Interactive score selection** (1-10 rating system)
- **Text input** for survey responses
- **Real-time UI feedback** with Stimulus controllers
- **Responsive button layout** that adapts to screen size

### 📋 **Response Management**
- **Professional list view** of all responses
- **Detailed response pages** with metadata
- **CRUD operations** (Create, Read, Update, Delete)
- **Clean navigation** between pages

## Technology Stack

- **Ruby on Rails 8.0** - Web framework
- **PostgreSQL** - Database
- **Tailwind CSS** - Styling framework
- **Stimulus** - JavaScript framework
- **Devise** - Authentication
- **Importmap** - JavaScript module management

## Getting Started

### Prerequisites
- Ruby 3.3.5+
- Rails 8.0+
- PostgreSQL
- Node.js (for asset compilation)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd survey_rails_app
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Setup database**
   ```bash
   rails db:create
   rails db:migrate
   ```

4. **Install JavaScript dependencies**
   ```bash
   bin/importmap pin @hotwired/stimulus @hotwired/stimulus-loading
   ```

5. **Build assets**
   ```bash
   rails tailwindcss:build
   ```

6. **Start the server**
   ```bash
   rails server
   ```

7. **Visit the application**
   ```
   http://localhost:3000
   ```

## Development

### Running Tests
```bash
bundle exec rspec
```

### Building CSS
```bash
rails tailwindcss:build
```

### Linting
```bash
bundle exec rubocop
```

## Application Structure

### Controllers
- `ApplicationController` - Base controller with authentication
- `HomeController` - Landing page
- `ResponsesController` - Survey response CRUD operations

### Models
- `User` - User authentication (Devise)
- `Response` - Survey responses with text and score fields

### JavaScript
- `ScoreController` (Stimulus) - Interactive score button selection
- Importmap configuration for modern JavaScript

### Styling
- Tailwind CSS with custom component classes
- Responsive design patterns
- Professional UI components

## Key Features Implementation

### Interactive Score Selection
The survey form features a 1-10 rating system with:
- **Visual feedback** - Selected buttons highlight in indigo
- **Stimulus integration** - Clean JavaScript organization
- **Responsive layout** - Flexbox design that adapts to screen size
- **Form integration** - Seamless Rails form submission

### Authentication Flow
Complete user authentication with:
- **Styled login/signup pages** - Professional design
- **Error handling** - Proper validation messages
- **Navigation integration** - Context-aware navigation

### Response Management
Full CRUD interface for survey responses:
- **List view** - Professional cards with metadata
- **Detail pages** - Complete response information
- **Edit forms** - Update existing responses
- **Delete functionality** - Safe deletion with confirmations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
