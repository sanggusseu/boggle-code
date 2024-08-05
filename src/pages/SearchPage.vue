<template>
  <section
    class="row item-center justify-center full-height search-section q-px-md q-px-sm-lg"
  >
    <div class="col-12 col-lg-6 flex items-center">
      <div class="column flex-center full-width">
        <h2 class="text-h1 text-weight-bold title">Boggle</h2>
        <form @submit.prevent="searchInNewPage" class="flex full-width no-wrap">
          <q-select
            class="platform-select"
            standout="bg-secondary text-white"
            v-model="searchPlatform"
            :options="searchPlatformOptions"
            label="검색 플랫폼"
          />
          <q-input
            class="col-grow flex items-center search-input"
            v-model="search"
            debounce="500"
            filled
            placeholder="검색어를 입력하세요"
            required
            ref="searchPlatformInput"
          >
            <q-btn rounded flat icon="search" type="submit" />
          </q-input>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { getBaseUrl } from 'src/data/platform';
import { ref, watch } from 'vue';

const $q = useQuasar();
const searchPlatform = ref('Google');
const search = ref('');
const searchPlatformInput = ref();
const searchPlatformOptions = ['Google', 'Naver', 'Youtube'];

const getSearchPlatform = () => {
  return $q.localStorage.getItem('searchPlatform') || 'Google';
};

const init = () => {
  const value = getSearchPlatform();
  searchPlatform.value = value;
};

init();

const changeSearchPlatform = () => {
  $q.localStorage.set('searchPlatform', searchPlatform.value);
};

const searchInNewPage = () => {
  const query = search.value.replace(/ /g, '+');
  const url = `${getBaseUrl(searchPlatform.value)}${query}`;
  window.open(url, '_blank');
  search.value = '';
  searchPlatformInput.value.focus();
};

watch(searchPlatform, () => changeSearchPlatform());
</script>

<style lang="scss" scoped>
.search-section {
  position: relative;
  top: -50px;
}

.title {
  color: $primary;
}

.platform-select {
  flex-shrink: 0;
  min-width: 120px;
}

.search-input {
  flex: 1 1 auto;
}
</style>
