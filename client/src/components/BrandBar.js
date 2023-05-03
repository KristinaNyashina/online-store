import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card } from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return(
        <div className="d-flex flex-wrap">
            {device.brands.map(brand => 
                  <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-2 me-2 mb-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'success' : 'light'}
                  >
                    {brand.name}
                  </Card>  
            )}
        </div>
    )
});

export default BrandBar;