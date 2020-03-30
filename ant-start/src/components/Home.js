import React from 'react';
import ReceiptThumbnail from './ReceiptThumbnail';
import ReceiptRow from './ReceiptRow';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>All Receipts</h1>
                <ReceiptThumbnail/>
            </div>
        );
    }
}

export default Home;