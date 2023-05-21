<template>
  <div class="text-gray-800 dark:text-gray-200">
    <Notification
      v-if="showCookiesNotification"
      action="I Accept"
      @ok="acceptCookies"
      @close="rejectCookies"
    >
      <span class="font-mono sm:text-sm">
        This website uses cookies for analytics and to improve provided
        services.
        <nuxt-link
          to="privacy-policy"
          class="whitespace-nowrap font-bold underline hover:text-gray-200 dark:hover:text-gray-800"
        >
          Find out more
          <span aria-hidden="true" class="-ml-1">
            <fa-icon icon="arrow-right" size="xs"></fa-icon>
          </span>
        </nuxt-link>
      </span>
    </Notification>

    <!-- Hero -->
    <Hero
      class="bg-white dark:bg-black-light"
      tilt-color="fill-white dark:fill-black-light"
    >
      <template #header>
        <!-- Navigation Bar -->
        <Header class="z-20" />
      </template>
    </Hero>

    <!-- Content -->
    <nuxt />

    <!-- Footer Section -->
    <Footer class="bg-white dark:bg-black-light" />
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
