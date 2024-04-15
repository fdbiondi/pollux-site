<template>
  <div class="bg-gray-100 text-gray-800 dark:bg-black-light dark:text-gray-200">
    <Notification
      v-if="!cookies.accepted"
      action="I Accept"
      @ok="cookies.accept()"
      @close="cookies.reject()"
    >
      <span class="font-mono sm:text-sm">
        This website uses cookies for analytics and to improve provided
        services.
        <nuxt-link
          to="privacy-policy"
          class="whitespace-nowrap font-bold underline hover:text-gray-200 dark:hover:text-gray-800"
        >
          Find out more
          <span
            aria-hidden="true"
            class="-ml-1"
          >
            <fa-icon
              icon="arrow-right"
              size="xs"
            />
          </span>
        </nuxt-link>
      </span>
    </Notification>

    <!-- Content -->
    <slot />
  </div>
</template>

<script setup>
import Notification from '~/components/Common/Notification';
import { useCookies } from '@/stores/cookies';

const cookies = useCookies();
</script>
