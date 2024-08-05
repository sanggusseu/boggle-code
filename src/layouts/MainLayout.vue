<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Boggle </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> 페이지 이동 </q-item-label>

        <PageLink v-for="page in pagesList" :key="page.title" v-bind="page" />
      </q-list>
      <q-list>
        <q-item-label header> 추천 사이트 </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="window-height">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import PageLink from 'src/components/PageLink.vue';

defineOptions({
  name: 'MainLayout',
});

const pagesList = [
  {
    title: '검색',
    caption: '검색 페이지',
    icon: 'search',
    to: '/',
  },
];

const linksList = [
  {
    title: '멋진 헛간',
    caption: '유용한 사이트 모음',
    icon: 'star',
    link: 'https://sanggusseu.github.io/bookmark/',
  },
  {
    title: '명언 제조기',
    caption: '명언처럼 보이게 만들어 주는 사이트',
    icon: 'edit',
    link: 'https://sanggusseu.github.io/make-quote/',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
