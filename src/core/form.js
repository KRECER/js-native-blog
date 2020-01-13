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
      let isValidControl = true;

      validators.forEach((validator) => {
        isValidControl = validator(this.form[key].value) && result;
      });
      result = isValidControl && result;
    }

    return result;
  }
}

export {Form};
