import { Col, Form, Row, Spinner } from 'react-bootstrap';
import Error from '../../component/Message/Error';
import PageTitle from '../../component/Layout/PageTitle';
import { Toast } from 'primereact/toast';
import Submit from '../../component/Button/Submit';
import useUserMutation from './useUserMutation';

export default function UserForm() {
    const {
        action, id, addMutation, updateMutation,
        toast,
        user,
        user_types,
        errors, register, handleSubmit, onSubmit } = useUserMutation();
    
    if (id && user.error) return <Error error={user.error} />

    return (
        <>
            <Toast ref={toast}></Toast>

            <PageTitle pageTitle="Utilisateurs" title={`${action == "store" ? "Nouveau" : "Modification d'"} utilisateur`} />

            {
                user.isLoading ?
                    <Spinner /> :

                    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="needs-validation" method="post">

                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-md-3 col-form-label">Rôle</label>
                                    <div className="col-sm col-md">
                                        <Form.Select {...register("type")} isInvalid={!!errors.type}>
                                            <option value="">Rôle</option>
                                            {
                                                Object.entries(user_types ?? {}).map(([key, value]) => (
                                                    <option value={value} key={key}>{key}</option>
                                                ))
                                            }
                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.type?.message}
                                        </Form.Control.Feedback>
                                    </div>
                                </div>

                                <Row className='mb-3'>
                                    <Col sm={4} md={3}>
                                        <Form.Label>Nom</Form.Label>
                                    </Col>
                                    <Col sm={true} md={true}>
                                        <Form.Control {...register("name")} isInvalid={!!errors.name} />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.name?.message}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>

                                <Row className='mb-3'>
                                    <Col sm={4} md={3}>
                                        <Form.Label>Prenom</Form.Label>
                                    </Col>
                                    <Col sm={true} md={true}>
                                        <Form.Control {...register("surname")} isInvalid={!!errors.surname} />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.surname?.message}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>

                                <Row className='mb-3'>
                                    <Col sm={4} md={3}>
                                        <Form.Label>Téléphone</Form.Label>
                                    </Col>
                                    <Col sm={true} md={true}>
                                        <Form.Control {...register("phone")} type='phone' isInvalid={!!errors.phone} />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.phone?.message}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>

                                <Row className='mb-3'>
                                    <Col sm={4} md={3}>
                                        <Form.Label>Email</Form.Label>
                                    </Col>
                                    <Col sm={true} md={true}>
                                        <Form.Control {...register("email")} isInvalid={!!errors.email} type='email' />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.email?.message}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Row>

                                {
                                    action == "store" &&
                                    <>
                                        <Row className='mb-3'>
                                            <Col sm={4} md={3}>
                                                <Form.Label>Mot De Passe</Form.Label>
                                            </Col>
                                            <Col sm={true} md={true}>
                                                <Form.Control {...register("password")} isInvalid={!!errors.password} type='password' />
                                                <Form.Control.Feedback type='invalid'>
                                                    {errors.password?.message}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>

                                        <Row className='mb-3'>
                                            <Col sm={4} md={3}>
                                                <Form.Label>Confirmez le mot de passe</Form.Label>
                                            </Col>
                                            <Col sm={true} md={true}>
                                                <Form.Control  {...register("password_confirmation")}
                                                    type='password'
                                                    isInvalid={!!errors.password_confirmation} />
                                                <Form.Control.Feedback type='invalid'>
                                                    {errors.password_confirmation?.message}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Row>
                                    </>
                                }


                                <Submit isLoading={addMutation.isLoading || updateMutation.isLoading} />
                            </div>
                        </div>
                    </Form>
            }
        </>
    )
}
