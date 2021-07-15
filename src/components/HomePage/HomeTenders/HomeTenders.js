import React from 'react';
import './HomeTenders.scss';
import { List, Avatar } from 'antd';

const HomeTenders = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <>
      <div className='home-tenders'>
        <List
          header={<h2 className='home-tenders__header'>Mövcud Tenderlər</h2>}
          footer={<h4 className='home-tenders__footer'>Hamısına bax</h4>}
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                }
                title={<a href='https://ant.design'>{item.title}</a>}
                description='Ant Design, a design language for background applications, is refined by Ant UED Team'
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default HomeTenders;
