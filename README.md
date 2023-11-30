# RESTful API Client

This project includes a TypeScript-based client for interacting with a RESTful API. It implements CRUD (Create, Read, Update, Delete) operations using HTTP methods, following REST principles.

## Approach and Logic

### API Client (`api.ts`)

1. **Modularity**: Each API operation is encapsulated in a separate asynchronous function. This promotes code reuse and separation of concerns, making it easier to maintain and update.

2. **TypeScript Types**: The use of TypeScript provides compile-time type checking, reducing runtime errors and improving the developer experience. Interfaces for request and response objects ensure consistency across different parts of the application.

3. **HTTP Semantics**: The functions use HTTP methods that align with RESTful principles:
   - `POST` for creating resources.
   - `GET` for retrieving resources.
   - `PUT` for updating/replacing resources entirely.
   - `DELETE` for removing resources.

   Using the correct HTTP methods makes the API intuitive for other developers and maintains consistency with REST standards.

4. **Axios**: The Axios library is used for HTTP requests due to its promise-based structure, which works well with the async/await syntax for readable and straightforward asynchronous code.

5. **Exporting Constants and Functions**: Constants and functions are exported to allow them to be reused in other modules, such as test suites, ensuring a single source of truth for things like the `baseURL`.

### Testing (`api.test.ts`)

1. **Jest Framework**: Jest is used for its simplicity in setting up and writing tests. It also provides excellent mocking capabilities.

2. **AAA Testing Pattern**: Tests are written following the Arrange-Act-Assert pattern to ensure that each test is clear and covers a specific aspect of the function it's testing.

3. **Mocking**: Axios is mocked to isolate tests from network requests, allowing us to control the request and response cycle. This ensures tests are fast, reliable, and do not have side effects.

4. **After Each Reset**: Mocks are reset after each test to prevent leakage between tests and ensure that each test runs in isolation.

5. **Separate Describe Blocks**: Each API function has its own `describe` block, making it clear what part of the API client the tests are covering. It also allows for scalability as more tests can be added to each block as needed.

6. **Error Handling**: While not shown in the basic examples, error handling tests would be crucial in a complete test suite to ensure the application can gracefully handle API failures.

By following these principles, we've created a robust and maintainable API client with a comprehensive test suite, which is essential for building reliable software applications.

## Getting Started

To use this API client, you'll need to first obtain the source code and install the necessary dependencies.

### Prerequisites

- Git
- Node.js
- npm

### Installation

1. Clone the repository:

```git clone https://github.com/charlesalo/PROMOTEXTER-RESTful-API.git```

2. Navigate to the project directory:
```cd PROMOTEXTER-RESTful-API```

3. Install the necessary npm packages:
```npm install```

Usage

Once the project is set up, you can import the functions from the api.ts file and use them to interact with the API:

```
import { createResource, getResource, updateResource, deleteResource } from './api';

// Example usage:
async function demo() {
  const newResource = await createResource({ name: 'New Resource', value: 10 });
  // ...
}
```

For running the tests, ensure you have Jest installed:
```npm install --save-dev jest @types/jest ts-jest```

Then run the tests with:
```npm test```

