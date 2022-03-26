# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [[0.9.0]] - 2022-03-26

###### _([diff: 0.8.0-0.9.0])_

### Added

- [`README.md`](../README.md) - Considerations: `Views` vs `ViewSets`

### Change

- Backend Structure Design Update

## [[0.8.0]] - 2022-03-26

###### _([diff: 0.7.2-0.8.0])_

![](../docs/img/v0_8_0_functionality.gif)

### Added

- Manging Users Functionality (_[frontend](../frontend/src/pages/logged/budget-container/container-panes/pane-transaction/transaction-header/header-manage-users/_ and [_backend_](../backend/budget/views/update_budget_with_users.py))
    - New endpoint: `/api/rest/budget/users/` _(post)_
    - New endpoint: `/api/rest/users/all/` _(get)_

### Fixed

- No longer trying to log out response which was not parsed

## [[0.7.2]] - 2022-03-26

###### _([diff: 0.7.1-0.7.2])_

### Changed

- Refactored the `factory` value as internal constants of classes where it does not require to change.

### Fixed

- Now whole _Add new Budget!_ tab is clickable to perform the action.
    - Previously: Just the text was opening a modal.

## [[0.7.1]] - 2022-03-26

###### _([diff: 0.7.0-0.7.1])_

### Fixed

- Handling situation when a new budget is added by user who has no budgets added yet.
- Handling situation when a new transaction is added by user who has no transactions added yet.

## [[0.7.0]] - 2022-03-26

###### _([diff: 0.6.3a-0.7.0])_

### Added

- API Call for Income.

### Removed

- Removed the **transactions** app on Backend
    - This package was unnecessary and tightly coupled with **budgets** which is just a bad design. Transactions (`income`, `expense`) don't exist out of Budget context, thus I collapsed the hierarchy into one module to increase cohesion.


## [[0.6.3a]] - 2022-03-26

###### _([diff: 0.6.3-0.6.3a])_

### Changed

- Backend Imports Sorted
- Backend Files Formatted


## [[0.6.3]] - 2022-03-26

###### _([diff: 0.6.2-0.6.3])_

### Added

- Support for Income Addition on Backend

### Changed

- Abstracted the _AddExpenseTransaction_ to _AddTransaction_.

## [[0.6.2]] - 2022-03-26

###### _([diff: 0.6.1-0.6.2])_

### Added

- `id` to _Budget_, _Expense_ and _Income_ serializers
- Adding Expenses to Database for given Budgets
- Displaying Expense Transaction on frontend


## [[0.6.1]] - 2022-03-26

###### _([diff: 0.6.0-0.6.1])_

### Added

- Created Form for [Transaction Creation](../frontend/src/pages/logged/budget-container/container-panes/pane-transaction/transaction-header/header-add-transaction/)
    - The form uses values for categories based on [typed](../frontend/src/config/database/config.d.ts) [`config/database/config.json`](../frontend/src/config/database/config.json), so the potential extension of available categories for `income` and `expense` types is easy and global.

#### Note:

Lost tiny bit of sanity on the [`defaultChecked`](https://pl.reactjs.org/docs/uncontrolled-components.html) property, lol.

## [[0.6.0]] - 2022-03-26

###### _([diff: 0.6.0-alpha-0.6.0])_

### Added

- Backend: [Request Handlers](../backend/auth/handlers/) for each API Call
- Added [Response](../backend/auth/responses/) types for authorization app
- Added [Request](../backend/auth/requests/) types for authorization app

## [[0.6.0-alpha]] - 2022-03-25

###### _([diff: 0.5.0-0.6.0-alpha])_

### Added

- In-progress: Creating Request Handlers

### Changed

- Refactorizations on backend:
    - Created new directories `requests` and `responses`
    

### Fixed

- Hiding Modal after user finishes adding a new budget.


## [[0.5.0]] - 2022-03-25

###### _([diff: 0.4.6-0.5.0])_

**Frontend Structure & Naming Refactorization**

### Added

- Support in `tsconfig.json` and `webpack.config.js` for absolute imports.

### Changed

- Refactorization:
    - Commonized [Register](../frontend/src/pages/landing/credentials-form/register-form/index.tsx) and [Login](../frontend/src/pages/landing/credentials-form/login-form/index.tsx) forms
    - Removed `components` in all directories that are not leafs in the tree hierarchy (left only in the very last sub-modules)
    - Tweaked imports, preferring the absolute in majority of them. Relative imports are separated by `\n`
    - Commonized model related forms with new reusable [`common/modal-form`](../frontend/src/common/modal-form/) Modal-Form component.

## [[0.4.6]] - 2022-03-25

###### _([diff: 0.4.5-0.4.6])_

### Added

- Prepared Display of _Transaction_ Items

## [[0.4.5]] - 2022-03-25

###### _([diff: 0.4.4-0.4.5])_

### Added

- Displaying the Budgets on frontend UI
- Handling situation when a new `Budget` is added to currently existing _BudgetList_ (appending to current state in redux)

#### Note:

I was fighting for a long time with unexpected behaviour, and as it turns out, the quick rename betrayed me and the logic flew to different condition block, thus making me a fool 🤡.

## [[0.4.4]] - 2022-03-25

###### _([diff: 0.4.3-0.4.4])_

### Added

- Getting All User Budgets (dispatched via _redux_ store)
    - New endpoint: `/rest/api/budget/all` _(get)_

## [[0.4.3]] - 2022-03-25

###### _([diff: 0.4.2-0.4.3])_

### Added

- Filtering & Display for `Budget` in Django Admin View
- Adding new Budget via API Call (integrated)
    - New endpoint: `/rest/api/budget/` _(post)_

### To-do:

- Handle new budget API call response on frontend.

## [[0.4.2]] - 2022-03-25

###### _([diff: 0.4.1-0.4.2])_

### Added

- [`README.md`](../README.md) Considerations (_Security_, _Querying_)
- _New Dependency (backend):_ [Rich](https://github.com/Textualize/rich) for better logging

### Changed

- Changed the backend configuration ([`tty: true`](https://docs.docker.com/engine/reference/commandline/run/) in `docker-compose` and `-e TERM=term-256color` analog in `Dockerfile`) for colorized output.

#### Note:

_Still no tests & CI pipelines 🤡_

## [[0.4.1]] - 2022-03-25

###### _([diff: 0.4.0-0.4.1])_

### Added

- Budget Modal Form

## [[0.4.0]] - 2022-03-25

###### _([diff: 0.4.0-alpha-0.4.0])_

### Changed

- Tidied up the Reducers/Creators
- Tidied up API Handling
- Finished handling logged state via redux (with authorization checks on refresh)
    - Created new djangoapp: [_auth_](../backend/auth/) and moved there the `RegistrationSerializer` and _Login/Register_ views.
    - New endpoint: `check-auth`

## [[0.4.0-alpha]] - 2022-03-24

###### _([diff: 0.3.5-0.4.0-alpha])_

### Added

- Token Authorization System
- Persistency via storing `token` in `localStorage`
- Login ([back](../backend/auth/views/login.py)/[front](../frontend/src/pages/landing/components/Login.tsx)) and Register ([back](../backend/auth/views/register.py)/[front](../frontend/src/pages/landing/components/Register.tsx)) - API communication
- Password encryption via salted **unsafe** (!) [sha256](https://pl.wikipedia.org/wiki/SHA-2) algorithm on both frontend and backend

## [[0.3.5]] - 2022-03-24

###### _([diff: 0.3.4-0.3.5])_

### Added

- Separate Apps for [`budget`](../backend/budget/) and [`transaction`](../backend/transaction/)
- Serializers for [`Income`](../backend/transaction/serializer.py), [`Expense`](../backend/transaction/serializer.py), [`User`](../backend/users/serializer.py) and [`Budget`](../backend/budget/serializer.py)

## [[0.3.4]] - 2022-03-24

###### _([diff: 0.3.3-0.3.4])_

### Added

- Password Hashing
- Password Verification API Call

## [[0.3.3]] - 2022-03-24

###### _([diff: 0.3.2-0.3.3])_

### Added

- Handling Form Submit on Frontend

## [[0.3.2]] - 2022-03-24

###### _([diff: 0.3.1-0.3.2])_

### Added

- Routing ([`Router.tsx`](../frontend/src/app/Router.tsx))
    - Budgets View for `/budgets`
    - Landing page for any other URL

### Fixed

- Source Map warnings

## [[0.3.1]] - 2022-03-24

###### _([diff: 0.3.0-0.3.1])_

### Changed

- Extracted Button & Modals to a [common component](../frontend/src/common/components/button-modal/).

## [[0.3.0]] - 2022-03-23

###### _([diff: 0.2.2-0.3.0])_

![](./img/v0_3_0_logged_page.png)

### Added

-   Frontpage Skeleton:
    -   Side Tabs (Paginated) for various _Budgets_
        -   Search Bar for _Budgets_
        -   Add New Budget Button
            -   Opens up a Modal
    -   Main Panels
        -   Openable via the Side Tabs
        -   Contains a Table with structure:
            | #   | Type    | Amount | User    |
            | --- | ------- | ------ | ------- |
            | 1   | Expense | 500    | Marcel  |
            | 2   | Income  | 400    | Justyna |
            | 3   | Expense | 900    | Marcin  |

## [[0.2.2]] - 2022-03-23

###### _([diff: 0.2.1-0.2.2])_

### Added

-   Register Form on Landing Page

## [[0.2.1]] - 2022-03-23

###### _([diff: 0.2.0-0.2.1])_

![](./img/v0_2_1_login_form.png)

### Added

-   [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons)
-   Login Form to Landing Page

## [[0.2.0]] - 2022-03-23

###### _([diff: 0.1.1-0.2.0])_

![](./img/v0_2_0_landing_page.png)

### Added

-   Landing Page Background Stylizations
-   Successfully Connected Frontend/Backend via Example API Call

### Fixed

-   Lack of type support for `history` (added `@types/history` to DevDependencies)

## [[0.1.1]] - 2022-03-23

###### _([diff: 0.1.0-0.1.1])_

### Added

-   Created database [models](../backend/users/models.py)
    -   `User`
    -   `Budget`
    -   `Expense` _(type of `Transaction`)_
    -   `Income` _(type of `Transaction`)_
    -   `Transaction`
-   Created Simple UML Model, though [draw.io](https://app.diagrams.net/), available [here](./models/database.drawio)
    ![](./img/database.png)

## [[0.1.0]] - 2022-03-23

###### _([diff: 0.0.0-0.1.0])_

**Frontend Dependencies & Packages.**

Connected Frontend & Backend via webpack_loader.

### Added:

-   React
-   Bootstrap
-   Redux
-   Lodash
-   Axios/Cookie
-   Prepared [`./frontend/sass`](../frontend/sass/) directory:
    -   `/sass/global/` for globally used styling
    -   `/sass/components/` for common components
    -   `/sass/pages/` for specific pages
    -   `/sass/vendor/` for bootstrap

## [[0.0.0]] - 2022-03-23

**Project was initialized.**

-   Structure:
    -   [`/backend/`](../backend)
        -   Based on boilerplate template, w/ my migrations:
            -   Python~=`3.8` -> [Python~=`3.10`](https://www.python.org/downloads/)
            -   Django~=`3` -> [Django](https://www.djangoproject.com/)~=`4.0`
        -   [Django Rest Framework](https://www.djangoproject.com/)~=`3.13.1`
        -   [Celery](https://github.com/celery/celery)
    -   [`/frontend/`](../frontend)
        -   Generated using Webpack CLI
        -   [TypeScript](https://www.typescriptlang.org/)
        -   [SASS](https://sass-lang.com/)
    -   [`/scripts/`](../scripts)
        -   Shell Files (executable on Windows via [Git Bash](https://gitforwindows.org/))
        -   Executing via [Docker](https://www.docker.com/)
    -   [`/docs/`](../docs)
        -   [CHANGELOG.md](./CHANGELOG.md) based on [keep a changelog](https://keepachangelog.com/en/1.0.0/)
    -   [`.`](./)
        -   Linters:
            -   Prettier (_frontend_)
            -   Black (_backend_)
            -   Pylint (_backend_)
            -   PEP8 (_backend_)
        -   Safety Checkers:
            -   Bandit (_backend_)
-   Pipelines:
    -   I know I should implement them right away and have all of that sort of things already done, but I _really_ want to start some dev coding 🐈
    -   ... still got to setup frontend-backend, so I'll prioritize that at this moment.

[diff: 0.8.0-0.9.0]: https://github.com/Luzkan/FamilyBudget/compare/0.8.0...0.9.0
[diff: 0.7.2-0.8.0]: https://github.com/Luzkan/FamilyBudget/compare/0.7.2...0.8.0
[diff: 0.7.1-0.7.2]: https://github.com/Luzkan/FamilyBudget/compare/0.7.1...0.7.2
[diff: 0.7.0-0.7.1]: https://github.com/Luzkan/FamilyBudget/compare/0.7.0...0.7.1
[diff: 0.6.3a-0.7.0]: https://github.com/Luzkan/FamilyBudget/compare/0.6.3a...0.7.0
[diff: 0.6.3-0.6.3a]: https://github.com/Luzkan/FamilyBudget/compare/0.6.3...0.6.3a
[diff: 0.6.2-0.6.3]: https://github.com/Luzkan/FamilyBudget/compare/0.6.2...0.6.3
[diff: 0.6.1-0.6.2]: https://github.com/Luzkan/FamilyBudget/compare/0.6.1...0.6.2
[diff: 0.6.0-0.6.1]: https://github.com/Luzkan/FamilyBudget/compare/0.6.0...0.6.1
[diff: 0.6.0-alpha-0.6.0]: https://github.com/Luzkan/FamilyBudget/compare/0.6.0-alpha...0.6.0
[diff: 0.5.0-0.6.0-alpha]: https://github.com/Luzkan/FamilyBudget/compare/0.5.0...0.6.0-alpha
[diff: 0.4.6-0.5.0]: https://github.com/Luzkan/FamilyBudget/compare/0.4.6...0.5.0
[diff: 0.4.5-0.4.6]: https://github.com/Luzkan/FamilyBudget/compare/0.4.5...0.4.6
[diff: 0.4.4-0.4.5]: https://github.com/Luzkan/FamilyBudget/compare/0.4.4...0.4.5
[diff: 0.4.3-0.4.4]: https://github.com/Luzkan/FamilyBudget/compare/0.4.3...0.4.4
[diff: 0.4.2-0.4.3]: https://github.com/Luzkan/FamilyBudget/compare/0.4.2...0.4.3
[diff: 0.4.1-0.4.2]: https://github.com/Luzkan/FamilyBudget/compare/0.4.1...0.4.2
[diff: 0.4.0-0.4.1]: https://github.com/Luzkan/FamilyBudget/compare/0.4.0...0.4.1
[diff: 0.4.0-alpha-0.4.0]: https://github.com/Luzkan/FamilyBudget/compare/0.4.0-alpha...0.4.0
[diff: 0.3.5-0.4.0-alpha]: https://github.com/Luzkan/FamilyBudget/compare/0.3.5...0.4.0-alpha
[diff: 0.3.4-0.3.5]: https://github.com/Luzkan/FamilyBudget/compare/0.3.4...0.3.5
[diff: 0.3.3-0.3.4]: https://github.com/Luzkan/FamilyBudget/compare/0.3.3...0.3.4
[diff: 0.3.2-0.3.3]: https://github.com/Luzkan/FamilyBudget/compare/0.3.2...0.3.3
[diff: 0.3.1-0.3.2]: https://github.com/Luzkan/FamilyBudget/compare/0.3.1...0.3.2
[diff: 0.3.0-0.3.1]: https://github.com/Luzkan/FamilyBudget/compare/0.3.0...0.3.1
[diff: 0.2.2-0.3.0]: https://github.com/Luzkan/FamilyBudget/compare/0.2.2...0.3.0
[diff: 0.2.1-0.2.2]: https://github.com/Luzkan/FamilyBudget/compare/0.2.1...0.2.2
[diff: 0.2.0-0.2.1]: https://github.com/Luzkan/FamilyBudget/compare/0.2.0...0.2.1
[diff: 0.1.1-0.2.0]: https://github.com/Luzkan/FamilyBudget/compare/0.1.1...0.2.0
[diff: 0.1.0-0.1.1]: https://github.com/Luzkan/FamilyBudget/compare/0.1.0...0.1.1
[diff: 0.0.0-0.1.0]: https://github.com/Luzkan/FamilyBudget/compare/0.0.0...0.1.0
[0.9.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.9.0
[0.8.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.8.0
[0.7.2]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.7.2
[0.7.1]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.7.1
[0.7.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.7.0
[0.6.3a]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.6.3a
[0.6.3]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.6.3
[0.6.2]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.6.2
[0.6.1]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.6.1
[0.6.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.6.0
[0.6.0-alpha]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.6.0-alpha
[0.5.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.5.0
[0.4.6]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.6
[0.4.5]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.5
[0.4.4]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.4
[0.4.3]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.3
[0.4.2]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.2
[0.4.1]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.1
[0.4.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.0
[0.4.0-alpha]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.4.0-alpha
[0.3.5]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.3.5
[0.3.4]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.3.4
[0.3.3]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.3.3
[0.3.2]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.3.2
[0.3.1]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.3.1
[0.3.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.3.0
[0.2.2]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.2.2
[0.2.1]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.2.1
[0.2.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.2.0
[0.1.1]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.1.1
[0.1.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.1.0
[0.0.0]: https://github.com/Luzkan/FamilyBudget/releases/tag/0.0.0
