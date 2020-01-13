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
}

export {Form};
