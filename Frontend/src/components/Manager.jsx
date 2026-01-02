import React from "react";
import { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
 
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

const getPasswords = async () => {
  let req = await fetch(`${API_URL}`);
  let passwords = await req.json();
     setPasswordArray(passwords);
    }
  
const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    (async () => {
      await getPasswords();
    })();
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      icon: "📋",
      style: {
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(139,92,246,0.4)",
      },
    });
    navigator.clipboard.writeText(text);
  };
 
  
    const editpassword = (id) => {
        setform({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }
   
   
const deletePassword = async (id) => {
  console.log ("Delete password with id:", id);
  let confirm = window.confirm("Are you sure you want to delete this password?");
  if(confirm){
  const newPasswords = passwordArray.filter((item) => item.id !== id);
  setPasswordArray(newPasswords);
  // localStorage.setItem("passwords", JSON.stringify(newPasswords));
  await fetch (` ${API_URL} `, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  };
}

   const savePassword = async () => {
        if (form.site.length > 0 && form.username.length > 0 && form.password.length > 0) {
 
            // If any such id exists in the db, delete it
            if (form.id) { 
            await fetch(`${API_URL}`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })
            }
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch(`${API_URL}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })

            // Otherwise clear the form and show toast
            setform({ site: "", username: "", password: "" })
            toast('Password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast(' Enter Valid credentials !');
        }
    }


        
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0f0f0f",
            color: "#fff",
            border: "1px solid #7c3aed",
          },
        }}
      />
      <div className="fixed inset-0 -z-10 px-5 py-24  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <div className="container mx-auto  bg-transparent rounded-lg shadow-lg max-w-4xl border border-gray-700 shadow-gray-900 bg-shadow-lg mb-20 w-auto ">
        <div className="text-white flex flex-col p-4">
          <h1 className="text-2xl font-bold text-center">
            <span className="text-violet-500 font-bold">&lt;</span>
            Pass
            <span className="text-violet-500 font-bold">Op/&gt;</span>
          </h1>
          <p className="text-violet-500 p-2 text-center text-lg">
            Your Own Password Manager
          </p>
          
          <input
            value={form.site}
            onChange={handlechange}
            name="site"
            className="bg-transparent rounded-lg border border-gray-700 p-2 m-2 text-white w-full"
            type="text"
            uniqueid="website"
            placeholder="Website URL"
          />

          <div className="flex flex-col md:flex-row md:space-x-4 p-4">
            <input
              value={form.username}
              onChange={handlechange}
              name="username"
              className="bg-transparent rounded-lg border border-gray-700 text-white p-2 w-full md:w-1/2"
              type="text"
              placeholder="Username"
            />

            <div className="relative md:w-1/2 mt-4 md:mt-0">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handlechange}
                name="password"
                className="bg-transparent rounded-lg border border-gray-700 text-white p-2 w-full pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <span
                className="absolute right-3 top-2 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="click"
                  state={showPassword ? "morph-close" : "morph-lashes"}
                  colors="primary:#e4e4e4,secondary:#e4e4e4"
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={savePassword}
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-1 px-3 md:py-2 md:px-4 text-sm md:text-base rounded-lg my-4 flex justify-center items-center space-x-2 w-full md:w-auto mx-auto"
        >
          <lord-icon
            src="https://cdn.lordicon.com/gzqofmcx.json"
            trigger="hover"
            colors="primary:#ffffff"
          ></lord-icon>
          Add Password
        </button>

        <div className="passwords text-white space-y-4 p-4 overflow-x-auto">
          <h2 className="font-bold text-2xl p-4 ">Your Passwords</h2>
          {passwordArray.length === 0 && (
            <div className="text-center">No passwords saved yet.</div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full space-y-4 text-center  ">
              <thead className="bg-transparent rounded-lg shadow-lg max-w-4xl border border-gray-700 shadow-gray-900 bg-shadow-lg text-white p-2 w-full ">
                <tr>
                  <th className="  p-2">Website</th>
                  <th className="  p-2">Username</th>
                  <th className="  p-2">Password</th>
                  <th className="  p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className=" p-2 ">
                      <div className="flex justify-center items-center space-x-6">
                        <span>
                          <a href={item.site}>{item.site}</a>
                        </span>
                        <div
                          className="cursor-pointer space-x-2 flex"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/cfkiwvcc.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "15px", height: "15px" }}
                          ></lord-icon>

                        </div>
                      </div>
                    </td>
                    <td className=" p-1 ">
                      <div className="flex justify-center items-center space-x-4">
                        <span>{item.username} </span>
                        <div
                          className="Lordiconcopy cursor-pointer space-x-2 flex "
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/cfkiwvcc.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "15px", height: "15px" }}
                          ></lord-icon>
                         
                        </div>
                      </div>
                    </td>
                    <td className=" p-1 ">
                      <div className=" flex justify-center items-center space-x-4">
                        <span>{ "*".repeat(item.password.length)}</span>
                        <div
                          className="cursor-pointer space-x-2 flex"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/cfkiwvcc.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "15px", height: "15px" }}
                          ></lord-icon>
                         
                        </div>
                      </div>
                    </td>
                    <td className=" p-2 ">
                      <div
                        className="cursor-pointer space-x-2 flex justify-center items-center">
                        <span className=""
                        onClick={() => {
                          editpassword(item.id);
                        }}>
                     
                           
                       
                       <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            state="hover-line"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ width: "15px", height: "15px" }}
                            ></lord-icon>

                            </span>
                          <span className=""
                        onClick={() => {
                        deletePassword(item.id);
                        }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/jzinekkv.json"
                        trigger="morph"
                        state="morph-trash-in"
                        colors="primary:#ffffff,secondary:#ffffff"
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                        }}
                        ></lord-icon>
                        </span>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};


export default Manager;
