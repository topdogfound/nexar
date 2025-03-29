
<p align="center">
    <img src="./public/nexar-logo.svg" width="280" height="90" />
</p>

## Introduction

Welcome to the Nexar project! This document provides a comprehensive guide to setting up and running the application. Follow these instructions carefully to ensure a smooth installation and development experience.

---

## Prerequisites

Before proceeding, ensure you have the following software and extensions installed:

* **Git:** For cloning the repository. Prefered(2.34.1)
* **PHP & Composer:** Install Both of them using Laravel Installation. Preferred (PHP 8.3 Or above) & composer(2.8.6) [Ref](https://laravel.com/docs/12.x/installation)


* **Node.js & npm:** For JavaScript dependency management Preferred (v22.13.1) [Ref](https://nodejs.org/en/download).
* **MongoDB Extension for PHP:** Required for database connectivity [Ref](https://www.php.net/mongodb.installation).

---

## Installation

### 1. Clone the Repository

Begin by cloning the project repository to your local machine using Git:

* ```bash
    git clone https://github.com/topdogfound/nexar.git
    ```
* ```bash
    cd nexar
    ```

### 2. Configure Environment Variables

Copy the `.env.example` file to `.env` and configure your environment variables:

* ```bash
    cp .env.example .env
    ```
* Open the `.env` file in your preferred text editor and update the necessary configurations, such as database credentials and application keys.

### 3. Generate Application Key

Generate a unique application key for your Laravel application:

* ```bash
    php artisan key:generate
    ```

### 4. Install Dependencies

Install PHP and JavaScript dependencies using Composer and npm:

* ```bash
    composer install
    ```
* ```bash
    npm install
    ```

### 5. Run Development Server

Start the development server using Composer:

* ```bash
    composer run dev
    ```
* This command will compile your assets and start the Laravel development server.

---


## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes with clear and concise messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

---

## Contact

For any questions or issues, please contact [topdogfound@gmail.com](topdogfound@gmail.com).