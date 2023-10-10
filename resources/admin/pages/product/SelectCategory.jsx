import { capitalizeLetter } from '@/admin/Helper/Helper';
import Error from '@/admin/component/Message/Error';
import http from '@/common/http';
import React from 'react'
import { Form } from 'react-bootstrap'
import { useQuery } from 'react-query';

export default function SelectCategory({ register }) {
    const { data, isLoading, isError, error } = useQuery({
        queryFn: async () => http.get("categories").then(res => res.data).catch(e => new Error(e.message)),
        queryKey: "categories"
    });

    if (isError) return <Error error={error} />

    return (
        <Form.Select size='lg' {...register("category")}>
            <option value="" >Catégorie</option>
            {
                isLoading ? <></> : data.map(cat => (
                    <option value={cat.id} key={cat.id}>{capitalizeLetter(cat.name)}</option>
                ))
            }
        </Form.Select>
    )
}
