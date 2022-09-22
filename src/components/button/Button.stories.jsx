import Button from "./index";
import "../../styles/fonts.scss";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      type:'string',
      description:'Button appearance option',
      defaultValue:'primary',
      options:['primary','square','link'],
      control:{
        type:'radio'
      }
    },
    size: {
      type:'string',
      description:'Button size option',
      defaultValue:'medium',
      options:['small','medium','large'],
      control:{
        type:'radio'
      }
    }
  }
};

const Template = (arg) => <Button {...arg} />;

export const Medium = Template.bind({});
Medium.args = {
  btnText: "Click me",
  size:"medium"
};

export const Large = Template.bind({});
Large.args = {
    btnText:"Click me",
    size:"large"
}

export const Small = Template.bind({});
Small.args = {
    btnText:"Click me",
    size:"small"
}

