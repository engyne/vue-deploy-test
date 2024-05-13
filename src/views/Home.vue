<template>
    Home!
    <form @submit.prevent>
    <input type="password" />
        <button @click="$router.push('/about')">Submit</button>
        </form>
</template>
