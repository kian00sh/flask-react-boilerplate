# Flask React Boilerplate

Boilerplate for a Flask backend and React client including:

* ES6 transpiling via Webpack
* Hot module reloading via Webpack Dev Server
* State management via Redux
* Theme provider using Material-UI
* Tests via Pytest and Jest
* Linting via Pylint and Eslint

## Dependencies

To install the boilerplate, you can run:

```bash
git clone https://github.com/kian00sh/flask-react-boilerplate
cd flask-react-boilerplate
yarn
python3 -m venv .env
source .env/bin/activate
pip3 install -r requirements.txt
```

## Quickstart

Start react app on port 3000 and flask backend on port 8080 for development (recommended for development):
```
yarn dev
```

Start react app for development on port 3000:
```
yarn start
```

Build react app for production in `/build`:
```
yarn build
```

Compress react app using webpack in production environment:
```
yarn compress
```

Build react app and start flask backend on port 8080:
```
yarn production
```

Start flask backend on port 8080:
```
yarn serve
```

Start flask backend in development environment and debug mode on port 8080:
```
yarn serve-dev
```

Lint react frontend:
```
yarn lint-js
```

Lint flask backend:
```
yarn lint-py
```

Lint react and flask:
```
yarn lint
```

Run test for react frontend:
```
yarn jest
```

Run test for the whole application by building react app, linting both ends, testing react with jest and flask with pytest:
```
yarn test
```

# Author  
- Name: Kianoosh Geravesh  
- Email: [kiaplato@gmail.com](mailto:kiaplato@gmail.com)  
