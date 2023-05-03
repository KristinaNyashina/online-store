import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.svg'

const DeviceItem = ({device}) => {
    return(
        <Col md={3}>
            <Card style={{width: 161, cursor: 'pointer'}} border={"ligth"} className="mb-4">
                <Image width={160} height={160} src={device.img}/>
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="text-black-50"> Бренд... </div>
                    <div className="d-flex align-items-center">
                        <div className="me-1">{device.rating}</div>
                        <Image width={17} height={17} src={star}/>
                    </div>

                </div>
                <div className="px-2 pb-2">{device.name}</div>
                <div className="px-2 pb-2">{device.price}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;