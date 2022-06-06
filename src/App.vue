<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './store/useCounter.ts'
import { storeToRefs, mapActions } from 'pinia'
import "./assets/styles/theme.scss"

const main = useCounterStore()

const {counter, name} = storeToRefs(main)
const { increment } = mapActions(useCounterStore, ["increment"])

</script>

<template>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <a download="./assets/CV/Adrien_Benaceur_D.pdf" href="/curriculum-vitae" class="nav-link">CV</a>
      </nav>
    </div>
  <div class="view-content">
    <RouterView />
  </div>

  <div class="morphisme-test">
  </div>


</template>