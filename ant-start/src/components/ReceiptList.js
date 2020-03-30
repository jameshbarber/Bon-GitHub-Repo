import React from 'react';
import ReceiptThumbnail from './ReceiptThumbnail';
import ReceiptRow from './ReceiptRow';
import {PageHeader} from 'antd';

class ReceiptList extends React.Component {
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="All Receipts"
                    subTitle="This is a subtitle"
                />
            </div>
        );
    }
}

export default ReceiptList;