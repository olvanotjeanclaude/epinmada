import React, { useEffect, useState } from 'react'
import { IconButton, Stack, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useMutation, useQueryClient } from 'react-query';
import http from '@/common/http';
import { HandleError } from '@/common/HandleError';

export default function Counter({ basket }) {
    const [quantity, setQuantity] = useState(0);
    const product = basket.product;

    useEffect(() => {
        setQuantity(basket.quantity);
    }, [product]);

    const queryClient = useQueryClient();

    const countMutation = useMutation({
        mutationKey: ["countBasket"],
        mutationFn: async (quantity) => {
            return await http.post(`/update-quantity/${basket.id}`, { quantity })
                .then(res => res.data)
                .catch(HandleError.catch)
        }
    });

    const icrease = () => {
        setQuantity(prev => prev + 1);
    }

    const decrease = () => {
        setQuantity(prev => prev - 1);
    }

    useEffect(() => {
        if (quantity > 0) {
            countMutation.mutate(quantity, {
                onSuccess() {
                    queryClient.invalidateQueries("front.baskets");
                }
            });
        }
    }, [quantity]);

    return (
        <Stack direction="row" alignItems="center" justifyContent="center" borderRadius={10}>
            <IconButton color='primary' size='small' disabled={quantity <=1} onClick={decrease}>
                <RemoveCircleIcon />
            </IconButton>
            <Typography variant="h6" color="primary">{quantity}</Typography>
            <IconButton color='primary' size='small' onClick={icrease}>
                <AddCircleIcon />
            </IconButton>
        </Stack>
    )
}
