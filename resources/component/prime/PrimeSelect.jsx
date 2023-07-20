
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import useQueryApi from "../../Hooks/useQueryApi";

export default function PrimeAutoComplete({ placeholder }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    
    const { fetchData } = useQueryApi("categories");
    
    const {data:items} = fetchData();


    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    return (
        <AutoComplete placeholder={placeholder}
            style={{ width: "100%", marginBottom: "1rem" }}
            value={selectedItem}
            suggestions={filteredItems}
            completeMethod={searchItems}
            virtualScrollerOptions={{ itemSize: 38 }}
            field="label"
            dropdown onChange={(e) => setSelectedItem("ok")} />
    )
}
