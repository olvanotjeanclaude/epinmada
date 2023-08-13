import { Link } from 'react-router-dom'
import { onDeleteData } from '../../Helper/sweetAlert'
import { object } from 'prop-types';
import useUserMutation from './useUserMutation';
import { InputSwitch } from 'primereact/inputswitch';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import http from '../../Helper/makeRequest';
import { Spinner } from 'react-bootstrap';
import { Toast } from 'primereact/toast';


User.propTypes = {
    user: object
};

export default function User({ user }) {
    const toast = useRef();
    const { deleteMutation } = useUserMutation();

    const [checkedStaff, setCheckedStaff] = useState({ id: null, checked: false });

    const onDelete = async (user) => await onDeleteData(user, deleteMutation);

    const _updateUserStatus = async (checkedStaff) => {
        return http.put(`/users/update-status/${checkedStaff.id}`, { ...checkedStaff })
            .then(res => res.data)
            .catch(e => { throw e.message })
    }

    const mutation = useMutation({
        mutationFn: _updateUserStatus,
        mutationKey: ["updateUserStatus"]
    });

    const handleSwich = (e) => {
        const data = { id: user.id, checked: e.value };
        setCheckedStaff(data)

        const _showFeedback = (data) =>{
            toast.current.show({ severity: data.type, summary: data.type??"Erreur", detail: data.message })
        }
        mutation.mutate(data, {
            onSuccess: _showFeedback,
            onError: _showFeedback
        })
    };

    return (
        <div className="card">
            <Toast ref={toast} />
            <div className="card-body">
                <div className="d-flex align-items-center mb-3 justify-content-between">
                    <div className="avatar-sm">
                        <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                            {user.name[0]?.toUpperCase() ?? ''} {user.surname[1]?.toUpperCase() ?? ''}
                        </span>
                    </div>

                    <div className='text-end'>
                        <h6>Activation</h6>
                        <InputSwitch checked={checkedStaff.checked} onChange={handleSwich} />
                    </div>

                </div>
                <div className="font-size-15  overflow-hidden mb-1">
                    <a className="text-dark  text-truncate">{user.full_name}</a>
                </div>
                <br />
                <p className="text-muted">{user.email}</p>
                <p className="text-muted">{user.phone}</p>

                <div>
                    <a className="badge bg-primary font-size-11 m-1">
                        {user.type_text}
                    </a>
                </div>
            </div>
            <div className="card-footer bg-transparent border-top">
                <div className="contact-links d-flex font-size-20">
                    <div className="flex-fill">
                        <span role='button' onClick={() => onDelete(user)}>
                            <i className="bx bx-trash"></i>
                        </span>
                    </div>

                    <div className="flex-fill">
                        <Link to={`${user.id}/edit`}>
                            <i className="bx bx-edit-alt"></i>
                        </Link>
                    </div>

                    <div className="flex-fill">
                        <Link to={`${user.id}`}>
                            <i className="bx bx-user-circle"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
