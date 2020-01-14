class Validators {
  static required(value = '') {
    return value.length;
  }

  static minLength(len) {
    return (value) => {
      return value.length >= len;
    };
  }
}

export {Validators};
