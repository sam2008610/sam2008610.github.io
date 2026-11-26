/**
 * Homepage content.
 * Experience and projects come from LinkedIn; anything marked TODO is still a placeholder.
 */
export const PROFILE = {
  role: 'Embedded Software Engineer',
  location: 'Hsinchu, Taiwan',
  headline: ['Real-time software,', 'close to the metal.'],
  intro:
    "I'm Sam (Po-Hsiang) Tseng, an embedded software engineer focused on automotive systems. For the past two years at KopherBit, I built an AUTOSAR Classic Platform OS from the kernel up — task scheduling, context switching, MPU memory protection and multicore synchronization — in C and assembly.",
  email: 'hi@samtseng.dev',
  experience: [
    {
      period: 'Jun 2024 – May 2026',
      org: 'KopherBit Co., Ltd.',
      role: 'Software Engineer',
      summary: 'Developed the AUTOSAR Classic Platform OS (BSW) for automotive ECUs, working at the kernel level in C and assembly.',
      highlights: [
        'OS kernel: designed and implemented task scheduling, context switching, MPU-based memory protection, multicore synchronization and IOC inter-partition communication.',
        'Multi-platform porting: ported the OS to Infineon TriCore TC39x, NXP S32K322 (Cortex-M7) and TI AM263 (Cortex-R5F), handling architecture-specific startup, interrupt and memory protection code.',
        'Tooling: built an RTE code generator and a linker script generator supporting both the Diab and GCC toolchains.',
        'MCAL integration: worked with cross-functional teams to integrate and verify MCAL drivers, including CAN, I2C and UART.',
      ],
    },
    // TODO: add education or earlier roles
  ],
  projects: [
    {
      title: 'AUTOSAR OS kernel',
      description: 'A real-time OS kernel for automotive ECUs: task scheduling, context switching, MPU memory protection, multicore synchronization and IOC communication across partitions.',
      tags: ['C', 'Assembly', 'AUTOSAR', 'RTOS'],
    },
    {
      title: 'One OS, three architectures',
      description: 'Ported the same OS to TriCore TC39x, Cortex-M7 (S32K322) and Cortex-R5F (AM263), each with its own startup sequence, interrupt handling and memory protection.',
      tags: ['TriCore', 'Cortex-M7', 'Cortex-R5F'],
    },
    {
      title: 'RTE & linker script generators',
      description: 'Generate RTE code and linker scripts straight from configuration, for both the Diab and GCC toolchains, to cut setup and integration time.',
      tags: ['Code generation', 'Diab', 'GCC'],
    },
    {
      title: 'This website',
      description: "The site you're reading. Built with Astro, with optimized images, dark mode and RSS, deployed to GitHub Pages.",
      tags: ['Astro', 'TypeScript', 'CSS'],
      href: 'https://github.com/sam2008610/sam2008610.github.io',
      linkLabel: 'Source',
    },
  ] as { title: string; description: string; tags: string[]; href?: string; linkLabel?: string }[],
};
