<template>
  <img
    :src="lightLogo"
    v-bind="logoProps"
    class="inline dark:hidden"
  />
  <img
    :src="darkLogo"
    v-bind="logoProps"
    class="hidden dark:inline"
  />
</template>

<script setup>
const props = defineProps({
  size: {
    default: 'w-48 h-auto',
    type: String,
  },
  tone: {
    default: 'greyscale',
    type: String,
    validator: (value) => ['color', 'greyscale'].includes(value),
  },
  kind: {
    default: 'horizontal',
    type: String,
    validator: (value) => ['horizontal', 'vertical', 'isotype'].includes(value),
  },
});

const logoProps = ref();

const lightLogo = ref('');
const darkLogo = ref('');

watch(
  () => [props.tone, props.kind],
  () => {
    logoProps.value = {
      class: ['custom-drop-shadow-lg z-20', props.size],
      alt: 'Pollux Software Engineering',
    };

    switchLogo();
  },
  { immediate: true }
);

function switchLogo() {
  switch (props.kind) {
    case 'isotype':
      if (props.tone === 'greyscale') {
        lightLogo.value = '/logos/logos-15.png';
        darkLogo.value = '/logos/logos-16.png';
      } else {
        lightLogo.value = '/logos/logos-13.png';
        darkLogo.value = '/logos/logos-14.png';
      }

      break;

    case 'vertical':
      if (props.tone === 'greyscale') {
        lightLogo.value = '/logos/logos-10.png';
        darkLogo.value = '/logos/logos-11.png';
      } else {
        lightLogo.value = '/logos/logos-08.png';
        darkLogo.value = '/logos/logos-09.png';
      }

      break;

    case 'horizontal':
    default:
      if (props.tone === 'greyscale') {
        lightLogo.value = '/logos/logos-05.png';
        darkLogo.value = '/logos/logos-06.png';
      } else {
        lightLogo.value = '/logos/logos-03.png';
        darkLogo.value = '/logos/logos-04.png';
      }

      break;
  }
}
</script>
