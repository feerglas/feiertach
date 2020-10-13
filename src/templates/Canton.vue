<template>
  <Layout :title="$page.canton.name[this.$i18n.locale]">
    {{$page.canton}}
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  canton(id: $id) {
    flag
    name {
      en
      de
      it
      fr
    }
    key
  }
}
</page-query>

<script>
</script>
