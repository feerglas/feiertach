<template>
  <Layout title="Cantons">
    <ul class="list">
      <li
        class="list-item"
        v-for="(item, index) in $page.allCanton.edges"
        :key="index"
      >
        <g-link
          class="link"
          :to="`${$data.currentLocale}/cantons/${item.node.id}`"
        >
          <g-image
            class="image"
            :src="$data.iconsPath + item.node.flag"
          />
          <span class="name">{{item.node.name[$data.currentLocale]}}</span>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    allCanton (
      sortBy: "sortValue"
      order: ASC
    ) {
      edges{
        node{
          id
          flag
          name {
            de
            en
            it
            fr
          }
        }
      }
    }
  }
</page-query>

<script>
import iconsPath from '../helpers/icons';

export default {
  data() {
    return {
      currentLocale: this.$i18n.locale,
      iconsPath: iconsPath()
    };
  }
};

</script>

<style lang="scss" scoped>
  .list {

  }

  .list-item {
    margin-bottom: 1rem;
  }

  .link {
    display: flex;
    align-items: center;
  }

  .image {
    width: 3rem;
    border: 1px solid black;
  }

  .name {
    padding-left: 1rem;
  }

</style>
