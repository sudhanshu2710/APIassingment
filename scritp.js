const btn = document.querySelector(".btn");
const fetchData = function () {
  fetch(`https://json-server-mocker-masai.herokuapp.com/tasks`, {
    method: "GET",
    headers: { "content-type": "application/json;charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      display(data);
    })
    .catch((err) => console.log(err));
};

function display(data) {
  container.innerHTML = "";

  data.forEach(function (data) {
    if (data.name === "blade_") {
      var task = document.createElement("div");
      task.innerHTML = data.title;
      task.classList.add("tasks");
      if (data.status == true) task.classList.add("done");
      else task.classList.add("notdone");
      var container = document.querySelector("#container");
      container.append(task);
    }
  });
}
fetchData();

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var input = document.querySelector(".input").value;
  var check = document.querySelector(".check").checked;
  console.log(input, check);
  let data_ = {
    title: input,
    status: check,
    name: "blade_",
  };
  fetch(`https://json-server-mocker-masai.herokuapp.com/tasks`, {
    method: "POST",
    body: JSON.stringify(data_),
    headers: { "content-type": "application/json;charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      fetchData();
    })
    .catch((err) => console.log(err));
});
