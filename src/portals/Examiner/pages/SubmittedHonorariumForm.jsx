import React, { useEffect,useContext } from "react";
import { Layout, Form, Input } from "antd";
import ExaminerContext from "../../../context/examiner/examinerContext";
import AuthContext from "../../../context/auth/authContext";
import Spinner from "../../../CommonComponents/Spinner";


const { Content } = Layout;
const { TextArea } = Input;

function SubmittedHonorariumForm() {
  const [form] = Form.useForm();
  const authContext = useContext(AuthContext);
  const{examinerId} = authContext.user.dataValues;
  const examinerContext = useContext(ExaminerContext);
  const{getHf,honorariumForm,checkedHf} = examinerContext;
  useEffect(()=>{
    getHf(examinerId);
  },[]);
  if(checkedHf===false) return <Spinner/>
  if(honorariumForm===null||honorariumForm===""){
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
              <h3>Honorarium Form Not Yet Submitted!</h3>
                  </div>
            </div>
              </Content>
    )
  }
  const
  {ExaminedThesisDissertationAmount,
    ExaminedThesisDissertationNumber,
    ExaminedThesisDissertationRate,
    MiscellaneousExpensesAmount,
    MiscellaneousExpensesNumber,
    MiscellaneousExpensesRate,
    aba,
    accountNumber,
    accountType,
    bankBranchAddress,
    bankName,
    fullAddress,
    fullAddressOfBeneficiary,
    grandTotal,
    grandTotalInWord,
    iban,
    ifsc,
    name,
    nameOfBeneficiary,
    otherInfo,
    panCardNumber,
    thesisDissertation,
    titleOfThesis} = honorariumForm;
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
        <Input placeholder="input placeholder" disabled value={name}/>
      </Form.Item>
      <Form.Item
        label="Full Address"
      >
        <Input placeholder="input placeholder" disabled value={fullAddress}/>
      </Form.Item>
      <Form.Item
        label="Ph. D Thesis/Dissertation of -Mr./Ms"
      >
        <Input placeholder="input placeholder" disabled value={thesisDissertation}/>
      </Form.Item>

      <Form.Item
        label="Title of Thesis"
      >
        <Input placeholder="input placeholder" disabled value={titleOfThesis}/>
      </Form.Item>
      
      <div style={{textAlign:'center'}}><strong>REMUNERATION BILL FOR PH.D. THESIS EVALUATION BY EXAMINER</strong></div>
      <Form.Item
        label="1. Examined Thesis/ Dissertation
(Ph.D. THESIS EVALUATION)
"
      >
      <div style={{marginLeft:'10px'}}>
      <p>Number</p>
        <Input placeholder="input placeholder" disabled value={ExaminedThesisDissertationNumber}/>
      <p style={{marginTop:'10px'}}>Rate</p>
        <Input placeholder="input placeholder" disabled value={ExaminedThesisDissertationRate}/>
      <p style={{marginTop:'10px'}}>Amount</p>
        <Input placeholder="input placeholder" disabled value={ExaminedThesisDissertationAmount}/>
        </div>
      </Form.Item>
      <Form.Item
        label="2. Miscellaneous expenses"
      >
      <div style={{marginLeft:'10px'}}>
      <p>Number</p>
        <Input placeholder="input placeholder" disabled value={MiscellaneousExpensesNumber}/>
      <p style={{marginTop:'10px'}}>Rate</p>
        <Input placeholder="input placeholder" disabled value={MiscellaneousExpensesRate}/>
      <p style={{marginTop:'10px'}}>Amount</p>
        <Input placeholder="input placeholder" disabled value={MiscellaneousExpensesAmount}/>
        </div>
      </Form.Item>
      <Form.Item
        label="3. GRAND TOTAL
"
      >
        <Input placeholder="input placeholder" disabled value={grandTotal}/>
      </Form.Item>
      <Form.Item
        label="4. GRAND TOTAL(in words)
"
      >
        <Input placeholder="input placeholder" disabled value={grandTotalInWord}/>
      </Form.Item>

      <div style={{textAlign:'center'}}><strong>Particulars of Bank Account</strong></div>

      <Form.Item
        label="Name of Beneficiary"
      >
        <Input placeholder="input placeholder" disabled value={nameOfBeneficiary}/>
      </Form.Item>
      <Form.Item
        label="Full Address of Beneficiary"
      >
        <Input placeholder="input placeholder" disabled value={fullAddressOfBeneficiary}/>
      </Form.Item>
      <Form.Item
        label="PAN Card Number"
      >
        <Input placeholder="input placeholder" disabled value={panCardNumber}/>
      </Form.Item>

      <Form.Item
        label="Bank Name"
      >
        <Input placeholder="input placeholder" disabled value={bankName}/>
      </Form.Item>

      <Form.Item
        label="Bank Branch Address"
      >
        <Input placeholder="input placeholder" disabled value={bankBranchAddress}/>
      </Form.Item>
      
      <Form.Item
        label="Account Number"
      >
        <Input placeholder="input placeholder" disabled value={accountNumber}/>
      </Form.Item>
      
      <Form.Item
        label="Swift Code/BIC/IFSC"
      >
        <Input placeholder="input placeholder" disabled value={ifsc}/>
      </Form.Item>
      
      <Form.Item
        label="IBAN"
      >
        <Input placeholder="input placeholder" disabled value={iban}/>
      </Form.Item>
      
      <Form.Item
        label="ABA(Routing) No"
      >
        <Input placeholder="input placeholder" disabled value={aba}/>
      </Form.Item>
      
      <Form.Item
        label="Account Type"
      >
        <Input placeholder="input placeholder" disabled value={accountType}/>
      </Form.Item>
      
      <Form.Item
        label="Other than above information"
      >
        <TextArea rows={4} disabled value={otherInfo}/>
      </Form.Item>
    </Form>
            
            </div>
        </div>
	</div>
    </Content>
  );
}

export default SubmittedHonorariumForm;