class ThisManager {

  _thObj = null

  setThisObject(obj) {
    this._thObj = obj;
  }

  sayHello() {
    this._thObj.testThisMethod();
  }

}

export default new ThisManager();
