import Logo from ".";

export default {
    title:"Logo",
    component: Logo,
    argTypes: {
        size:{
            type:"string",
            discription:"Logo size option",
            defaultValue:'medium',
            options:['small','medium','large'],
            control:{
                type:'radio'
            }
        },
        corners:{
            type:'string',
            discription:"Logo corners option",
            defaultValue:"medium",
            options:['square','normal','circle'],
            control:{
                type:'radio'
            }
        }
    }
}

const Template = (arg) => <Logo {...arg} />;

export const Default = Template.bind({});
Default.args = {
    size:'medium'
};