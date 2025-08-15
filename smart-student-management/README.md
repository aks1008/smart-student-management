# SmartStudentManagement

## Purpose & Introduction

SmartStudentManagement is a modern web application designed to help teachers efficiently manage student information and gain actionable insights into student performance. The application provides:

- **Student Management:** Teachers can view and manage a comprehensive list of students, easily identify which students are lagging in specific subjects, and access detailed insights to support student progress.
- **AI-Powered Chatbot:** The integrated chatbot leverages Model Context Protocol (MCP) with Agents in Langchain to connect to both the database and OpenAI. This allows teachers to ask questions in natural language and receive insights about student performance, trends, and other relevant information instantly.

The combination of a user-friendly interface and advanced AI-driven analytics empowers educators to make data-informed decisions and provide targeted support to their students.

## Project Structure

```
smart-student-management/
├── angular.json
├── package.json
├── README.md
├── tsconfig*.json
├── public/
│   └── favicon.ico
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   ├── server.ts
│   ├── styles.scss
│   └── app/
│       ├── app.config*.ts
│       ├── app.html
│       ├── app.routes*.ts
│       ├── app.scss
│       ├── app.spec.ts
│       ├── app.ts
│       ├── components/
│       │   ├── chat-bot/
│       │   ├── header/
│       │   └── student-grid/
│       └── services/
│           ├── chatbot.ts
│           └── student.ts
└── src/assets/
    ├── logo.svg/png/webp
    └── mock-students.json
```

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
