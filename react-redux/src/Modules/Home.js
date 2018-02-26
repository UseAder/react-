import React,{Component} from 'react';
import BlockList from './blockList';
import Footer from './Footer';
import {connect} from 'react-redux';

import { Button,Input,Select,DatePicker,TimePicker,Switch,Checkbox,Radio,Layout,Form } from 'element-react';
import 'element-theme-default';

class Home extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
          form: {
            name: '戴凯杰',
            region: '',
            date1: null,
            date2: null,
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
          }
        };
      }
      
      handleSubmit(e) {
        e.preventDefault();
      // console.log(this.state);
      
        this.refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      
      handleReset(e) {
        e.preventDefault();
      
        this.refs.form.resetFields();
      }
      
      onChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
      }
      
    render(){
        const {count,lists,title} =this.props;
                // console.log(this.props.lists);
        return(
            <div className="container marketing">
            
                 <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80" className="demo-ruleForm">
                 <Form.Item label="活动名称" prop="name">
                   <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                 </Form.Item>
                 <Form.Item label="活动区域" prop="region">
                   <Select value={this.state.form.region} placeholder="请选择活动区域" onChange={this.onChange.bind(this, 'region')}>
                     <Select.Option label="区域一" value="shanghai"></Select.Option>
                     <Select.Option label="区域二" value="beijing"></Select.Option>
                   </Select>
                 </Form.Item>
                 <Form.Item label="活动时间" required={true}>
                   <Layout.Col span="11">
                     <Form.Item prop="date1" labelWidth="0px">
                       <DatePicker
                         value={this.state.form.date1}
                         placeholder="选择日期"
                         onChange={this.onChange.bind(this, 'date1')}
                       />
                     </Form.Item>
                   </Layout.Col>
                   <Layout.Col className="line" span="2">-</Layout.Col>
                   <Layout.Col span="11">
                     <Form.Item prop="date2" labelWidth="0px">
                       <TimePicker
                         value={this.state.form.date2}
                         selectableRange="18:30:00 - 20:30:00"
                         placeholder="选择时间"
                         onChange={this.onChange.bind(this, 'date2')}
                       />
                     </Form.Item>
                   </Layout.Col>
                 </Form.Item>
                 <Form.Item label="即时配送" prop="delivery">
                   <Switch value={this.state.form.delivery} onChange={this.onChange.bind(this, 'delivery')}></Switch>
                 </Form.Item>
                 <Form.Item label="活动性质" prop="type">
                   <Checkbox.Group value={this.state.form.type} onChange={this.onChange.bind(this, 'type')}>
                     <Checkbox label="美食/餐厅线上活动" name="type"></Checkbox>
                     <Checkbox label="地推活动" name="type"></Checkbox>
                     <Checkbox label="线下主题活动" name="type"></Checkbox>
                     <Checkbox label="单纯品牌曝光" name="type"></Checkbox>
                   </Checkbox.Group>
                 </Form.Item>
                 <Form.Item label="特殊资源" prop="resource">
                   <Radio.Group value={this.state.form.resource} onChange={this.onChange.bind(this, 'resource')}>
                     <Radio value="线上品牌商赞助"></Radio>
                     <Radio value="线下场地免费"></Radio>
                   </Radio.Group>
                 </Form.Item>
                 <Form.Item label="活动形式" prop="desc">
                   <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
                 </Form.Item>
                 <Form.Item>
                   <Button type="primary" onClick={this.handleSubmit.bind(this)}>立即创建</Button>
                   <Button onClick={this.handleReset.bind(this)}>重置</Button>
                 </Form.Item>
               </Form>
                <Button type="primary">Hello 悲剧</Button>
                <h3>Home你输不输出</h3>
                {count}{title}
                <div className="row">
                    <div className="col-lg-4 w">
                    <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Heading</h2>
                    <p>Donec sed odio Donec sed odio eget quamet risusDonec sed odio eget quamet risusdui. </p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 w">
                    <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Heading</h2>
                    <p>Duis mollis, eDonec sed odio eget quamet risusDonec sed odio eget quamet risusDonec sed odio eget quamet risus.</p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4 w">
                    <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                    <h2>Heading</h2>
                    <p>Donec sed odio eget quamet riDonec sed odio eget quamet risusDonec sed odio eget quamet risussus.</p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>
                <BlockList/>
                <Footer/>
            </div>                   
        )
    }
}

const mapStateToProps=(state)=>{//方法 相当于store。getState。count
    // console.log(state);
    
    return {
        count :state.count,
        lists :state.lists,
        title:state.title

    }
}
export default connect(mapStateToProps)(Home)//不做任何操作 第二个参数不需要
