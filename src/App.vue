<script setup></script>

<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/sobre">Sobre</router-link> |
        <router-link to="/contato">Contato</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/dashboard">Dashboard</router-link>
    </nav>

    <router-view />
</template>

<style scoped></style>
