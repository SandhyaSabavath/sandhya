<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <!-- <img src="assets/profile.png" alt="Profile Picture" /> -->
            <img src="~/assets/profile.png" alt="Profile Picture" />
          </q-avatar>
          MY PROFILE
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <!-- <q-route-tab to="/" label="Home" /> -->
        <q-route-tab to="/sandhya/about" label="About" />
        <q-route-tab to="/sandhya/education" label="Education" />
        <q-route-tab to="/sandhya/skills" label="Skills" />
        <q-route-tab to="/sandhya/hobbies" label="Hobbies" />
        <q-route-tab to="/sandhya/contact" label="Contact" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
