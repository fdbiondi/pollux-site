<template>
  <div class="bg-primary text-gray-800 dark:text-gray-200">
    <Notification
      action="Accept"
      hide-icon
      @ok="acceptCookies"
      @close="rejectCookies"
    >
      <span class="font-mono text-sm">
        This website uses cookies for analytics and to improve provided
        services.
        <nuxt-link
          to="privacy-policy"
          class="font-bold text-white underline hover:text-gray-100"
        >
          Find out more
          <span aria-hidden="true" class="-ml-1">
            <fa-icon icon="arrow-right" size="xs"></fa-icon>
          </span>
        </nuxt-link>
      </span>
    </Notification>

    <div :class="{ colorful: colorful > 10 }">
      <!-- Navigation Bar -->
      <Header />

      <!-- Hero Section -->
      <Hero />
    </div>

    <!-- Content -->
    <nuxt />

    <!-- Footer Section -->
    <Footer class="bg-secondary" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Header, Hero, Footer } from '~/components/Layout'
import Notification from '~/components/Common/UI/Notification'

export default {
  components: {
    Header,
    Hero,
    Footer,
    Notification,
  },

  computed: {
    ...mapGetters(['colorful']),
  },

  methods: {
    acceptCookies() {
      // TODO manejar con vuex
    },
    rejectCookies() {
      // TODO manejar con vuex
    },
  },
}
</script>

<style lang="scss" scoped></style>
