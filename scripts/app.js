const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "11.01.2004",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title: "15.01.2004",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "22.01.2004",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title: "02.02.2004",
  },
];

(function (arrOfTasks) {
  /* 1 - это самовызыыающаяся ф-ция. В сааамом конце страницы самый конец в скобках можно увидеть ее обращение к массиву обьектов */
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    /* 2 - здесь мы из массива обьектов с аккумулировали айдишки  и прибавили к ним массивы полные*/
    acc[task._id] = task;
    return acc;
  }, {});

  const listContainer = document.querySelector(
    /* 15. Создаем контейнер для лишек */
    ".tasks-list-section .list-group"
  );

  renderAllTasks(objOfTasks); /* 3. Сразу же вызвали будущую функцию */

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      /* 4. та самая функция, которая проверит, передали ли мы обьекты  */
      console.error("передайте список задач");
      return;
    }
    const fragment =
      document.createDocumentFragment(); /* 5 Создать фрагмент на будущее */
    Object.values(tasksList).forEach((task) => {
      /* 6. Object.values примет обьект и вернет его значения в виде массива,,
         и foreach здесь переберет и обратится к каждому обьекту по отдельности*/
      const li =
        listItemTemplate(
          task
        ); /* 13. применили функцию из пункта 7 к каждлму перебранному обьекту и делаем LI */
      fragment.appendChild(li); /* 14. Во фрагмент вставляем нашу лишку */
    });
    listContainer.appendChild(
      fragment
    ); /* 16. Засунули фрагмент в контейнер и функция уже вызвана в пункте 3))) КОНЕЦ */
  }

  function listItemTemplate({ _id, title, body } = {}) {
    /* 7. Дальше пишем функцию которая каждый перебранный элемент обьекта 
  деструктурирует и выйнет только айди титл и боди, то что нам сейчас надо */
    const li =
      document.createElement("li"); /*8. Создадим лишку и добавим классы */
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2",
      "opacity"
    );
    const span =
      document.createElement(
        "span"
      ); /* 9. Создадим спан , добавим классы и дадим ему текст из нашего деструктуриранного title */
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn =
      document.createElement(
        "button"
      ); /* 10. так же с кнопкой, но ей текст просто написали */
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    const article =
      document.createElement(
        "p"
      ); /* 11. Так же создали текст p и дали ему деструктурированный из обьекта текст 'body' */
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span); /*12. здесь мы засунули все созданное в лишку */
    li.appendChild(deleteBtn);
    li.appendChild(article);
    return li; /* 13. Результат функции будет лишка с элементами */
  }

  /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ создание новых форм*/
  const form =
    document.forms[
      "addTask"
    ]; /*создали  переменную для инпута, найдя ее по айдишке через специальный метод forms['id]  */
  const inputTitle =
    form.elements[
      "title"
    ]; /* создали переменную тайтла через метод который в форме нашел инпут тайтл через айди тайтл ele.ents['id] */
  const inputBody =
    form.elements["body"]; /* то же самое но со вторым инпутом боди */
  form.addEventListener(
    "submit",
    onFormSubmitHundler
  ); /* добавили событие на форму , чтобы запустилась функция которая ниже */

  function onFormSubmitHundler(e) {
    e.preventDefault(); /* надпись чтобы не перезагружать страницу когда нажимаешь сабмит */
    const titleValue =
      inputTitle.value; /* создали две переменные со значениями из введенных в инпуты */
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      /* если нет значений ебанули типа ошибку с красным стилем бордера */
      if (!titleValue) {
        inputTitle.placeholder = "Введите дату и название!";
        inputTitle.classList.add("warning");
      } else {
        inputTitle.classList.remove("warning");
      }
      if (!bodyValue) {
        inputBody.placeholder = "Введите описание";
        inputBody.classList.add("warning");
      } else {
        inputBody.classList.remove("warning");
      }
    } else {
      inputTitle.classList.remove("warning");
      inputBody.classList.remove("warning");
      form.reset();
      const task = createNewTask(
        titleValue,
        bodyValue
      ); /* создали переменную, в которой будет через функцию пропускаться значение из тайтла и боди и создаваться из них обьект */
      const listItem =
        listItemTemplate(
          task
        ); /*  обращаемся к старой функции которая делает из этого обьекта элемент в дом дереве с классами и все такое*/
      listContainer.insertAdjacentElement(
        "afterbegin",
        listItem
      ); /* insertadjacentelement afterbegin и то что мы добавим в лист контейнер и  вуаля, мы добавили элемент */
    }
  }
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };
    arrOfTasks[newTask._id] = newTask;
    return { ...newTask };
  }

  /* тут с удалениями и возвраты ? делал через искусственный интеллект \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
  const confirmContainer = document.querySelector(".confirmContainer");
  const yesButton = document.querySelector(".yes");
  const noButton = document.querySelector(".no");
  let currentDeleteButton; // Эта переменная будет хранить кнопку удаления для текущей задачи

  let removedParents = [];

  listContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      currentDeleteButton = e.target; // Сохраняем текущую кнопку удаления
      confirmContainer.classList.remove("none");
      document.querySelector(".con").classList.add("mute");
       // Показываем контейнер подтверждения
      // Не добавляем обработчики для yesButton и noButton здесь
    }
  });

  // Измененный обработчик событий для кнопки "Да"
  yesButton.addEventListener("click", function () {
    if (currentDeleteButton) {
      const parent = currentDeleteButton.closest("li");
      // Сохраняем удаленный элемент в массив
      removedParents.push(parent);
      parent.remove();
      confirmContainer.classList.add("none");
      document.querySelector(".con").classList.remove("mute");
      
      currentDeleteButton = null;
    }
  });

  // Обработчик событий для кнопки "Нет" остается без изменений
  noButton.addEventListener("click", function () {
    confirmContainer.classList.add("none");
    document.querySelector(".con").classList.remove("mute");
   // Скрываем контейнер подтверждения
  });

  const restoreBtn = document.querySelector(".restore-btn"); // Находим новую кнопку восстановления в DOM

  restoreBtn.addEventListener("click", function () {
    // Проверяем, есть ли элементы для восстановления
    if (removedParents.length > 0) {
      // Получаем последний удаленный элемент из массива без его удаляения
      const lastRemovedParent = removedParents[removedParents.length - 1];

      // Вставляем его обратно в DOM
      listContainer.insertAdjacentElement("afterbegin", lastRemovedParent);

      // Удаляем последний удаленный элемент из массива
      removedParents.pop();
    }
  });
})(tasks);
