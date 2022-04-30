import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  state: () => ({
    user: 'lll'
  }),
  mutations: {
    mutationUser (state, user) {
      state.user = user
    }
  },
  getters: {
    getEmail (state) {
      return state.user.email || ''
    }
  },
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      const auth = getAuth()
      const user = await signInWithEmailAndPassword(auth, email, password)
      commit('mutationUser', user.user)
    },
    async signup ({ dispatch, commit }, { email, password }) {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email, password)
    }
  }
}
