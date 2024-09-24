<p align="center">
    <h1 align="center">AWS-CD-CHATBOT-FRONTEND</h1>
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)

---

## 📂 Repository Structure

```sh
└── aws-cd-chatbot-frontend/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.vue
    │   ├── components
    │   ├── main.js
    │   ├── socket.js
    │   ├── store.js
    │   ├── style.css
    │   └── utils
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/index.html) | Defines the main structure and content for the front-end interface of the AWS CD chatbot. Responsible for rendering the application in the browser, linking necessary resources, and initializing the chatbot functionality through the main script. |
| [postcss.config.js](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/postcss.config.js) | Configures TailwindCSS and Autoprefixer plugins to enhance styling for the chatbot frontend, complementing the projects architecture. |
| [vite.config.js](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/vite.config.js) | Defines Vite configuration with the Vue plugin for the AWS CD Chatbot Frontend. Facilitates Vue application bundling and dev server setup within the repository, enhancing the development experience. |
| [package.json](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/package.json) | Manages dependencies and scripts for AWS CD Chatbot Frontend. Utilizes Vite for development and build tasks. Includes Vue for frontend framework and Socket.IO for real-time communication. Dependencies cover font icons, cookies, and UUID generation. |
| [tailwind.config.js](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/tailwind.config.js) | Defines Tailwind CSS configuration to purge unused styles, extend theme, and include plugins. Influences styling across Vue components and JavaScript files. |
| [package-lock.json](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/package-lock.json) | The `package-lock.json` file in the `aws-cd-chatbot-frontend` repository serves as a crucial lockfile to ensure consistent and reliable dependency management for the project. It captures specific versions of all package dependencies required to build and run the frontend application, safeguarding against unexpected changes in dependencies. This file plays a key role in maintaining a stable and reproducible development environment for the chatbot frontend by locking down package versions. |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [socket.js](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/socket.js) | Connects to a socket server, initializes a session, and sends/receives chat messages. Manages chatbot interactions and handles user messages in real-time for the AWS CD Chatbot Frontend. |
| [main.js](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/main.js) | Implements Vue app setup with FontAwesome icons. Enhances UI with robot, user, send, and settings icons. Mounts App component to DOM element #app. |
| [style.css](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/style.css) | Implements global styling for the chatbot interface with Tailwind CSS utilities. Sets the font-family and adjusts the chatbot height based on viewport size, ensuring consistent design across devices. |
| [App.vue](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/App.vue) | Initiates and sets up the socket connection for the Chatbot component in the AWS CD Chatbot Frontend repository. The App.vue file orchestrates the socket initialization process upon component mounting, enabling real-time communication capabilities for the chatbot feature. |
| [store.js](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/store.js) | Manages real-time chat messages, session ID, and loading state for the frontend application. Enables adding messages, setting session ID, and toggling loading state as part of the interactive chatbot experience in Vue.js. |

</details>

<details closed><summary>src.utils</summary>

| File | Summary |
| --- | --- |
| [session.js](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/utils/session.js) | Enables setting chatbot session ID using cookies and updating it in the store to manage user sessions effectively. |

</details>

<details closed><summary>src.components</summary>

| File | Summary |
| --- | --- |
| [TextBox.vue](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/components/TextBox.vue) | Enables sending messages via a chat interface. Handles text input, message submission, and loading state. Integrated with store and socket functionalities to facilitate real-time communication in the AWS CD Chatbot frontend. |
| [Chatbot.vue](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/components/Chatbot.vue) | Illustrates Chatbot UI layout with components ChatbotHeader, ChatbotMessages, and TextBox for AWS CD Chatbot frontend. Organizes elements in a responsive, visually appealing design within a bordered container for effective user interaction. |
| [ChatbotMessage.vue](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/components/ChatbotMessage.vue) | Defines chatbot message display based on sender, styling it differently for user and chatbot interactions within the AWS CD Chatbot Frontend to enhance visual distinction and user experience. |
| [ChatbotHeader.vue](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/components/ChatbotHeader.vue) | Renders a stylized header for the AWS Chatbot interface, featuring a robot icon and the label AWS Bot. Positioned within a flexible and aesthetically pleasing layout, enhancing visual appeal and branding consistency throughout the application. |
| [ChatbotMessages.vue](https://github.com/JorgeFi18/aws-cd-chatbot-frontend/blob/main/src/components/ChatbotMessages.vue) | Displays chatbot messages and loading status. Renders ChatbotMessage components for each message from the store. Shows a loading icon and text when loading. Key component in the chatbot frontend for real-time message display. |

</details>

---

## 🚀 Getting Started

### 🔖 Prerequisites

**JavaScript**: `version 18+`

### 📦 Installation

Build the project from source:

1. Clone the aws-cd-chatbot-frontend repository:
```sh
❯ git clone https://github.com/JorgeFi18/aws-cd-chatbot-frontend
```

2. Navigate to the project directory:
```sh
❯ cd aws-cd-chatbot-frontend
```

3. Install the required dependencies:
```sh
❯ npm install
```

### 🤖 Usage

To run the project, execute the following command:

```sh
❯ npm run dev
```