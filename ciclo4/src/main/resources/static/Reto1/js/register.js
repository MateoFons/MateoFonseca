async function registerProcess(event) {
  event.preventDefault();
  try {
    const emailField = document.getElementById("email");
    const passwordField = document.querySelector("#password");
    if (emailField && passwordField) {
      const emailValue = emailField.value.trim();
      const passwordValue = passwordField.value.trim();
      if (emailValue != "") {
        console.log(`el email es válido`);
        if (passwordValue != "") {
          passwordField.style.backgroundColor = "inherit";
          /**
           * llamado del backend usando promesas
           */
          sendData(emailValue, passwordValue)
            .then(function (response) {
              console.log(`response`, response);
              return response.json();
            })
            .then((convertedJson) => {
              console.log(`convertedJson`, convertedJson.id);
            });
          /**
           * fin llamado del backend usando promesas
           */

          await sendDataSync(emailValue, passwordValue); //llamado del backend usando async y await
          console.log(`he llamado al servidor`);
          //voy a enviar la información al backend, el email y la contraseña
        } else {
          console.log(`la contraseña no es válida`);
        }
      } else {
        console.log(`el email no es válido`);
      }

      // const validFeedbackMessage=document.querySelectorAll(".valid-feedback"); //consultar los elementos por su clase
      // console.log(`emailField`,emailField); //esta es la referencia del campo email html
      // console.log(`passwordField`,passwordField); //esta es la referencia del campo contraseña html

      console.log(`emailValue`, emailValue);
      console.log(`passwordValue`, passwordValue);
      // console.log(`validFeedbackMessage`,validFeedbackMessage); // consultar el contenido de la consulta por clase
      // console.log(`validFeedbackMessage[1]`,validFeedbackMessage[1]);
      // for (let index = 0; index < validFeedbackMessage.length; index++) {
      //     const element = validFeedbackMessage[index];
      //     console.log(`element`,element);
      // }
      // for (const item of validFeedbackMessage) {
      //     console.log(`item`,item);
      // }
    } else {
      alert("alguno de los campos no existe");
    }
  } catch (error) {
    console.log(`se presentó un error inesperado`, error);
  }

  console.log(`he sido enviado`);
}

function sendData(email, password) {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return fetch(url);
  } catch (error) {
    console.log(`se presentó un error: `, error);
  }
}

async function sendDataSync(em, pass) {
  try {
    const url = `http://144.22.225.106:8080/api/user/${em}/${pass}`;
    const body = {
      email: em,
      password: pass,
    };
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    // const response = await fetch(url, fetchOptions); si necesito enviar el cuerpo de la petición POST|PATCH|DELETE|PUT
    const response = await fetch(url);
    const convertedJson = await response.json();
    console.log(`convertedJson`, convertedJson);
    if (convertedJson.token) {
      console.log(`bienvenido`);
    } else {
      console.log(`las credenciales no son válidas`);
    }
  } catch (error) {
    console.log(`se presentó un error: `, error);
  }
}

async function sendPostFake(email, password) {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify({
        title: email,
        body: password,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(url, fetchOptions);
    const responseConverted = await response.json();
    console.log(`responseConverted`, responseConverted);
  } catch (error) {
    console.log(`se presentó un error`);
  }
}

function onClickForm(event) {
  console.log(`event`, event);
  let num1 = 1;
  let num2 = 3;
  let result = num1 + num2;
  console.log(`result`, result);
}

function onClickPassword(event) {
  console.log(`he sido llamado`);
}
