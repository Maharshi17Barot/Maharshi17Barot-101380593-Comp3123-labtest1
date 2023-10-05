/*STUDENT NAME - Maharshi barot
STUDENT ID - 101380593
 */
function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay success!");
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Delayed exception!");
    }, 500);
  });
}

resolvedPromise()
  .then((result) => {
    console.log("Resolved Promise Result:", result);
  })
  .catch((error) => {
    console.error("Resolved Promise Error:", error);
  });

rejectedPromise()
  .then((result) => {
    console.log("Rejected Promise Result:", result);
  })
  .catch((error) => {
    console.error("Rejected Promise Error:", error);
  });

/*
  const delayedSuccess= ()=>{
    setTimeout(()=>{
        let success ={'message':'delayed success!'}
    },500)

  }

   const delayedException = ()=> {
    setTimeout(()=>{
        try{
             throw new Error('error:delayed exception!');
        } catch(e){
            console.error(e);
        
        }
    },500)
   }
delayedSuccess()
delayedException()*/
