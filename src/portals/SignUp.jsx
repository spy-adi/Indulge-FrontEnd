import React, { useContext, useState } from "react";
import { Layout } from "antd";
import axios from "axios";
import AuthContext from "../context/auth/authContext";
import Spinner from "../CommonComponents/Spinner";
import { Navigate } from "react-router-dom";
function Signup() {
  const authContext = useContext(AuthContext);
  const {register,isAuthenticated} = authContext;
  const [companyName, setcompanyName] = useState("");
  const [companyWebsite, setcompanyWebsite] = useState("");
  // const [companySector, setcompanySector] = useState("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const [isValidEmail, setisValidEmail] = useState(null);
  const [isValidPassword, setisValidPassword] = useState(null);
  const [isPage1, setPage1] = useState(true);

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log("email", email);
    const domain = email.slice(email.indexOf("@") + 1, email.lastIndexOf("."));
    let is_mx_found;
    var domains = "gmail,outlook,hotmail,yahoo,rediff";
    if (domains.indexOf(domain) !== -1) {
      axios
        .get(
          `https://emailvalidation.abstractapi.com/v1/?api_key=39b95a9e2bf1439882ef74f471d31174&email=${email}`
        )
        .then((resp) => {
          is_mx_found = resp.data.is_mx_found.value;
        })
        .catch((error) => {
          console.log(error);
        });
    } else alert("");

    if (!is_mx_found) {
      setemail("");
      setisValidEmail(false);
    } else setisValidEmail(true);

    if (password !== confirmpassword || password === "")
      setisValidPassword(false);
    else setisValidPassword(true);
    const formData = {
      cname:companyName,
      // category:companySector,
      curl:companyWebsite,
      cpassword:password,
      cemail:email
    }
    await register(formData);
    if(isAuthenticated){
      if(authContext.user===null){
        <Spinner/>
      }
      else return <Navigate to="/reg"/>
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <div
          className="container-fluid"
          style={{
            minHeight: "100vh",
            backgroundColor: "#4e73df",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div
            className="card"
            style={{ margin: "5% 10%", borderRadius: "1rem" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-6 text-center">
                  <img
                    className="img-fluid"
                    src="https://parent.iitism.ac.in//assets/img/iit.png"
                    alt=""
                    style={{ width: "50%", marginTop: "25%" }}
                  />
                  <p style={{ textDecoration: "none", color: "red" }}>
                    If you are having any kind of trouble, please contact us at
                    <a
                      style={{ paddingLeft: "5px" }}
                      href="mailto:cdc@iitism.ac.in">
                      cdc@iitism.com
                    </a>
                  </p>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6 text-center">
                  <div className="card">
                    <div
                      className="card-header h6"
                      style={{ fontWeight: "bold", fontFamily: "Open Sans" }}>
                      Internship/Placement Registration Portal
                    </div>
                    <div className="card-body">
                      <form>
                        {isPage1 ? (
                          <div>
                            <div
                              className="form-group"
                              style={{ margin: "8%" }}>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Name"
                                name="Company Name"
                                value={companyName}
                                onChange={(e) => setcompanyName(e.target.value)}
                                required
                              />
                              {isValidEmail === null ? null : isValidEmail ===
                                true ? (
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              ) : (
                                <div className="invalid-feedback">{`Enter a Valid Email`}</div>
                              )}
                            </div>

                            {/* <div
                              className="form-group"
                              style={{ margin: "8%" }}>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Sector"
                                name="sector"
                                value={companySector}
                                onChange={(e) =>
                                  setcompanySector(e.target.value)
                                }
                                required
                              />
                            </div> */}

                            <div
                              className="form-group"
                              style={{ margin: "8%" }}>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Website"
                                name="website"
                                value={companyWebsite}
                                onChange={(e) =>
                                  setcompanyWebsite(e.target.value)
                                }
                                required
                              />
                            </div>
                            <button
                              type="button"
                              style={{ width: "80%", marginTop: "3%" }}
                              className="btn btn-primary"
                              onClick={(e) => setPage1(false)}>
                              Next
                            </button>
                          </div>
                        ) : (
                          /******************************page 2  *************************************************/
                          <div>
                            <div
                              className="form-group"
                              style={{ margin: "8%" }}>
                              <input
                                type="text"
                                className={
                                  isValidEmail === null
                                    ? "form-control"
                                    : isValidEmail === true
                                    ? "form-control is-valid"
                                    : "form-control is-invalid"
                                }
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required
                              />
                              {isValidEmail === null ? null : isValidEmail ===
                                true ? (
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              ) : (
                                <div className="invalid-feedback">{`Enter a Valid Email`}</div>
                              )}
                            </div>

                            <div
                              className="form-group"
                              style={{ margin: "8%" }}>
                              <input
                                type="password"
                                className={
                                  isValidPassword === null
                                    ? "form-control"
                                    : isValidPassword === true
                                    ? "form-control is-valid"
                                    : "form-control is-invalid"
                                }
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                required
                              />
                              {isValidPassword ===
                              null ? null : isValidPassword === true ? (
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              ) : (
                                <div className="invalid-feedback">{`Enter a Valid Password`}</div>
                              )}
                            </div>

                            <div
                              className="form-group"
                              style={{ margin: "8%" }}>
                              <input
                                type="text"
                                className={
                                  isValidPassword === null
                                    ? "form-control"
                                    : isValidPassword === true
                                    ? "form-control is-valid"
                                    : "form-control is-invalid"
                                }
                                placeholder="Re-enter Password"
                                name="password"
                                value={confirmpassword}
                                onChange={(e) =>
                                  setconfirmpassword(e.target.value)
                                }
                                required
                              />
                              {isValidPassword ===
                              null ? null : isValidPassword === true ? (
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              ) : (
                                <div className="invalid-feedback">{`Enter a Valid Password`}</div>
                              )}
                            </div>
                            <div
                              className="btn-pair"
                              style={{
                                display: "flex",
                                justifyContent: "space-around",
                              }}>
                              <button
                                type="button"
                                style={{ width: "40%", marginTop: "3%" }}
                                className="btn btn-info "
                                onClick={() => setPage1(true)}>
                                Back
                              </button>
                              <button
                                type="submit"
                                style={{ width: "40%", marginTop: "3%" }}
                                className="btn btn-primary"
                                onClick={(e) => onSubmit(e)}>
                                SignUp
                              </button>
                            </div>
                          </div>
                        )}
                      </form>
                    </div>
                    <p>
                      Already have an account <a href="/">LogIn</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
}

export default Signup;
