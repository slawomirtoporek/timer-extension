const nameInput = document.getElementById("name-input");
const timeInput = document.getElementById("time-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;

  chrome.storage.sync.set({
    name,
    notificationTime,
  });
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  const name = res.name;
  const notificationTime = res.notificationTime ?? 1000;
  timeInput.value = notificationTime;
  if (name) {
    nameInput.value = name;
  }
});

setInterval(() => {
  console.log("options");
}, 1000);
