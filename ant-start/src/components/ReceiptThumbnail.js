import React from 'react';
import { Skeleton, Switch, Card, Avatar, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


class ReceiptThumbnail extends React.Component {
    state = {
        loading: false,
      };
      onChange = checked => {
        this.setState({ loading: !checked });
      };

    render(){
        const { loading } = this.state;
        return (
            <div>
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Rewe East Side Mall"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </div>
        );
    }
}

export default ReceiptThumbnail;