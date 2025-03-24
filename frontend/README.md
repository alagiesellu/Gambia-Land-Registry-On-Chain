# Gambia Land Registry On-Chain

A modern, transparent and secure blockchain-based land registry system for the Gambia.

![Gambia Land Registry](https://images.unsplash.com/photo-1580974852861-c381510bc98e?q=80&w=1200&auto=format&fit=crop)

## Overview

The Gambia Land Registry On-Chain is an open-source initiative to modernize land registration and management in the Gambia using blockchain technology. The platform provides a transparent, secure, and efficient way to register, verify, and transfer land ownership.

### Key Features

- **Secure Land Registration**: Blockchain-based registry ensures tamper-proof records
- **Transparent Verification**: Easily verify land ownership with complete transparency
- **Efficient Processing**: Streamlined workflows reduce bureaucracy and processing times  
- **User-Friendly Interface**: Accessible to all citizens regardless of technical expertise
- **Document Management**: Secure storage and verification of land documents
- **Mobile Responsive**: Access from any device, anywhere

## Technology Stack

- **Frontend**: React, TypeScript, Vite
- **UI Framework**: Tailwind CSS, Shadcn UI
- **State Management**: React Query, React Context
- **Routing**: React Router
- **Form Handling**: React Hook Form, Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Gambia-Land-Registry-On-Chain.git
   cd Gambia-Land-Registry-On-Chain/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open http://localhost:5173 in your browser

### Production Build

```bash
npm run build
# or
yarn build
```

## Project Structure

```
frontend/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   │   ├── dashboard/  # Dashboard-specific components
│   │   ├── home/       # Home page components
│   │   ├── layout/     # Layout components (header, footer)
│   │   └── ui/         # Shared UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helper functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Roadmap

- [x] Initial UI implementation
- [x] User dashboard
- [x] Property management
- [x] Document handling
- [ ] Blockchain integration
- [ ] Mobile app
- [ ] Offline support
- [ ] Multi-language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The Government of the Gambia for supporting open-source initiatives
- All contributors who have helped shape this project
- The open-source community for providing amazing tools and libraries

## Contact

For questions or support, please open an issue on GitHub or contact the maintainers.

---

Built with ❤️ for the people of Gambia
