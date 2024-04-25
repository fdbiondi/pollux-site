<template>
  <div class="grid grid-cols-2">
    <div>
      <div class="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus
        nibh ut dignissim rhoncus. Fusce molestie quis est nec ultrices. Mauris
        dictum semper risus eu ullamcorper. Morbi bibendum fringilla orci vel
        euismod. Vestibulum cursus imperdiet nibh vel suscipit. Nam feugiat
        tellus eget lorem lacinia, in rhoncus urna ornare. Fusce vel sem sapien.
        Aliquam nec purus sed arcu condimentum efficitur. Donec lacinia, risus
        in tempor accumsan, neque ipsum ullamcorper metus, quis vestibulum ex
        urna ut urna. Aenean ultricies orci neque, nec pellentesque lacus
        vestibulum nec.
      </div>
      <div class="card">
        Nam finibus posuere mi et maximus. Suspendisse pulvinar nibh at quam
        interdum posuere. Sed efficitur risus quis porttitor tempus. Sed
        tincidunt lectus magna, vel gravida nulla cursus ac. Cras a nibh
        tincidunt enim vulputate eleifend sed sed arcu. Sed faucibus magna at
        felis bibendum, vel tristique mi luctus. In eget lorem eu ipsum dictum
        scelerisque. Nullam consequat, sem nec placerat elementum, est mauris
        aliquam mauris, vitae porta magna leo quis orci.
      </div>
      <div class="card">
        Integer vel sodales quam. Mauris quis varius augue. Mauris scelerisque
        lacinia luctus. Integer sed lobortis enim, sit amet bibendum elit. Sed
        hendrerit quis mauris eu posuere. Duis bibendum sem ut tempus malesuada.
        Praesent lacus purus, cursus vel vulputate ac, elementum non libero.
        Proin fringilla iaculis ornare. Nunc egestas ligula eu interdum aliquam.
        Aenean vitae blandit sem, eget blandit arcu. Suspendisse tempus dictum
        sem in ullamcorper. Nam a nunc in eros commodo sagittis a placerat nibh.
        Sed urna libero, egestas quis felis non, vehicula gravida orci. Cras
        facilisis eget metus eu tincidunt. Nulla egestas risus ante, vitae
        venenatis neque feugiat sed. Vestibulum accumsan id nisi eu consequat.
      </div>
      <div class="card">
        Duis mattis velit quis tristique fringilla. Nunc eu ex ipsum. Maecenas
        quis molestie diam. Pellentesque fringilla, sem sed interdum sodales,
        sapien libero condimentum nulla, quis sagittis lectus nunc in mi.
        Integer vehicula iaculis rutrum. Nullam tellus nisl, elementum ut massa
        blandit, dictum ornare ligula. Praesent laoreet egestas turpis, sed
        sodales eros porttitor eget. Integer purus ligula, pellentesque in
        porttitor finibus, viverra vitae est. Curabitur tincidunt molestie
        dolor, nec dapibus odio imperdiet quis. Praesent dapibus congue dui non
        aliquet. Vivamus fermentum, lorem quis tincidunt molestie, tortor turpis
        consectetur lectus, vitae blandit sapien ante eu ex. Praesent iaculis
        condimentum arcu sit amet facilisis. Ut laoreet ornare porta. Vestibulum
        sed porta mi, eget bibendum velit. Integer lobortis neque ut dolor
        eleifend mattis.
      </div>
      <div class="card">
        Duis rutrum neque dolor, ac varius risus placerat a. Mauris luctus
        scelerisque aliquet. Nam sodales hendrerit diam, porta aliquam erat
        tempor at. Nam euismod lacus nulla, aliquam elementum massa feugiat
        consectetur. Etiam augue augue, sodales eu lorem a, sodales mattis
        turpis. Nam vel dignissim turpis. Nunc placerat urna sit amet bibendum
        gravida. Nam fringilla tempor consequat.
      </div>
    </div>

    <div>
      <div
        v-for="image in images"
        :key="image"
        class="card card-sticky"
      >
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script setup>
function makeid(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const images = [
  `https://picsum.photos/seed/${makeid(5)}/1200/1024`,
  `https://picsum.photos/seed/${makeid(5)}/1200/1024`,
  `https://picsum.photos/seed/${makeid(5)}/1200/1024`,
  `https://picsum.photos/seed/${makeid(5)}/1200/1024`,
  `https://picsum.photos/seed/${makeid(5)}/1200/1024`,
];

const services = [
  {
    textBlock:
      'From responsive design to backend development and deployment, we deliver high-quality web applications that enhance user experiences and drive your online presence forward.',
    title: 'Web Development',
  },

  {
    textBlock:
      'From UI/UX design to seamless integration and maintenance, we deliver innovative and high-performance mobile apps that engage users and drive business growth.',
    title: 'Mobile Development',
  },

  {
    textBlock:
      'From architectural design to deployment and optimization, we leverage AWS technologies to ensure scalable, secure, and highly available cloud solutions that empower your business to thrive in the digital era.',
    title: 'Cloud-based Infrastructure',
  },

  {
    textBlock:
      'From intuitive design and seamless integration to custom theme and plugin development, we provide tailored solutions that enhance user experiences, drive conversions, and empower businesses to succeed in the online marketplace.',
    title: 'E-commerce Development',
  },
];
</script>

<style scoped>
.card {
  @apply flex h-screen w-full items-center justify-center bg-gray-800 p-8 text-white;
}

.card-sticky {
  @apply sticky top-0 p-0;
}

.card-sticky img {
  @apply h-full w-full;

  mask: linear-gradient(white 50%, transparent) 0 100% / 100% 200% no-repeat;
}
</style>
