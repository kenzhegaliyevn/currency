import React, { useState } from 'react';
import { Button, Form, Input, Row, Col, Layout, Card } from 'antd';

const { Content } = Layout;

function App() {
  const [form] = Form.useForm();

  return (
    <Layout className='layout'>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Row gutter={24}>
          <Col span={12} push={6}>
            <Card>
              <Form form={form} layout='vertical'>
                <Row gutter={24} align='bottom'>
                  <Col span={12}>
                    <Form.Item label='from 1000 RUR before 99000 RUR'>
                      <Input placeholder='enter amount' />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Reserve 80152023 KZT'>
                      <Input placeholder='enter amount' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={24}>
                    <Card title='Details Sberbank'>
                      <Row gutter={24}>
                        <Col span={24}>
                          <Form.Item label='Your card number'>
                            <Input placeholder='Your card number' />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={24}>
                    <Card title='Details Kaspi bank'>
                      <Row gutter={24}>
                        <Col span={24}>
                          <Form.Item label='Your card number'>
                            <Input placeholder='Your card number' />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={24}>
                    <Form.Item label='Email'>
                      <Input placeholder='email@email.com' />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button type='primary'>Submit</Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
