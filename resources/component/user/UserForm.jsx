import React from 'react'
import PageTitle from '../Layout/PageTitle'

export default function UserForm() {
    return (
        <>
            <PageTitle pageTitle="Utilisateurs" title="Nouveau Utilisateur" />
            
            <form action="" className="needs-validation"  method="post">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-md-3 col-form-label">Rôle</label>
                            <div className="col-sm col-md">
                                <select className="form-select" name="type" required>
                                    <option defaultValue="">Rôle</option> 
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label  className="col-sm-4 col-md-3 col-form-label">Nom</label>
                            <div className="col-sm col-md">
                                <input className="form-control" type="text" defaultValue="" name="name" required
                                    id="name" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label  className="col-sm-4 col-md-3 col-form-label">Prenom</label>
                            <div className="col-sm col-md">
                                <input className="form-control" type="text" defaultValue="" name="surname" required
                                    id="surname" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-md-3 col-form-label">Téléphone</label>
                            <div className="col-sm col-md">
                                <input className="form-control" type="tel" defaultValue="" name="phone" required
                                    id="phone" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label  className="col-sm-4 col-md-3 col-form-label">Email</label>
                            <div className="col-sm col-md">
                                <input className="form-control" type="email" defaultValue="" name="email" required
                                    id="email" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label  className="col-sm-4 col-md-3 col-form-label">Mot De Passe</label>
                            <div className="col-sm col-md">
                                <input className="form-control" type="password" defaultValue="" name="password"
                                    required id="password" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label  className="col-sm-4 col-md-3 col-form-label">Confirmez le mot de
                                passe</label>
                            <div className="col-sm col-md">
                                <input className="form-control" type="password" name="password_confirmation"
                                    defaultValue="" required
                                    id="password_confirmation" />
                            </div>
                        </div>
                        <button className="btn btn-rounded btn-primary waves-effect waves-light float-end">
                            <i className="mdi mdi-content-save"></i> Enregistrer
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
