<template>
    <div id="app">
        <nav class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/sobre">Sobre</router-link>
            <router-link to="/contato">Contato</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
        </nav>

        <main class="container">
            <router-view />
        </main>
    </div>
</template>

<style>
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fonte e fundo */
body {
    font-family: Arial, sans-serif;
    background: #f5f7fa;
}

/* Navbar */
.nav {
    background: #2c3e50;
    padding: 15px;
    display: flex;
    gap: 15px;
    justify-content: center;
}

.nav a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
    transition: 0.2s;
}

.nav a:hover {
    color: #1abc9c;
}

/* Link ativo */
.router-link-active {
    border-bottom: 2px solid #1abc9c;
}

/* Container principal */
.container {
    max-width: 800px;
    margin: 40px auto;
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    text-align: center;
}

/* Títulos */
h1 {
    color: #2c3e50;
}
</style>