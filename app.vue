<template>
  <div class="bg-neutral-950 min-h-screen w-full">
    <NuxtRouteAnnouncer />

    <div class="mx-auto max-w-[47.5rem] p-6">
      
      <header>
        <nav class="flex justify-between w-full pt-5 pb-8">
          <div class="text-lg text-green-400 hover:text-green-200 tracking-widest font-bold uppercase spacing">
            <a href="/">Made Yoga</a>
          </div>
          
          <div class="text-gray-400 flex items-center gap-6 text-lg">
            <div class=" hover:text-green-400">
              <a href="#workexperience">Work Experience</a>
            </div>
            <div class="hover:text-green-400">
              <a href="#contacts">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" class="py-16 flex gap-10">

          <div class="flex items-center justify-center">
            <img src="/images/profile2.jpg" alt="profile" class="border border-green-400 w-[10rem] h-[8rem] object-cover rounded-full">
          </div>

          <div class="flex flex-col gap-6 justify-center h-full">
            <div>

              <h1 class="font-bold text-3xl text-gray-400 leading-[1.5]">
                <span class="text-green-400">Hey, I'm Made.</span> I'm a Fullstack Software Developer.
              </h1>

            </div>

            <div class="w-full flex items-center justify-between text-gray-400">
              <div>
                🏠 Samarinda, Indonesia.
              </div>

              <div class="flex items-center gap-2">
                <a href="#">Github</a>
              </div>
            </div>
          </div>
        </section>

        <section id="techstack" class="py-16">
          <h2 class="uppercase tracking-widest text-white font-bold text-lg pb-12">Tech Stack</h2>

          <div class="grid grid-cols-5 gap-5 text-gray-400">
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">Django</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">.NET</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">Python</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">C#</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">Vue</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">HTML</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">CSS</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">JavaScript</div>
            <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400">Tailwind</div>
          </div>
        </section>

        <section id="workexperience" class="py-16">
          <h2 class="uppercase tracking-widest text-white font-bold text-lg pb-12">Work Experience</h2>

          <div class="flex gap-8 py-6">
            <div class="text-gray-400">2021 - 2025</div>

            <div>
              <h3 class="text-white">Backend Software Developer</h3>
              <div class="text-gray-400">Superjaya • superjaya.id • Freelance</div>

              <p>

              </p>
            </div>
          </div>

          <div class="flex gap-8 py-6">
            <div class="text-gray-400">2021 - 2025</div>

            <div>
              <h3 class="text-white">Fullstack Software Developer</h3>
              <div class="text-gray-400">PT Media Bersama Sukses • mbscctv.com • Freelance</div>

              <p>

              </p>
            </div>
          </div>

          <div class="flex gap-8 py-6">
            <div class="text-gray-400">2024 - 2024</div>

            <div>
              <h3 class="text-white">Frontend Software Developer</h3>
              <div class="text-gray-400">PT. Nasional Bhirawa Tama • nasionalrubber.co.id • Freelance</div>

              <p>

              </p>
            </div>
          </div>

          <div class="flex gap-8 py-6">
            <div class="text-gray-400">2023 - 2024</div>

            <div>
              <h3 class="text-white">Fullstack Software Developer</h3>
              <div class="text-gray-400">PT. KEM KEM Primahusada • Freelance</div>

              <p>

              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
