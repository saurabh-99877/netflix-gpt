export const Validate = (email, password) => {
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  
    if(!isEmailValid) {
        return "email Id is not valid";
    }else if(!isPasswordValid) {
        return "Password is not valid";
    }else {
      return null;
    }
}
