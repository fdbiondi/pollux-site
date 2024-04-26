<template>
  <main class="py-24">
    <BlockDivider class="!mb-4" />

    <BlockColumns class="pb-40">
      <template #col-1>
        <BlockParagraph>
          <span class="text-base">THE BACKSTORY</span>
        </BlockParagraph>
      </template>

      <template #col-2>
        <BlockParagraph>
          <span class="text-3xl">
            Back in 2005, before the App Store even existed, two engineering
            students won an app-building contest and used the prize money to
            start a company. The rest is history.
          </span>
        </BlockParagraph>
      </template>
    </BlockColumns>

    <!-- content big title with 2 cards -->

    <BlockGrid
      class="pt-0"
      span="8"
    >
      <BlockHeading>
        <span class="text-9xl">We build digital products</span>
      </BlockHeading>
    </BlockGrid>

    <BlockColumns
      class="pb-40 pt-0"
      col-1-start="1"
      col-1-span="4"
      col-2-start="5"
      col-2-span="4"
    >
      <template #col-1>
        <BlockCardSimple>
          <BlockHeading>
            <span class="text-[2.65rem]/[1]">Transforming businesses</span>
          </BlockHeading>

          <BlockParagraph>
            <span class="text-xl font-extralight">
              We partner with forward-thinking brands, organizations, and
              founders that understand the value of technology. Together, we
              embrace change, envision new business models, and enhance existing
              practices to grow their business.
            </span>
          </BlockParagraph>
        </BlockCardSimple>
      </template>

      <template #col-2>
        <BlockCardSimple>
          <BlockHeading>
            <span class="text-[2.65rem]/[1]">Supporting the community</span>
          </BlockHeading>

          <BlockParagraph>
            <span class="text-xl font-extralight">
              We believe if you’re good at something, you should pass down the
              knowledge. It’s how we progress as a community. We publish open
              source, write articles, speak at conferences, and host events that
              benefit design, engineering, and tech enthusiasts.
            </span>
          </BlockParagraph>
        </BlockCardSimple>
      </template>
    </BlockColumns>
    <!-- content big title with 2 cards -->

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

        <BlockParagraph class="!mb-12 font-bold">
          Position specifics
        </BlockParagraph>

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

    <BlockDivider class="!my-48" />

    <BlockColumns
      class="flex h-screen items-center"
      col-2-span="8"
      col-2-start="7"
    >
      <template #col-1>
        <BlockParagraph class="mt-4">
          <span class="text-base">WE'RE HIRING</span>
        </BlockParagraph>
      </template>

      <template #col-2>
        <BlockHeading>
          <template #block>
            <span class="text-[8.5rem] font-extrabold leading-none">
              Want to join us?
            </span>
          </template>
        </BlockHeading>
      </template>
    </BlockColumns>

    <BlockDivider class="!mb-4" />

    <BlockGrid class="pb-0">
      <BlockParagraph>
        <span class="text-base">WE KEEP BUSY</span>
      </BlockParagraph>
    </BlockGrid>

    <BlockGrid
      class="pt-0"
      span="5"
    >
      <BlockHeading>
        <template #block>
          <span class="text-[5.25rem] leading-none font-extrabold">
            Initiatives we’re proud of
          </span>
        </template>
      </BlockHeading>
    </BlockGrid>
  </main>
</template>

<script setup>
import BlockSticky from '~/components/Blocks/BlockSticky.vue';
import BlockDivider from '~/components/Blocks/BlockDivider.vue';
import BlockHeading from '~/components/Blocks/BlockHeading.vue';
import BlockParagraph from '~/components/Blocks/BlockParagraph.vue';
import BlockCardSimple from '~/components/Blocks/BlockCardSimple.vue';
import BlockColumns from '~/components/Blocks/BlockColumns.vue';
import BlockGrid from '~/components/Blocks/BlockGrid.vue';
</script>
