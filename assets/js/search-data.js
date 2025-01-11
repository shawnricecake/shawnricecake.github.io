// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-got-two-papers-accepted-in-neurips-2024",
          title: 'Got two papers accepted in NeurIPS 2024.',
          description: "",
          section: "News",},{id: "news-our-paper-about-ptq-of-llms-on-mobile-and-fpga-has-been-accepted-to-tcad",
          title: 'Our paper about PTQ of LLMs on Mobile and FPGA has been accepted...',
          description: "",
          section: "News",},{id: "news-multimodal-opioid-benchmark-released-on-huggingface-opioidarchive-oida-qa",
          title: 'Multimodal Opioid Benchmark released on HuggingFace: opioidarchive/oida-qa.',
          description: "",
          section: "News",},{id: "news-got-three-papers-accepted-in-aaai-2025",
          title: 'Got three papers accepted in AAAI 2025.',
          description: "",
          section: "News",},{id: "news-got-adobe-reward-2024-key-innovations-tech-transfer-small-llm-on-acrobat",
          title: 'Got Adobe Reward: 2024 Key Innovations (Tech Transfer Small LLM on Acrobat).',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
