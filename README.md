
<p align="center">
    <svg width="250" height="70" viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g fill="white" stroke="black" stroke-width="1.5">
            <!-- n -->
            <path d="M20,110 V70 h15 v10 q0,-10 15,-10 t15,10 v30 h-15 v-25 q0,-5 -5,-5 t-5,5 v25 h-15 z"/>
            <!-- e -->
            <path d="M80,110 q-10,0 -15,-5 t-5,-15 q0,-10 5,-15 t15,-5 q8,0 13,4 t5,11 h-15 q0,-2 -1.5,-3.5 t-3.5,-1.5 q-5,0 -5,5 q0,6 5,6 q2,0 3.5,-1.5 t1.5,-3.5 h15 q0,7 -5,11 t-13,4 z"/>
            <!-- x -->
            <path d="M130,110 l-7,-10 l-7,10 h-15 l15,-20 l-15,-20 h15 l7,10 l7,-10 h15 l-15,20 l15,20 h-15 z"/>
            <!-- a -->
            <path d="M170,110 q-10,0 -15,-5 t-5,-15 q0,-10 5,-15 t15,-5 q10,0 15,5 v-5 h15 v40 h-15 v-5 q-5,5 -15,5 z M170,95 q5,0 5,-5 q0,-5 -5,-5 q-5,0 -5,5 q0,5 5,5 z"/>
            <!-- r -->
            <path d="M220,110 v-40 h15 v10 q5,-10 15,-10 h5 v15 h-5 q-5,0 -7.5,2.5 t-2.5,7.5 v15 h-15 z"/>
        </g>
    </svg>
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