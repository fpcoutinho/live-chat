<template>
  <header class="navbar bg-base-100 fixed top-0 p-0 xl:px-20 w-full overflow-hidden z-10">
    <div class="flex-1">
      <span class="btn btn-ghost text-xl">Fux.ico</span>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><router-link :to="{ name: 'Welcome' }">Home</router-link></li>
        <li><router-link :to="{ name: 'Chat' }">Chat</router-link></li>
      </ul>
    </div>
  </header>
</template>

<style>
header a.router-link-active {
  @apply text-accent;
}
</style>
