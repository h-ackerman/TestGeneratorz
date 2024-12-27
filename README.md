# TestGenerator

TestGenerator is a comprehensive application designed to scan Java projects, generate test cases, and provide recommendations for code improvement. This app follows a microservices architecture, leveraging several Spring Boot applications, an Angular front-end, and Keycloak for authentication and authorization.

---

## Folder Structure

The project consists of the following components:

### 1. **EurekaServer**
- **Description**: Service discovery server using Netflix Eureka.
- **Port**: 8761
- **Path**: `/TestGenerator/eureka-server`

### 2. **Gateway**
- **Description**: API Gateway for routing requests to the respective microservices.
- **Port**: 8888
- **Path**: `/TestGenerator/gateway`

### 3. **JavaScanner**
- **Description**: Microservice responsible for scanning Java code and identifying classes for testing.
- **Port**: 8088
- **Path**: `/TestGenerator/java-scanner`

### 4. **SpringBoot-ChatGPT**
- **Description**: Microservice that integrates with OpenAI API to generate test cases and provide recommendations.
- **Port**: 8081
- **Path**: `/TestGenerator/springboot-chatgpt`

### 5. **Front-End (Angular)**
- **Description**: User interface for managing scans, viewing recommendations, and test cases.
- **Port**: 4200
- **Path**: `/projet`



---

## Getting Started

### Prerequisites
- Java 17+
- Node.js & npm
- Angular CLI
- Docker
- Maven 

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/h-ackerman/TestGeneratorz.git
    cd testgenerator
    ```

2. Build and run each Spring Boot microservice:
    ```bash
    cd TestGenerator/eureka-server
    mvn spring-boot:run

    cd ../gateway
    mvn spring-boot:run

    cd ../java-scanner
    mvn spring-boot:run

    cd ../springboot-chatgpt
    mvn spring-boot:run
    ```

3. Set up and run Keycloak:
    ```bash
    docker run -d -p 8080:8080 --name keycloak -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev
    ```

4. Run the Angular front-end:
    ```bash
    cd projet
    npm install
    ng serve
    ```

---

## API Endpoints

### Gateway Endpoints
| Endpoint                  | Description                     |
|---------------------------|---------------------------------|
| `/scanProject/**`         | Routes requests to JavaScanner  |
| `/bot/**`                 | Routes requests to ChatGPT Api  |

---

## How It Works

1. **Authentication**: Users log in via Keycloak.
2. **Project Scanning**: Users upload a Java project through the front-end.
3. **Class Analysis**: JavaScanner analyzes the project to identify classes requiring test cases.
4. **Test Generation**: The SpringBoot-ChatGPT service generates test cases and recommendations using OpenAI API.
5. **Results Display**: Users view results on the Angular-based front-end.



---

## Tools and Technologies
- **Backend**: Spring Boot, Netflix Eureka, OpenAI API
- **Frontend**: Angular
- **Authentication**: Keycloak
- **DevOps**: Docker

---



