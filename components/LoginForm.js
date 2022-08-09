import useForm from '../hooks/useForm'
import Button from './Button'
import ErrorText from './ErrorText'
import Input from './Input'
import CardForm from './CardForm'
import Title from './Title'

const LoginForm =({onSubmit}) =>{
    const{errors, isLoading, handleChange, handleSubmit} = useForm({
        initialValues :{
            name:'',
            password:'',
        },
        onSubmit,
        validate: ({name,password}) =>{
            const newErrors = {};
            if(!name) newErrors.name = '이름'
            if(!password)newErrors.password = 'pwd'
            return newErrors
        },
    });
    return (
        <CardForm onSubmit = {handleSubmit}>
            <Title style ={{marginBottom:40}}>로그인</Title>
            <Input
                type='text'
                name='name'
                placeholder ='Name'
                onChange = {handleChange} />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
            <Input
                type="password"
                name='password'
                placeholder='Password'
                onChange={handleChange}
                style = {{marginTop:8}}/>
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
            <Button type = 'submit' disabled ={isLoading} style ={{marginTop : 16}}>
                Login</Button>
        </CardForm>
    );
};

export default LoginForm