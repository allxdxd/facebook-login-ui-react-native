const formatDate = () => {
  let date = new Date().getDate()
  let month = new Date().getMonth() + 1
  let year = new Date().getFullYear()
  let hour = new Date().getHours()
  let minutes = new Date().getMinutes()
  let time = `${hour}:${minutes}`
  let today = `${date}/${month}/${year}`
  return [today, time]
}

export default formatDate
