const baseSuccessCallbackPrimary = (event) => {
  event.preventDefault();
  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form="form-primary"]'));

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
    window.setTimeout(function () {
      document.location.href = "/";
    }, 3000);

  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
  });
};

const baseSuccessCallbackSecondary = (event) => {
  event.preventDefault();
  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form="form-secondary"]'));

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
    window.setTimeout(function () {
      document.location.href = "/";
    }, 3000);

  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
  });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
};

export const callbacks = {
  basePrimary: {
    reset: true,
    resetTimeout: 500,
    successCallback: baseSuccessCallbackPrimary,
    errorCallback: baseErrorCallback,
  },

  baseSecondary: {
    reset: true,
    resetTimeout: 500,
    successCallback: baseSuccessCallbackSecondary,
    errorCallback: baseErrorCallback,
  },
};
