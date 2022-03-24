# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

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

[diff: 0.3.1-0.3.2]: https://github.com/Luzkan/FamilyBudget/compare/0.3.2...0.3.3
[diff: 0.3.1-0.3.2]: https://github.com/Luzkan/FamilyBudget/compare/0.3.1...0.3.2
[diff: 0.3.0-0.3.1]: https://github.com/Luzkan/FamilyBudget/compare/0.3.0...0.3.1
[diff: 0.2.2-0.3.0]: https://github.com/Luzkan/FamilyBudget/compare/0.2.2...0.3.0
[diff: 0.2.1-0.2.2]: https://github.com/Luzkan/FamilyBudget/compare/0.2.1...0.2.2
[diff: 0.2.0-0.2.1]: https://github.com/Luzkan/FamilyBudget/compare/0.2.0...0.2.1
[diff: 0.1.1-0.2.0]: https://github.com/Luzkan/FamilyBudget/compare/0.1.1...0.2.0
[diff: 0.1.0-0.1.1]: https://github.com/Luzkan/FamilyBudget/compare/0.1.0...0.1.1
[diff: 0.0.0-0.1.0]: https://github.com/Luzkan/FamilyBudget/compare/0.0.0...0.1.0
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
