import React from "react";
// { useContext, useState }
// import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
// import BarcodeComponent from "@/components/BARCODE";
const EditDrawer = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };
  const textInputStyle = {
    background: "var(--sub_bg)",
    width: "100%",
    "&::placeholder": {
      color: "red",
    },
  };
  // const [generate, setGenerate] = useState(null);
  // const generateBarcode = () => {
  //   setGenerate(crypto.randomUUID());
  // };
  return (
    <>
      <Drawer
        title="Edit Product Details"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
            background: "var(--main_bg)",
            color: "var(--text_color)",
          },
          header: {
            background: "var(--sub_bg)",
            color: "var(--text_color)",
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" requiredMark>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="name"
                label="Product Name"
                rules={[
                  {
                    // required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Input
                  style={textInputStyle}
                  placeholder="Please enter user name"
                  className="placeholder_style"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    // required: true,
                    message: "Please enter url",
                  },
                ]}
              >
                <Input style={textInputStyle} placeholder="Product Category" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="shippingCost"
                label="Shipping Cost"
                rules={[
                  {
                    // required: true,
                    message: "How much did it cost you to ship this product?",
                  },
                ]}
              >
                <Input style={textInputStyle} placeholder="Shipping cost?" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="shippingTime"
                label="Shipping time"
                rules={[
                  {
                    // required: true,
                    message: "How long is the shipping process?",
                  },
                ]}
              >
                <Input style={textInputStyle} placeholder="Shipping time?" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="supplierContact"
                label="Supplier contact"
                rules={[
                  {
                    // required: true,
                    message: "Contact info of your supplier...?",
                  },
                ]}
              >
                <Input style={textInputStyle} placeholder="Supplier contact?" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="price"
                label="Selling Price"
                rules={[
                  {
                    // required: true,
                    message: "price of product?",
                  },
                ]}
              >
                <Input
                  style={textInputStyle}
                  placeholder="Item selling price?"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="stockLevel"
                label="Stock Level"
                rules={[
                  {
                    // required: true,
                    message: "How many do you have in stock? 1, 2, 3, 4, 5?...",
                  },
                ]}
              >
                <Input
                  style={textInputStyle}
                  placeholder="How many do you have in stock?"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="productDescription"
                label="Product Description"
                rules={[
                  {
                    // required: true,
                    message: "Product description?",
                  },
                ]}
              >
                <Input.TextArea
                  style={textInputStyle}
                  rows={4}
                  placeholder="Product description?"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {/* <div className="flex column gap05rem">
          <h3>QR/BARCODES</h3>
          <div className="flex gap1rem column">
            <Button
              onClick={generateBarcode}
              type="default"
              style={{ width: "fit-content" }}
            >
              Create Barcode
            </Button>
          </div>
          {generate && <BarcodeComponent text={generate} />}
        </div> */}
      </Drawer>
    </>
  );
};
export default EditDrawer;
