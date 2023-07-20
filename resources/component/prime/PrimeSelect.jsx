
import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import useQueryApi from "../../Hooks/useQueryApi";

export default function PrimeAutoComplete({ placeholder }) {
    const [filteredItems, setFilteredItems] = useState(null);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const { fetchData } = useQueryApi("categories");
    const { data, isSuccess } = fetchData({ name: selectedItem });

    useEffect(() => {
        if (isSuccess) {
            setItems([...data.data]);
            setFilteredItems(items);
        }
    }, [data]);

    useEffect(() => {
        setSelectedItem(selectedItem?.name ?? selectedItem);
    }, [selectedItem])

    const searchItems = (event) => {
        let query = event.query.toLowerCase();

        const _filteredItems = items.filter(item => {
            return item.name.toLowerCase().startsWith(query);
        })

        if (_filteredItems.length) {
            setFilteredItems(_filteredItems);
        }
        else {
            setFilteredItems([]);
        }

    }

    const itemTemplate = (item) => (
        <div className="flex align-items-center">
            <div>{item.name}</div>
        </div>
    )

    return (
        <AutoComplete placeholder={placeholder}
            itemTemplate={itemTemplate}
            style={{ width: "100%", marginBottom: "1rem" }}
            value={selectedItem}
            suggestions={filteredItems}
            completeMethod={searchItems}
            field="label"
            dropdown onChange={(e) => setSelectedItem(e.value)} />
    )
}
