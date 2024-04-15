<template>
  <section class="container mx-auto my-24">
    <div class="my-8 grid grid-cols-4 grid-rows-1 gap-4">
      <Card
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <Card
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <Card
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <Card
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
    </div>

    <div class="my-8 grid grid-cols-4 grid-rows-2 gap-4">
      <CardSimple
        class="col-span-2 row-span-2"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <CardSimple
        class="col-span-2 row-span-2"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
    </div>

    <div class="my-8 grid grid-cols-4 grid-rows-2 gap-4">
      <CardGradient
        class="col-span-2 row-span-2"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <CardGradient
        class="col-span-2 row-span-1"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <CardGradient
        class="col-span-2 row-span-2"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
      <CardGradient
        class="col-span-2 row-span-1"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil."
      />
    </div>

    <div class="my-8 grid grid-cols-4 grid-rows-2 gap-4">
      <CardSample1 class="col-span-2 row-span-2" />
      <CardSample3 class="col-span-2 row-span-1" />
      <CardSample3 class="col-span-2 row-span-2" />
      <CardSample4 class="col-span-2 row-span-1" />
    </div>
  </section>
</template>

<script setup>
import Card from '~/components/Common/Cards/Card.vue';
import CardGradient from '~/components/Common/Cards/CardGradient.vue';
import CardSimple from '~/components/Common/Cards/CardSimple.vue';

import CardSample1 from '~/components/Utilities/CardSample.vue';
import CardSample2 from '~/components/Utilities/CardSample2.vue';
import CardSample3 from '~/components/Utilities/CardSample3.vue';
import CardSample4 from '~/components/Utilities/CardSample4.vue';
</script>
