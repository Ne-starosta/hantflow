import { getDatabase, ref, set } from 'firebase/database'

export function logger (email, action, log) {
  const db = getDatabase()
  const id = Number(new Date())

  const dateNow = new Date()

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  const date = dateNow.toLocaleString('ru', options)

  set(ref(db, 'logger/' + id), {
    email,
    date,
    action,
    log
  })
}
