# SahakarBot - Frontend

![SahakarBot Banner](https://img.shields.io/badge/SahakarBot-Legal%20Assistant-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Modern React interface for the SahakarBot legal assistant**

[Backend Repo](https://github.com/omrawal/SahakarBot-Backend) | [Watch Tutorial](https://youtu.be/NdayU-saFXg) | [Live Demo](#)

---

## 📺 Video Tutorial

**[▶️ Watch: I Built an AI Legal Assistant in 15 Minutes](https://youtu.be/NdayU-saFXg)**

Complete walkthrough covering:
- React chatbot interface design
- API integration with FastAPI backend
- Chat history management
- Responsive UI/UX design
- Deployment strategies

---

## 🎯 About

SahakarBot Frontend is a modern, responsive React application that provides an intuitive chat interface for querying the Maharashtra Co-operative Societies Act, 1960. Built with Vite for optimal performance and developer experience.

### ✨ Key Features

- 💬 **Clean Chat Interface**: Simple, intuitive conversation UI
- 🔄 **Real-time Responses**: Instant feedback with loading states
- 📜 **Chat History**: Maintains conversation context
- 📱 **Responsive Design**: Works seamlessly on all devices
- ⚡ **Fast Performance**: Vite-powered build optimization
- 🎨 **Modern UI**: Clean, professional design

---

## 🏗️ Architecture

```
React Frontend (ChatBot.jsx)
    ↓
User Input & State Management
    ↓
HTTP POST Request to Backend (/query)
    ↓
FastAPI Backend (SahakarBot-Backend)
    ↓
RAG Pipeline Processing
    ↓
Response from Backend
    ↓
Display in Chat Interface
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **JavaScript (ES6+)** | Programming language |
| **CSS3** | Styling |
| **Fetch API** | HTTP requests to backend |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Running backend API (see [Backend Repo](https://github.com/omrawal/SahakarBot-Backend))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/omrawal/SahakarBot-Frontend.git
cd SahakarBot-Frontend
```

2. **Install dependencies**

```bash
npm install
```

or

```bash
yarn install
```

3. **Configure API endpoint**

Update the API URL in your component (default: http://localhost:8000/query)

4. **Run development server**

```bash
npm run dev
```

or

```bash
yarn dev
```

App will be available at http://localhost:5173

---

## 📁 Project Structure

```
SahakarBot-Frontend/
├── src/
│   ├── App.jsx              # Main application component
│   ├── ChatBot.jsx          # Custom chatbot component
│   ├── App.css              # Application styles
│   └── main.jsx             # Entry point
├── public/
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 💻 Usage

### Basic Chat Flow

1. User types a question in the input field
2. Click "Send" or press Enter
3. Question is sent to FastAPI backend
4. Loading indicator appears while processing
5. Answer is displayed in the chat
6. Chat history is maintained for context

### Example Questions

- "What is the registration process for a society?"
- "What are the eligibility criteria in Section 25?"
- "What documents are required for registration?"

---

## 🔧 Configuration

### API Endpoint

Update the backend URL in ChatBot.jsx:

```javascript
const response = await fetch("YOUR_BACKEND_URL/query", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    question: input,
    chat_history: chatHistory,
  }),
});
```

### Styling

Customize the appearance by modifying App.css:
- Colors
- Fonts
- Layout dimensions
- Animation timings

---

## 🐳 Deployment

### Build for Production

```bash
npm run build
```

or

```bash
yarn build
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## 🌐 Related Repositories

- **Backend**: [SahakarBot-Backend](https://github.com/omrawal/SahakarBot-Backend) - FastAPI + LangChain + ChromaDB

---

## 🎥 Tutorial Video

Learn how to build this project step-by-step:

**[I Built an AI Legal Assistant in 15 Minutes (FastAPI + LangChain + ChromaDB Tutorial)](https://youtu.be/NdayU-saFXg)**

Topics covered:
- React chatbot component creation
- API integration patterns
- State management for chat history
- UI/UX best practices
- Deployment options

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Om Rawal**

- GitHub: [@omrawal](https://github.com/omrawal)
- YouTube: [Watch Tutorial](https://youtu.be/NdayU-saFXg)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [FastAPI](https://fastapi.tiangolo.com/) - Backend framework

---

**⭐ Star this repo if you found it helpful!**

[Backend](https://github.com/omrawal/SahakarBot-Backend) | [Frontend](https://github.com/omrawal/SahakarBot-Frontend) | [Tutorial](https://youtu.be/NdayU-saFXg)
