<template>
  <div class="bg-primary text-gray-800 dark:text-gray-200">
    <Notification
      v-if="showCookiesNotification"
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

    <!-- Hero -->
    <Hero />

    <!-- Content -->
    <nuxt />

    <!-- Footer Section -->
    <Footer class="bg-secondary" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Hero, Footer } from '~/components/Layout'
import Notification from '~/components/Common/UI/Notification'

export default {
  components: {
    Hero,
    Footer,
    Notification,
  },

  data() {
    return {
      showCookiesNotification: false,
    }
  },

  computed: {
    ...mapGetters('cookies', ['cookiesAccepted']),
  },

  mounted() {
    this.showCookiesNotification = !this.cookiesAccepted
  },

  methods: {
    acceptCookies() {
      localStorage.setItem('accept_cookies', true)
    },

    rejectCookies() {
      localStorage.setItem('reject_cookies', true)
    },
  },
}
</script>
