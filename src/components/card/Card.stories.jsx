import Card from '.'

export default {
    title:"Card",
    component:Card,
    argTypes:{
        size:{
            type:'string',
            description:'Card size option',
            defaultValue:'medium',
            options:['small','medium','large'],
            control:{
                type:'radio'
            }
        },
        color:{
            type:'string',
            description:'Card color option',
            defaultValue:'light',
            options:['light','dark'],
            control:{
                type:'radio'
            }
        },
        corners:{
            type:'string',
            discription:"Card corners option",
            defaultValue:"medium",
            options:['square','normal','circle'],
            control:{
                type:'radio'
            }
        }
    }
}

const Template = (arg) => <Card {...arg} />;

export const Default = Template.bind({});
Default.args = {
    size:"medium",
    color:'',
    corners:''
}