<template>
  <section class="container mx-auto my-24">
    <div class="my-8 grid grid-cols-4 grid-rows-2 gap-4">
      <CardWrapper class="col-span-2 row-span-2">
        <CardContent
          title="The Coldest Sunset"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          :tags="['photography', 'travel', 'winter']"
        />
      </CardWrapper>

      <CardWrapper class="col-span-2 row-span-1">
        <CardContent
          title="The Coldest Sunset"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          :tags="['photography', 'travel', 'winter']"
        />
      </CardWrapper>

      <CardWrapper class="col-span-2 row-span-2">
        <CardContent
          title="The Coldest Sunset"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          :tags="['photography', 'travel', 'winter']"
        />
      </CardWrapper>

      <CardWrapper class="col-span-2 row-span-1">
        <CardContent
          title="The Coldest Sunset"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          :tags="['photography', 'travel', 'winter']"
        />
      </CardWrapper>

    </div>
  </section>
</template>

<script setup>
import CardWrapper from '~/components/Cards/CardSolid.vue';
import CardContent from '~/components/Cards/CardContent.vue';
</script>
