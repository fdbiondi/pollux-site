<template>
  <main class="py-24">


    <BlockDivider />






    <BlockDivider />

    <BlockSticky>
      <template #heading>
        <BlockCardSimple>
          <template #label>
            <span>01</span>
          </template>

          <BlockHeading>
            <span>Qualifications & Experience</span>
          </BlockHeading>
        </BlockCardSimple>
      </template>

      <BlockParagraph>
        <div class="lists">
          <ul
            class="typography js-typography lists__typography"
            data-id="b9d46722"
          >
            <li>
              4+ years of experience as a frontend or full-stack developer
            </li>
            <li>3+ years of experience in react</li>
            <li>
              ability to handle new projects as well as improve existing ones
            </li>
            <li>a good understanding of the web and browsers</li>
            <li>excellent command of english</li>
            <li>
              experience with hands-on, cross-functional product teams and short
              feedback loops is a big plus
            </li>
            <li>previous experience within the financial sector is a plus</li>
            <li>
              4+ years of experience as a frontend or full-stack developer
            </li>
            <li>3+ years of experience in react</li>
            <li>
              ability to handle new projects as well as improve existing ones
            </li>
            <li>a good understanding of the web and browsers</li>
            <li>excellent command of english</li>
            <li>
              experience with hands-on, cross-functional product teams and short
              feedback loops is a big plus
            </li>
            <li>previous experience within the financial sector is a plus</li>
          </ul>
        </div>
      </BlockParagraph>
    </BlockSticky>
  </main>
</template>

<script setup>
import BlockSticky from '~/components/Blocks/BlockSticky.vue';
import BlockDivider from '~/components/Blocks/BlockDivider.vue';
import BlockHeading from '~/components/Blocks/BlockHeading.vue';
import BlockParagraph from '~/components/Blocks/BlockParagraph.vue';
import BlockCardSimple from '~/components/Blocks/BlockCardSimple.vue';
</script>
