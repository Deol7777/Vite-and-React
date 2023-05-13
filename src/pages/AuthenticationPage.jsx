import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


export async function action({ request }) {
  const data = await request.formData();



  const userDetails = {
    username: data.get("email"),
    password: data.get("password"),
  };

  console.log(userDetails);
  const response = await fetch(
    "https://angular-demo-c1653-default-rtdb.firebaseio.com/users.json"
  );

  if (response.status === 422 || response.status === 401) {
    throw response;
  }
  if (!response.ok) {
    throw new json(
      { message: "User ouldnt; be authenticated" },
      { status: 500 }
    );
  }

  const resData = await response.json();
  for (const key in resData) {
    if(resData[key].username === userDetails.username)
        //{console.log("Found");}
        {
            if(resData[key].password === userDetails.password)
            {
                return redirect("/home");
            }
            else
            {
                throw new json(
                  { message: "Incorrect Password" },
                  { status: 401 }
                );
            }
        }
    throw new json({ message: "No such username exists" }, { status: 550 });
  }
  console.log(resData);
  return redirect("/");
}