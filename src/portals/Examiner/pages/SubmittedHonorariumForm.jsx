import React from "react";
import { Layout, Form, Input } from "antd";


const { Content } = Layout;
const { TextArea } = Input;

function SubmittedHonorariumForm() {
  const [form] = Form.useForm();

  return (
    <Content style={{ margin: "25px 25px" }}>
     <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
        <div className="row">

            
            
          <Form
      form={form}
      layout="vertical"
      
    >
     
      <div style={{textAlign:'center'}}><strong>Honorarium Form</strong></div>
      <Form.Item
        label="Name"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="Full Address"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="Ph. D Thesis/Dissertation of -Mr./Ms"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>

      <Form.Item
        label="Title of Thesis"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      
      <div style={{textAlign:'center'}}><strong>REMUNERATION BILL FOR PH.D. THESIS EVALUATION BY EXAMINER</strong></div>
      <Form.Item
        label="1. Examined Thesis/ Dissertation
(Ph.D. THESIS EVALUATION)
"
      >
      <div style={{marginLeft:'10px'}}>
      <p>Number</p>
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      <p style={{marginTop:'10px'}}>Rate</p>
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      <p style={{marginTop:'10px'}}>Amount</p>
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
        </div>
      </Form.Item>
      <Form.Item
        label="2. Miscellaneous expenses"
      >
      <div style={{marginLeft:'10px'}}>
      <p>Number</p>
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      <p style={{marginTop:'10px'}}>Rate</p>
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      <p style={{marginTop:'10px'}}>Amount</p>
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
        </div>
      </Form.Item>
      <Form.Item
        label="3. GRAND TOTAL
"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="4. GRAND TOTAL(in words)
"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>

      <div style={{textAlign:'center'}}><strong>Particulars of Bank Account</strong></div>

      <Form.Item
        label="Name of Beneficiary"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="Full Address of Beneficiary"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      <Form.Item
        label="PAN Card Number"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>

      <Form.Item
        label="Bank Name"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>

      <Form.Item
        label="Bank Branch Address"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      
      <Form.Item
        label="Account Number"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      
      <Form.Item
        label="Swift Code/BIC/IFSC"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      
      <Form.Item
        label="IBAN"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      
      <Form.Item
        label="ABA(Routing) No"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      
      <Form.Item
        label="Account Type"
      >
        <Input placeholder="input placeholder" disabled value={"XYZ"}/>
      </Form.Item>
      
      <Form.Item
        label="Other than above information"
      >
        <TextArea rows={4} disabled value={"XYZ"}/>
      </Form.Item>
    </Form>
            
            </div>
        </div>
	</div>
    </Content>
  );
}

export default SubmittedHonorariumForm;
