import { useEffect, useRef, useState } from 'react';
import http from '../../Helper/makeRequest';
import { allErrors } from '../../Helper/Helper';
import { Toast } from 'primereact/toast';
import { Navigate } from 'react-router-dom';
import { useAuthProvider } from '../../Context/useAuthProvider';

const Login = () => {
    const { token } = useAuthProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const toast = useRef();

    useEffect(() => {
        setErrors([]);
    }, [email, password]);

    if (token) return <Navigate to="/dashboard" />

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        await http.post("login", { email, password })
            .then((response) => {
                const data = response.data;
                localStorage.setItem("access_token", data.token);
                window.location.href = "/dashboard";
            })
            .catch((error) => {
                const response = error.response;
                if (response.status == 422) {
                    const errors = allErrors(response.data.errors).join(".");

                    toast.current.show({ severity: "error", summary: "Erreur", detail: errors });
                }

                if (response.status == 401) {
                    toast.current.show({ severity: "error", summary: "Erreur", detail: response.data.message });
                }

                // console.log(response);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="account-pages my-5 pt-sm-5">
            <Toast ref={toast} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Bienvenue !</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="auth-logo">
                                    <a href="/" className="auth-logo-light">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="http://localhost:8000/assets/img/logo/nav-logo.webp" alt="" className="rounded-circle" height="34" />
                                            </span>
                                        </div>
                                    </a>

                                    <a href="/" className="auth-logo-dark">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="http://localhost:8000/assets/img/logo/nav-logo.webp" alt="" className="rounded-circle" width={60} />
                                            </span>
                                        </div>
                                    </a>
                                </div>

                                {/* Display server-side errors */}
                                {errors.length > 0 && (
                                    <div className="alert alert-danger" role="alert">
                                        {errors.map((error, index) => (
                                            <p key={index}>{error}</p>
                                        ))}
                                    </div>
                                )}

                                <div className="p-2">
                                    <form className="form-horizontal" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="E-mail"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Mot de passe</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input
                                                    type={showPassword ? "input" : "password"}
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="Entrer le mot de passe"
                                                    aria-label="Password"
                                                    aria-describedby="password-addon"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button onClick={() => setShowPassword(!showPassword)}
                                                    className="btn btn-light" type="button" id="password-addon">
                                                    <i className="mdi mdi-eye-outline"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-3 d-grid">
                                            <button disabled={isLoading} className="btn btn-primary waves-effect waves-light" type="submit">
                                                Se connecter
                                            </button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <a href="#" className="text-muted">
                                                <i className="mdi mdi-lock me-1"></i>
                                                Mot de passe oublié?
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <div>
                                <p>
                                    © {new Date().getFullYear()}
                                    <i className="mdi mdi-heart text-danger"></i>
                                    by Olvanot Jean Claude Rakotonirina
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
