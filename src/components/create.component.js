import {Component} from "../core/component";
import {Form} from "../core/form";

const onSubmit = function(event) {
  event.preventDefault();
  const formData = this.form.getValuesFromControls();
  formData.type = this.$el.type.value;
  console.log(formData);
};

class CreateComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('submit', onSubmit.bind(this));
    this.form = new Form(this.$el, {title: [], fulltext: []});
  }
}

export {CreateComponent};
