# DS.E - Design System for Engineering

A learning project exploring monorepo setup and design system implementation. This project was created to understand and demonstrate how to structure and manage a design system using a monorepo approach with Lerna and Yarn workspaces. It serves as a practical example of setting up a monorepo for frontend development.

## 📁 Project Structure

```
DS.E/
├── packages/           # Shared packages
│   ├── react/         # React components library
│   └── scss/          # SCSS foundation and utilities
├── playgrounds/       # Development and testing environment
└── ...
```

## 📦 Packages

### `@ds.e/react`
A React component library that implements the design system components. Built with:
- React
- TypeScript
- SCSS modules

### `@ds.e/scss`
The foundation of the design system, providing:
- Variables
- Colors
- Typography
- Mixins
- Utility classes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Yarn

### Installation
```bash
# Install dependencies
yarn install

# Build all packages
yarn build
```

### Development
```bash
# Start the playground development server
yarn dev

# Build a specific package
yarn lerna run build --scope=@ds.e/react
```

## 🛠 Tech Stack

- **Package Management**: Yarn Workspaces
- **Monorepo Tool**: Lerna
- **Frontend Framework**: React
- **Styling**: SCSS
- **Type Safety**: TypeScript
- **Build Tool**: Vite (for playground)

## 📝 Features

- **Monorepo Structure**: Efficient management of multiple packages
- **Component Library**: Reusable React components
- **Design System**: Consistent styling and theming
- **Development Environment**: Interactive playground for component development
- **Type Safety**: Full TypeScript support
- **Modern Styling**: SCSS with CSS variables for theming

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Acknowledgments

- [Lerna](https://lerna.js.org/) for monorepo management
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) for package management
- [React](https://reactjs.org/) for the component library
- [Vite](https://vitejs.dev/) for the development environment
