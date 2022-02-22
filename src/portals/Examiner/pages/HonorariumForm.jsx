import React, {useEffect,useContext} from "react";
import {  Upload,message,Radio,Space,Divider, Layout, Tabs,Form, Input, Button,Select } from "antd";
import AuthContext from "../../../context/auth/authContext";
import ExaminerContext from "../../../context/examiner/examinerContext"
import Spinner from "../../../CommonComponents/Spinner";
const { Content } = Layout;
const { TextArea } = Input;

function HonorariumForm() {

  const authContext = useContext(AuthContext);
  const examinerContext = useContext(ExaminerContext);
  const{submitHonorariumForm,honorariumForm,getHf,checkedHf} = examinerContext
  const{examinerId} = authContext.user.dataValues;
  const [form] = Form.useForm();
  function onFinish(e){
    console.log(e);
    submitHonorariumForm(e);
  }
  useEffect(()=>{
    getHf(examinerId);
  },[]);
if(checkedHf===false) return <Spinner/>
if(honorariumForm!==null){
  return(
    <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background text-center"
            style={{ padding: 24, minHeight: 400 }}
          >
          <div
            className="container-fluid"
            style={{
              marginTop: "15%",
              textAlign: "center",
              display: "inherit",
            }}
          >
            <h3>Honorarium Form Submitted!</h3>
                </div>
          </div>
            </Content>
  )
}
  return (
    <Content style={{ margin: "25px 25px" }}>
     <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
        <div className="row">

            
            
        <Form
        name="nest-messages"
        form={form}
        layout="vertical"
        initialValues={{
                remember: true,
                examinerId:examinerId
                  }}
                onFinish={onFinish}
      
        >          
       <div style={{textAlign:'center'}}><strong>Honorarium Form</strong></div>
      <Form.Item
        name="name"
        label="Name"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
       name="fullAddress"
        label="Full Address"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item hidden name="examinerId">
        <Input type="hidden"  />
      </Form.Item>
      <Form.Item
        name="thesisDissertation"
        label="Ph. D Thesis/Dissertation of -Mr./Ms"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item
       name="titleOfThesis"
        label="Title of Thesis"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      
      <div style={{textAlign:'center'}}><strong>REMUNERATION BILL FOR PH.D. THESIS EVALUATION BY EXAMINER</strong></div>
      <Form.Item
        label="1. Examined Thesis/ Dissertation
(Ph.D. THESIS EVALUATION)
"
      >
      <div style={{marginLeft:'10px'}}>
      <Form.Item
      name="ExaminedThesisDissertationNumber"
      label="Number"
       >
        <Input placeholder="Number" />
        </Form.Item>
        <Form.Item
      name="ExaminedThesisDissertationRate"
      label="Rate"
       >
        <Input placeholder="Number" />
        </Form.Item>
        <Form.Item
      name="ExaminedThesisDissertationAmount"
      label="Amount"
       >
        <Input placeholder="Amount" />
        </Form.Item>
        </div>
      </Form.Item>
      <Form.Item
        label="2. Miscellaneous expenses"
      >
      <div style={{marginLeft:'10px'}}>
      <Form.Item
      name="MiscellaneousExpensesNumber"
      label="Number"
       >
        <Input placeholder="Number" />
        </Form.Item>
        <Form.Item
      name="MiscellaneousExpensesRate"
      label="Rate"
       >
        <Input placeholder="Number" />
        </Form.Item>
        <Form.Item
      name="MiscellaneousExpensesAmount"
      label="Amount"
       >
        <Input placeholder="Amount" />
        </Form.Item>
        </div>
      </Form.Item>
      <Form.Item
      name="grandTotal"
        label="3. GRAND TOTAL
"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        name="grandTotalInWords"
        label="4. GRAND TOTAL(in words)
"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <div style={{textAlign:'center'}}><strong>Particulars of Bank Account</strong></div>

      <Form.Item
        name="nameOfBeneficiary"
        label="Name of Beneficiary"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        name="fullAddressOfBeneficiary"
        label="Full Address of Beneficiary"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
      name="panCardNumber"
        label="PAN Card Number"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item
      name="bankName"
        label="Bank Name"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item
      name="bankBranchAddress"
        label="Bank Branch Address"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      
      <Form.Item
       name="accountNumber"
        label="Account Number"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      
      <Form.Item
      name="ifsc"
        label="Swift Code/BIC/IFSC"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      
      <Form.Item
      name="iban"
        label="IBAN"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      
      <Form.Item
      name="aba"
        label="ABA(Routing) No"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      
      <Form.Item
      name="accountType"
        label="Account Type"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      
      <Form.Item
      name="otherInfo"
        label="Other than above information"
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button 
        type="primary"
        htmlType="submit"
        >
        Submit
        </Button>
      </Form.Item>
    </Form>
            
            </div>
        </div>
	</div>
    </Content>
  );
}

export default HonorariumForm;
