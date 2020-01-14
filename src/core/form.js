const setError = ($control) => {
  const $parentNode = $control.parentNode;
  const hasControlError = !!$parentNode.querySelector('.validation-error');
  const $errorNode = document.createElement('p');
  $errorNode.className = 'validation-error';
  $errorNode.textContent = 'Вы ввели не коректные данные!';

  if (!hasControlError) {
    $parentNode.append($errorNode);
  }

  $control.classList.add('invalid');
};

const clearError = ($control) => {
  const $parentNode = $control.parentNode;
  const $errorNode = $parentNode.querySelector('.validation-error');

  if ($errorNode) {
    $parentNode.removeChild($errorNode);
  }

  $control.classList.remove('invalid');
};

class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }

  getValuesFromControls() {
    const values = {};

    for (let key in this.controls) {
      values[key] = this.form[key].value;
    }

    return values;
  }

  get isValid() {
    let result = true;

    for (let key in this.controls) {
      let validators = this.controls[key];

      validators.forEach((validator) => {
        result = validator(this.form[key].value);
      });

      !result ? setError(this.form[key]) : clearError(this.form[key]);
    }

    return result;
  }
}

export {Form};
