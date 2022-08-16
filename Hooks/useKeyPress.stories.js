import useKeyPress from '../../hooks/useKeyPress'

export default {
    title : 'Hook/useKeyPress',
}

export const Default = () =>{
    const pressed =useKeyPress('?');

    return <>{pressed ? '피-카-부' : ' Press ? Key '} </>
}