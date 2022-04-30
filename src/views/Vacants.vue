<template>
  <div class="wrapper">
    <div class="list">
      <div @click="() => setSelectedId(item.id)" v-for="item in list" :key="item.id" class="item">
        <div>{{item.title}}</div>
      </div>
    </div>
    <div class="data">
      <div v-if="selectedId">
        <div class="buttons">
          <b-button variant="danger" @click="() => deleteData(selectedData.id)">Удалить</b-button>
        </div>
        <div class="title">{{selectedData.title}}</div>
        <div class="caption">{{selectedData.caption}}</div>
        <div class="nameCategory">Что вам предстоит</div>
        <div class="caption">{{selectedData.responsibilities}}</div>
        <div class="nameCategory">Что от вас требуется</div>
        <div class="caption">{{selectedData.expectations}}</div>
        <div class="nameCategory">Что мы вам предоставим</div>
        <div class="caption">{{selectedData.benefits}}</div>
      </div>
      <div v-else>
        <img src="../assets/empty.jpg">
      </div>
    </div>
    <div class="add">
      <b-button v-b-modal.modal-1 variant="success">
        <b-icon icon="plus-lg"></b-icon>
      </b-button>
    </div>
    <b-modal id="modal-1" title="BootstrapVue">
      <template #modal-header>
        <h5>Создать новую вакансию</h5>
      </template>

      <template class="content" #default>
        <p>Заполните все поля новой вакансии</p>
        <b-form-input v-model="newVacantion.title" placeholder="Название вакансии"></b-form-input>
        <b-form-textarea
          id="textarea"
          v-model="newVacantion.caption"
          placeholder="Описание вакансии"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-form-textarea
          id="textarea"
          v-model="newVacantion.responsibilities"
          placeholder="Обязанности будущего кандидата"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-form-textarea
          id="textarea"
          v-model="newVacantion.expectations"
          placeholder="Требования, выдвигаемые к кандидату"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-form-textarea
          id="textarea"
          v-model="newVacantion.benefits"
          placeholder="Условия работы"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </template>

      <template #modal-footer="{ ok, cancel }" class="footer">
        <b-button variant="success" @click="() => saveData(ok)">
          Сохранить
        </b-button>
        <b-button @click="cancel()">
          Отменить
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { getDatabase, ref, child, get, set } from 'firebase/database'
export default {
  mounted () {
    if (!this.$store.getters.getEmail) {
      this.$router.push('/')
    }
    this.loadData()
  },
  computed: {
    selectedData () {
      return this.list.find((item) => item.id.toString() === this.selectedId.toString())
    }
  },
  methods: {
    setSelectedId (id) {
      this.selectedId = id.toString()
    },
    async deleteData (id) {
      const db = getDatabase()
      await set(ref(db, 'vacancies/' + id), null)
      this.selectedId = 0
      this.loadData()
    },
    loadData () {
      const dbRef = ref(getDatabase())
      get(child(dbRef, 'vacancies')).then((snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val())
          this.list = data || []
        } else {
          console.log('No data available')
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    saveData (func) {
      const db = getDatabase()
      const id = Number(new Date())
      set(ref(db, 'vacancies/' + id), {
        id: id,
        ...this.newVacantion
      })
      func()
      this.clearData()
      this.loadData()
    },
    clearData () {
      this.newVacantion = {
        title: '',
        caption: '',
        responsibilities: '',
        expectations: '',
        benefits: ''
      }
    }
  },
  data: () => ({
    list: [],
    selectedId: 0,
    newVacantion: {
      title: '',
      caption: '',
      responsibilities: '',
      expectations: '',
      benefits: ''
    }
  })
}
</script>

<style scoped>
.wrapper {
  display: flex;
}

.list {
  height: calc(100vh - 100px);
  width: 30%;
  overflow: auto;
  box-shadow: 6px 1px 13px -3px rgba(34, 60, 80, 0.17);
}

.data {
  height: calc(100vh - 100px);
  padding: 20px;
  overflow: auto;
  width: 100%;
}

.item {
  display: flex;
  font-size: 13px;
  padding: 5px;
  font-weight: bolder;
  cursor: pointer;
  border-bottom: 1px solid #c1c1c1;
  transition: .1s;
}

.item:hover {
  background-color: #faeaff;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}

.title {
  font-weight: bolder;
  font-size: 30px;
}

.caption {
  text-align: left;
  color: #858585;
}

.nameCategory {
  text-align: left;
  font-weight: bolder;
  font-size: 16px;
  margin: 12px 0;
}

.add {
  position: absolute;
  bottom: 30px;
  right: 30px;
}

#textarea {
  margin: 10px 0;
}
</style>
