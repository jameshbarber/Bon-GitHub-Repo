
import React from 'react';
import ReceiptThumbnail from './ReceiptThumbnail';
import {Row, Col} from 'antd';

class ReceiptRow extends React.Component {
    render() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <ReceiptThumbnail></ReceiptThumbnail>
                    </Col>
                    <Col span={8}>
                        <ReceiptThumbnail></ReceiptThumbnail>
                    </Col>
                    <Col span={8}>
                        <ReceiptThumbnail></ReceiptThumbnail>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ReceiptRow;