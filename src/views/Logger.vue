<template>
  <div class="about">
    <div style="margin-top: 15%" v-if="!list.length">
      <b-spinner></b-spinner>
    </div>
    <b-table v-else striped hover :items="list.reverse()" :fields="fields">
      <template #cell(log)="data">
        <div style="text-align: left">
          <json-viewer
            style="background: rgba(0, 0, 0, 0); border: none"
            :value="data.value"
            class="viewer"
            :expand-depth=0
            boxed
            sort></json-viewer>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { getDatabase, ref, child, get } from 'firebase/database'
import JsonViewer from 'vue-json-viewer'
import 'vue-json-viewer/style.css'
export default {
  components: {
    JsonViewer
  },
  mounted () {
    if (!this.$store.getters.getEmail) {
      this.$router.push('/')
    }
    this.loadData()
  },
  data: () => ({
    fields: [{
      key: 'email',
      label: 'Пользователь'
    }, {
      key: 'action',
      label: 'Действие'
    }, {
      key: 'date',
      label: 'Время'
    }, {
      key: 'log',
      label: 'Данные',
      tdClass: 'dataCell'
    }],
    list: []
  }),
  methods: {
    loadData () {
      const dbRef = ref(getDatabase())
      get(child(dbRef, 'logger')).then((snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val())
          this.list = data || []
        } else {
          console.log('No data available')
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>

<style>
.dataCell {
  max-width: 350px;
}

</style>
