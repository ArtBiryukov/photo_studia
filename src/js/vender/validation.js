import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

// var im = new Inputmask('99-9999999');

const validation = () => {
  // console.log(JustValidate);

  const forms = document.querySelectorAll('form');

  // forms.forEach((form) => {
  //   const telInput = form.querySelector('input[type="tel"]');
  //   if (telInput) {
  //     // inputMask.mask(telInput);
  //   }

  //   const validation = new JustValidate(form);
  //   validation
  //     .addField('.input-name', [
  //       {
  //         rule: 'minLength',
  //         value: 3,
  //       },
  //       {
  //         rule: 'maxLength',
  //         value: 30,
  //       },
  //       {
  //         rule: 'required',
  //         value: true,
  //         errorMessage: 'Введите имя!',
  //       },
  //     ])
  //     .addField('.input-mail', [
  //       {
  //         rule: 'required',
  //         value: true,
  //         errorMessage: 'Email обязателен',
  //       },
  //       {
  //         rule: 'email',
  //         value: true,
  //         errorMessage: 'Введите корректный Email',
  //       },
  //     ])
  //     .addField('.input-tel', [
  //       {
  //         rule: 'required',
  //         value: true,
  //         errorMessage: 'Телефон обязателен',
  //       },
  //       {
  //         rule: 'function',
  //         validator: function () {
  //           const phone = telSelector.inputmask.unmaskedvalue();
  //           return phone.length === 10;
  //         },
  //         errorMessage: 'Введите корректный телефон',
  //       },
  //     ]);
  //   // .onSuccess((event) => {
  //   //   console.log('Validation passes and form submitted', event);

  //   //   let formData = new FormData(event.target);

  //   //   console.log(...formData);

  //   //   let xhr = new XMLHttpRequest();

  //   //   xhr.onreadystatechange = function () {
  //   //     if (xhr.readyState === 4) {
  //   //       if (xhr.status === 200) {
  //   //         console.log('Отправлено');
  //   //       }
  //   //     }
  //   //   };

  //   //   xhr.open('POST', 'mail.php', true);
  //   //   xhr.send(formData);

  //   //   event.target.reset();
  //   // });
  //   console.log(validation);
  // });

  const formBackvoice = document.getElementById('backvoice-form');
  const telSelector = formBackvoice.querySelector('input[type="tel"]');
  const validation = new JustValidate(formBackvoice);

  validation
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!',
      },
    ])
    .addField('.input-mail', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Email обязателен',
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email',
      },
    ])
    .addField('.input-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function () {
          // const phone = telSelector.inputmask.unmaskedvalue();
          // return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ]);
};

export default validation;
