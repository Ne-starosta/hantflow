<template>
  <div>
    <label :for="fileKey" title="Загрузить резюме">
      <div class="wrapper">
        <b-icon v-if="file" font-scale="4" icon="file-earmark-check"></b-icon>
        <b-icon v-else font-scale="4" icon="file-earmark"></b-icon>
      </div>
    </label>
    <input
      :ref="fileKey"
      type="file"
      accept=".doc"
      :id="fileKey"
      :name="fileKey"
      class="fileInput"
      @change="handlerInputFile"
    >
  </div>
</template>

<script>
export default {
  name: 'FileInputTwo',

  data: () => ({
    fileKey: Math.random(),
    file: undefined
  }),

  methods: {
    handlerInputFile () {
      const file = this.$refs[this.fileKey].files[0]

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.file = reader.result
      }
      this.$emit('change', file)
    }
  }
}
</script>

<style scoped>
.fileInput {
  display: none;
}

.wrapper {
  background-color: #eaeaea;
  border-radius: 50px;
  padding: 15px;
  transition: .1s;
  cursor: pointer;
}

.wrapper:hover {
  box-shadow: 2px 4px 19px 0 rgba(34, 60, 80, 0.2);
  opacity: .8;
}
</style>
