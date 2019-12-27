export default {
  login(state, v) {
    state.userInfo = v;
    let userInfo = JSON.parse(JSON.stringify(v))
    console.log(userInfo);
    
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }
};
