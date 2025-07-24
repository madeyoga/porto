<script setup>
const { data: page } = await useAsyncData(() => queryCollection('index').first())

useHead({
  title: page.value.title
})

console.log(page.value)

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>

<template>
    <div class="min-h-screen max-w-[47.5rem] mx-auto  pt-10 border-default sm:border-x">

      <div class="px-4 sm:px-6 pt-18">

        <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
          <nav class="relative flex gap-1.5 [&>div]:min-w-0 items-center justify-between bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5">
            <div style="position: relative;">
              <ul class="isolate min-w-0 flex items-center">
                <li class="py-2 min-w-0">
                  <a href="/#hero" class="w-full flex items-center gap-1.5 font-medium text-sm px-2 py-1">
                    <span class="truncate">Home</span>
                  </a>
                </li>
                <li class="py-2 min-w-0">
                  <a href="/#workexperience" class="w-full flex items-center gap-1.5 font-medium text-sm px-2 py-1">
                    <span class="truncate">Work Experience</span>
                  </a>
                </li>
                <li class="py-2 min-w-0">
                  <a href="/#projects" class="w-full flex items-center gap-1.5 font-medium text-sm px-2 py-1">Projects</a>
                </li>
                <li class="py-2 min-w-0">
                  <a href="/#contact" class="w-full flex items-center gap-1.5 font-medium text-sm px-2 py-1">Contact</a>
                </li>
              </ul>

            </div>

            <div>
              <ColorModeButton></ColorModeButton>
            </div>
          </nav>
        </div>

        <main>
          <section id="hero" class="py-16 flex gap-10">

            <div class="flex items-center justify-center">
              <img src="/images/profile2.jpg" alt="profile" class="border border-gray-400 w-[10rem] h-[8rem] object-cover rounded-full">
            </div>

            <div class="flex flex-col gap-6 justify-center h-full">
              <div>

                <h1 
                  class="font-bold text-3xl dark:text-muted leading-[1.5]"
                >
                  <span class="dark:text-green-400 text-green-800">{{ page.hero.intro }}</span> {{ page.hero.title }}
                </h1>

                <!-- MDC NOT RENDERING ANYTHING. I DONT KNOW WHY. HELP! -->
                <MDC
                  :value="'# Hello World'"
                  class="font-bold text-3xl dark:text-muted leading-[1.5]"
                />

              </div>

              <div class="w-full flex items-center justify-between">
                <div class="text-muted">
                  🏠 {{ page.hero.location }}
                </div>

                <div class="flex items-center gap-2">
                  <a 
                    v-for="link in page.hero.links"
                    :href="link.url" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    :key="`hero-link-${link.url}`"
                  >
                    <UIcon :name="link.icon" class="w-[24px] h-[24px]" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="techstack" class="py-16">
            <h2 class="uppercase tracking-widest dark:text-white font-bold text-lg pb-12">Tech Stack</h2>

            <div class="grid grid-cols-5 gap-5 text-muted">
              <tech-stack-card 
                v-for="tech in page.techstack"
                :key="`techstack-${tech.title}`"
                :title="tech.title"
              >
                <UIcon :name="tech.icon" class="w-[48px] h-[48px]" />
              </tech-stack-card>
            </div>
          </section>

          <section id="workexperience" class="pt-16 pb-8">
            <h2 class="uppercase tracking-widest dark:text-white font-bold text-lg pb-12">Work Experience</h2>

            <div 
              class="flex gap-8 py-6" 
              v-for="exp in page.experiences"
              :key="`${exp.timeframe}-${exp.company}`"
            >
              <div class="text-muted">{{ exp.timeframe }}</div>

              <div>
                <h3 class="dark:text-white">{{ exp.title }}</h3>
                <div class="text-muted">
                  {{ exp.company }} • 
                  <a 
                    class="text-green-800 dark:text-green-400" 
                    :href="exp.url" 
                    target="_blank">
                    {{ exp.domainName }}
                  </a> • 
                  {{ exp.jobtype }}
                </div>

                <p>

                </p>
              </div>
            </div>
          </section>

          <section id="projects" class="pt-16 pb-8">
            <h2 class="uppercase tracking-widest dark:text-white font-bold text-lg">Projects</h2>

            <p class="text-muted mt-6">
              Over the years, I've built digital experiences that focus on clarity, usability, and thoughtful design.
              Here are some of my favorite projects, highlighting the journey.
            </p>

            <div class="mt-10 mb-16">
              <!-- <UButton label="Email me"></UButton> -->
            </div>

            <div class="flex justify-between mb-8">
              <div class="rounded-lg w-[640px] border border-light-gray border-gray-700 p-5 flex flex-col gap-5">
                <img src="/images/chrome_2025-07-22_15-11-17.jpg" alt="mbscctv.com design update screenshot" title="mbscctv.com design update screenshot">

                <h3 class="font-semibold dark:dark:text-white text-xl tracking-wide">mbscctv.com</h3>

                <p class="dark:text-muted text-pretty text-[15px]">
                  Developed a modern landing page for a security system company, featuring a product catalog and blog section.
                  The website is fully responsive and optimized for SEO to improve visibility and user engagement.
                </p>

                <div class="grid grid-cols-6 gap-4">
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-vue'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Vue
                  </UBadge>
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-nuxt'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Nuxt
                  </UBadge>
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-tailwind'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Tailwind
                  </UBadge>
                </div>
              </div>

              <div>
                <UButton
                  icon="i-lucide-external-link" size="md" color="neutral" variant="outline" 
                  to="https://mbscctv.com" target="_blank" rel="noreferrer noopener"
                ></UButton>
              </div>
            </div>

            <div class="flex justify-between mb-8">
              <div class="rounded-lg w-[640px] border border-light-gray border-gray-700 p-5 flex flex-col gap-5">
                <img src="/images/chrome_2025-07-23_15-56-12.jpg" alt="nasionalrubber.co.id design update screenshot" title="nasionalrubber.co.id design update screenshot">

                <h3 class="font-semibold dark:dark:text-white text-xl tracking-wide">nasionalrubber.co.id</h3>

                <p class="dark:text-muted text-pretty text-[15px]">
                  Developed a fully responsive landing page for a rubber industry company in Indonesia.
                  The site features multilingual support (i18n) to cater international clients and enhance accessibility across regions.
                </p>

                <div class="grid grid-cols-6 gap-4">
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-vue'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Vue
                  </UBadge>
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-nuxt'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Nuxt
                  </UBadge>
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-tailwind'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Tailwind
                  </UBadge>
                </div>
              </div>

              <div>
                <UButton
                  icon="i-lucide-external-link" size="md" color="neutral" variant="outline" 
                  to="https://nasionalrubber.co.id/" target="_blank" rel="noreferrer noopener"
                ></UButton>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="rounded-lg w-[640px] border border-light-gray border-gray-700 p-5 flex flex-col gap-5">
                <img 
                  src="/images/chrome_2025-07-24_14-44-25.jpg" 
                  alt="Inventory management system and point of sale dashboard" 
                  title="Inventory management system and point of sale dashboard"
                >

                <h3 class="font-semibold dark:dark:text-white text-xl tracking-wide">Point of Sale & Inventory Management System</h3>

                <p class="dark:text-muted text-pretty text-[15px]">
                  A custom-built POS and inventory management system designed for small to medium-sized retail stores. 
                  This application runs entirely on the store's local network, ensuring fast, offline-capable operations without reliance on external servers.
                </p>

                <div class="grid grid-cols-6 gap-4">
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-django'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Django
                  </UBadge>
                  <UBadge
                    :avatar="{
                      icon: 'i-vscode-icons-file-type-tailwind'
                    }"
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Tailwind
                  </UBadge>
                  <UBadge
                    size="md"
                    color="neutral"
                    variant="outline"
                  >
                    Alpine
                  </UBadge>
                </div>

                <div class="mt-4">
                  <ul class="grid gap-4">
                    <LiFeature
                      icon="i-lucide-check"
                      description="Dashboard"
                    ></LiFeature>
                    <LiFeature
                      icon="i-lucide-check"
                      description="Real-time sales tracking"
                    ></LiFeature>
                    <LiFeature
                      icon="i-lucide-check"
                      description="Product and stock management"
                    ></LiFeature>
                    <LiFeature
                      icon="i-lucide-check"
                      description="User access control"
                    ></LiFeature>
                    <LiFeature
                      icon="i-lucide-check"
                      description="Invoicing / printable rerceipts"
                    ></LiFeature>
                  </ul>
                </div>

              </div>

              <div>
                <UButton
                  icon="i-lucide-external-link" size="md" color="neutral" variant="outline" 
                  to="https://nasionalrubber.co.id/" target="_blank" rel="noreferrer noopener"
                ></UButton>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <section id="contact" class="pt-6 pb-2 border-t-1 border-neutral-800">
            <div class="flex justify-between">

              <div class="text-muted">madeybog@gmail.com</div>

              <div class="flex items-center justify-end gap-3">
                <a href="https://github.com/madeyoga">
                  <UIcon name="i-mdi-github" class="w-[24px] h-[24px]" />
                </a>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
</template>