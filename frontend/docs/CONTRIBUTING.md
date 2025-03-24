# Contributing to Gambia Land Registry On-Chain

Thank you for your interest in contributing to the Gambia Land Registry On-Chain project! This document provides guidelines and instructions for contributing to our open-source initiative.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Documentation Guidelines](#documentation-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Community](#community)

## Code of Conduct

Our project is committed to fostering an open and welcoming environment. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Git

### Setting Up the Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Gambia-Land-Registry-On-Chain.git
   cd Gambia-Land-Registry-On-Chain/frontend
   ```

3. Add the original repository as a remote to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/Gambia-Land-Registry-On-Chain.git
   ```

4. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Development Workflow

We follow a feature branch workflow:

1. Ensure your fork is up to date:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

3. Make your changes, following our [coding standards](#coding-standards)

4. Commit your changes following our [commit message guidelines](#commit-message-guidelines)

5. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a pull request against the `main` branch of the original repository

## Pull Request Process

1. Ensure your PR includes only the changes relevant to your feature or bugfix
2. Update documentation if necessary
3. Add tests for new functionality
4. Ensure all tests and linting pass:
   ```bash
   npm run lint
   npm run test
   ```
5. Fill out the PR template completely
6. Request a review from at least one maintainer
7. Incorporate feedback from reviewers
8. Once approved, a maintainer will merge your PR

## Coding Standards

### General Guidelines

- Follow the principle of single responsibility
- Write self-documenting code with clear naming
- Keep functions and components small and focused
- Use TypeScript for type safety
- Follow accessibility best practices

### Style Guide

We use ESLint and Prettier to enforce consistent coding styles. The configuration is provided in the project. To check your code:

```bash
npm run lint
```

### React Components

- Use functional components with hooks
- Follow the React hooks rules
- Keep components pure when possible
- Organize imports in this order:
  1. React and third-party libraries
  2. Components
  3. Hooks
  4. Types
  5. Assets

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach for responsive design
- Use CSS variables for theme colors defined in the Tailwind config

## Commit Message Guidelines

We follow the Conventional Commits specification for our commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types include:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to the build process or auxiliary tools

Examples:
- `feat(dashboard): add property registration form`
- `fix(auth): resolve login redirect issue`
- `docs(readme): update installation instructions`

## Documentation Guidelines

- Keep documentation up-to-date as code changes
- Document all public APIs, components, and important functions
- Write documentation in Markdown format
- Include examples when appropriate
- Document both "what" and "why"

### Component Documentation

Components should include:
- Purpose and usage
- Props description with types
- Example usage

## Testing Guidelines

We use Jest and React Testing Library for testing. All new features should include appropriate tests:

- Unit tests for utility functions
- Component tests for UI components
- Integration tests for key workflows

Run tests:
```bash
npm run test
```

Test coverage:
```bash
npm run test:coverage
```

### Test Structure

Follow the Arrange-Act-Assert pattern:
1. Arrange: Set up the test data and environment
2. Act: Take the action to test
3. Assert: Verify the results

## Issue Reporting Guidelines

When creating an issue, please use the provided templates and include:

1. A clear and descriptive title
2. A detailed description of the issue or feature request
3. Steps to reproduce (for bugs)
4. Expected behavior
5. Actual behavior
6. Screenshots if applicable
7. Environment information (browser, OS, etc.)

### Issue Labels

- `bug`: Something isn't working
- `feature`: New feature or enhancement
- `documentation`: Documentation improvements
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested

## Community

### Communication Channels

- GitHub Issues: Bug reports, feature requests, and discussions
- GitHub Discussions: General questions and community discussions
- Slack/Discord: Real-time chat (link to be provided)

### Recognition

All contributors will be recognized in our README and on our website. We deeply appreciate all contributions, no matter how small.

## License

By contributing to the Gambia Land Registry On-Chain project, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to the Gambia Land Registry On-Chain project! Your efforts help create a more secure and transparent land registry system for the people of Gambia.
