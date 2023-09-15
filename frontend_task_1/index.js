
const utcTime = document.getElementById("utcTime")

const hour = new Date().getHours()
const minute = new Date().getMinutes()
const second = new Date().getSeconds()
const date = [hour , minute , second]
const cost = date.join(' - ')

utcTime.innerHTML = cost




