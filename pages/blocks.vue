<template>
  <main class="py-24">
    <BlockDivider class="!mb-4" />

    <BlockParagraph class="px-24">
      <span class="text-base">WE ARE LOOKING FOR</span>
    </BlockParagraph>

    <BlockColumns>
      <template #col-1>
        <BlockHeading>
          <span>
            A React Engineer taking on a complex project and building new
            features for our US-based client.
          </span>
        </BlockHeading>
      </template>

      <template #col-2>
        <BlockParagraph class="!mb-12">
          Infinum’s team has around 30 members who work on various challenging
          projects, usually in collaboration with designers, backend developers,
          QA engineers, and project managers. We’re well-versed in all things
          Web. The browser is our main platform, but some projects will carry us
          off to servers or mobile devices as well. Our specialties are React
          and Angular, while some of us work in other technologies, too.
        </BlockParagraph>

        <BlockParagraph class="!mb-12">
          Always interested in learning new things, we hold weekly lectures and
          workshops, and we regularly contribute to open source.
        </BlockParagraph>

        <BlockParagraph class="!mb-12 font-bold">Position specifics</BlockParagraph>

        <BlockParagraph class="!mb-12">
          This is a project-based position within the financial services
          industry.
        </BlockParagraph>

        <BlockParagraph class="!mb-12">
          The work will be executed in the US time zone (East Coast), with some
          flexibility.
        </BlockParagraph>
      </template>
    </BlockColumns>

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
import BlockColumns from '~/components/Blocks/BlockColumns.vue';
</script>
