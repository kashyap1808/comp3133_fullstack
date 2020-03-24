const resolvedPromise = () => {
    const i = new Promise(function (resolve) {
      setTimeout(() => {
        let success={'Message': "Delayed Success"};
        console.log(success);
          resolve();
      }, 500)
  })
    return i;
  }
  const rejectedPromise = () => {
    const a = new Promise(function (reject) {
      setTimeout(() => {
          let error= { 'Error': "Delayed Exception!"}
            console.log(error);
                reject();
      }, 500)
  })
    return a;
  }

  resolvedPromise()
  rejectedPromise()