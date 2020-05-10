export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  })
}
