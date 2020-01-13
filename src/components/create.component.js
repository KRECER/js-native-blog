import {Component} from "../core/component";
import {Form} from "../core/form";
import {Validators} from "../core/validators";

const onSubmit = function(event) {
  event.preventDefault();

  if (this.form.isValid) {
    const formData = {type: this.$el.type.value, ...this.form.getValuesFromControls()};
    console.log(formData);
  }
};

class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('submit', onSubmit.bind(this));
    this.form = new Form(this.$el, {title: [Validators.required], fulltext: [Validators.required, Validators.minLength(7)]});
  }
}

export {CreateComponent};
