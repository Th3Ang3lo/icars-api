## About the project
A Simple API to list cars and their brands.

## Requirements: NodeJS 16, Yarn and Docker.
Make sure you have them installed on your PC.

## Running the project
1 - Clone the project
```zsh
git clone https://github.com/th3ang3lo/icars-api.git
```

2 - Change the project directory
```zsh
cd icars-api
```

3 - Install yarn dependencies
```zsh
yarn
```

4 - Copy .env.example to .env file
```zsh
cp .env.example .env
```

5 - Create docker containers
```zsh
docker-compose up -d
```

6 - Running migrations
```zsh
yarn db:push
```

7 - Running seeds
```zsh
yarn seed
```

8 - Starting the project
```zsh
yarn dev
```

## The front-end can be found [here](https://github.com/lucasaugustscode/icars.git).
