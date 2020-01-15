import {Component} from "../core/component";
import {Form} from "../core/form";
import {Validators} from "../core/validators";
import {ApiService} from "../services/api.service";

const onSubmit = function(event) {
  event.preventDefault();

  if (this.form.isValid) {
    const formData = {type: this.$el.type.value, date: new Date().toLocaleDateString(), ...this.form.getValuesFromControls()};
    ApiService.createPost(formData);
    this.$el.reset();
  }
};

class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('submit', onSubmit.bind(this));
    this.form = new Form(this.$el, {title: [Validators.required], fulltext: [Validators.required, Validators.minLength(8)]});
  }
}

export {CreateComponent};
