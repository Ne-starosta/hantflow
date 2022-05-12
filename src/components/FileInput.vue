<template>
  <div>
    <label :for="fileKey" title="Загрузить фотографию">
      <b-avatar :src='photo' class="fileLabel" size="6rem"></b-avatar>
    </label>
    <input
      :ref="fileKey"
      type="file"
      :id="fileKey"
      :name="fileKey"
      class="fileInput"
      @change="handlerInputFile"
    >
  </div>
</template>

<script>
export default {
  name: 'FileInput',

  data: () => ({
    fileKey: Math.random(),
    avatar: 'photo.png'
  }),
  props: {
    value: String
  },
  computed: {
    photo () {
      return this.value || 'photo.png'
    }
  },
  methods: {
    handlerInputFile () {
      const file = this.$refs[this.fileKey].files[0]

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.avatar = reader.result
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

.fileLabel {
  transition: .1s;
  cursor: pointer;
}

.fileLabel:hover {
  box-shadow: 2px 4px 19px 0 rgba(34, 60, 80, 0.2);
  opacity: .8;
}
</style>
