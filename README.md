# Notum

A lesson-planning app made for teachers

## Quickstarts

- [Run locally](#how-to-run-this-project-locally)
- [Branch name guides](#branch-name-guides)
- [Installing packages guides](#installing-packages-guides)
- [API Documentation](#api-documentation)

## How to run this project locally

1. Clone this repository
   ```sh
   git clone https://github.com/chingu-voyages/v40-bears-team-37.git
   ```
2. Move into v40-bears-team-37 directory
   ```sh
   cd v40-bears-team-37
   ```
3. Install dependencies
   ```sh
   yarn
   ```
4. You can start the server and client together by running
   ```sh
   yarn start
   ```
5. Both applications should be running!
   For client go to: `localhost:3000`
   For server go to: `localhost:4000`

6. Create a .env file in the root directory when you get a chance. For now it can be empty.

## Branch name guides

1. Please name your branch with one of these options

- `feature/YOUR_BRANCH_NAME_HERE` - If you're making a new feature
- `fix/YOUR_BRANCH_NAME_HERE` - If you're making some bug fixes
- `hotfix/YOUR_BRANCH_NAME_HERE` - If you're making a quick fix that needs to merge quickly
- `refactor/YOUR_BRANCH_NAME_HERE` - If you're making some code refactoring

## Installing packages guides

Make sure to install from the root folder

For frontend:

```sh
yarn workspace client add PACKAGES_NAME
```

For backend:

```sh
yarn workspace server add PACKAGES_NAME
```

## API Documentation

When running locally, API docs is available at `http://localhost:4000/api/docs`

How to make a README: [Keys to a well written README](https://tinyurl.com/yk3wubft).
