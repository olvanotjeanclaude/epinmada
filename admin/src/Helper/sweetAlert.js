import Swal from "sweetalert2";

export const buttons = {
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Oui',
    cancelButtonColor: '#d33',
    cancelButtonText: "Non",
};

export const deleteParams = {
    title: 'Êtes-vous sûr cette action?',
    text: "Cette action est irreversible!",
    icon: 'warning',
    showCancelButton: true,
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading(),
    ...buttons,
}

export const confirmButton = {
    confirmButtonColor: '#3085d6',
    confirmButtonText: "D'accord",
};

export const onDeleteData = async (data, mutation) => {
    
    return Swal.fire({
        ...deleteParams,
        preConfirm: async () => {
            await mutation?.mutateAsync(data)
                .then(res => {
                    Swal.fire({
                        title: res.message,
                        icon: res.type,
                        ...confirmButton
                    })
                }).catch(err => {
                    Swal.showValidationMessage(err);
                })
        }
    })
}
