<template>
  <section class="container mx-auto my-24">
    <div class="grid grid-flow-col grid-cols-12 grid-rows-6 gap-4">
      <Card
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <CardSimple
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <CardRound
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <CardGradient
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
    </div>
  </section>
</template>

<script setup>
import Card from '~/components/Common/Cards/Card.vue';
import CardGradient from '~/components/Common/Cards/CardGradient.vue';
import CardRound from '~/components/Common/Cards/CardRound.vue';
import CardSimple from '~/components/Common/Cards/CardSimple.vue';

definePageMeta({ layout: 'empty' });
</script>
