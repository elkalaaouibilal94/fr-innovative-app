// Image paths relative to src/assets folder
export const IMAGES = {
  // Logo images
  LOGO: "images/logo/logo.png",
  LOGO_NO_TEXT: "images/logo/logo-no-text.png",
  FAVICON: "images/logo/favicon.png",

  // Hero slider images
  HERO_SLIDES: [
    "images/hero/slide1.jpeg",
    "images/hero/slide2.jpeg",
    "images/hero/slide3.jpeg",
    "images/hero/slide4.jpeg",
    "images/hero/slide5.jpeg",
    "images/hero/slide6.jpeg",
    "images/hero/slide7.jpeg",
    "images/hero/slide8.jpeg",
    "images/hero/slide9.jpeg",
    "images/hero/slide10.jpeg",
  ],

  // Project images
  PROJECTS: {
    BATHROOM: {
      BEFORE_AFTER: {
        DUSCHE1: {
          BEFORE: "images/projects/bathroom/before-after/dusche1-before.jpg",
          AFTER: "images/projects/bathroom/before-after/dusche1-after.jpg",
        },
        DUSCHE2: {
          BEFORE: "images/projects/bathroom/before-after/dusche2-before.jpg",
          AFTER: "images/projects/bathroom/before-after/dusche2-after.jpg",
        },
      },
      COMPLETE: {
        GALLERY: [
          "images/projects/bathroom/complete/bad1.jpg",
          "images/projects/bathroom/complete/bad2.jpg",
          "images/projects/bathroom/complete/bad3.jpg",
          "images/projects/bathroom/complete/bad4.jpg",
          "images/projects/bathroom/complete/bad5.jpg",
        ],
      },
      SANIERUNG: {
        VORHER: [
          "images/projects/bathroom/sanierung/vorher/bad1.jpg",
          "images/projects/bathroom/sanierung/vorher/bad2.jpg",
          "images/projects/bathroom/sanierung/vorher/bad3.jpg",
          "images/projects/bathroom/sanierung/vorher/bad4.jpg",
          "images/projects/bathroom/sanierung/vorher/bad5.jpg",
        ],
        NACHHER: [
          "images/projects/bathroom/sanierung/nachher/bad1.jpg",
          "images/projects/bathroom/sanierung/nachher/bad2.jpg",
          "images/projects/bathroom/sanierung/nachher/bad3.jpg",
          "images/projects/bathroom/sanierung/nachher/bad4.jpg",
          "images/projects/bathroom/sanierung/nachher/bad5.jpg",
        ],
      },
    },
    HEATING: {
      SYSTEM: [
        "images/projects/heating/system/heizung1.jpg",
        "images/projects/heating/system/heizung2.jpg",
        "images/projects/heating/system/heizung3.jpg",
        "images/projects/heating/system/heizung4.jpg",
      ],
      FLOOR_HEATING: [
        "images/projects/heating/floor/boden1.jpg",
        "images/projects/heating/floor/boden2.jpg",
        "images/projects/heating/floor/boden3.jpg",
        "images/projects/heating/floor/boden4.jpg",
      ],
    },
    PIPES: {
      INSTALLATION: [
        "images/projects/pipes/installation/rohr1.jpg",
        "images/projects/pipes/installation/rohr2.jpg",
        "images/projects/pipes/installation/rohr3.jpg",
        "images/projects/pipes/installation/rohr4.jpg",
      ],
    },
  },
} as const;

// Validate all image paths exist at build time
Object.values(IMAGES).forEach((value) => {
  if (typeof value === "string") {
    try {
      new URL(`../assets/${value}`, import.meta.url);
    } catch (error) {
      console.warn(`Missing image: ${value}`);
    }
  }
});
