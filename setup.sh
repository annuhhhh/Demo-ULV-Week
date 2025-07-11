#!/bin/bash

echo "🚀 FitPlan Pro Setup Script"
echo "=========================="

# Check if Node.js is installed
if command -v node &> /dev/null; then
    echo "✅ Node.js is already installed: $(node --version)"
else
    echo "❌ Node.js is not installed"
    echo ""
    echo "Please install Node.js first:"
    echo ""
    echo "Option 1 - Using Homebrew (recommended):"
    echo "  1. Install Homebrew: https://brew.sh/"
    echo "  2. Run: brew install node"
    echo ""
    echo "Option 2 - Download from Node.js website:"
    echo "  1. Visit: https://nodejs.org/"
    echo "  2. Download and install the LTS version"
    echo ""
    echo "Option 3 - Using nvm (Node Version Manager):"
    echo "  1. Install nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "  2. Restart terminal"
    echo "  3. Run: nvm install node"
    echo ""
    exit 1
fi

# Check if npm is installed
if command -v npm &> /dev/null; then
    echo "✅ npm is already installed: $(npm --version)"
else
    echo "❌ npm is not installed"
    echo "Please install npm or reinstall Node.js"
    exit 1
fi

echo ""
echo "📦 Installing project dependencies..."
npm install

echo ""
echo "🔧 Setting up environment variables..."
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Created .env file from template"
    echo ""
    echo "⚠️  IMPORTANT: Please edit the .env file and add your OpenAI API key:"
    echo "   OPENAI_API_KEY=your_actual_openai_api_key_here"
    echo ""
    echo "   Get your API key from: https://platform.openai.com/api-keys"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the application:"
echo "  npm run dev"
echo ""
echo "Then open: http://localhost:3000" 