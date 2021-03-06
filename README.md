<h1 align="center">FamilyBudget App</h1>
  <p align="center">
    <a href="https://github.com/Luzkan/FamilyBudget/blob/main/docs/CHANGELOG.md">CHANGELOG.md</a>
    ยท
    <a href="https://github.dev/Luzkan/FamilyBudget/tree/main/backend">Frontend (React/TypeScript)</a>
    ยท
    <a href="https://github.com/Luzkan/FamilyBudget/tree/main/backend">Backend (Django/Python)</a>
  </p>
</p>

Hey. ๐

I didn't have any solo-dev full-stack sample app in my portfolio, so now I have. This project was done in 4 days for one of the recruitment process steps.

![Full Functionality Overview (.gif)](./docs/img/v1_0_1_presentation.gif)

## Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Managing Project](#-managing-project)
- [Database](#%EF%B8%8F-database)
- [API Communication](#-api-communication)
- [Considerations](#-considerations)
  - [Backend Structure Design](#%EF%B8%8F-backend-structure-design)
  - [Frontend Structure Design](#%EF%B8%8F-frontend-structure-design)
  - [Security](#-security)
  - [Database](#-database)
  - [Querying](#-querying)

---

## ๐ **Quick Start**

_Launch bash and type in..._

```cmd
./scripts/one_script_wonder.sh
```

_...website available at [localhost:8000](http://localhost:8000/)!_

---

## โจ Features

- [x] Implementation Technologies:
  - โ๏ธ Backend:
    - [Python](https://www.python.org/downloads/) 3.10
    - [Django](https://www.djangoproject.com/) 4.0
  - ๐๏ธ Frontend:
    - [TypeScript](https://www.typescriptlang.org/) 4.6
    - [React](https://pl.reactjs.org/) 17.0
      - [React Redux](https://react-redux.js.org/) 7.2
      - [React Bootstrap](https://react-bootstrap.github.io/) 2.2
    - [Webpack](https://webpack.js.org/) 5.70
  - ๐ฒ Communication:
    - REST API
      - โ๏ธ Backend: [Django Rest Framework](https://www.django-rest-framework.org/)
      - ๐๏ธ Frontend: [Axios](https://github.com/axios/axios)
  - ๐ท Continuous Integration:
    - โ๏ธ Backend:
      - [Bandit](https://github.com/PyCQA/bandit)
      - [Pylint](https://pylint.org/)
      - [Flake8](https://flake8.pycqa.org/en/latest/)
    - ๐๏ธ Frontend:
      - [Prettier](https://prettier.io/)
      - [ESLint](https://eslint.org/)
    - ๐๏ธ Docs:
      - [Markdown Lint](https://github.com/igorshubovych/markdownlint-cli)
- [x] Implementation Design:
  - โ๏ธ Backend:
    - "Screaming" Architecture
  - ๐๏ธ Frontend:
    - Self-Checkout Hierarchy
    - Tiny Components
    - Separation of Concerns
  - ๐๏ธ Docs:
    - Medium Commits
    - [Tags](https://github.com/Luzkan/FamilyBudget/tags)
    - [`CHANGELOG.md`](https://github.com/Luzkan/FamilyBudget/blob/main/docs/CHANGELOG.md)
  - ๐ง Dev-Style:
    - Deadline Driven Development
      - _(a pinch of time compared to how much there should be for such a project)_
- [x] Functionalities
  - [x] Responsiveness
  - [x] Registration / login
  - [x] Token Authorization
  - [x] Users can create budgets
  - [x] Users can manage users assigned to a given budget
  - [ ] Tests
  - [x] Pagination
  - [x] Filtering
  - [x] Multi-language Support

## ๐งโ๐ญ Managing Project

You can manage the project via [shell scripts](./scripts/) (that can be launched on Unix systems or w/ [git bash](https://git-scm.com/downloads) on Windows). These scripts contain some common routines that you might be interested in.

#### ๐๏ธ **First-time launch:**

- [**`./scripts/one_script_wonder.sh`**](./scripts/one_script_wonder.sh)
  - Runs the whole project from scratch. Initializes, makes database migrations and starts containers.
- [**`./scripts/initialize.sh`**](./scripts/initialize.sh)
  - Created Docker Volume nad initializes the project _(no-cache)_.
- [**`./scripts/setup.sh`**](./scripts/setup.sh)
  - Builds _Frontend_ and _Backend_

#### ๐จโ๐ง **Developing**

- [**`./scripts/migration.sh`**](./scripts/migration.sh)
  - Does the `python manage.py makemigrations` && `python manage.py migrate` on docker container.
- [**`./scripts/rebuild.sh`**](./scripts/rebuild.sh)
  - Same as `one_script_wonder.sh` but w/o Volume creating and using cache.
- [**`./scripts/up.sh`**](./scripts/up.sh)
  - Basically `docker-compose -d up`.

#### โ๏ธ **Linter Settings**

There are lots of files, I know. Tl;dr, these are three rules on frontend:

- No Semicolons
- No Spaces between the methods name and parenthesis
- Double Quotes

---

## ๐๏ธ Database

### Models/Interaction Diagram

It's quite simple to understand, refer to this pseudo-UML diagram below. It contains model, interaction, and implementation perspectives.

![./docs/img/database.png](./docs/img/database.png)

---

## ๐ช API Communication

All the communication is handled by _Services_ (`*.service.ts`), which can be found in the `/frontend/src/services/` directory. Even though this project is made with React framework, this is the idea that I came across when doing some [Angular projects](https://angular.io/guide/architecture-services).

These services can be used by anyone, but in this app, everything is exclusively handled by the _State Creators_ - they are placed inside the `/frontend/src/store/`. More on _Action Creators_ in the _react-redux_ [documentation](https://redux.js.org/understanding/thinking-in-redux/glossary#action-creator).

### Headers

The header of each response contains the user token if the user is logged in.

### Endpoints

All endpoints start with `/api/rest/`.

#### [_`auth.service.ts`_](./frontend/src/services/auth.service.ts)

- [`/auth/login/`](./backend/auth/handlers/login.py) (_post_)
  - Data: `{email: str, password: str}`
  - Logins the user with credentials if registered
- [`/auth/register/`](./backend/auth/handlers/register.py) (_post_)
  - Data `{email: str, password: str}`
  - Registers a new account with given credentials
  - _Note_: Password string confronts `algorithm$salt$iterations$hashed_password`
- [`/auth/check/`](./backend/auth/handlers/check_authorization.py) (_post_)
  - Data `{email: str}`
  - Safety-check: is the user holding his own valid token?

#### [_`budget.service.ts`_](./frontend/src/services/budget.service.ts)

- [`/budget/`](./backend/budget/handlers/add_new_budget.py) (_post_)
  - Data: `{name: str, total_budget: int}`
  - Creates a new budget
  - _requires auth token_
- [`/budget/?searchQuery=<str>?page=<int>`](./backend/budget/handlers/get_budgets.py) (_get_)
  - Parametrized: `{searchQuery: str, page: int}`
  - Gets all budgets (or budgets whose title match _search query_) of currently logged in user paged by index page.
  - _requires auth token_
- [`/budget/users`](./backend/budget/handlers/update_budget_users.py) (_post_)
  - Data: `{budget_id: str, users: list[{id: int, email: str}]}`
  - Updates the given budget with a new user list.
  - _requires auth token_

#### [_`transaction.service.ts`_](./frontend/src/services/transaction.service.ts)

- [`/budget/expense`](./backend/budget/handlers/add_new_transaction.py) (_post_)
  - Data: `{budget_id: int, name: str, amount: int, category: str}`
  - Creates a new Expense item for given budget.
  - _requires auth token_
- [`/budget/income`](./backend/budget/handlers/add_new_transaction.py) (_post_)
  - Data: `{budget_id: int, name: str, amount: int, category: str}`
  - Creates a new Income item for given budget.
  - _requires auth token_

#### [_`users.service.ts`_](./frontend/src/services/transaction.service.ts)

- [`/users/all/`](./backend/users/handlers/get_all_users.py) (_get_)
  - Queries all users from database.
  - _requires auth token_

---

## ๐ Considerations

### ๐๏ธ Backend Structure Design

Aka. _Views vs ViewSets_: inter-app backend structure design.

- At first, I went with the `ViewSets` but with only a single one `View` inside of it - it was just for the ease of switching after making the final decision whether I would like the first or latter option.
- I'm highly favoring architecture which _screams_ the available use cases - it's just a good design principle.
- After all, I've created a `RequestManagers` called `Handlers`, and those have their own separate directory inside of each Django App, that can inform about the possible use-cases from the perspective of the file hierarchy. This allows me to get the benefits of abstracting `Views` into `ViewSets` (commonized base paths or authentification/other stuff that Django gives in its features).
- It's all debatable though, but that is just my take on that. Here's the structure explanation

![File Structure Explained Design](./docs/img/structure.png)

The Django implicit way of working using the benefits of mixins and inheritance by just providing class-level attributes for serializing models and stuff is definitely solid primary solution.

### ๐๏ธ Frontend Structure Design

#### **Pages**

This is the directory tree hierarchy of `pages`:

- `landing`
  - `credentials-form`
    - `login-form`
    - `register-form`
- `logged`
  - `budget-container`
    - `container-tabs`
      - `tab-searchbar`
      - `tab-add-budget`
      - `tab-item-budget`
    - `container-panes`
      - `pane-transaction`
        - `transaction-header`
          - `header-add-transaction`
          - `header-manage-users`
        - `transaction-table`
    - `container-pagination`

As you can read, there are two pages: the **landing** page and **logged** page. The landing page contains a **credential form** that can be either login or register form. The logged page contains a **budget-container** that consists of tabs and panes. Tabs have **budgets items** and a  _search bar_ functionality, along with _add budget_ functionality. The pane has **transactions**, which are made out of _transaction header_ (containing _add transaction_ functionality and _manage users_ functionality) along with the table content.

Thus, the DOM Tree and domain implementation perspective is fully preserved.

### ๐ Security

- I would advocate to **never** send the password in plaintext via API, even when SSL is used. The best solution would be to generate a unique [salt](<https://en.wikipedia.org/wiki/Salt_(cryptography)>) on the client-side, store it in the database, and then perform proper encryption before sending a request with a password. More good practices on REST API Communication [here](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html).
- The very same issue is with the Token authorization that I've implemented - it is **not** safe, especially because I keep it in [localStorage](https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage). I would suggest changing the implementation from the Django token (about which I don't know, much and thus I definitely don't trust the mechanism) to something that has a viable reputation like the [JWT Tokens](https://jwt.io/). The very best solution would be to handle authentication by 3rd party system in which they know what they are doing.
- Currently, the passwords are encrypted via random salt and sha-256. This is **not** safe. Preferably use the [AES](https://pl.wikipedia.org/wiki/Advanced_Encryption_Standard) or [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>). Generally, if this `README.md` is already "dated" compared to the time you are reading this, refer to [OWASP](https://owasp.org/) for newest cybersecurity recommendations ([password cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

### ๐ผ Querying

- Lots of stuff is done on the behalves of currently logged-in users. A ready-made solution for such tasks would be great. There is a [django-crum](https://pypi.org/project/django-crum/) library that contains built-in tests, safe-checks, and implementation, but unfortunately is not supported for Django 4.0.

### Minor

#### โฅ **setup.py** vs. **pyproject.toml**

Here's a [PEP-0518](https://peps.python.org/pep-0518/) with answers.

#### โฅ **Standardjs?**

[Standardjs](https://standardjs.com/) wants single parenthesis. This ' character might be confusing with ` backtick character. For this reason, I gave up the [ts-standard](https://github.com/standard/ts-standard) library.
