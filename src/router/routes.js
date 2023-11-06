const routes = [
  // Always leave this as last one,
  // but you can also remove it

  {
    path: "/sandhya",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "home", component: () => import("src/pages/Home.vue") },
      {
        path: "about",
        component: () => import("src/pages/About.vue"),
      },
      {
        path: "education",
        component: () => import("src/pages/Education.vue"),
      },

      {
        path: "skills",
        component: () => import("src/pages/Skills.vue"),
      },
      {
        path: "hobbies",
        component: () => import("src/pages/Hobbies.vue"),
      },
      {
        path: "contact",
        component: () => import("src/pages/Contact.vue"),
      },

      {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
      },
    ],
  },
];

export default routes;
