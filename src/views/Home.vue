<template>
    Home!
    <form @submit.prevent>
    <input type="password" autocomplete="new-password" />
        <button @click="$router.push('/about')">Submit</button>
        </form>
</template>
